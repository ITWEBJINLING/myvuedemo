<template>
  <div class="main">
    <el-table :data="data" style="width: 100%" border>

      <el-table-column label="excel" align='center'>
        <template>
          <div class="excel">
            <div class="upload-excel">
              <!-- <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-button type="primary" size="mini">导入</el-button>
              </el-upload> -->
              <el-upload
    ref="upload"
    action="/"
    :show-file-list="false"
    :on-change="importExcel"
    :auto-upload="false">
    <el-button
      slot="trigger"
      icon="el-icon-upload"
      size="small"
      type="primary">
      上传文件
    </el-button>
</el-upload>
            </div>
            <div class="export-excel">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-button type="primary" size="mini" class="base-f16 base-padding-btn">导出</el-button>
              </el-upload>
            </div>
          </div>
        </template>
      </el-table-column>
      
      <el-table-column label="word" align='center'>
        <template>
          <div class="excel">
            <div class="upload-excel">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-button type="primary" size="mini">导入</el-button>
              </el-upload>
            </div>
            <div class="export-excel">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-button type="primary" size="mini" class="base-f16 base-padding-btn">导出</el-button>
              </el-upload>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="pdf" align='center'>
        <template>
          <div class="excel">
            <div class="upload-excel">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-button type="primary" size="mini">导入</el-button>
              </el-upload>
            </div>
            <div class="export-excel">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-button type="primary" size="mini" class="base-f16 base-padding-btn">导出</el-button>
              </el-upload>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="txt" align='center'>
        <template>
          <div class="excel">
            <div class="upload-excel">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-button type="primary" size="mini">导入</el-button>
              </el-upload>
            </div>
            <div class="export-excel">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-button type="primary" size="mini" class="base-f16 base-padding-btn">导出</el-button>
              </el-upload>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="img" align='center'>
        <template>
          <div class="excel">
            <div class="upload-excel">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-button type="primary" size="mini">导入</el-button>
              </el-upload>
            </div>
            <div class="export-excel">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-button type="primary" size="mini" class="base-f16 base-padding-btn">导出</el-button>
              </el-upload>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="video" align='center'>
        <template>
          <div class="excel">
            <div class="upload-excel">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-button type="primary" size="mini">导入</el-button>
              </el-upload>
            </div>
            <div class="export-excel" align='center'>
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-button type="primary" size="mini" class="base-f16 base-padding-btn">导出</el-button>
              </el-upload>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="mp3" align='center'>
        <template>
          <div class="excel">
            <div class="upload-excel">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-button type="primary" size="mini">导入</el-button>
              </el-upload>
            </div>
            <div class="export-excel">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <el-button type="primary" size="mini" class="base-f16 base-padding-btn">导出</el-button>
              </el-upload>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- <div class="excel">
       <div class="upload-excel">
         <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
             <el-button type="primary" size="mini">导入</el-button>
         </el-upload>
       </div>
       <div class="export-excel">
         <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
             <el-button type="primary" size="mini" class="base-f16 base-padding-btn">导出</el-button>
         </el-upload>
       </div>
    </div>-->
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  data() {
    return {
      data: [{ id: 1, name: "aa" }],
      wb:null,
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleAvatarSuccess() {},
    beforeAvatarUpload() {},
    importExcel(file) {
      const types = file.name.split('.')[1]
      const fileType = ['xlsx', 'xlc', 'xlm', 'xls', 'xlt', 'xlw', 'csv'].some(item => item === types)
      if (!fileType) {
        alert('格式错误！请重新选择')
        return;
      }
      this.file2Xce(file).then(tabJson => {
        if (tabJson && tabJson.length > 0) {
          this.xlsxJson = tabJson
        }
      })
    },
    // 读取表格内容
    file2Xce(file) {
      return new Promise(function(resolve, reject) {
        const reader = new FileReader()
        reader.onload = function(e) {
          const data = e.target.result
          let wb = XLSX.read(data, {
            type: 'binary'
          })
          const result = []
          wb.SheetNames.forEach((sheetName) => {
            result.push({
              sheetName: sheetName,
              sheet: XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
            })
          })
          resolve(result)
        }
        reader.readAsBinaryString(file.raw)
      })
    }
  }
};
</script>
<style>
.img-sclice-html {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img-sclice-html span {
  margin-top: 15px;
  font-size: 22px;
  font-weight: bold;
}
</style>
<style scoped>
.main {
  height: 100%;
}
.excel {
  width: 100%;
  display: flex;
  justify-content: center;
}
.upload-excel {
  margin-right: 10px;
}
</style>
