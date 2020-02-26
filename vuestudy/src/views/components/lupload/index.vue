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
    <div style="text-align:center">
      <table border="1" cellpadding="3" cellspacing="0" style="margin:auto" id="showExcel"></table>
    </div>
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
        var a=tabJson.split('<table>')[1];
        var b=a.split('</table>')[0];
        console.log(b);
        document.getElementById('showExcel').innerHTML=b;

        // if (tabJson && tabJson.length > 0) {
        //   this.xlsxJson = tabJson
        // }
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
            console.log(sheetName)
          //   console.log(wb.Sheets[sheetName])
          //   result.push({
          //     sheetName: sheetName,
          //     sheet: XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
          //   })
          })
          // result.push({
              // sheetName: 'Sheet1',
              var csv = XLSX.utils.sheet_to_html(wb.Sheets['Sheet1'])

          // })
          resolve(csv)
        }
        reader.readAsBinaryString(file.raw)
      })
    },
    csv2table(csv){
    var html = '<table>';
    var rows = csv.split('\n');
    rows.pop(); // 最后一行没用的
    rows.forEach(function(row, idx) {
        var columns = row.split(',');
        columns.unshift(idx+1); // 添加行索引
        if(idx == 0) { // 添加列索引
            html += '<tr>';
            for(var i=0; i<columns.length; i++) {
                html += '<th>' + (i==0?'':String.fromCharCode(65+i-1)) + '</th>';
            }
            html += '</tr>';
        }
        html += '<tr>';
        columns.forEach(function(column) {
            html += '<td>'+column+'</td>';
        });
        html += '</tr>';
    });
    html += '</table>';
    return html;
},
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
