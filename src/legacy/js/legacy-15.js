const cozeWebSDK = new CozeWebSDK.WebChatClient({
  config: { bot_id: "7642144156743680052" },
  auth: {
    type: "token",
    token: "pat_4ejPkv1T0TQqsLvnHh4ZuPlofL0xpuCBK1sW4tyBkV5tWdm29rNN6l19OPCEnUUT",
    onRefreshToken: function () {
      return "pat_4ejPkv1T0TQqsLvnHh4ZuPlofL0xpuCBK1sW4tyBkV5tWdm29rNN6l19OPCEnUUT";
    }
  },
  ui: { asstBtn: { isNeed: false } }, // 隐藏官方悬浮球
  componentProps: { title: "脐宝AI" }
});
