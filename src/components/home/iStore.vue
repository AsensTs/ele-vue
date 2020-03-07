<template>
    <el-container class="index-eRec-shoplist-r3">
      <el-container direction="vertical" class="index-container_r31">
        <div class="index-shopInfo_r32">
          <router-link :to="{name: 'storeView'}" tag="div" class="index-logo-container">
            <img alt="叫了只炸鸡(金鼎店)" src="https://cube.elemecdn.com/3/91/ce5bca9bf267ec75025c85deb782apng.png?x-oss-process=image/format,webp/resize,w_130,h_130,m_fixed"/>
          </router-link>
          <div class="index-main-info">
            <router-link :to="{name: 'storeView'}" tag="div">
            <el-container direction="vertical">
              <el-row class="index-line_2-iYR1A">
                <el-col :span="23" class="indec-line-title e-bold">叫了只炸鸡(金鼎店)</el-col>
                <el-col :span="1"><span class="index-line-omit"> ··· </span></el-col>
              </el-row>
            </el-container>
            </router-link>
            <el-container direction="vertical" class="index-line_2-iYR1A">
              <el-row>
                <el-col :span="6"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4="></el-col>
                <el-col :span="2"><span>4.2</span></el-col>
                <el-col :span="6"><span>月售939单</span></el-col>
              </el-row>
            </el-container>
            <el-container direction="vertical" class="index-line_2-iYR1A">
              <el-row>
                <el-col :span="16">
                  <div class="index-moneylimit_2fCq9W5">
                    <span>¥15起送</span>
                    <span class="vertical-line">夜间配送¥4.5</span>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div>
                    <span>4.51km</span>
                    <span class="vertical-line">44分钟</span>
                  </div>
                </el-col>
              </el-row>
            </el-container>
          </div>
        </div>
        <el-container class="index-activityWrap_r32">
          <el-container><div><span class="index-tag-b">炸鸡</span></div></el-container>
          <span></span>
          <el-container direction="vertical">
            <el-row>
              <el-col :span="19"><span class="index-sign-z" style="background-color: rgb(60, 199, 145);">赠</span><span>饿了么新用户首单立减10元</span></el-col>
              <el-col :span="5"><span>5个活动</span><i class="i-caret el-icon-caret-bottom"></i></el-col>
            </el-row>
          </el-container>
          <el-container>
            <div><span class="index-sign-j" style="background-color: rgb(240, 115, 115);">减</span><span class="index-per-r32">满30元减2元，满50元减4元，满80元减6元</span></div>
          </el-container>
        </el-container>
      </el-container>
    </el-container>
</template>

<script>
</script>

<style lang="stylus" scoped>
.e-bold
  font-weight: bold
.index-eRec-shoplist-r3
  height: auto
  margin: 0 0 4vw 0
  .index-container_r31
    color: #777777
    .index-shopInfo_r32
      padding: 3vw 2.666667vw;
      display: flex
      .index-logo-container
        height: 17.3333333334vw
      .index-logo-container img
        height: 100%
      .index-main-info
        height: 17.3333333334vw
        font-size: 2.5vw
        display: flex
        flex-grow: 1
        flex-direction: column
        justify-content: space-between
        overflow: hidden;
        padding-left: 3vw
        .el-container
          line-height: 6vw
        .index-line_2-iYR1A
          .indec-line-title, index-line-omit
            font-size: 4vw
            color: #333
          .vertical-line
            padding-left: 1vw
          .vertical-line:before
            content: ""
            padding:0 1vw
            border-left: 1px solid #989898
          .index-moneylimit_2fCq9W5
            color: #5d5d5d
        .index-line_2-iYR1A:nth-child(2)
          justify-content: flex-start
    .index-activityWrap_r32
      height: 18.4vw
      font-size: 2.5vw
      padding-left: 23vw
      display: flex
      flex-direction: column
      .el-container
        line-height: 6vw
      .index-tag-b
        border: 1px solid #dcdcdc
        border-radius: 1vw
        padding: 0 1vw
      .index-sign-z, .index-sign-j
        color: #FFF
        border-radius: .5vw
        padding: .3vw
        margin-right: 1vw
</style>
