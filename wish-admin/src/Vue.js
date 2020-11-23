import Vue from 'vue'
import ElementUI from 'element-ui';
import axios from "axios";

Vue.use(ElementUI, {
  size: 'small'
});

Vue.prototype.fetchData = function (obj) {
  let vm = this;
  axios({
    method: obj.method,
    url: obj.url,
    data: obj.data,
    params: obj.params,
    headers: {
      token: localStorage.getItem('token')
    }
  })
    .then(res => {
      if(res.data && res.data.code === 10000){
        obj.success && obj.success(res.data.data)
      }else if(res.data && res.data.code === 401){
        ElementUI.Message.error(res.data.msg);
        setTimeout(function () {
          vm.$router.push('/login')
        }, 3000)
      }else{
        ElementUI.Message.error(res.data.msg);
        obj.error && obj.error(res.data.msg)
      }
    })
    .catch((err) => {
      ElementUI.Message.error(`发生错误 ${err.response.status}`);
      obj.error && obj.error(err)
    })
};



export default Vue;