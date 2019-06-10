window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  CaseExperience: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f5b13cJHMFKhLlf0K+qgxKk", "CaseExperience");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        web: cc.WebView,
        back: cc.Button,
        btnOpenWithBrowser: cc.Button
      },
      onLoad: function onLoad() {
        this.back.node.on("click", this.onBack, this);
        this.btnOpenWithBrowser.node.on("click", this.openWithBrowser, this);
      },
      onBack: function onBack() {
        cc.director.loadScene("index");
      },
      openWithBrowser: function openWithBrowser() {
        console.log("open ", this.web.url);
        window.open(this.web.url);
      }
    });
    cc._RF.pop();
  }, {} ],
  ExampleExplain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a48d5Ac3k9Oh71kQ5LAbiN1", "ExampleExplain");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        web: cc.WebView,
        back: cc.Button
      },
      onLoad: function onLoad() {
        this.back.node.on("click", this.onBack, this);
        this.web.node.on("loaded", this.callback, this);
      },
      onBack: function onBack() {
        cc.director.loadScene("index");
      },
      callback: function callback(event) {
        var webview = event;
        console.log("1111111111111");
      },
      onDestroy: function onDestroy() {}
    });
    cc._RF.pop();
  }, {} ],
  ExamplesData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f46c6jxDk1Mj7MfJ9xB1aRp", "ExamplesData");
    "use strict";
    var GameData = {
      gameID: 214415,
      channel: "Matchvs",
      platform: "alpha",
      gameVersion: 1,
      appKey: "479d25236a274961bd2fea127c277027#C",
      userName: "",
      mxaNumer: 3,
      userID: "",
      token: "",
      host: "",
      isPAAS: false,
      reset: function reset() {
        GameData.gameID = "";
        GameData.appKey = "";
        GameData.userID = "";
        GameData.token = "";
      }
    };
    module.exports = GameData;
    cc._RF.pop();
  }, {} ],
  Index: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c67eeDeuNCrYURpguviuko", "Index");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        caseExperience: cc.Button,
        networkFlow: cc.Button,
        exampleExplain: cc.Button
      },
      onLoad: function onLoad() {
        this.caseExperience.node.on("click", this.startScene, this);
        this.networkFlow.node.on("click", this.startScene, this);
        this.exampleExplain.node.on("click", this.startScene, this);
      },
      startScene: function startScene(event) {
        switch (event.node.name) {
         case "caseExperience":
          cc.director.loadScene("caseExperience");
          break;

         case "networkFlow":
          cc.director.loadScene("pass");
          break;

         case "exampleExplain":
          cc.director.loadScene("exampleExplain");
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  Item: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c9d09/xtr5PmqItVoRLaB+G", "Item");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        logLable: cc.Label
      },
      onLoad: function onLoad() {
        var self = this;
      },
      updateItem: function updateItem(obj) {
        this.logLable.string = obj;
      }
    });
    cc._RF.pop();
  }, {} ],
  MatchvsEngine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6d436wfdopDBZUJHITrWOZ9", "MatchvsEngine");
    "use strict";
    var mvs = require("Matchvs");
    var gameData = require("ExamplesData");
    function NetWorkEngine() {}
    NetWorkEngine.prototype.init = function(channel, platform, gameID, appKey) {
      var result = mvs.engine.init(mvs.response, channel, platform, gameID, appKey, 1);
      console.log("\u521d\u59cb\u5316result" + result);
      return result;
    };
    NetWorkEngine.prototype.premiseInit = function(endPoint, gameID, appKey) {
      var result = mvs.engine.premiseInit(mvs.response, endPoint, gameID, appKey);
      console.log("\u72ec\u7acb\u90e8\u7f72\u521d\u59cb\u5316result" + result);
      return result;
    };
    NetWorkEngine.prototype.registerUser = function() {
      var result = mvs.engine.registerUser();
      console.log("\u6ce8\u518cresult" + result);
      return result;
    };
    NetWorkEngine.prototype.login = function(userID, token) {
      var DeviceID = "matchvs";
      var result = mvs.engine.login(userID, token, DeviceID);
      console.log("\u767b\u5f55result" + result);
      return result;
    };
    NetWorkEngine.prototype.joinRandomRoom = function(mxaNumer) {
      var result = mvs.engine.joinRandomRoom(mxaNumer, gameData.userName + "\u8fdb\u5165\u4e86\u623f\u95f4");
      console.log("\u968f\u673a\u5339\u914dresult" + result);
      return result;
    };
    NetWorkEngine.prototype.joinOver = function() {
      var result = mvs.engine.joinOver("\u5173\u95ed\u623f\u95f4");
      console.log("joinOver result" + result);
      return result;
    };
    NetWorkEngine.prototype.sendEvent = function(msg) {
      var data = mvs.engine.sendEvent(msg);
      return data.result;
    };
    NetWorkEngine.prototype.leaveRoom = function() {
      var result = mvs.engine.leaveRoom("\u79bb\u5f00\u623f\u95f4");
      return result;
    };
    NetWorkEngine.prototype.logout = function() {
      var result = mvs.engine.logout("\u6ce8\u9500");
      return result;
    };
    NetWorkEngine.prototype.unInit = function() {
      var result = mvs.engine.uninit();
      return result;
    };
    module.exports = NetWorkEngine;
    cc._RF.pop();
  }, {
    ExamplesData: "ExamplesData",
    Matchvs: "Matchvs"
  } ],
  MatchvsResponse: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a6ccbQYn5hP452vQBg+xwxB", "MatchvsResponse");
    "use strict";
    var mvs = require("Matchvs");
    var msg = require("MatvhsvsMessage");
    function MatchvsResponse() {}
    MatchvsResponse.prototype.init = function(Context) {
      this.context = Context;
    };
    MatchvsResponse.prototype.bind = function() {
      mvs.response.initResponse = this.initResponse.bind(this);
      mvs.response.registerUserResponse = this.registerUserResponse.bind(this);
      mvs.response.loginResponse = this.loginResponse.bind(this);
      mvs.response.errorResponse = this.errorResponse.bind(this);
      mvs.response.joinRoomResponse = this.joinRoomResponse.bind(this);
      mvs.response.joinRoomNotify = this.joinRoomNotify.bind(this);
      mvs.response.leaveRoomResponse = this.leaveRoomResponse.bind(this);
      mvs.response.leaveRoomNotify = this.leaveRoomNotify.bind(this);
      mvs.response.joinOverResponse = this.joinOverResponse.bind(this);
      mvs.response.joinOverNotify = this.joinOverNotify.bind(this);
      mvs.response.sendEventResponse = this.sendEventResponse.bind(this);
      mvs.response.sendEventNotify = this.sendEventNotify.bind(this);
    };
    MatchvsResponse.prototype.initResponse = function(status) {
      this.context.node.emit(msg.MATCHVS_INIT, status);
    };
    MatchvsResponse.prototype.registerUserResponse = function(userInfo) {
      console.log(JSON.stringify(userInfo));
      this.context.node.emit(msg.MATCHVS_REGISTER_USER, userInfo);
    };
    MatchvsResponse.prototype.loginResponse = function(MsLoginRsp) {
      this.context.node.emit(msg.MATCHVS_LOGIN, MsLoginRsp);
    };
    MatchvsResponse.prototype.joinRoomResponse = function(status, userInfoList, roomInfo) {
      this.context.node.emit(msg.MATCHVS_JOIN_ROOM_RSP, status, userInfoList, roomInfo);
    };
    MatchvsResponse.prototype.joinRoomNotify = function(roomUserInfo) {
      console.log(roomUserInfo.userID + "\u52a0\u5165\u4e86\u623f\u95f4");
      this.context.node.emit(msg.MATCHVS_JOIN_ROOM_NOTIFY, roomUserInfo);
    };
    MatchvsResponse.prototype.joinOverResponse = function(joinOverRsp) {
      this.context.node.emit(msg.MATCHVS_JOIN_OVER_RSP, joinOverRsp);
    };
    MatchvsResponse.prototype.joinOverNotify = function(notify) {
      this.context.node.emit(msg.MATCHVS_JOIN_OVER_NOTIFY, notify);
    };
    MatchvsResponse.prototype.sendEventResponse = function(sendEventRsp) {
      this.context.node.emit(msg.MATCHVS_SEND_EVENT_RSP, sendEventRsp);
    };
    MatchvsResponse.prototype.sendEventNotify = function(eventInfo) {
      this.context.node.emit(msg.MATCHVS_SEND_EVENT_NOTIFY, eventInfo);
    };
    MatchvsResponse.prototype.leaveRoomResponse = function(leaveRoomRsp) {
      this.context.node.emit(msg.MATCHVS_LEAVE_ROOM, leaveRoomRsp);
    };
    MatchvsResponse.prototype.leaveRoomNotify = function(leaveRoomInfo) {
      this.context.node.emit(msg.MATCHVS_LEAVE_ROOM_NOTIFY, leaveRoomInfo);
    };
    MatchvsResponse.prototype.errorResponse = function(errorCode, errorMsg) {
      console.log("\u53d1\u751f\u9519\u8bef\u4e86\uff01\uff01\uff01");
      this.context.node.emit(msg.MATCHVS_ERROE_MSG, errorCode, errorMsg);
    };
    module.exports = MatchvsResponse;
    cc._RF.pop();
  }, {
    Matchvs: "Matchvs",
    MatvhsvsMessage: "MatvhsvsMessage"
  } ],
  Matchvs: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c17e1oK2fxOmYfTT0kZbQQ/", "Matchvs");
    "use strict";
    var engine;
    var response;
    var MsMatchInfo;
    var MsCreateRoomInfo;
    var MsRoomFilterEx;
    var LocalStore_Clear;
    try {
      engine = new window.MatchvsEngine();
      response = new window.MatchvsResponse();
      MsMatchInfo = window.MsMatchInfo;
      MsCreateRoomInfo = window.MsCreateRoomInfo;
      MsRoomFilterEx = window.MsRoomFilterEx;
      LocalStore_Clear = window.LocalStore_Clear;
      console.log(void 0);
      if ("undefined" != typeof BK || "undefined" != typeof FBInstant) {
        MVS.SetWss && MVS.SetWss(true);
        console.log("use wss");
      }
      console.log("load matchvs.all.js success");
    } catch (error) {
      console.error("try load matchvs JS fail," + error.message);
    }
    module.exports = {
      engine: engine,
      response: response,
      MsMatchInfo: MsMatchInfo,
      MsCreateRoomInfo: MsCreateRoomInfo,
      MsRoomFilterEx: MsRoomFilterEx,
      LocalStore_Clear: LocalStore_Clear
    };
    cc._RF.pop();
  }, {} ],
  MatvhsvsMessage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15934C7ar9JJ6IJybZqrqGJ", "MatvhsvsMessage");
    "use strict";
    var msg = {
      MATCHVS_INIT: "MATCHVS_INIT",
      MATCHVS_REGISTER_USER: "MATCHVS_REGISTER_USER",
      MATCHVS_LOGIN: "MATCHVS_LOGIN",
      MATCHVS_RE_CONNECT: "MATCHVS_RE_CONNECT",
      MATCHVS_ERROE_MSG: "MATCHVS_ERROE_MSG",
      MATCHVS_JOIN_ROOM_RSP: "MATCHVS_JOIN_ROOM_RSP",
      MATCHVS_JOIN_ROOM_NOTIFY: "MATCHVS_JOIN_ROOM_NOTIFY",
      MATCHVS_LEAVE_ROOM: "MATCHVS_LEAVE_ROOM",
      MATCHVS_LEAVE_ROOM_NOTIFY: "MATCHVS_LEAVE_ROOM_NOTIFY",
      MATCHVS_JOIN_OVER_RSP: "MATCHVS_JOIN_OVER_RSP",
      MATCHVS_JOIN_OVER_NOTIFY: "MATCHVS_JOIN_OVER_NOTIFY",
      MATCHVS_JOIN_OPEN_RSP: "MATCHVS_JOIN_OPEN_RSP",
      MATCHVS_JOIN_OPEN_NOTIFY: "MATCHVS_JOIN_OPEN_NOTIFY",
      MATCHVS_ROOM_LIST_EX: "MATCHVS_ROOM_LIST_EX",
      MATCHVS_CREATE_ROOM: "MATCHVS_CREATE_ROOM",
      MATCHVS_ROOM_DETAIL: "MATCHVS_ROOM_DETAIL",
      MATCHVS_KICK_PLAYER: "MATCHVS_KICK_PLAYER",
      MATCHVS_KICK_PLAYER_NOTIFY: "MATCHVS_KICK_PLAYER_NOTIFY",
      MATCHVS_SET_ROOM_PROPETY: "MATCHVS_SET_ROOM_PROPETY",
      MATCHVS_SET_ROOM_PROPETY_NOTIFY: "MATCHVS_SET_ROOM_PROPETY_NOTIFY",
      MATCHVS_SEND_EVENT_RSP: "MATCHVS_SEND_EVENT_RSP",
      MATCHVS_SEND_EVENT_NOTIFY: "MATCHVS_SEND_EVENT_NOTIFY",
      MATCHVS_FRAME_UPDATE: "MATCHVS_FRAME_UPDATE",
      MATCHVS_WX_BINDING: "MATCHVS_WX_BINDING",
      MATCHVS_NETWORK_STATE_NOTIFY: "MATCHVS_NETWORK_STATE_NOTIFY",
      MATCHVS_LOGOUT: "MATCHVS_LOGOUT"
    };
    module.exports = msg;
    cc._RF.pop();
  }, {} ],
  NetworkFlow: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d9a62MtAWtPi6C2uFPLL69E", "NetworkFlow");
    "use strict";
    var engine = require("../1/MatchvsEngine");
    var response = require("../1/MatchvsResponse");
    var msg = require("../1/MatvhsvsMessage");
    var GameData = require("../1/ExamplesData");
    cc.Class({
      extends: cc.Component,
      properties: {
        initButton: cc.Button,
        registerButton: cc.Button,
        loginButton: cc.Button,
        joinRandomRoomButton: cc.Button,
        joinOverButton: cc.Button,
        sendEventButton: cc.Button,
        leaveRoomButton: cc.Button,
        logoutButton: cc.Button,
        unInitButton: cc.Button,
        clearLogButton: cc.Button,
        backHomeButton: cc.Button,
        textTitle: cc.Label,
        btnClear: cc.Button,
        btnSAAS: cc.Button,
        ebGameID: cc.EditBox,
        ebAppKey: cc.EditBox,
        ebEndPoint: cc.EditBox,
        ebUserID: cc.EditBox,
        ebToken: cc.EditBox,
        textToturail: cc.Node,
        passGroup: cc.Node,
        logListView: {
          default: null,
          type: cc.ScrollView
        },
        logList: [],
        spacing: 0,
        totalCount: 0,
        itemTemplate: {
          default: null,
          type: cc.Node
        }
      },
      onLoad: function onLoad() {
        this.initMatchvsEvent(this);
        this.logList = new Array();
        this.content = this.logListView.content;
        this.initButton.node.on("click", this.init, this);
        this.registerButton.node.on("click", this.register, this);
        this.loginButton.node.on("click", this.login, this);
        this.joinRandomRoomButton.node.on("click", this.joinRandomRoom, this);
        this.joinOverButton.node.on("click", this.joinOver, this);
        this.sendEventButton.node.on("click", this.sendEvent, this);
        this.leaveRoomButton.node.on("click", this.leaveRoom, this);
        this.logoutButton.node.on("click", this.logout, this);
        this.unInitButton.node.on("click", this.unInit, this);
        this.backHomeButton.node.on("click", this.backHome, this);
        this.clearLogButton.node.on("click", this.clearLog, this);
        this.btnSAAS.node.on("click", function() {
          GameData.isPAAS = !GameData.isPAAS;
          engine.prototype.logout();
          engine.prototype.unInit();
          cc.director.loadScene("pass");
        }, this);
        this.btnClear.node.on("click", function() {
          LocalStore_Clear();
          this.labelLog("\u5df2\u5220\u9664UserID\u548cToken\u7684\u672c\u5730\u7f13\u5b58");
        }, this);
        this.textToturail.on(cc.Node.EventType.MOUSE_UP, function() {
          window.open("https://doc.matchvs.com/SelfHost/selfhostIntro");
        }, this);
        this.labelLog("\u60a8\u9700\u8981\u6253\u5f00\u4e24\u4e2a\u4ee5\u4e0a\u7684\u6d4f\u89c8\u5668\u6a21\u62df\u591a\u4eba\u8054\u7f51\u8fdb\u884c\u6d4b\u8bd5\u4f7f\u7528");
        if (GameData.isPAAS) {
          this.ebGameID.getComponent(cc.EditBox).string = "";
          this.ebAppKey.getComponent(cc.EditBox).string = "";
          this.ebUserID.getComponent(cc.EditBox).string = "";
          this.ebToken.getComponent(cc.EditBox).string = "";
          this.ebEndPoint.getComponent(cc.EditBox).string = "";
          this.getAndCheckPAASInfo();
          GameData.reset();
        } else {
          this.ebGameID.getComponent(cc.EditBox).string = GameData.gameID;
          this.ebAppKey.getComponent(cc.EditBox).string = GameData.appKey;
        }
        this.getAndCheckGameInfo();
        this.textTitle.string = GameData.isPAAS ? "\u81ea\u6258\u7ba1\u6a21\u5f0f" : "\u4e91\u6258\u7ba1\u6a21\u5f0f";
        this.btnClear.node.active = !GameData.isPAAS;
        this.passGroup.active = GameData.isPAAS;
        console.log("isPaas:", GameData.isPAAS);
        this.btnSAAS.getComponentInChildren(cc.Label).string = GameData.isPAAS ? "\u4e91\u6258\u7ba1\u6a21\u5f0f" : "\u81ea\u6258\u7ba1\u6a21\u5f0f";
        console.log("GameData:", GameData);
      },
      premiseInit: function premiseInit() {
        this.getAndCheckPAASInfo() && engine.prototype.premiseInit(GameData.host, GameData.gameID, GameData.appKey);
      },
      getAndCheckPAASInfo: function getAndCheckPAASInfo() {
        var token = this.ebToken.getComponent(cc.EditBox).string;
        var userID = this.ebUserID.getComponent(cc.EditBox).string;
        var host = this.ebEndPoint.getComponent(cc.EditBox).string;
        if ("" === userID || "" === token || "" === host) {
          this.labelLog("\u72ec\u7acb\u90e8\u7f72\u8bf7\u8f93\u5165userID,token\u4ee5\u53ca\u670d\u52a1\u5730\u5740");
          this.labelLog("\u6709\u7591\u95ee\u8bf7\u70b9\u51fb\u53f3\u4e0a\u89d2<\u81ea\u6258\u7ba1\u6559\u7a0b>\u6309\u94ae");
          return false;
        }
        GameData.userID = userID;
        GameData.token = token;
        GameData.host = host;
        return true;
      },
      getAndCheckGameInfo: function getAndCheckGameInfo() {
        var gameID = this.ebGameID.getComponent(cc.EditBox).string;
        var appKey = this.ebAppKey.getComponent(cc.EditBox).string;
        if ("" === gameID || "" === appKey) {
          this.labelLog("gameID&&appKey\u4e0d\u80fd\u4e3a\u7a7a,\u8bf7\u8f93\u5165");
          console.log("GameData:", GameData);
          return false;
        }
        GameData.gameID = gameID;
        GameData.appKey = appKey;
        return true;
      },
      initMatchvsEvent: function initMatchvsEvent(self) {
        response.prototype.bind();
        response.prototype.init(self);
        this.node.on(msg.MATCHVS_INIT, this.initResponse, this);
        this.node.on(msg.MATCHVS_REGISTER_USER, this.registerUserResponse, this);
        this.node.on(msg.MATCHVS_LOGIN, this.loginResponse, this);
        this.node.on(msg.MATCHVS_JOIN_ROOM_RSP, this.joinRoomResponse, this);
        this.node.on(msg.MATCHVS_JOIN_ROOM_NOTIFY, this.joinRoomNotify, this);
        this.node.on(msg.MATCHVS_JOIN_OVER_RSP, this.joinOverResponse, this);
        this.node.on(msg.MATCHVS_JOIN_OVER_NOTIFY, this.joinOverNotify, this);
        this.node.on(msg.MATCHVS_SEND_EVENT_RSP, this.sendEventResponse, this);
        this.node.on(msg.MATCHVS_SEND_EVENT_NOTIFY, this.sendEventNotify, this);
        this.node.on(msg.MATCHVS_LEAVE_ROOM, this.leaveRoomResponse, this);
        this.node.on(msg.MATCHVS_LEAVE_ROOM_NOTIFY, this.leaveRoomNotify, this);
        this.node.on(msg.MATCHVS_LOGOUT, this.logoutResponse, this);
        this.node.on(msg.MATCHVS_ERROE_MSG, this.errorResponse, this);
      },
      removeEvent: function removeEvent() {
        this.node.off(msg.MATCHVS_INIT, this.initResponse, this);
        this.node.off(msg.MATCHVS_REGISTER_USER, this.registerUserResponse, this);
        this.node.off(msg.MATCHVS_LOGIN, this.loginResponse, this);
        this.node.off(msg.MATCHVS_JOIN_ROOM_RSP, this.joinRoomResponse, this);
        this.node.off(msg.MATCHVS_JOIN_ROOM_NOTIFY, this.joinRoomNotify, this);
        this.node.off(msg.MATCHVS_JOIN_OVER_RSP, this.joinOverResponse, this);
        this.node.off(msg.MATCHVS_JOIN_OVER_NOTIFY, this.joinOverNotify, this);
        this.node.off(msg.MATCHVS_SEND_EVENT_RSP, this.sendEventResponse, this);
        this.node.off(msg.MATCHVS_SEND_EVENT_NOTIFY, this.sendEventNotify, this);
        this.node.off(msg.MATCHVS_LEAVE_ROOM, this.leaveRoomResponse, this);
        this.node.off(msg.MATCHVS_LEAVE_ROOM_NOTIFY, this.leaveRoomNotify, this);
        this.node.off(msg.MATCHVS_LOGOUT, this.logoutResponse, this);
        this.node.off(msg.MATCHVS_ERROE_MSG, this.errorResponse, this);
      },
      backHome: function backHome() {
        cc.director.loadScene("index");
      },
      clearLog: function clearLog() {
        this.logList.length = 0;
        this.content.removeAllChildren(true);
      },
      init: function init() {
        var result;
        if (GameData.isPAAS) {
          if (!this.getAndCheckPAASInfo() || !this.getAndCheckGameInfo()) return;
          result = engine.prototype.premiseInit(GameData.host, GameData.gameID, GameData.appKey);
        } else {
          if (!this.getAndCheckGameInfo()) return;
          result = engine.prototype.init(GameData.channel, GameData.platform, GameData.gameID, GameData.appKey);
        }
        this.labelLog("\u521d\u59cb\u5316\u4f7f\u7528\u7684gameID\u662f:" + GameData.gameID, "\u5982\u9700\u66f4\u6362\u4e3a\u81ea\u5df1SDK\uff0c\u8bf7\u4fee\u6539ExamplesData.js\u6587\u4ef6");
        this.engineCode(result, "init");
      },
      register: function register() {
        if (GameData.isPAAS) {
          this.labelLog("\u72ec\u7acb\u90e8\u7f72\u4f7f\u7528\u7b2c\u4e09\u65b9\u8d26\u53f7,\u65e0\u9700\u6ce8\u518c");
          return;
        }
        var result = engine.prototype.registerUser();
        this.engineCode(result, "registerUser");
      },
      login: function login() {
        if (this.getAndCheckGameInfo()) {
          var result = engine.prototype.login(GameData.userID, GameData.token);
          this.labelLog("\u767b\u5f55\u7684\u8d26\u53f7userID\u662f:", GameData.userID);
          if (-6 == result) this.labelLog("\u5df2\u767b\u5f55\uff0c\u8bf7\u52ff\u91cd\u65b0\u767b\u5f55"); else if (-26 === result) {
            console.log("GameData:", GameData);
            this.labelLog("[\u6e38\u620f\u8d26\u6237\u4e0e\u6e20\u9053\u4e0d\u5339\u914d\uff0c\u8bf7\u4f7f\u7528cocos\u8d26\u53f7\u767b\u5f55Matchvs\u5b98\u7f51\u521b\u5efa\u6e38\u620f]\uff1a(https://www.matchvs.com/cocos)");
          } else this.engineCode(result, "login");
        }
      },
      joinRandomRoom: function joinRandomRoom() {
        var result = engine.prototype.joinRandomRoom(GameData.mxaNumer);
        this.engineCode(result, "joinRandomRoom");
      },
      joinOver: function joinOver() {
        var result = engine.prototype.joinOver();
        this.engineCode(result, "joinOver");
      },
      sendEvent: function sendEvent() {
        var eventMsg = [ "\u4e07\u5251\u5f52\u5b97", " \u4ea2\u9f99\u6709\u6094", "\u5e90\u5c71\u5347\u9f99\u9738 ", " \u5929\u9a6c\u6d41\u884c\u62f3", " \u94bb\u77f3\u661f\u5c18", " \u51e4\u7ffc\u5929\u7fd4", "\u5e90\u5c71\u4ea2\u9f99\u9738 ", "\u6781\u51bb\u51b0\u68fa", " \u7b49\u79bb\u5b50\u5149\u901f\u62f3", "\u661f\u4e91\u9501\u94fe" ];
        var msg = eventMsg[Math.floor(10 * Math.random())];
        var result = engine.prototype.sendEvent("\u4f60\u4f7f\u51fa\u4e00\u62db:" + msg);
        this.labelLog("\u4f60\u51c6\u5907\u4f7f\u51fa\u4e00\u62db\uff1a" + msg);
        this.engineCode(result, "sendEvent");
      },
      leaveRoom: function leaveRoom() {
        var result = engine.prototype.leaveRoom();
        this.engineCode(result, "leaveRoom");
      },
      logout: function logout() {
        var result = engine.prototype.logout();
        this.engineCode(result, "logout");
      },
      unInit: function unInit() {
        var result = engine.prototype.unInit();
        this.engineCode(result, "unInit");
      },
      initResponse: function initResponse(status) {
        200 == status ? this.labelLog("initResponse\uff1a\u521d\u59cb\u5316\u6210\u529f\uff0cstatus\uff1a" + status) : this.labelLog("initResponse\uff1a\u521d\u59cb\u5316\u5931\u8d25\uff0cstatus\uff1a" + status);
      },
      registerUserResponse: function registerUserResponse(userInfo) {
        if (0 == userInfo.status) {
          this.labelLog("registerUserResponse\uff1a\u6ce8\u518c\u7528\u6237\u6210\u529f,id = " + userInfo.id + "token = " + userInfo.token + "name:" + userInfo.name + "avatar:" + userInfo.avatar);
          GameData.userID = userInfo.id;
          GameData.token = userInfo.token;
          this.ebUserID.getComponent(cc.EditBox).string = GameData.userID;
          this.ebToken.getComponent(cc.EditBox).string = GameData.token;
          GameData.userName = userInfo.name;
        } else this.labelLog("registerUserResponse: \u6ce8\u518c\u7528\u6237\u5931\u8d25");
      },
      loginResponse: function loginResponse(MsLoginRsp) {
        200 == MsLoginRsp.status ? this.labelLog("loginResponse: \u767b\u5f55\u6210\u529f") : 402 == MsLoginRsp.status ? this.labelLog("loginResponse: \u5e94\u7528\u6821\u9a8c\u5931\u8d25\uff0c\u786e\u8ba4\u662f\u5426\u5728\u672a\u4e0a\u7ebf\u65f6\u7528\u4e86release\u73af\u5883\uff0c\u5e76\u68c0\u67e5gameID\u3001appkey \u548c secret") : 403 == MsLoginRsp.status ? this.labelLog("loginResponse\uff1a\u68c0\u6d4b\u5230\u8be5\u8d26\u53f7\u5df2\u5728\u5176\u4ed6\u8bbe\u5907\u767b\u5f55") : 404 == MsLoginRsp.status ? this.labelLog("loginResponse\uff1a\u65e0\u6548\u7528\u6237 ") : 500 == MsLoginRsp.status && this.labelLog("loginResponse\uff1a\u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef");
      },
      joinRoomResponse: function joinRoomResponse(status, userInfoList, roomInfo) {
        if (200 == status) {
          this.labelLog("joinRoomResponse: \u8fdb\u5165\u623f\u95f4\u6210\u529f\uff1a\u623f\u95f4ID\u4e3a\uff1a" + roomInfo.roomID + "\u623f\u4e3bID\uff1a" + roomInfo.ownerId + "\u623f\u95f4\u5c5e\u6027\u4e3a\uff1a" + roomInfo.roomProperty);
          for (var i = 0; i < userInfoList.length; i++) this.labelLog("joinRoomResponse\uff1a\u623f\u95f4\u7684\u73a9\u5bb6ID\u662f" + userInfoList[i].userID);
          0 == userInfoList.length && this.labelLog("joinRoomResponse\uff1a\u623f\u95f4\u6682\u65f6\u65e0\u5176\u4ed6\u73a9\u5bb6");
        } else this.labelLog("joinRoomResponse\uff1a\u8fdb\u5165\u623f\u95f4\u5931\u8d25");
      },
      joinRoomNotify: function joinRoomNotify(roomUserInfo) {
        this.labelLog("joinRoomNotify\uff1a\u52a0\u5165\u623f\u95f4\u7684\u73a9\u5bb6ID\u662f" + roomUserInfo.userID);
      },
      joinOverResponse: function joinOverResponse(joinOverRsp) {
        200 == joinOverRsp.status ? this.labelLog("joinOverResponse: \u5173\u95ed\u623f\u95f4\u6210\u529f") : 400 == joinOverRsp.status ? this.labelLog("joinOverResponse: \u5ba2\u6237\u7aef\u53c2\u6570\u9519\u8bef ") : 403 == joinOverRsp.status ? this.labelLog("joinOverResponse: \u8be5\u7528\u6237\u4e0d\u5728\u623f\u95f4 ") : 404 == joinOverRsp.status ? this.labelLog("joinOverResponse: \u7528\u6237\u6216\u623f\u95f4\u4e0d\u5b58\u5728") : 500 == joinOverRsp.status && this.labelLog("joinOverResponse: \u670d\u52a1\u5668\u5185\u90e8\u9519\u8bef");
      },
      joinOverNotify: function joinOverNotify(notifyInfo) {
        this.labelLog("joinOverNotify\uff1a\u7528\u6237" + notifyInfo.srcUserID + "\u5173\u95ed\u4e86\u623f\u95f4\uff0c\u623f\u95f4ID\u4e3a\uff1a" + notifyInfo.roomID);
      },
      sendEventResponse: function sendEventResponse(sendEventRsp) {
        200 == sendEventRsp.status ? this.labelLog("sendEventResponse\uff1a\u53d1\u9001\u6d88\u606f\u6210\u529f") : this.labelLog("sendEventResponse\uff1a\u53d1\u9001\u6d88\u606f\u5931\u8d25");
      },
      sendEventNotify: function sendEventNotify(eventInfo) {
        this.labelLog("sendEventNotify\uff1a\u7528\u6237" + eventInfo.srcUserID + "\u5bf9\u4f60\u4f7f\u51fa\u4e86\u4e00\u62db" + eventInfo.cpProto);
      },
      leaveRoomResponse: function leaveRoomResponse(leaveRoomRsp) {
        200 == leaveRoomRsp.status ? this.labelLog("leaveRoomResponse\uff1a\u79bb\u5f00\u623f\u95f4\u6210\u529f\uff0c\u623f\u95f4ID\u662f" + leaveRoomRsp.roomID) : 400 == leaveRoomRsp.status ? this.labelLog("leaveRoomResponse\uff1a\u5ba2\u6237\u7aef\u53c2\u6570\u9519\u8bef,\u8bf7\u68c0\u67e5\u53c2\u6570") : 404 == leaveRoomRsp.status ? this.labelLog("leaveRoomResponse\uff1a\u623f\u95f4\u4e0d\u5b58\u5728") : 500 == leaveRoomRsp.status && this.labelLog("leaveRoomResponse\uff1a\u670d\u52a1\u5668\u9519\u8bef");
      },
      leaveRoomNotify: function leaveRoomNotify(leaveRoomInfo) {
        this.labelLog("leaveRoomNotify\uff1a" + leaveRoomInfo.userID + "\u79bb\u5f00\u623f\u95f4\uff0c\u623f\u95f4ID\u662f" + leaveRoomInfo.roomID);
      },
      logoutResponse: function logoutResponse(status) {
        200 == status ? this.labelLog("logoutResponse\uff1a\u6ce8\u9500\u6210\u529f") : 500 == status && this.labelLog("logoutResponse\uff1a\u6ce8\u9500\u5931\u8d25\uff0c\u670d\u52a1\u5668\u9519\u8bef");
      },
      errorResponse: function errorResponse(errorCode, errorMsg) {
        this.labelLog("errorMsg:" + errorMsg + "errorCode:" + errorCode);
      },
      labelLog: function labelLog(info) {
        this.logList.push(info);
        this.totalCount = this.logList.length;
        this.content.height = this.totalCount * (this.itemTemplate.height + this.spacing) + this.spacing;
        this.content.removeAllChildren(true);
        for (var i = 0; i < this.logList.length; i++) {
          var item = cc.instantiate(this.itemTemplate);
          this.content.addChild(item);
          item.setPosition(0, -item.height * (.5 + i) - this.spacing * (i + 1));
          item.getComponent("Item").updateItem(this.logList[i]);
        }
      },
      engineCode: function engineCode(code, engineName) {
        switch (code) {
         case 0:
          this.labelLog(engineName + "\u8c03\u7528\u6210\u529f");
          break;

         case -1:
          this.labelLog(engineName + "\u8c03\u7528\u5931\u8d25");
          break;

         case -2:
          this.labelLog("\u5c1a\u672a\u521d\u59cb\u5316\uff0c\u8bf7\u5148\u521d\u59cb\u5316\u518d\u8fdb\u884c" + engineName + "\u64cd\u4f5c");
          break;

         case -3:
          this.labelLog("\u6b63\u5728\u521d\u59cb\u5316\uff0c\u8bf7\u7a0d\u540e\u8fdb\u884c" + engineName + "\u64cd\u4f5c");
          break;

         case -4:
          this.labelLog("\u5c1a\u672a\u767b\u5f55\uff0c\u8bf7\u5148\u767b\u5f55\u518d\u8fdb\u884c" + engineName + "\u64cd\u4f5c");
          break;

         case -5:
          this.labelLog("\u5df2\u7ecf\u767b\u5f55\uff0c\u8bf7\u52ff\u91cd\u590d\u767b\u9646");
          break;

         case -6:
          this.labelLog("\u5c1a\u672a\u52a0\u5165\u623f\u95f4\uff0c\u8bf7\u7a0d\u540e\u8fdb\u884c" + engineName + "\u64cd\u4f5c");
          break;

         case -7:
          this.labelLog("\u6b63\u5728\u521b\u5efa\u6216\u8005\u8fdb\u5165\u623f\u95f4,\u8bf7\u7a0d\u540e\u8fdb\u884c" + engineName + "\u64cd\u4f5c");
          break;

         case -8:
          this.labelLog("\u5df2\u7ecf\u5728\u623f\u95f4\u4e2d");
          break;

         case -20:
          this.labelLog("maxPlayer\u8d85\u51fa\u8303\u56f4 0 < maxPlayer \u2264 20");
          break;

         case -21:
          this.labelLog("userProfile \u8fc7\u957f\uff0c\u4e0d\u80fd\u8d85\u8fc7512\u4e2a\u5b57\u7b26");
          break;

         case -25:
          this.labelLog(engineName + "channel \u975e\u6cd5\uff0c\u8bf7\u68c0\u67e5\u662f\u5426\u6b63\u786e\u586b\u5199\u4e3a \u201cMatchvs\u201d");
          break;

         case -26:
          this.labelLog(engineName + "\uff1aplatform \u975e\u6cd5\uff0c\u8bf7\u68c0\u67e5\u662f\u5426\u6b63\u786e\u586b\u5199\u4e3a \u201calpha\u201d \u6216 \u201crelease\u201d");
        }
      },
      onDestroy: function onDestroy() {
        this.removeEvent();
      }
    });
    cc._RF.pop();
  }, {
    "../1/ExamplesData": "ExamplesData",
    "../1/MatchvsEngine": "MatchvsEngine",
    "../1/MatchvsResponse": "MatchvsResponse",
    "../1/MatvhsvsMessage": "MatvhsvsMessage"
  } ],
  hotUpdate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "995922oqZFBwoTTggIkuelM", "hotUpdate");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {
        byteLabel: cc.Label,
        fileLabel: cc.Label,
        byteProgress: cc.ProgressBar,
        fileProgress: cc.ProgressBar,
        label: cc.Label,
        manifestUrl: cc.RawAsset
      },
      onLoad: function onLoad() {
        if (!cc.sys.isNative) {
          this.changeScene();
          return;
        }
        this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + "blackjack-remote-asset";
        cc.log("\u8fdc\u7aef\u8def\u5f84\uff1a" + this._storagePath);
        this.versionCompareHandle = function(versionA, versionB) {
          cc.log("\u7248\u672c\u6bd4\u8f83: version A is " + versionA + ", version B is " + versionB);
          var vA = versionA.split(".");
          var vB = versionB.split(".");
          for (var i = 0; i < vA.length; ++i) {
            var a = parseInt(vA[i]);
            var b = parseInt(vB[i] || 0);
            if (a === b) continue;
            return a - b;
          }
          return vB.length > vA.length ? -1 : 0;
        };
        this._am = new jsb.AssetsManager("", this._storagePath, this.versionCompareHandle);
        var self = this;
        this._am.setVerifyCallback(function(path, asset) {
          var compressed = asset.compressed;
          var expectedMD5 = asset.md5;
          var relativePath = asset.path;
          var size = asset.size;
          if (compressed) {
            self.label.string = "\u9a8c\u8bc1\u6210\u529f: " + relativePath;
            return true;
          }
          self.label.string = "\u9a8c\u8bc1\u6210\u529f: " + relativePath + " (" + expectedMD5 + ")";
          return true;
        });
        this.label.string = "\u66f4\u65b0\u51c6\u5907\u5c31\u7eea\u3002";
        if (cc.sys.os === cc.sys.OS_ANDROID) {
          this._am.setMaxConcurrentTask(10);
          this.label.string = "\u6700\u5927\u5e76\u53d1\u6570\u9650\u5236\u4e3a10";
        }
        this.fileProgress.progress = 0;
        this.byteProgress.progress = 0;
        this.checkUpdata();
      },
      hotUpdate: function hotUpdate() {
        try {
          if (this._am && !this._updating) {
            this._am.getState() === jsb.AssetsManager.State.UNINITED && this._am.loadLocalManifest(this.manifestUrl);
            if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
              this.label.string = "\u52a0\u8f7dmanifest\u5931\u8d25 ...";
              return;
            }
            this._am.setEventCallback(this.updateCb.bind(this));
            this._am.update();
            this._updating = true;
          }
        } catch (e) {
          this.label.string = e.toString();
        }
      },
      checkUpdata: function checkUpdata() {
        if (this._updating) return;
        this._am.getState() === jsb.AssetsManager.State.UNINITED && this._am.loadLocalManifest(this.manifestUrl);
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
          this.label.string = "\u52a0\u8f7dmanifest\u5931\u8d25 ...";
          return;
        }
        this._am.setEventCallback(this.checkCb.bind(this));
        this._am.checkUpdate();
        this._updating = true;
      },
      changeScene: function changeScene() {
        cc.director.loadScene("index");
      },
      checkCb: function checkCb(event) {
        cc.eventManager.removeListener(this._checkListener);
        this._checkListener = null;
        this._updating = false;
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          this.label.string = "\u6ca1\u6709\u627e\u5230\u672c\u5730manifest";
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          this.label.string = "\u4e0d\u80fd\u4e0b\u8f7d\u8fdc\u7a0bmanifest";
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          this.label.string = "\u5df2\u7ecf\u66f4\u65b0\u5230\u6700\u65b0\u7684\u8fdc\u7a0b\u7248\u672c";
          var self = this;
          setTimeout(function() {
            self.changeScene();
          }, 2e3);
          break;

         case jsb.EventAssetsManager.NEW_VERSION_FOUND:
          this.label.string = "\u65b0\u7248\u672c\u627e\u5230\uff0c\u8bf7\u5c1d\u8bd5\u66f4\u65b0";
          this.fileProgress.progress = 0;
          this.byteProgress.progress = 0;
          var self = this;
          setTimeout(function() {
            self.hotUpdate();
          }, 2e3);
          break;

         default:
          return;
        }
      },
      updateCb: function updateCb(event) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
         case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
          this.label.string = "\u6ca1\u6709\u627e\u5230\u672c\u5730manifest";
          failed = true;
          break;

         case jsb.EventAssetsManager.UPDATE_PROGRESSION:
          this.byteProgress.progress = event.getPercent();
          this.fileProgress.progress = event.getPercentByFile();
          this.fileLabel.string = event.getDownloadedFiles() + " / " + event.getTotalFiles();
          this.byteLabel.string = event.getDownloadedBytes() + " / " + event.getTotalBytes();
          var msg = event.getMessage();
          msg && (this.label.string = "\u66f4\u65b0\u6587\u4ef6: " + msg);
          break;

         case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
         case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
          this.label.string = "\u4e0d\u80fd\u4e0b\u8f7d\u8fdc\u7a0bmanifest";
          failed = true;
          break;

         case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
          this.label.string = "\u5df2\u7ecf\u66f4\u65b0\u5230\u6700\u65b0\u7684\u8fdc\u7a0b\u7248\u672c";
          failed = true;
          var self = this;
          setTimeout(function() {
            self.changeScene();
          }, 2e3);
          break;

         case jsb.EventAssetsManager.UPDATE_FINISHED:
          this.label.string = "\u66f4\u65b0\u5b8c\u6210," + event.getMessage();
          needRestart = true;
          break;

         case jsb.EventAssetsManager.UPDATE_FAILED:
          this.label.string = "\u66f4\u65b0\u5931\u8d25," + event.getMessage();
          this._updating = false;
          this._canRetry = true;
          break;

         case jsb.EventAssetsManager.ERROR_UPDATING:
          this.label.string = "\u8d44\u6e90\u66f4\u65b0\u9519\u8bef:" + event.getAssetId() + ", " + event.getMessage();
          break;

         case jsb.EventAssetsManager.ERROR_DECOMPRESS:
          this.label.string = event.getMessage();
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
          cc.sys.localStorage.setItem("HotUpdateSearchPaths", JSON.stringify(searchPaths));
          jsb.fileUtils.setSearchPaths(searchPaths);
          cc.game.restart();
        }
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "CaseExperience", "ExamplesData", "Matchvs", "MatchvsEngine", "MatchvsResponse", "MatvhsvsMessage", "Item", "NetworkFlow", "ExampleExplain", "Index", "hotUpdate" ]);