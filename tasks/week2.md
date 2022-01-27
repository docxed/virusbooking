# Features หลัก
- [1. ค้นหาและจองเตียง]()
- [2. ผู้ให้บริการเตียงเพิ่ม/ลดจำนวนเตียงที่ให้บริการได้]()
- [3. อัปเดตผู้ติดเชื้อรายวัน]()


<p align="center">
<a href="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/trello.png?raw=true"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/trello.png?raw=true" /></a>
</p>

>Trello

# 1. ค้นหาและจองเตียง
## User Flow
<p align="center">
<a href="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%84%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87/userflow.png?raw=true"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%84%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87/userflow.png?raw=true" /></a>
</p>
<br />
จากรูป User Flow ข้างต้น สามารถแบ่งขั้นตอนของผู้ใช้ในการค้นหาและจองเตียงออกได้เป็นทั้งหมด 5 ขั้นตอน ดังนี้

1. ผู้ใช้งานที่ต้องการเตียงเข้าใช้งานหน้าค้นหาเตียง
2. ผู้ใช้งานทำการกรอกข้อมูลรูปแบบของเตียงที่ต้องการหาในแทบค้นหา และทำการค้นหา
3. ผู้ใช้งานเลือกเตียงที่ต้องการจากผลการค้นหา
4. ผู้ใช้งานทำการเลือกเตียงที่ตรงกับความต้องการจากผลการค้นหา
5. ผู้ใช้งานทำการกรอกข้อมูลส่วนตัว และกดยืนยันเพื่อจองเตียงที่ต้องการ

<br />

## UI Flow
<p align="center">
<a href="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%84%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87/uiflow.png?raw=true"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%84%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87/uiflow.png?raw=true" /></a>
</p>
<br />
จากรูป User Flow ข้างต้น จะสามารถแบ่งหน้า UI หลักๆที่มีส่วนเกี่ยวข้องโดยตรงกับการค้นหาและการจองเตียง ได้ออกมาทั้งหมด 3 หน้าต่าง ดังนี้

1. หน้า main หรือก็คือหน้าหลัก เป็นหน้าแรกที่ผู้ใช้จะพบหลัง Login เข้ามา โดยผู้ใช้จะเข้าสู่หน้าค้นหาเตียงผ่านทางหน้านี้
2. หน้าแสดงผลลัพธ์ค้นหาเตียง เป็นหน้าที่ผู้ใช้งานจะเข้าถึงผ่านทางหน้า main ใช้ในการค้นหาเตียง สามารถกรอกข้อมูลเพื่อค้นหาเตียงที่ผู้ใช้ต้องการ รวมถึงแสดงผลลัพธ์การค้นหาเตียงของผู้ใช้ในหน้านี้ด้วย
3. หน้ายืนยันการจองเตียง เป็นหน้าที่ผู้ใช้งานจะเข้าถึงผ่านการเลือกเตียงในหน้าแสดงผลลัพธ์ค้นหาเตียง โดยผู้ใช้จะทำการกรอกข้อมูลส่วนตัว และยืนยันการจองเตียงที่เลือกผ่านทางหน้านี้

<br />

## Acceptance Test
acceptance Test ในส่วนนี้นั้น จะอธิบายผ่านทางตัวอย่างด้านล่างนี้ ซึ่งจะมีตัวอย่าง acceptance Test ของการทำงาน 2 ส่วน ได้แก่ การกรอกข้อมูลรูปแบบเตียงเพื่อทำการค้นหาเตียงในหน้าค้นหา และการกรอกข้อมูลส่วนตัวเพื่อทำการยืนยันการจองเตียง โดยจะมีตัวอย่างอยู่ทั้งหมด 5 case ดังนี้

<p align="center">
<a href="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%84%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87/acctest.png?raw=true"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%84%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87/acctest.png?raw=true" /></a>
</p>
<br />

case1: การค้นหาเตียงนั้นจะมีการแสดงผลก็ต่อเมื่อผู้ใช้ใส่ input ที่เป็นชื่อจังหวัดอย่างถูกต้องและมีในฐานข้อมูล 

case2: เมื่อผู้ใช้ใส่ input ที่เป็นชื่อจังหวัดไม่ถูกต้อง หรือไม่มีในฐานข้อมูลระบบจะไม่มีการแสดง  ผลลัพธ์ออกมาให้

case3: การจองเตียงที่สำเร็จนั้นจะเกิดจากการกดยืนยันแล้วระบบเช็คได้ว่ามีเตียงเหลือให้

case4: การจองที่ไม่สำเร็จสามารถเกิดจากการกดยืนยันแล้วระบบเช็คได้ว่าเตียงเต็มแล้ว 

case5: การจองเตียงที่ไม่สำเร็จสามารถเกิดจากการกดยืนยันแล้วระบบเช็คได้ว่าผู้ใช้นั้นได้ใช้สิทธ์จองไปแล้ว
<br />

## Techical
ในด้าน technical ของ feature การค้นหาและจองเตียง สามารถอธิบายและแบ่งออกเป็นหัวข้อย่อยๆได้ ดังนี้

**Frontend**

ในส่วน Frontend เราจะมีการกำหนดขั้นตอนการพัฒนาอยู่ทั้งหมด 5 ขั้นตอน พร้อมกำหนดรายละเอียดคร่าวๆ ลงในแต่ละขั้นตอน ดังนี้

1. ออกแบบ UI เป็นการออกแบบหน้าตา UI ของการทำงานต่างๆ ที่เกี่ยวข้องกับ Feature การค้นหาและจองเตียง โดยแบ่งออกได้เป็น 3 หน้าจอหลักๆ ได้แก่

    - หน้าค้นหาเตียง
    - หน้าจองเตียง
    - หน้ายืนยันการจองเตียง

2. ออกแบบ Business Logic เป็นการออกแบบตัว Frontend ให้ตอบสนองกับตัว Business ที่ต้องการจาก feature ตัวนี้
3. ทำการเขียนโค้ดเพื่อพัฒนาหน้า UI ต่างๆขึ้นมา ตามที่ได้ออกแบบไว้ใน 2 ขั้นตอนที่กล่าวไปข้างต้น โดยในส่วนนี้จะใช้ Vue.JS ในการพัฒนาเป็นหลัก โดยที่อาจจะมีการใช้เครื่องมืออื่นๆในการพัฒนาร่วมด้วย ยกตัวอย่างเช่น

    - HTML
    - CSS
    - Bootstrap

4. ทำการ Test หรือก็คือ ทำการทดสอบตัว Frontend ที่พัฒนาจนเสร็จสิ้นแล้วในแต่ละส่วน ว่าสามารถทำงานได้สมบูรณ์ตามที่คาดหวังไว้หรือไม่ ไปจนถึงการทดสอบส่วนของ Frontend ที่เกี่ยวข้องทั้งหมด เพื่อทำการยืนยันความสมบูรณ์ในขั้นสุดท้าย
5. ทำการ Deploy เป็นขั้นตอนสุดท้ายในขั้นตอนการพัฒนาที่ได้กำหนดไว้ โดยเมื่อทำการทดสอบตัว Frontend จนสมบูรณ์แล้ว จะทำการ Deploy Frontend ในส่วนนั้นๆ โดยใช้ HEROKU

**Backend**

1. SearchAllBed API : API สำหรับการค้นหาเตียงทั้งหมด

Design API

- End point: /searchBed/all
- Request: GET
- Response: JSON

Develop

- ExpressJs เว็บเฟรมเวิร์คจาก NPM ที่ใช้สำหรับพัฒนาเว็บแอพพลิเคชันหรือเว็บไซต์บน Node.js

Test

- ตรวจสอบการเข้าถึงแล้วการเชื่อมต่อกับฐานข้อมูล
- ตรวจสอบข้อมูลที่ส่งมาว่าได้รับข้อมูลทั้งหมด

Deploy

- ใช้ Heroku ในการdeploy

Database
มีการใช้ Firebase โดยใช้ 1 Collection
  - Bed Collection
 
2. bookingBed API : API สำหรับการจองเตียงที่ผู้ใช้เลือก

Design API

- End point: /bookinBed
- Request: POST (เป็นข้อมูลการจองของผู้ใช้)
- Response: JSON

Develop

- ExpressJs เว็บเฟรมเวิร์คจาก NPM ที่ใช้สำหรับพัฒนาเว็บแอพพลิเคชันหรือเว็บไซต์บน Node.js

Test

- ตรวจสอบการเข้าถึงแล้วการเชื่อมต่อกับฐานข้อมูล
- ตรวจสอบข้อมูลที่ส่งมาว่าได้รับข้อมูลทั้งหมด
- ตรวจสอบการส่งข้อมูลจากผู้ใช้ไปสู่ backend

Deploy

- ใช้ Heroku ในการdeploy

Database

มีการใช้ Firebase โดยใช้ 1 Collection
- Bed Collection
 
<p align="center">
<a href="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%84%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87/tech.jpg?raw=true"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%84%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87/tech.jpg?raw=true" width="50%" height="50%" /></a>
</p>
<br /><br />

## Flowchart
<p align="center">
<a href="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%84%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87/flowchart.png?raw=true"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%84%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%B2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87/flowchart.png?raw=true" width="20%" height="20%" /></a>
</p>
<br />
คำอธิบายของ Flowchart นี้:
Flowchart นี้แสดงถึงการทำงานของฟีเจอร์ของ "การค้นหาเตียงและการจองเตียง" มีขั้นตอนต่าง ๆ คือ

1. ผู้ใช้ป้อนคำค้นหาเข้ามา
2. ผู้ใช้นำตัวกรองการค้นหามาใช้ (ค่าตั้งต้นคือไม่มีตัวกรองการค้นหา)
3. ระบบนำไปเทียบกับข้อมูลในฐานข้อมูล<br />
&nbsp;&nbsp;&nbsp;&nbsp;3.1 ถ้าระบบไม่พบข้อมูลที่ตรงกับที่ผู้ใช้ป้อนคำค้นหาเข้ามาในฐานข้อมูล ระบบจะพาผู้ใช้กลับไปยังหน้าค้นหา<br />
&nbsp;&nbsp;&nbsp;&nbsp;3.2 ถ้าระบบพบข้อมูลที่ตรงกับที่ผู้ใช้ป้อนคำค้นหาเข้ามาในฐานข้อมูล ระบบจะแสดงรายชื่อของเตียงที่มีเพื่อให้ผู้ใช้ทำการเลือก และสามารถไปสู่ขั้นถัดไปของกระบวนการได้
4. ในขั้นตอนของการจองเตียง ผู้ใช้จะมีทางเลือกอยู่ 2 ทาง คือ จองหรือไม่จองเตียง โดยที่<br />
&nbsp;&nbsp;&nbsp;&nbsp;4.1 ผู้ใช้ตัดสินใจที่จะไม่จองเตียง - ถ้าผู้ใช้ตัดสินใจไม่จองเตียง ระบบจะพาผู้ใช้ย้อนกลับไปยังขั้นตอนของการเลือกเตียงเพื่อดูตัวเลือกอื่น ๆ
&nbsp;&nbsp;&nbsp;&nbsp;4.2 ผู้ใช้ตัดสินใจที่จะจองเตียง ระบบจะทำการตรวจสอบว่าผู้ใช้คนนั้นเคยทำการจองเตียงมาก่อนหรือ
5. ในขั้นตอนนี้ระบบจะทำการตรวจสอบความซ้ำซ้อนของการจองเตียงสำหรับผู้ใช้แต่ละคนที่กำลังใช้งานระบบอยู่ ณ ขณะนั้น ๆ ผลลัพธ์ที่เป็นไปได้จากขั้นตอนนี้จะมีอยู่ 2 แบบ คือ<br />
&nbsp;&nbsp;&nbsp;&nbsp;5.1 ตรวจพบการซ้ำของการจอง - จบกระบวนการใน Flowchart นี้โดยไม่มีการจอง<br />
&nbsp;&nbsp;&nbsp;&nbsp;5.2 ตรวจไม่พบการซ้ำของการจอง - เพิ่มข้อมูลของการจองเตียงเข้าไปในฐานข้อมูล พร้อมทั้งแสดงผลลัพธ์ของการจองให้ผู้ใช้ได้รับทราบ


<br />

# 2. ผู้ให้บริการเตียงเพิ่ม/ลดจำนวนเตียงที่ให้บริการได้
## User Flow
<p align="center">
<a href="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1-%E0%B8%A5%E0%B8%94%E0%B8%88%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%84%E0%B8%94%E0%B9%89/userflow.png?raw=true"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1-%E0%B8%A5%E0%B8%94%E0%B8%88%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%84%E0%B8%94%E0%B9%89/userflow.png?raw=true" /></a>
</p>
<br />
User Flow ของฟีเจอร์ผู้ให้บริการเตียงเพิ่ม/ลดจำนวนเตียงที่ให้บริการได้ประกอบด้วย 5 ขั้นตอนดังนี้

1. ผู้ให้บริการเตียงเลือกเข้าหน้าการจัดการเตียงจากหน้า Main
2. เลือกสถานที่ ที่ให้บริการเตียงที่ต้องการจัดการเพิ่ม/ลด จากนั้นจะเข้ามาที่หน้าของการแก้ไขข้อมูลเตียง
3. ทำการแก้ไขข้อมูล และเพิ่ม/ลดจำนวนเตียงตามที่ต้องการ
4. กดอัปเดตข้อมูล จากนั้นจะเข้ามาที่หน้า ยืนยันการอัปเดตข้อมูลเตียง
5. ตรวจสอบ และ กดยืนยันการอัปเดตข้อมูล

<br />

## UI Flow
<p align="center">
<a href="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1-%E0%B8%A5%E0%B8%94%E0%B8%88%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%84%E0%B8%94%E0%B9%89/uiflow.jpg?raw=true"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1-%E0%B8%A5%E0%B8%94%E0%B8%88%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%84%E0%B8%94%E0%B9%89/uiflow.jpg?raw=true" /></a>
</p>
<br />
ในส่วนของ UI Flow จะประกอบไปด้วย 4 หน้าหลัก ๆ

1. Main  เป็นหน้าแรกที่ user จะพบหลังจากที่ Login เข้าสู่ระบบ ภายในหน้านี้จะเป็นหน้าหลักของแอพพลิเคชั่นที่ให้ผู้ใช้สามารถเลือกใช้งานฟังก์ชั่นหลักๆได้จากหน้า Main นี้
ซึ่ง user สามารถเข้าสู่หน้าการจัดการเตียงผ่านทางหน้า Main นี้
2. หน้าการจัดการเตียง ในหน้านี้เป็นหน้าที่รวบรวม list ของสถานที่ที่ให้บริการเตียงที่ผู้ให้บริการเตียงสามารถทำการจัดการได้
3. หน้าแก้ไขข้อมูลเตียง หน้านี้จะปรากฏเมื่อผู้ให้บริการเตียงทำการเลือกสถานที่ที่ให้บริการเตียงที่ต้องการแก้ไข ซึ่งในหน้านี้จะแสดงข้อมูลต่างๆของสถานที่ที่ให้บริการเตียง เช่น ที่อยู่ และจำนวนเตียง เป็นต้น เมื่อผู้ให้บริการเตียงทำการจัดการแก้ไขเพิ่ม/ลดจำนวนเตียงเสร็จแล้ว ต้องทำการกดปุ่มอัปเดตข้อมูลเพื่อไปยังหน้ายืนยันการอัปเดต
4. หน้ายืนยันข้อมูลเตียง ผู้ให้บริการเตียงจะเข้าสู่หน้านี้เมื่อทำการกดปุ่มอัปเดตข้อมูลเตียง ในส่วนของหน้านี้จะแสดงข้อมูลเตียงที่ได้ทำการอัปเดต ให้ตรวจสอบและกดยืนยันการอัปเดต

<br />

## Acceptance Test
<p align="center">
<a href="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1-%E0%B8%A5%E0%B8%94%E0%B8%88%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%84%E0%B8%94%E0%B9%89/acctest.png?raw=true"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1-%E0%B8%A5%E0%B8%94%E0%B8%88%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%84%E0%B8%94%E0%B9%89/acctest.png?raw=true" /></a>
</p>
<br />
case1: การอัปเดตข้อมูลนั้นจะสามารถสำเร็จได้ก็ต่อเมื่อผู้ใช้มีการกรอกข้อมูลครบทุกช่องอย่างถูกต้องระบบจึงจะทำการอัปเดตข้อมูลให้ และจะแจ้งเตือนว่าอัปเดตสำเร็จ<br />
case2:  การอัปเดตข้อมูลที่ไม่สำเร็จนั้นสามารถเกิดจากผู้ใช้กรอกข้อมูลไม่ครบ ระบบจะไม่ทำการอัปเดตให้ และจะแจ้งเตือนให้ใส่ข้อมูลให้ครบ<br />
case3: การอัปเดตข้อมูลที่ไม่สำเร็จนั้นสามารถเกิดจากผู้ใช้กรอกข้อมูลที่ผิดได้ อย่างเช่น กรอกข้อมูลจำนวนเตียงที่ติดลบ และจะแจ้งเตือนให้ใส่ข้อมูลให้ถูกต้อง
<br />

## Technical

ในด้าน technical ของ feature การเพิ่ม/ลดจำนวนเตียงที่ให้บริการของผู้ให้บริการ สามารถอธิบายและแบ่งออกเป็นหัวข้อย่อย ๆได้ ดังนี้

**Frontend**
ในส่วน Frontend เราจะมีการกำหนดขั้นตอนการพัฒนาอยู่ทั้งหมด 5 ขั้นตอน พร้อมกำหนดรายละเอียดคร่าวๆ ลงในแต่ละขั้นตอน ดังนี้

1. ออกแบบ UI เป็นการออกแบบหน้าตา UI ของการทำงานต่างๆ ที่เกี่ยวข้องกับ Feature การเพิ่ม/ลดจำนวนเตียงที่ให้บริการของผู้ให้บริการ โดยแบ่งออกได้เป็น 3 หน้าจอหลัก ๆ ได้แก่

&nbsp;&nbsp;&nbsp;&nbsp;1.1 หน้าจัดการเตียง<br />
&nbsp;&nbsp;&nbsp;&nbsp;1.2 หน้าเพิ่ม/ลดจำนวนเตียง<br />
&nbsp;&nbsp;&nbsp;&nbsp;1.3 หน้าแสดงผลยืนยันการเพิ่ม/ลดจำนวนเตียง

2. ออกแบบ Business Logic เป็นการออกแบบตัว Frontend ให้ตอบสนองกับตัว Business ที่ต้องการจาก feature ตัวนี้
3. ทำการเขียนโค้ดเพื่อพัฒนาหน้า UI ต่าง ๆ ขึ้นมา ตามที่ได้ออกแบบไว้ใน 2 ขั้นตอนที่กล่าวไปข้างต้น โดยในส่วนนี้จะใช้ Vue.JS ในการพัฒนาเป็นหลัก โดยที่อาจจะมีการใช้เครื่องมืออื่นๆในการพัฒนาร่วมด้วย ยกตัวอย่างเช่น

- HTML
- CSS
- Bootstrap

4. ทำการ Test หรือก็คือ ทำการทดสอบตัว Frontend ที่พัฒนาจนเสร็จสิ้นแล้วในแต่ละส่วน ว่าสามารถทำงานได้สมบูรณ์ตามที่คาดหวังไว้หรือไม่ ไปจนถึงการทดสอบส่วนของ Frontend ที่เกี่ยวข้องทั้งหมด เพื่อทำการยืนยันความสมบูรณ์ในขั้นสุดท้าย
5. ทำการ Deploy เป็นขั้นตอนสุดท้ายในขั้นตอนการพัฒนาที่ได้กำหนดไว้ โดยเมื่อทำการทดสอบตัว Frontend จนสมบูรณ์ในแต่ละส่วนแล้ว จะทำการ Deploy Frontend ในส่วนนั้น ๆ โดยใช้ HEROKU

**Backend**

3. updateBedById API : API สำหรับการเพิ่มหรือลดจำนวนเตียงของผู้ให้บริการเตียงเป็นคนทำ

Design API

- End point: /updateBedById
  - Parameters
    - Id : ของเตียงที่บริการ
    - UserID : ของผู้ให้บริการเตียง
- Request: UPDATE 
- Response: JSON

Develop

- ExpressJs เว็บเฟรมเวิร์คจาก NPM ที่ใช้สำหรับพัฒนาเว็บแอพพลิเคชันหรือเว็บไซต์บน Node.js
Test
- ตรวจสอบการเข้าถึงแล้วการเชื่อมต่อกับฐานข้อมูล
- ตรวจสอบข้อมูลที่ส่งมาว่าได้รับข้อมูลทั้งหมด

Deploy

- ใช้ Heroku ในการdeploy

Database

มีการใช้ Firebase โดยใช้ 2 Collection

- Bed Collection
- User Collection

4. getBedAllByUserId API : API สำหรับการดึงข้อมูลว่าผู้ให้บริการเตียงเป็นเป็นเจ้าของเตียงอะไรบ้าง
Design API

- End point: /getBedByUserId
  - Parameters
    - UserID : ของผู้ให้บริการเตียง  
- Request: GET 
- Response: JSON

Develop

- ExpressJs เว็บเฟรมเวิร์คจาก NPM ที่ใช้สำหรับพัฒนาเว็บแอพพลิเคชันหรือเว็บไซต์บน Node.js

Test

- ตรวจสอบการเข้าถึงแล้วการเชื่อมต่อกับฐานข้อมูล
- ตรวจสอบข้อมูลที่ส่งมาว่าได้รับข้อมูลทั้งหมด

Deploy

- ใช้ Heroku ในการdeploy

Database

มีการใช้ Firebase โดยใช้ 1 Collection

- User Collection

<p align="center">
<a href="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1-%E0%B8%A5%E0%B8%94%E0%B8%88%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%84%E0%B8%94%E0%B9%89/tech.jpg?raw=true"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1-%E0%B8%A5%E0%B8%94%E0%B8%88%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%84%E0%B8%94%E0%B9%89/tech.jpg?raw=true" /></a>
</p>
<br /><br />

## Flowchart
<p align="center">
<a href="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1-%E0%B8%A5%E0%B8%94%E0%B8%88%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%84%E0%B8%94%E0%B9%89/flowchart.png?raw=true"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B4%E0%B9%88%E0%B8%A1-%E0%B8%A5%E0%B8%94%E0%B8%88%E0%B8%B3%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%84%E0%B8%94%E0%B9%89/flowchart.png?raw=true" width="20%" height="20%" /></a>
</p>
<br />

คำอธิบายของ Flowchart นี้: Flowchart นี้แสดงถึงการทำงานของ feature "การเพิ่ม/ลดเตียงที่ให้บริการของผู้ให้บริการ" มีขั้นตอนต่าง ๆ คือ
1. ผู้ใช้เลือกเมนูของการเพิ่มเตียง
2. ผู้ใช้ทำการแก้ไขข้อมูล - ในขั้นตอนนี้ระบบจะมีการตรวจสอบว่าในกล่องข้อความผู้ใช้ได้เว้นว่างบางกล่องข้อความหรือทุกกล่องข้อความหรือไม่ โดยที่
    - ถ้าหากผู้ใช้ได้เว้นว่างบางกล่องข้อความหรือทุกกล่องข้อความ ระบบจะไม่พาไปยังขั้นถัดไปใน Flowchart นี้
    - ถ้าหากทุกกล่องข้อความมีข้อความทั้งหมด ระบบจะดำเนินการในขั้นตอนถัดไป
3. แสดงข้อมูลเก่าที่ผู้ใช้ต้องการที่จะแก้ไขให้ผู้ใช้ดู โดยที่ผู้ใช้สามารถที่จะทำแก้ไขข้อมูลเก่าให้เป็นปัจจุบันได้
4. ผู้ใช้ทำการตรวจสอบความถูกต้องของข้อมูลที่ผ่านการทำการแก้ไขมาแล้ว ผู้ใช้จะมี 2 ทางเลือกในขั้นตอนนี้คือ
    - ผู้ใช้คิดว่าข้อมูลยังไม่ถูกต้อง - ถ้าผู้ใช้คิดว่าข้อมูลยังไม่ถูกต้อง ผู้ใช้สามารถเลือกที่จะกดปุ่มยกเลิกเพื่อกลับไปทำการแก้ไขข้อมูลให้ถูกต้องได้
    - ผู้ใช้คิดว่าข้อมูลถูกต้องแล้ว - ถ้าผู้ใช้คิดว่าข้อมูลถูกต้องแล้ว ผู้ใช้สามารถที่จะกดปุ่มยืนยันเพื่อยืนยันความถูกต้องของข้อมูลที่แก้ไขแล้วได้ ซึ่งจะนำไปสู่ขั้นตอนถัดไปในกระบวนการ
5. ระบบจะอัพเดตข้อมูลในฐานข้อมูลให้เป็นข้อมูลใหม่ และจะจบกระบวนการใน Flowchart นี้


<br />

# 3. อัปเดตผู้ติดเชื้อรายวัน
## User Flow
<p align="center">
<a href="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%AD%E0%B8%B1%E0%B8%9B%E0%B9%80%E0%B8%94%E0%B8%95%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B1%E0%B8%99/userflow.png?raw=true"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%AD%E0%B8%B1%E0%B8%9B%E0%B9%80%E0%B8%94%E0%B8%95%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B1%E0%B8%99/userflow.png?raw=true" /></a>
</p>
<br />

User Flow ของฟีเจอร์อัปเดตผู้ติดเชื้อรายวัน แบ่งออกได้เป็น 2 ขั้นตอนดังนี้

1. User ต้องการทราบจำนวนของผู้ติดเชื้อรายวัน
2. User ทำการ login เข้าสู่ระบบ เพื่อดูจำนวนของผู้ติดเชื้อรายวันผ่านหน้า Main ของแอพพลิเคชั่น


<br />

## UI Flow
<p align="center">
<a href="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%AD%E0%B8%B1%E0%B8%9B%E0%B9%80%E0%B8%94%E0%B8%95%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B1%E0%B8%99/uiflow.png?raw=true"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%AD%E0%B8%B1%E0%B8%9B%E0%B9%80%E0%B8%94%E0%B8%95%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B1%E0%B8%99/uiflow.png?raw=true" /></a>
</p>
<br />

ในส่วน UI Flow มีเพียง 1 หน้าหลัก ๆ คือ หน้า Main เป็นหน้าแรกที่ผู้ใช้จะพบหลังจากได้ทำการล็อกอินเข้าสู่ระบบ เป็นหน้าที่รวบรวมฟีเจอร์หลัก ๆ ของแอปพลิเคชั่นไว้ในหน้านี้ นอกจากนี้ยังเป็นหน้าที่แสดงผลจำนวนผู้ติดเชื้อรายวัน

<br />

## Acceptance Test
<p align="center">
<a href="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%AD%E0%B8%B1%E0%B8%9B%E0%B9%80%E0%B8%94%E0%B8%95%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B1%E0%B8%99/acctest.png?raw=true"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%AD%E0%B8%B1%E0%B8%9B%E0%B9%80%E0%B8%94%E0%B8%95%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B1%E0%B8%99/acctest.png?raw=true" /></a>
</p>
<br />

case1: การที่ระบบจะสามารถแสดงผลข้อมูลเกี่ยวกับการติดเชื้อโควิดได้นั้นจะต้อง ทำการ Get ข้อมูลจากเว็บปลายทางสำเร็จ<br />
case2: การที่ระบบไม่สามาถแสดงผลข้อมูลเกี่ยวกับการติดเชื้อโควิดได้นั้นสามารถเกิดจากระบบไม่สามารถ Get ข้อมูล จากเว็บปลายทางได้

<br />

## Technical
ในด้าน technical ของ feature การดูอัปเดตผู้ติดเชื้อรายวัน สามารถอธิบายและแบ่งออกเป็นหัวข้อย่อย ๆ ได้ ดังนี้

**Frontend**

ในส่วน Frontend เราจะมีการกำหนดขั้นตอนการพัฒนาอยู่ทั้งหมด 5 ขั้นตอน พร้อมกำหนดรายละเอียดคร่าว ๆ ลงในแต่ละขั้นตอน ดังนี้

1. ออกแบบ UI เป็นการออกแบบหน้าตา UI ของการทำงานต่าง ๆ ที่เกี่ยวข้องกับ Feature การดูอัปเดตผู้ติดเชื้อรายวัน โดยใน Feature นี้ จะมีหน้าจอหลักอยู่เพียงหน้าจอเดียว ได้แก่ หน้าแสดงผลการอัปเดตผู้ติดเชื้อรายวัน
2. ออกแบบ Business Logic เป็นการออกแบบตัว Frontend ให้ตอบสนองกับตัว Business ที่ต้องการจาก feature ตัวนี้
3. ทำการเขียนโค้ดเพื่อพัฒนาหน้า UI ต่าง ๆ ขึ้นมา ตามที่ได้ออกแบบไว้ใน 2 ขั้นตอนที่กล่าวไปข้างต้น โดยในส่วนนี้จะใช้ Vue.JS ในการพัฒนาเป็นหลัก โดยที่อาจจะมีการใช้เครื่องมืออื่น ๆ ในการพัฒนาร่วมด้วย ยกตัวอย่างเช่น

- HTML
- CSS
- Bootstrap

4. ทำการ Test หรือก็คือ ทำการทดสอบตัว Frontend ที่พัฒนาจนเสร็จสิ้นแล้วในแต่ละส่วน ว่าสามารถทำงานได้สมบูรณ์ตามที่คาดหวังไว้หรือไม่ ไปจนถึงการทดสอบส่วนของ Frontend ที่เกี่ยวข้องทั้งหมด เพื่อทำการยืนยันความสมบูรณ์ในขั้นสุดท้าย
5. ทำการ Deploy เป็นขั้นตอนสุดท้ายในขั้นตอนการพัฒนาที่ได้กำหนดไว้ โดยเมื่อทำการทดสอบตัว Frontend จนสมบูรณ์แล้ว จะทำการ Deploy Frontend ในส่วนนั้น ๆ โดยใช้ HEROKU

**Backend**

- API ของทางDepartment of Disease Control of Thailand (กรมควบคุมโรค) โดยเราจะใช้ API : https://covid19.ddc.moph.go.th/api/Cases/today-cases-all
- API ของทาง DIsease.sh โดยเราจะใช้ API : https://corona.lmao.ninja/v2/countries/TH


<p align="center">
<a href="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%AD%E0%B8%B1%E0%B8%9B%E0%B9%80%E0%B8%94%E0%B8%95%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B1%E0%B8%99/tech.jpg?raw=true"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task2/%E0%B8%AD%E0%B8%B1%E0%B8%9B%E0%B9%80%E0%B8%94%E0%B8%95%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%8A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B1%E0%B8%99/tech.jpg?raw=true" width="50%" height="50%" /></a>
</p>
<br /><br />
