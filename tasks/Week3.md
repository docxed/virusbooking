<br>

> [Week 2 แก้แล้ว คลิกที่นี่](https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/wiki/Week-2-Assignment-:-Flow)
# Branch Process 
<p align="center">
<img src="https://github.com/docxed/virusbooking/blob/main/tasks/Task3/process.png?raw=true">
</p>
กระบวนการ branch process เริ่มจากแต่ละคนในทีม folk base repository ไปเป็น personal repository ของตนเอง จากนั้นก็ clone ลงเครื่องตัวเอง เพื่อลงมือทำพัฒนางานที่ได้รับมอบหมาย เมื่อเสร็จแล้วก็ commit และ push เข้า personal repository ของตนเอง จากนั้นก็ทำการขอ pull request มาที่ base repository

# Development Workflow
<p align="center">
<img src="https://github.com/docxed/virusbooking/blob/main/tasks/Task3/flow.png?raw=true">
</p>
การจัดการ pull request หรือ PR จะเป็นแบบ manual เนื่องจากต้องทำการ Review และ ทดสอบ code โดยเงื่อนไขของการ review คือจะต้องมี Reviewer อย่างน้อย 2 คน มาเป็นผู้รีวิว โดยประเด็นหลัก ๆ ที่จะใช้ในการสนทนาจะมี

- เช็คความเรียบร้อยของงานว่ามีความถูกต้องหรือไม่
- ดูว่า Code มีสิ่งที่ไม่จำเป็นต้อง pull ขึ้นไปหรือไม่
- ตรวจสอบทิศทางการเขียน Code ว่าถูกต้องตามมาตรฐานของทีมหรือไม่

# รูปแบบของ Pull Request

- Add reviews ซึ่งก็คืออยากให้ใครมาดู PR ของตน
- แนบไฟล์ Screenshot ของ Feature นั้น ๆ ลงไป สำหรับ Front End อาจจะแนบรูปส่วนที่เป็น UI หรือ Back End อาจจะแนบรูปในส่วนของ API Spec ซึ่งจะช่วยให้ Reviewers สามารถ โฟกัสได้ทันว่า PR นั้นจะสื่ออะไร
- รอให้มีคนมากด Approve ซึ่งต้องการ 1 Approve เป็นขั้นต่ำ
- สร้าง PR ที่จาก Feature branch ที่เราต้องการ Merge เข้าไปยัง Main branch
- ตั้งชื่อ PR ให้สอดคล้องกับ Project management tool: Trello 

