<h1>Project Structure</h1>
<p><strong>Frontend</strong></p>
<ul>
<li><strong>index.html</strong><br />เป็นส่วนที่ web browser นำมาใช้ในการ render เพื่อแสดงผลหน้า website ของเรา<strong><br /></strong></li> <!-- J -->
<li><strong>main.js</strong><br />เป็นส่วนที่ทำหน้าที่นำหน้า website ของเราที่พัฒนาโดย vue ไปทำการ mount ลงใน file index.html โดยดูหน้า vue ที่ต้องทำการ mount จากการทำงานร่วมกับ router โดยมีหน้า default ที่ต้องทำการ mount ก่อนเป็นอันดับแรกคือหน้า App.vue</li>
<li><strong>App.vue</strong><br />เป็นส่วนที่ใช้กำหนดรูปแบบการแสดงผลของหน้าแรก web site (Home page) เมื่อผู้ใช้ทำการเข้าสู่เว็บไซต์มาในตอนต้น</li>
<li><strong>Router</strong><br />เป็นส่วนที่ทำหน้าที่ในการเปลี่ยนหน้า web site ของเราไปตาม path ที่เราเรียกใช้ผ่านหน้า web browser โดยการเปลี่ยนหน้าก็จะทำงานร่วมกับการ mount ของ view</li>
<li><strong>login.vue</strong><br />เป็นส่วนที่ใช้ในการกำหนดรูปแบบการแสดงผลของหน้า login ใน website ของเรา</li>
<li><strong>register.vue</strong><br />เป็นส่วนที่ใช้ในการกำหนดรูปแบบการแสดงผลของหน้า Register ใน website ของเรา</li> <!-- Boss -->
<li><strong>home.vue</strong><br />เป็นส่วนที่ใช้ในการกำหนดรูปแบบการแสดงผลหน้าแรกของ website โดยเราจะต้องทำการ login ก่อน ตัว website จึงจะแสดงผลหน้านี้ได้</li>
<li><strong>profile.vue</strong><br />เป็นส่วนที่ใช้ในการกำหนดรูปแบบการแสดงผลของหน้าข้อมูล profile ใน website ของเรา โดยสามารถเข้าถึงได้จากหน้าหน้าแรกของ website หลังจากที่เราทำการ login แล้ว</li>
<li><strong>findbeds.vue</strong><br />เป็นส่วนที่ใช้ในการกำหนดรูปแบบการแสดงผลหน้าค้นหาเตียงบน website โดยเราจะต้องทำการ login ก่อน ตัว website จึงจะแสดงผลหน้านี้ได้</li>
<li><strong>beds.vue</strong><br />เป็นส่วนที่ใช้แสดงข้อมูลผลลัพธ์หลังจากการจองเตียงเสร็จสิ้นบน website โดยจะแสดง วันที่เข้าพัก สถานที่ วันจอง และสถานะ โดยเราจะต้องทำการ login ก่อน ตัว website จึงจะแสดงผลหน้านี้ได้</li>
<li><strong>addbedsforsell.vue</strong><br />เป็นส่วนของหน้าฟอร์มที่ใช้ในการกรอกข้อมูลบน website เพื่อทำการลงเตียงให้ผู้ใช้อื่นมาจอง โดยเราจะต้องทำการ login ก่อน ตัว website จึงจะแสดงผลหน้านี้ได้</li> <!-- Pruk -->
</ul> 
<p><strong>Backend</strong></p>
<ul>
<li><strong>index.js(server)</strong><br />เป็นส่วนที่ทำหน้าที่เป็นเหมือน server กลางในการเชื่อมต่อระหว่าง frontend และ backend<strong><br /></strong></li>
<li><strong>controller</strong><br />เป็นส่วนที่กำหนด fnction การทำงานภายในทั้งหมดของระบบ</li> <!-- Bonus -->
<li><strong>routes</strong><br />เป็นส่วนที่กำหนด path ที่ใช้ในการเข้าถึงที่แตกต่างกันไปตาม function</li>
<li><strong>auth.js</strong><br />เป็นส่วนที่ทำหน้าที่รวบรวม path ในการใช้งาน function ต่างๆที่เกี่ยวข้องกับการ login และ register ของ user ในส่วนของ backend</li>
<li><strong>users.js</strong><br />เป็นส่วนที่ทำหน้าที่รวบรวม path ในการใช้งาน function ต่างๆที่เกี่ยวข้องกับข้อมูลของ user ในส่วนของ backend</li>
<li><strong>beds.js</strong><br />เป็นส่วนที่ทำหน้าที่รวบรวม path ในการใช้งาน function ต่างๆที่เกี่ยวข้องกับข้อมูลเตียงในส่วนของ backend</li>
<li><strong>bedsdealing.js</strong><br />เป็นส่วนที่ทำหน้าที่รวบรวม path ในการใช้งาน function ต่างๆที่เกี่ยวข้องกับข้อมูลคำสั่งจองเตียงในส่วนของ backend</li> <!-- Prathan -->
<li><strong>model User</strong><br />เป็นส่วนของ schema ที่ใช้ระบุถึงลักษณะ และชนิดของข้อมูลในการจัดเก็บ และเรียกใช้ของส่วน user</li>
<li><strong>model Bed</strong><br />เป็นส่วนของ schema ที่ใช้ระบุถึงลักษณะ และชนิดของข้อมูลในการจัดเก็บ และเรียกใช้ของส่วน bed</li>
<li><strong>model Beddealing</strong><br />เป็นส่วนของ schema ที่ใช้ระบุถึงลักษณะ และชนิดของข้อมูลในการจัดเก็บ และเรียกใช้ของส่วน beddealing</li>
</ul>
<!-- Pon -->
