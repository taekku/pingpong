Vue.component('my-gauge', {
  template: `
  Hi
  <div "height:400px">
      <table style="width: 300px; height: 100%">
        <tr>
          <td id="myTable1" style="text-align: right; vertical-align: text-top; font-size: small">
            <div id="myTitle0" style="position: relative; left: 0px; top: -10px">0H</div>
            <div id="myTitle1" style="position: relative; left: 0px; top: -10px">누적근무설정시간: 27H</div>
            <div id="myTitle2" style="position: relative; left: 0px; top: -10px">1주차 권장진도율: 40H</div>
            <div id="myTitle3" style="position: relative; left: 0px; top: -10px">소정근로시간: 136H</div>
            <div id="myTitle4" style="position: relative; left: 0px; top: -10px">최대근무가능H: 222H</div>
          </td>

<td style="border-spacing: 0px; padding: 0px;">
  <table style="border: 0px; padding: 0px; border-spacing: 0px;">
    <tr style="height: 100px;">
      <td class=" gauge_td gauge_td_1"></td>
    </tr>
    <tr style="height: 100px;">
      <td class="gauge_td gauge_td_2"></td>
    </tr>
    <tr style="height: 100px;">
      <td class="gauge_td gauge_td_3"></td>
    </tr>
    <tr style="height: 100px;">
      <td class="gauge_td gauge_td_4"></td>
    </tr>
  </table>
</td>

<td style="border-spacing: 0px; padding: 0px;">
  <table style="border: 0px; padding: 0px; border-spacing: 0px;">
    <tr style="height: 100px; border: 0px; padding: 0px">
      <td style="width: 10px; background-color: gray; border-bottom: 1px; padding: 0px"></td>
    </tr>
    <tr style="height: 100px; border: 0px; padding: 0px">
      <td style="background-color: red; border: 0px; padding: 0px"></td>
    </tr>
    <tr style="height: 100px; border: 0px; padding: 0px">
      <td style="background-color: yellow; border: 0px; padding: 0px"></td>
    </tr>
    <tr style="height: 100px; border: 0px; padding: 0px">
      <td style="background-color: green; border: 0px; padding: 0px"></td>
    </tr>
  </table>
</td>
<td>
      <button v-on:click="draw_table()">그리기</button>
</td>

        </tr>
      </table>
  </div>
  `,
  props: { 
    title0: String,
    myvalue: Number
  },
  data: {
    myHeight: 400,
    height1: 100,
    height2: 100,
    height3: 100,
    height4: 100,
  },
  methods: {
    draw_table: function(){
      console.log('draw_table');
    }
  }
})
