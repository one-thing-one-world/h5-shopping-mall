 <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo" :style="{width:'690px',height:'490px'}">
     <el-amap-marker vid="component-marker" :position="componentMarker.position" :content-render="componentMarker.contentRender" ></el-amap-marker>
     <el-amap-marker v-for="(marker, index) in markers" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :vid="index"></el-amap-marker>
 </el-amap>
  <div class="message animated fadeInRight">
                <ul>
                    <li class="active" v-on:click="changePosition">
                        <p>地址1</p>
                    </li>
                    <li  v-on:click="chnageDraggle">
                        <p>地址2</p>
                    </li>
                    <li  v-on:click="addMarker">
                        <p>地址3</p>
                    </li>
                    <li  v-on:click="removeMarker">
                        <p>地址4</p>
                    </li>
                </ul>
            </div>
————————————————
版权声明：本文为CSDN博主「BigMax88」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_43360935/java/article/details/86622186