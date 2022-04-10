<h1>รูปแบบ Versioning ที่เลือกใช้</h1>
<p>รูปแบบ Versioning ที่เลือกใช้ : Semantic Versioning<br />Versioning หรือเลขเวอร์ชั่น เป็นส่วนที่ใช้บอกถึง อดีต ปัจจุบัน และอนาคต ของเครื่องมือนั้น ๆ ซึ่งประกอบไปด้วยตัวเลข 3 ส่วน</p>
<ul>
<li>ตัวเลข Patch (ตัวเลขหลักที่ 3)
<ul>
<li>สำหรับ patch มันคือการแก้ไขข้อผิดพลาดของระบบ, ซอฟต์แวร์, หรือแอพพลิเคชั่นนั้น ๆ เรียกได้ว่าเป็นตัวเลขที่ใช้บ่งบอกถึงการแก้ไขบั๊กต่าง ๆ</li>
<li>อาจเป็นการแก้ไขความผิดพลาด หรือการเปลี่ยนแปลงเล็ก ๆ น้อย ๆ ที่ทำให้ผู้ใช้สามารถพิจารณาอัพเดตได้อย่างสบายใจ</li>
<li>ถ้า Framework หรือระบบมีข้อผิดพลาด การแก้ไขในแต่ละรอบ จะกลายมาเป็นตัวเลขที่เพิ่มขึ้นในส่วนของ patch นั่นเอง</li>
</ul>
</li>
<li>ตัวเลข Minor (ตัวเลขหลักที่ 2)
<ul>
<li>ตัวเลข Minor มักมาพร้อมกับความสามารถใหม่ๆ (Feature) ที่มาพร้อมกับตัว Framwork หรือซอฟต์แวร์ และเป็นการอัพเดตที่ไม่ทำให้เกิด Major change หรือการเปลี่ยนแปลงสำคัญ</li>
<li>ซึ่งหลาย ๆครั้ง Feature ใหม่ ๆพวกนี้ มักมาจากความต้องการของทางผู้ใช้ หรือชุมชนนักพัฒนา</li>
<li>ดังนั้น Minor เราสามารถเรียกเป็น medium risk หรือเวอร์ชั่นที่มีความเสี่ยงปานกลาง ในกรณีที่มีปัญหาเกิดขึ้นจาก Minor ใหม่ ๆนี้ ก็มักจะมี Patch ตามมา</li>
</ul>
</li>
<li>ตัวเลข Major (ตัวเลขหลักที่ 1)
<ul>
<li>ตัวเลข Major มักมาพร้อมกับความเปลี่ยนแปลงที่ค่อนข้างใหญ่ อาจเป็นการเพิ่มความสามารถชุดใหญ่ หรือกระทั่งเปลี่ยนแปลงแนวคิดของเครื่องมือ อย่างเช่น การเปลี่ยนจาก AngularJS ไปเป็น Angular 2</li>
<li>จึงทำให้ตัวเลข Major ถูกจัดอยู่ในระดับ High risk (มีความเสี่ยงสูงต่อโปรเจค)</li>
<li>ดังนั้นการเปลี่ยน Major version มักจะมีการห้อยท้ายว่า &ldquo;RC&rdquo; (Release Candidate) หรือ Preview หรือ Beta เพื่อรับฟังปัญหา และข้อเสนอแนะจากผู้ใช้ หรือชุมชนนักพัฒนา เป็นระยะเวลาหนึ่ง</li>
</ul>
</li>
</ul>
<p><strong>ตัวอย่าง versioning ในรูปแบบ semantic versioning</strong></p>
<p>Major . Minor . Patch (x.x.x)</p>
<h1>กำหนดการใช้งานและจัดการ versioning ของ tag</h1>
<p>การจัดการตัวเลข versioning ของกลุ่มเรานั้น จะอยู่ในรูปแบบของ Semantic Versioning ดังที่ได้อธิบายไปในหัวข้อก่อนหน้านี้ โดยที่เราจะทำการ update ตัวเลข versioning แบบ manual โดยมีหลักการในการ update ตัวเลขตามรูปแบบ versioning ที่ได้เลือกไว้ ดังนี้</p>
<p><strong>Frontend</strong></p>
<ol>
<li><strong>major</strong> ตัวเลขในตำแหน่งนี้ จะเริ่มต้นที่ 1 และจะนับเพิ่มขึ้นไปเรื่อยๆทีละ 1 เมื่อมีการ update ของ code ในระดับที่ส่งผลเป็นอย่างมากมากต่อตัว project เช่น การเปลี่ยนเทคโนโลยีที่ใช้ในตัว project การเปลี่ยนแปลงรูปแบบ feature หลักของตัว project หรือการเพิ่มของ feature ที่ส่งผลต่อตัว project โดยตรง เป็นต้น</li>
<li><strong>minor</strong> ตัวเลขในตำแหน่งนี้ จะเริ่มต้นที่ 0 และจะนับเพิ่มขึ้นไปเรื่อยๆทีละ 1 เมื่อมีการ update ของ code ในระดับที่ส่งผลต่อ project ในระดับนึง เช่น การเพิ่ม feature ทั่วๆไป เป็นต้น โดยตัวเลข minor ต้อง reset กลับไปเป็น 0 เมื่อมีการ update version ในระดับ major เกิดขึ้น</li>
<li><strong>patch</strong> ตัวเลขในตำแหน่งนี้ จะเริ่มต้นที่ 0 และจะนับเพิ่มขึ้นไปเรื่อยๆทีละ 1 เมื่อมีการ update ของ code เกิดขึ้น ไม่ว่าการเปลี่ยนแปลงนั้นจะเป็นระดับ major หรือ minor</li>
</ol>
<p><strong>Backend</strong></p>
<ol>
<li><strong>major</strong> ตัวเลขในตำแหน่งนี้ จะเริ่มต้นที่ 1 และจะนับเพิ่มขึ้นไปเรื่อยๆทีละ 1 เมื่อมีการ update ของ code ในระดับที่ส่งผลเป็นอย่างมากมากต่อตัว project เช่น การเปลี่ยนแปลงเทคโนโลยีที่ใช้ในการจัดเก็บข้อมูล เป็นต้น</li>
<li><strong>minor</strong> ตัวเลขในตำแหน่งนี้ จะเริ่มต้นที่ 1 และจะนับเพิ่มขึ้นไปเรื่อยๆทีละ 1 เมื่อมีการ update ของ code ในระดับที่ส่งผลต่อ project ในระดับนึง เช่น การเพิ่ม api ใหม่ในการเรียกใช้ข้อมูล เป็นต้น โดยตัวเลข minor ต้อง reset กลับไปเป็น 0 เมื่อมีการ update version ในระดับ major เกิดขึ้น</li>
<li><strong>patch</strong> ตัวเลขในตำแหน่งนี้ จะเริ่มต้นที่ 1 และจะนับเพิ่มขึ้นไปเรื่อยๆทีละ 1 เมื่อมีการ update ของ code เกิดขึ้น ไม่ว่าการเปลี่ยนแปลงนั้นจะเป็นระดับ major หรือ minor</li>
</ol>
<h1><strong>ข้อดีและข้อเสียของการจัดการ verioning ที่เลือกใช้</strong></h1>
<p><strong>ข้อดี :</strong> เป็นการจัดการ versioning ที่เป็นแบบ manual ที่ได้รับความเห็นจากสมาชิกในทีมเท่านั้นทำให้เข้าใจร่วมกันถูกต้อง และมั่นใจได้เมื่อทำการ update version</p>
<p><strong>ข้อเสีย :</strong> เนื่องจากเป็นแบบ manual อาจส่งผลให้ใส่เลขเวอร์ชั่นผิดในบางกรณี หรือไม่ก็ใส่เลขผิดตำแหน่งทำให้ไม่สอดคล้องกับสิ่งที่เปลี่ยนแปลงในการ Deploy ในบางครั้ง</p>
<p><strong>วิธีการปรับปรุงและจัดการกับข้อเสียที่พบ</strong></p>
<ol>
<li>ในการ update version ของ project ทุกครั้ง สมาชิกภายในกลุ่มจะต้องช่วยกันเช็คก่อนทำการ update version เพื่อให้แน่ใจว่า version ที่อัปเดตไป สอดคล้องกับกฏที่ได้ตั้งไว้หรือไม่</li>
<li>ทำการเช็คเลข version ในปัจจุบัน ก่อนทำการ update version ใหม่ เพื่อให้ตัวเลข version มีความสอดคล้องกัน</li>
</ol>
<h1>สรุปจำนวนครั้งในการ build แบบอัตโนมัติของทุกวันในสัปดาห์นี้ (2022/03/04 - 2022/04/12)</h1>
<p><strong>Frontend</strong></p>
<table style="border-collapse: collapse; width: 100%; height: 460px;" border="1">
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
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">2022/04/04</span></p>
</td>
<td style="width: 12.2776%; height: 46px;">
<p><span style="font-weight: 400;">2</span></p>
</td>
<td style="width: 31.1388%; height: 46px;">
<p><span style="font-weight: 400;">2</span></p>
</td>
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">2022/04/05</span></p>
</td>
<td style="width: 12.2776%; height: 46px;">
<p><span style="font-weight: 400;">1</span></p>
</td>
<td style="width: 31.1388%; height: 46px;">
<p><span style="font-weight: 400;">1</span></p>
</td>
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">2022/04/06</span></p>
</td>
<td style="width: 12.2776%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">2022/04/07</span></p>
</td>
<td style="width: 12.2776%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">2022/04/08</span></p>
</td>
<td style="width: 12.2776%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">2022/04/09</span></p>
</td>
<td style="width: 12.2776%; height: 46px;">
<p><span style="font-weight: 400;">1</span></p>
</td>
<td style="width: 31.1388%; height: 46px;">
<p><span style="font-weight: 400;">1</span></p>
</td>
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">2022/04/10</span></p>
</td>
<td style="width: 12.2776%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">2022/04/11</span></p>
</td>
<td style="width: 12.2776%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">2022/04/12</span></p>
</td>
<td style="width: 12.2776%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%; height: 46px;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
</tbody>
</table>
<p><strong>Backend</strong></p>
<p>&nbsp;</p>
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
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">2022/04/04</span></p>
</td>
<td style="width: 12.2776%;">
<p><span style="font-weight: 400;">2</span></p>
</td>
<td style="width: 31.1388%;">
<p><span style="font-weight: 400;">2</span></p>
</td>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">2022/04/05</span></p>
</td>
<td style="width: 12.2776%;">
<p><span style="font-weight: 400;">1</span></p>
</td>
<td style="width: 31.1388%;">
<p><span style="font-weight: 400;">1</span></p>
</td>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">2022/04/06</span></p>
</td>
<td style="width: 12.2776%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">2022/04/07</span></p>
</td>
<td style="width: 12.2776%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">2022/04/08</span></p>
</td>
<td style="width: 12.2776%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">2022/04/09</span></p>
</td>
<td style="width: 12.2776%;">
<p><span style="font-weight: 400;">1</span></p>
</td>
<td style="width: 31.1388%;">
<p><span style="font-weight: 400;">1</span></p>
</td>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">2022/04/10</span></p>
</td>
<td style="width: 12.2776%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">2022/04/11</span></p>
</td>
<td style="width: 12.2776%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">2022/04/12</span></p>
</td>
<td style="width: 12.2776%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 31.1388%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 28.1139%;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
</tbody>
</table>
<p><strong>Line change and Number commit of Group (wiki)</strong></p>
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
<td style="width: 17.9715%;">
<p>62070112</p>
</td>
<td style="width: 27.5801%;">
<p>นายปภัส&nbsp; เงาธัมมะสกุล</p>
</td>
<td style="width: 25.6228%;">&nbsp;</td>
<td style="width: 28.6477%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 17.9715%;">
<p>62070113</p>
</td>
<td style="width: 27.5801%;">
<p>นายประธาน นาเวียง</p>
</td>
<td style="width: 25.6228%;">&nbsp;</td>
<td style="width: 28.6477%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 17.9715%;">
<p>62070134</p>
</td>
<td style="width: 27.5801%;">
<p>นายพลัฏฐ์&nbsp; วงศ์สิทธิพรรุ่ง</p>
</td>
<td style="width: 25.6228%;">&nbsp;</td>
<td style="width: 28.6477%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 17.9715%;">
<p>62070139</p>
</td>
<td style="width: 27.5801%;">
<p>นายพิชญะ&nbsp; สิงห์มีศรี</p>
</td>
<td style="width: 25.6228%;">&nbsp;</td>
<td style="width: 28.6477%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 17.9715%;">
<p>62070168</p>
</td>
<td style="width: 27.5801%;">
<p>นายวิชยุตม์&nbsp; ทวิชัยยุทธ</p>
</td>
<td style="width: 25.6228%;">&nbsp;</td>
<td style="width: 28.6477%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 17.9715%;">
<p>62070215</p>
</td>
<td style="width: 27.5801%;">
<p>นายอคิราภ์&nbsp; สีแสนยง</p>
</td>
<td style="width: 25.6228%;">&nbsp;</td>
<td style="width: 28.6477%;">&nbsp;</td>
</tr>
</tbody>
</table>
<p><strong>Line change and Number commit of Group (code)</strong></p>
<p>&nbsp;</p>
<table style="border-collapse: collapse; width: 100%; height: 322px;" border="1">
<tbody>
<tr style="height: 46px;">
<td style="width: 17.9715%; text-align: center; height: 46px;">
<p><strong>Student No.</strong></p>
</td>
<td style="width: 27.5801%; text-align: center; height: 46px;">
<p><strong>Name</strong></p>
</td>
<td style="width: 25.6228%; text-align: center; height: 46px;">
<p><strong>Line Change (%)</strong></p>
</td>
<td style="width: 28.6477%; text-align: center; height: 46px;">
<p><strong>No. of Commit (%)</strong></p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 17.9715%; height: 46px;">
<p>62070112</p>
</td>
<td style="width: 27.5801%; height: 46px;">
<p>นายปภัส&nbsp; เงาธัมมะสกุล</p>
</td>
<td style="width: 25.6228%; height: 46px;">
<p>2.68%</p>
</td>
<td style="width: 28.6477%; height: 46px;">
<p>12%</p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 17.9715%; height: 46px;">
<p>62070113</p>
</td>
<td style="width: 27.5801%; height: 46px;">
<p>นายประธาน นาเวียง</p>
</td>
<td style="width: 25.6228%; height: 46px;">
<p>4.15%</p>
</td>
<td style="width: 28.6477%; height: 46px;">
<p>7%</p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 17.9715%; height: 46px;">
<p>62070134</p>
</td>
<td style="width: 27.5801%; height: 46px;">
<p>นายพลัฏฐ์&nbsp; วงศ์สิทธิพรรุ่ง</p>
</td>
<td style="width: 25.6228%; height: 46px;">
<p>18.09%</p>
</td>
<td style="width: 28.6477%; height: 46px;">
<p>12%</p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 17.9715%; height: 46px;">
<p>62070139</p>
</td>
<td style="width: 27.5801%; height: 46px;">
<p>นายพิชญะ&nbsp; สิงห์มีศรี</p>
</td>
<td style="width: 25.6228%; height: 46px;">
<p>1.73%</p>
</td>
<td style="width: 28.6477%; height: 46px;">
<p>8%</p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 17.9715%; height: 46px;">
<p>62070168</p>
</td>
<td style="width: 27.5801%; height: 46px;">
<p>นายวิชยุตม์&nbsp; ทวิชัยยุทธ</p>
</td>
<td style="width: 25.6228%; height: 46px;">
<p>2.04%</p>
</td>
<td style="width: 28.6477%; height: 46px;">
<p>14%</p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 17.9715%; height: 46px;">
<p>62070215</p>
</td>
<td style="width: 27.5801%; height: 46px;">
<p>นายอคิราภ์&nbsp; สีแสนยง</p>
</td>
<td style="width: 25.6228%; height: 46px;">
<p>71.30%</p>
</td>
<td style="width: 28.6477%; height: 46px;">
<p>41%</p>
</td>
</tr>
</tbody>
</table>
