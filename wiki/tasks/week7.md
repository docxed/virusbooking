<h1>Best practices for writing Dockerfiles</h1>
<ol>
<li>Create ephemeral containers (สร้าง containers ชั่วคราว)
<ul>
<li><span style="font-weight: 400;">Docker image ที่ถูกสร้างจากตัว Dockerfile นั้นควรจะสร้าง containers ชั่วคราวขึ้นมา ที่สามารถหยุดการทำงานและทำลายได้ จากนั้นทำการสร้างขึ้นใหม่และแทนที่ด้วยการตั้งค่าและกำหนดค่าขั้นต่ำที่แน่นอน</span></li>
</ul>
</li>
<li><span style="font-weight: 400;">Understand build context(ทำความเข้าใจตัว build context)</span>
<ul>
<li><span style="font-weight: 400;">เมื่อใช้คำสั่ง build ตัว docker, ตัว directory ที่กำลังทำงานอยู่ในปัจจุบันจะถูกเรียกว่า build context. ตามค่าเริ่มต้นจะถือว่าตัว dockerfile จะอยู่ที่นี่ แต่เราสามารถที่จะระบุตำแหน่งที่ตั้งอื่นได้โดยใช้ file flag (-f). ซึ่งไม่ว่าตัว dockerfile จะอยู่ที่ตำแหน่งใด ทุก recursive content ของ files และdirectories ใน directoryปัจจุบัน จะถูกส่งไปยัง Docker deamon ในฐานะ build context</span></li>
</ul>
</li>
<li><span style="font-weight: 400;">Pipe Dockerfile through stdin</span>
<ul>
<li><span style="font-weight: 400;">Docker มีคุณสมบัติในการสร้าง image ผ่านการทำ piping dockerfile ผ่าน stdin ด้วย local หรือ remote build context ทำให้สามารถ build ตัว docker ได้โดยไม่จำเป็นต้องทำการเขียนตัว dockerfile ลงบน disk</span></li>
</ul>
</li>
<li><span style="font-weight: 400;">Exclude with .dockerignore</span>
<ul>
<li><span style="font-weight: 400;">เราควรที่จะใช้งาน .dockerignore เพื่อแยกไฟล์ที่ไม่จำเป็นในการสร้าง Docker image จาก Dockerfile ซึ่ง .dockerignore มีรูปแบบการเขียนที่คล้ายกับ .gitignore</span></li>
</ul>
</li>
<li><span style="font-weight: 400;">Use multi-stage builds</span>
<ul>
<li><span style="font-weight: 400;">การทำ multi-stage builds จะช่วยเพิ่มความสะดวกในการสร้าง image โดยเราไม่จำเป็นต้องสร้าง Dockerfile หลายๆ file และสามารถช่วยลดขนาดของ final image เป็นอย่างมากโดยไม่ต้องพยายามที่จะลดจำนวน layer โดยการใช้ build cache ยกตัวอย่างเช่น หากการ build นั้นมีหลาย layer เราจะต้องเรียงลำดับ layer ที่มีการเปลี่ยนแปลงน้อยไปจนถึงการเปลี่ยนแปลงที่บ่อยกว่า เช่น</span>
<ul>
<li><span style="font-weight: 400;">ติดตั้งเครื่องมือที่จำในการสร้าง app</span></li>
<li><span style="font-weight: 400;">ติดตั้ง หรือ อัปเดต library ,dependencies</span></li>
<li><span style="font-weight: 400;">สร้าง app<br /></span></li>
</ul>
</li>
</ul>
</li>
<li><span style="font-weight: 400;">Don&rsquo;t install unnecessary packages</span>
<ul>
<li><span style="font-weight: 400;">เพื่อลด ความซับซ้อน, dependencies, ขนาดไฟล์ และ เวลาในการ build ควรจะหลีกเลี่ยงการติดตั้งแพ็คเกจพิเศษหรือแพ็คเกจที่ไม่จำเป็น</span></li>
</ul>
</li>
<li><span style="font-weight: 400;">Decouple applications</span>
<ul>
<li><span style="font-weight: 400;">ในแต่ละ Container ควรจะมีภาระการทำงานเพียงอย่างเดียว ก็คือการแยก application ออกเป็นหลายๆ Container ซึ่งจะทำให้ง่ายต่อการปรับขนาดและนำ Container กลับมาใช้ใหม่ได้ง่ายขึ้น</span></li>
</ul>
</li>
<li><span style="font-weight: 400;">Minimize the number of layers</span>
<ul>
<li><span style="font-weight: 400;">ใน Docker version เก่า มันเป็นสิ่งที่สำคัญมากในการลดจำนวน layers ใน images เพื่อทำให้แน่ใจว่ามีประสิทธิภาพ โดย features ต่อไปนี้ถูกเพิ่มเข้ามาเพื่อลดข้อจำกัดดังนี้</span>
<ol>
<li><span style="font-weight: 400;">มีแค่เฉพาะคำสั่ง RUN, COPYและ ADDเท่านั้นที่สามารถสร้างlayers ส่วน instructions อื่นๆ จะสามารถสร้าง images ระดับกลางชั่วคราวและจะไม่เพิ่มขนาดของ build</span></li>
<li><span style="font-weight: 400;">หากเป็นไปได้ ให้ใช้ multi-stage builds, และ copy เฉพาะตัว artifacts ทีจำเป็นใน final images ซึ่งจะช่วยให้สามารถรวมเครื่องมือ และข้อมูลการ debug ในระหว่างขั้นตอนการสร้างโดยไม่เพิ่มขนาดของ final image</span></li>
</ol>
</li>
</ul>
</li>
<li><span style="font-weight: 400;">Sort multi-line arguments</span>
<ul>
<li><span style="font-weight: 400;">ถ้าเป็นไปได้, ให้ทำการ change ภายหลังในครั้งต่อไปง่ายขึ้นด้วยการจัดเรียง arguments ตามตัวอักษร ซึ่งวิธีนี้จะช่วยหลีกเลี่ยงความซ้ำซ้อนของ packages และทำให้การอัปเดตนั้นง่ายขึ้นนอกจากนี้ยังทำให้ PRs อ่าน และReview ง่ายขึ้น, การเว้นวรรคก่อน backslash(/) ก็สามารถช่วยได้เช่นกัน</span></li>
</ul>
</li>
<li><span style="font-weight: 400;">Leverage build cache</span>
<ul>
<li><span style="font-weight: 400;">เมื่อมีการสร้างตัว image, Docker จะทำการดำเนินการตาม instruction ในตัว dockerfile โดยดำเนินการตามลำดับที่ได้ระบุไว้, เมื่อได้ตรวจสอบแต่ละคำสั่งแล้ว Docker จะค้นหา image ที่มีอยู่ใน cache ซึ่งสามารถนำมาใช้ซ้ำได้ แทนที่จะสร้าง image ใหม่ ซึ่งถ้าต้องการจะใช้ cache, นั่นเป็นสิ่งที่สำคัญมากที่ต้องเข้าใจว่าเมื่อใด ที่มันสามารถทำได้ หรือไม่สามารถหา image ที่ matchingกันได้ โดยมีกฏพื้นฐานที่ Docker จะทำตามมีดังนี้</span>
<ol>
<li><span style="font-weight: 400;">เริ่มต้นด้วยตัว parent image ที่มีอยู่ใน cache อยู่แล้ว, ซึ่งขั้นตอนต่อไปจะถูกเอาไปเปรียบเทียบกับ chile image ทั้งหมด ที่ได้รับมาจาก base image เพื่อดูว่ามันได้ถูกสร้างขึ้นมาแล้วรึยังโดยใช้ขั้นตอนเดียวกัน ถ้าพบว่ายังไม่ถูกสร้างขึ้น, cache จะไม่สามารถใช้งานได้</span></li>
<li><span style="font-weight: 400;">ในกรณีส่วนใหญ่, เพียงแค่เปรียบ instruction ใน Dockerfile กับหนึ่งใน chile image นั้นเพียงพอแล้ว แต่อย่างไรก็ตาม instruction บางตัวจำเป็นต้องมีการตรวจสอบ และคำอธิบายเพิ่มเติม</span></li>
<li><span style="font-weight: 400;">สำหรับตัว instructions ADD และCOPY, เนื้อหาของ file(s) ใน image จะถูตรวจสอบ และมีการ checksum ที่ถูกคำนวณในแต่ละ file. โดย การแก้ไขครั้งล่าสุด และการเข้าถึงครั้งล่าสุดจะไม่ถูกนำมาพิจารณาใน checksumด้วย. ในระหว่างการค้นหา cache, checksum จะถูกเปรียบเทียบกับตัว checksum ใน existing images. หากมีสิ่งใดเปลี่ยนแปลงภายใน file(s) เช่น ตัว content และmetadata, cache ก็จะไม่สามารถใช้งานได้</span></li>
<li><span style="font-weight: 400;">นอกเหนือจากคำสั่ง ADD และCOPY, การตรวจสอบ cache จะไม่พิจารณที่ files ใน container เพื่อค้นหา cacheที่ตรงกัน ตัวอย่างเช่น เมื่อประมวลผลคำสั่ง RUN apt-get -y update ไฟล์ที่อัปเดตใน container จะไม่ถูกตรวจสอบว่า cache นั้นมีอยู่รึเปล่า แต่ในกรณีนั้นมีเพียงคำสั่ง string itself ที่สามารถใช้ในการค้นหาการ match กัน</span></li>
</ol>
</li>
<li><span style="font-weight: 400;">เมื่อ cache ใช้งานไม่ได้, คำสั่ง Dockerfile ที่ตามมาภายหลัง จะทำการ generate images ใหม่ และไม่ใช้ cache</span></li>
</ul>
</li>
</ol>
<h1>หัวข้อ Best practices for writing Dockerfiles ที่นำมาใช้ใน project นี้</h1>
<ol>
<li>Exclude with .dockerignore เพราะต้องมีการจำกัดไฟล์ที่นำมาใช้ในการสร้าง Docker Image จาก Dockerfile ให้มีเฉพาะไฟล์ที่จำเป็นเท่านั้น</li>
<li>Don&rsquo;t install unnecessary packages เพื่อให้ไฟล์มีขนาดที่ไม่ใหญ่จนเกินไป</li>
</ol>
<h1>Link Docker Hub</h1>
<ul>
<li>Frontend : <a href="https://hub.docker.com/r/docxed/team-1-frontend">https://hub.docker.com/r/docxed/team-1-frontend</a></li>
<li><span style="font-weight: 400;">Backend : <a href="https://hub.docker.com/r/docxed/team-1-backend">https://hub.docker.com/r/docxed/team-1-backend</a></span></li>
</ul>
<h1>สรุปการสร้าง Dockerfile (frontend &amp; backend)</h1>
<ol>
<li>กำหนด Base Image ที่จะใช้ภายใน container (ในที่นี่จะเลือกใช้เป็น node:16.14 - alpine)</li>
<li>กำหนด work Directory (ในที่นี้จะกำหนดเป็น /app)</li>
<li>ทำการ copy file package.json และไฟล์ yarn.lock ไปไว้ใน work Directory ที่กำหนดไว้ก่อนหน้านี้</li>
<li>ติดตั้ง dependencies ให้กับตัว Docker image</li>
<li>ทำการ copy file งานทั้งหมดที่จำเป็นเข้าไปยังตัว Docker image</li>
<li>ทำการ build ตัว project ของเราจาก Docker image</li>
</ol>
<p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task7/docker.png?raw=true" alt="" width="377" height="246" /></p>
<h1>สรุปจำนวนครั้งในการ build แบบอัตโนมัติของทุกวันในสัปดาห์นี้</h1>
<p>Frontend</p>
<table style="border-collapse: collapse; width: 100%; height: 276px;" border="1">
<tbody>
<tr style="height: 46px;">
<td style="width: 28.1139%; text-align: center; height: 46px;">
<p><strong>Date</strong></p>
</td>
<td style="width: 12.2776%; text-align: center; height: 46px;">
<p><strong>Build</strong></p>
</td>
<td style="width: 31.1388%; text-align: center; height: 46px;">
<p><strong>Build success</strong></p>
</td>
<td style="width: 28.1139%; text-align: center; height: 46px;">
<p><strong>Build failure</strong></p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 28.1139%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">2022/03/28</span></p>
</td>
<td style="width: 12.2776%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 28.1139%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">2022/03/29</span></p>
</td>
<td style="width: 12.2776%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 28.1139%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">2022/03/30</span></p>
</td>
<td style="width: 12.2776%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 28.1139%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">2022/03/31</span></p>
</td>
<td style="width: 12.2776%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 28.1139%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">2022/04/01</span></p>
</td>
<td style="width: 12.2776%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/02</span></p>
</td>
<td style="width: 12.2776%; text-align: center;">
<p><span style="font-weight: 400;">1</span></p>
</td>
<td style="width: 31.1388%; text-align: center;">
<p><span style="font-weight: 400;">1</span></p>
</td>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/03</span></p>
</td>
<td style="width: 12.2776%; text-align: center;">
<p><span style="font-weight: 400;">10</span></p>
</td>
<td style="width: 31.1388%; text-align: center;">
<p><span style="font-weight: 400;">7</span></p>
</td>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">3</span></p>
</td>
</tr>
</tbody>
</table>
<p><span style="font-weight: 400;">Backend</span></p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 28.1139%; text-align: center;">
<p><strong>Date</strong></p>
</td>
<td style="width: 12.2776%; text-align: center;">
<p><strong>Build</strong></p>
</td>
<td style="width: 31.1388%; text-align: center;">
<p><strong>Build success</strong></p>
</td>
<td style="width: 28.1139%; text-align: center;">
<p><strong>Build failure</strong></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">2022/03/28</span></p>
</td>
<td style="width: 12.2776%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">2022/03/29</span></p>
</td>
<td style="width: 12.2776%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">2022/03/30</span></p>
</td>
<td style="width: 12.2776%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">2022/03/31</span></p>
</td>
<td style="width: 12.2776%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/01</span></p>
</td>
<td style="width: 12.2776%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/02</span></p>
</td>
<td style="width: 12.2776%; text-align: center;">
<p><span style="font-weight: 400;">1</span></p>
</td>
<td style="width: 31.1388%; text-align: center;">
<p><span style="font-weight: 400;">1</span></p>
</td>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/03</span></p>
</td>
<td style="width: 12.2776%; text-align: center;">
<p><span style="font-weight: 400;">7</span></p>
</td>
<td style="width: 31.1388%; text-align: center;">
<p><span style="font-weight: 400;">4</span></p>
</td>
<td style="width: 28.1139%; text-align: center;">
<p><span style="font-weight: 400;">3</span></p>
</td>
</tr>
</tbody>
</table>
<h1>Line change and Number commit of Group</h1>
<p>wiki</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 17.9715%; text-align: center;">
<p><strong>Student No.</strong></p>
</td>
<td style="width: 27.5801%; text-align: center;">
<p><strong>Name</strong></p>
</td>
<td style="width: 25.6228%; text-align: center;">
<p><strong>Line Change (%)</strong></p>
</td>
<td style="width: 28.6477%; text-align: center;">
<p><strong>No. of Commit (%)</strong></p>
</td>
</tr>
<tr>
<td style="width: 17.9715%; text-align: center;">
<p>62070112</p>
</td>
<td style="width: 27.5801%; text-align: center;">
<p>นายปภัส&nbsp; เงาธัมมะสกุล</p>
</td>
<td style="width: 25.6228%; text-align: center;">&nbsp;</td>
<td style="width: 28.6477%; text-align: center;">&nbsp;</td>
</tr>
<tr>
<td style="width: 17.9715%; text-align: center;">
<p>62070113</p>
</td>
<td style="width: 27.5801%; text-align: center;">
<p>นายประธาน นาเวียง</p>
</td>
<td style="width: 25.6228%; text-align: center;">&nbsp;</td>
<td style="width: 28.6477%; text-align: center;">&nbsp;</td>
</tr>
<tr>
<td style="width: 17.9715%; text-align: center;">
<p>62070134</p>
</td>
<td style="width: 27.5801%; text-align: center;">
<p>นายพลัฏฐ์&nbsp; วงศ์สิทธิพรรุ่ง</p>
</td>
<td style="width: 25.6228%; text-align: center;">&nbsp;</td>
<td style="width: 28.6477%; text-align: center;">&nbsp;</td>
</tr>
<tr>
<td style="width: 17.9715%; text-align: center;">
<p>62070139</p>
</td>
<td style="width: 27.5801%; text-align: center;">
<p>นายพิชญะ&nbsp; สิงห์มีศรี</p>
</td>
<td style="width: 25.6228%; text-align: center;">&nbsp;</td>
<td style="width: 28.6477%; text-align: center;">&nbsp;</td>
</tr>
<tr>
<td style="width: 17.9715%; text-align: center;">
<p>62070168</p>
</td>
<td style="width: 27.5801%; text-align: center;">
<p>นายวิชยุตม์&nbsp; ทวิชัยยุทธ</p>
</td>
<td style="width: 25.6228%; text-align: center;">&nbsp;</td>
<td style="width: 28.6477%; text-align: center;">&nbsp;</td>
</tr>
<tr>
<td style="width: 17.9715%; text-align: center;">
<p>62070215</p>
</td>
<td style="width: 27.5801%; text-align: center;">
<p>นายอคิราภ์&nbsp; สีแสนยง</p>
</td>
<td style="width: 25.6228%; text-align: center;">&nbsp;</td>
<td style="width: 28.6477%; text-align: center;">&nbsp;</td>
</tr>
</tbody>
</table>
<p>Code</p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 17.9715%; text-align: center;">
<p><strong>Student No.</strong></p>
</td>
<td style="width: 27.5801%; text-align: center;">
<p><strong>Name</strong></p>
</td>
<td style="width: 25.6228%; text-align: center;">
<p><strong>Line Change (%)</strong></p>
</td>
<td style="width: 28.6477%; text-align: center;">
<p><strong>No. of Commit (%)</strong></p>
</td>
</tr>
<tr>
<td style="width: 17.9715%; text-align: center;">
<p>62070112</p>
</td>
<td style="width: 27.5801%; text-align: center;">
<p>นายปภัส&nbsp; เงาธัมมะสกุล</p>
</td>
<td style="width: 25.6228%; text-align: center;">
<p>2.89%</p>
</td>
<td style="width: 28.6477%; text-align: center;">
<p>12%</p>
</td>
</tr>
<tr>
<td style="width: 17.9715%; text-align: center;">
<p>62070113</p>
</td>
<td style="width: 27.5801%; text-align: center;">
<p>นายประธาน นาเวียง</p>
</td>
<td style="width: 25.6228%; text-align: center;">
<p>4.46%</p>
</td>
<td style="width: 28.6477%; text-align: center;">
<p>8%</p>
</td>
</tr>
<tr>
<td style="width: 17.9715%; text-align: center;">
<p>62070134</p>
</td>
<td style="width: 27.5801%; text-align: center;">
<p>นายพลัฏฐ์&nbsp; วงศ์สิทธิพรรุ่ง</p>
</td>
<td style="width: 25.6228%; text-align: center;">
<p>19.47%</p>
</td>
<td style="width: 28.6477%; text-align: center;">
<p>12%</p>
</td>
</tr>
<tr>
<td style="width: 17.9715%; text-align: center;">
<p>62070139</p>
</td>
<td style="width: 27.5801%; text-align: center;">
<p>นายพิชญะ&nbsp; สิงห์มีศรี</p>
</td>
<td style="width: 25.6228%; text-align: center;">
<p>1.87%</p>
</td>
<td style="width: 28.6477%; text-align: center;">
<p>8%</p>
</td>
</tr>
<tr>
<td style="width: 17.9715%; text-align: center;">
<p>62070168</p>
</td>
<td style="width: 27.5801%; text-align: center;">
<p>นายวิชยุตม์&nbsp; ทวิชัยยุทธ</p>
</td>
<td style="width: 25.6228%; text-align: center;">
<p>2.20%</p>
</td>
<td style="width: 28.6477%; text-align: center;">
<p>13%</p>
</td>
</tr>
<tr>
<td style="width: 17.9715%; text-align: center;">
<p>62070215</p>
</td>
<td style="width: 27.5801%; text-align: center;">
<p>นายอคิราภ์&nbsp; สีแสนยง</p>
</td>
<td style="width: 25.6228%; text-align: center;">
<p>69.12%</p>
</td>
<td style="width: 28.6477%; text-align: center;">
<p>47%</p>
</td>
</tr>
</tbody>
</table>
