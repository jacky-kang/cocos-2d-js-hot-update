// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        byteLabel: cc.Label,
        fileLabel: cc.Label,
        byteProgress: cc.ProgressBar,
        fileProgress: cc.ProgressBar,
        label: cc.Label,
        manifestUrl: cc.RawAsset,
    },

    onLoad() {
        if (!cc.sys.isNative) {
            this.changeScene()
            return;
        }
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'blackjack-remote-asset');
        cc.log('远端路径：' + this._storagePath);

        this.versionCompareHandle = function (versionA, versionB) {
            cc.log("版本比较: version A is " + versionA + ', version B is ' + versionB);
            var vA = versionA.split('.');
            var vB = versionB.split('.');
            for (var i = 0; i < vA.length; ++i) {
                var a = parseInt(vA[i]);
                var b = parseInt(vB[i] || 0);
                if (a === b) {
                    continue;
                }
                else {
                    return a - b;
                }
            }
            if (vB.length > vA.length) {
                return -1;
            }
            else {
                return 0;
            }
        };

        this._am = new jsb.AssetsManager('', this._storagePath, this.versionCompareHandle);

        var self = this
        this._am.setVerifyCallback(function (path, asset) {
            var compressed = asset.compressed;
            var expectedMD5 = asset.md5;
            var relativePath = asset.path;
            var size = asset.size;
            if (compressed) {
                self.label.string = "验证成功: " + relativePath;
                return true;
            }
            else {
                self.label.string = "验证成功: " + relativePath + ' (' + expectedMD5 + ')';
                return true;
            }
        });

        this.label.string = '更新准备就绪。';

        if (cc.sys.os === cc.sys.OS_ANDROID) {
            this._am.setMaxConcurrentTask(10);
            this.label.string = "最大并发数限制为10";
        }

        this.fileProgress.progress = 0;
        this.byteProgress.progress = 0;

        this.checkUpdata()
    },

    hotUpdate() {
        try {
            if (this._am && !this._updating) {
                if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                    this._am.loadLocalManifest(this.manifestUrl);
                }

                if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
                    this.label.string = '加载manifest失败 ...';
                    return;
                }

                this._am.setEventCallback(this.updateCb.bind(this));

                this._am.update();
                this._updating = true;
            }
        } catch (e) {
            this.label.string = e.toString()
        }
    },

    checkUpdata() {
        if (this._updating) {
            return;
        }

        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            this._am.loadLocalManifest(this.manifestUrl);
        }

        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            this.label.string = '加载manifest失败 ...';
            return;
        }

        this._am.setEventCallback(this.checkCb.bind(this));

        this._am.checkUpdate();
        this._updating = true;
    },

    changeScene() {
        cc.director.loadScene('index');
    },

    checkCb: function (event) {
        cc.eventManager.removeListener(this._checkListener);
        this._checkListener = null;
        this._updating = false;
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                this.label.string = "没有找到本地manifest";
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                this.label.string = "不能下载远程manifest";
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                this.label.string = "已经更新到最新的远程版本";
                var self = this
                setTimeout(function () {
                    self.changeScene()
                }, 2000)
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                this.label.string = '新版本找到，请尝试更新';
                this.fileProgress.progress = 0;
                this.byteProgress.progress = 0;
                var self = this
                setTimeout(function () {
                    self.hotUpdate()
                }, 2000)
                break;
            default:
                return;
        }
    },

    updateCb: function (event) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                this.label.string = "没有找到本地manifest";
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                this.byteProgress.progress = event.getPercent();
                this.fileProgress.progress = event.getPercentByFile();

                this.fileLabel.string = event.getDownloadedFiles() + ' / ' + event.getTotalFiles();
                this.byteLabel.string = event.getDownloadedBytes() + ' / ' + event.getTotalBytes();

                var msg = event.getMessage();
                if (msg) {
                    this.label.string = '更新文件: ' + msg;
                }
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                this.label.string = "不能下载远程manifest";
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                this.label.string = "已经更新到最新的远程版本";
                failed = true;
                var self = this
                setTimeout(function () {
                    self.changeScene()
                }, 2000)
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                this.label.string = '更新完成,' + event.getMessage();
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                this.label.string = '更新失败,' + event.getMessage();
                this._updating = false;
                this._canRetry = true;
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                this.label.string = '资源更新错误:' + event.getAssetId() + ', ' + event.getMessage();
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                this.label.string = event.getMessage();
                break;
            default:
                break;
        }

        if (failed) {
            cc.eventManager.removeListener(this._updateListener);
            this._updateListener = null;
            this._updating = false;
        }

        if (needRestart) {
            cc.eventManager.removeListener(this._updateListener);
            this._updateListener = null;
            var searchPaths = jsb.fileUtils.getSearchPaths();
            var newPaths = this._am.getLocalManifest().getSearchPaths();

            Array.prototype.unshift(searchPaths, newPaths);
            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);

            cc.game.restart();
        }
    },
});

