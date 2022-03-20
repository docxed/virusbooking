<h2><strong>Design Pipeline</strong></h2>
<p><strong>Frontend</strong></p>
<p><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task6/1.png?raw=true" alt="" /></strong></p>
<p><strong>Backend</strong></p>
<p><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task6/2.png?raw=true" alt="" /></strong></p>
<h2><strong>Pipe Line Process</strong></h2>
<p><strong>Frontend</strong></p>
<ol>
<li><strong>Pull code from branch main</strong><br />Step 1 ทำการ pull หรือ clone code จาก github branch main ลงมายังเครื่อง local computer</li>
<li><strong>Download Dependencies</strong><br />Step 2 ทำการ Download Dependencies ต่าง ๆที่จำเป็นด้วยคำสั่ง yarn</li>
<li><strong>Scan code with Lint</strong><br />Step 3 ทำการ scan &amp; auto fixed code ด้วยคำสั่ง yarn lint เพื่อทำการตรวจสอบ code เบื้องต้นก่อนเข้าสู่กระบวนการ testing</li>
<li><strong>Run unit test</strong><br />Step 4 เริ่มต้นทำการทดสอบแบบ unit test ด้วยคำสั่ง yarn unit</li>
<li><strong>Run unit test coverage</strong><br />Step 5 ทำการตรวจสอบความครอบคลุมในการทดสอบของตัว unit test ด้วยคำสั่ง yarn unit:coverage</li>
<li><strong>Component and E2E test</strong><br />Step 6 เริ่มต้นทำการทดสอบแบบ component test และ E2E test ด้วยคำสั่ง yarn e2e</li>
<li><strong>Build or create software artifact</strong><br />Step 7 ทำการแปลงตัว source code ให้เป็น software หรือ Build ด้วยคำสั่ง yarn build</li>
</ol>
<p><strong>Backend</strong></p>
<ol>
<li><strong>Pull code from branch main</strong><br />Step 1 ทำการ pull หรือ clone code จาก github branch main ลงมายังเครื่อง local computer</li>
<li><strong>Download Dependencies</strong><br />Step 2 ทำการ Download Dependencies ต่าง ๆที่จำเป็นด้วยคำสั่ง yarn install</li>
<li><strong>Build or create software artifact</strong><br />Step 3 ทำการแปลงตัว source code ให้เป็น software หรือ Build ด้วยคำสั่ง yarn build</li>
<li><strong>Run unit test</strong><br />Step 4 เริ่มต้นทำการทดสอบแบบ unit test ด้วยคำสั่ง yarn test:unit</li>
<li><strong>Run component test</strong><br />Step 5 เริ่มต้นทำการทดสอบแบบ component test ด้วยคำสั่ง yarn test:component</li>
<li><strong>Run End-to-End test</strong><br />Step 6 เริ่มต้นทำการทดสอบแบบ End-to-End test ด้วยคำสั่ง yarn test:e2e</li>
</ol>
