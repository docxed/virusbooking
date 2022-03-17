# ข้อกำหนดและรูปแบบในการตั้ง commit message <!-- 1. dew -->
มีรูปแบบดังนี้
```
รูปแบบ(ขอบเขต): หัวข้อ

<เนื้อหา>

<ส่วนท้าย>
```
>แยกส่วน หัวข้อ กับ เนื้อหา และ เนื้อหา กับ ส่วนท้าย ด้วยการเว้นบรรทัด

## 1. รูปแบบ ของการ commit
เป็นส่วนแรกสุดที่ต้องระบุในข้อความอธิบายก่อนการ commit เพื่อให้ผู้อื่นที่ไม่ใช่ผู้ที่ commit สามารถรู้ได้ว่า commit นี้มีจุดประสงค์เพื่อทำอะไร โดยรูปแบบของการ commit จะมีอยู่หลัก ๆ ดังต่อไปนี้
```
feat:      ใช้ในกรณีที่มีการ commit เพื่อเพื่มฟีเจอร์
fix:       ใช้ในกรณีที่มีการ commit เพื่อแก้ไขข้อผิดพลาดต่าง ๆ
refactor:  ใช้ในกรณีที่มีการ commit เพื่อปรับปรุงโค้ด เพื่อเพิ่มคุณภาพงาน <!-- 2. boss -->
docs:      ใช้ในกรณีที่การ commit นั้น มีจุดประสงค์เพื่อแก้ไขเอกสารต่าง ๆ ของตัว project
style:     ใช้ในกรณีที่การ commit นั้น มีการแก้ไขในส่วนอื่น ๆ ที่ไม่ส่งผลกระทบต่อ code ของ project (white-space, formatting, missing semi-colons etc.)
test:      ใช้ในกรณีที่การ commit นั้น มีการกระทำที่เกี่ยวข้องกับการ testing (ทดสอบ)
chore:     ใช้ในกรณีที่การ commit นั้น มีจุดประสงค์เพื่อการ maintenance code (บำรุงรักษาโค้ด)
```
## 2. ขอบเขต (ถ้ามี)
อยู่ในวงเล็บและต้องเป็นคำนามที่อธิบายส่วนของโค้ดที่ได้รับการเปลี่ยนแปลง
ตัวอย่าง: <!-- 3. pon -->
```
feat(claims)
fix(orders)
```
## 3. หัวข้อ
จะเป็นข้อความสั้น ๆ ว่าการ commit นั้นมีการเปลี่ยนแปลงหรือส่งผลในส่วนไหน ซึ่งจะมีเงื่อนไขดังนี้:
- เป็นภาษาไทย
- ควรที่จะมีจำนวนตัวอักษร ไม่เกิน 50 ตัวอักษร <!-- 4. pruk -->
- ไม่มีเครื่องหมายวรรคตอน หรือ whitespace
## 4. เนื้อหา (ถ้ามี)
เป็นส่วนที่ใช้อธิบายว่ามีการเปลี่ยนอะไรบ้าง แล้วทำไมถึงมีการเปลี่ยนแปลง โดยมีเงื่อนไขดังนี้:
- เป็นภาษาไทย
- แยกส่วน หัวข้อ กับ เนื้อหา ด้วยการเว้นบรรทัด 
- จำกัดตัวอักษรในแต่ละบรรทัดไม่เกิน 72 ตัว
- อย่าถือว่าผู้อ่านนั้นเข้าใจปัญหาเดิมอยู่แล้ว ให้ทำการเพิ่มรายละเอียดอธิบายด้วย
- อย่าคิดว่าตัวโค้ดนั้นสามารถอธิบายตัวมันเองได้ <!-- 5. papad -->

## 5. ส่วนท้าย (ถ้ามี)
- เป็นภาษาไทย
- ใช้เพื่ออ้างอิงปัญหาที่ได้รับผลกระทบจากการเปลี่ยนแปลงโค้ดหรือแสดงความคิดเห็นกับนักพัฒนาหรือผู้ทดสอบรายอื่น

<br />
<p align="center">
  <img src="https://github.com/docxed/virusbooking/blob/main/tasks/Task3/%E0%B8%95%E0%B8%A2.png?raw=true" /><br />
  ตัวอย่าง commit message
</p>