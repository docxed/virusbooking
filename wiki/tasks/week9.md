<h1><strong>Task 9 : </strong><strong>Working with containerization Docker and Kubernetes</strong></h1>
<h2><strong>update pipeline</strong></h2>
<ul>
<li><strong><span style="font-weight: 400;">frontend : </span><span style="font-weight: 400;"><a href="http://128.199.188.21:8080/job/team-1-frontend/">http://128.199.188.21:8080/job/team-1-frontend/</a></span></strong></li>
<li><strong><span style="font-weight: 400;">backend : <a href="http://128.199.188.21:8080/job/team-1-backend/">http://128.199.188.21:8080/job/team-1-backend/</a></span></strong></li>
</ul>
<h2><strong>deploy ไปยังเครื่อง server ที่กำหนดให้</strong></h2>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Frontend : </span><a href="http://159.65.12.177:6480/"><span style="font-weight: 400;">http://159.65.12.177:6480</span></a></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Backend : </span><a href="http://159.223.45.216:6481/bedsdealing"><span style="font-weight: 400;">http://159.223.45.216:6481/bedsdealing</span></a></li>
</ul>
<h1>สรุป top 10 :: docker security จาก OWASP</h1>
<p>top 10 :: docker security จาก OWASP คือ เป็นคำแนะนำ 10 ข้อ เพื่อเป็นแนวทางในการวางแผนและสร้าง container ด้วย Docker อย่างปลอดภัย โดยมีทั้งหมด ดังนี้</p>
<ul style="list-style-type: square;">
<li><strong>D1 Secure User Mapping :</strong> Application ใน container ไม่ควร run ด้วย root</li>
<li><strong>D2 Patch Management Strategy :</strong> ต้องมีการจัดการในเรื่องของการทำ patching ทั้งในแบบปกติและแบบฉุกเฉินเอาไว้ เพื่อป้องกันการเกิด security bug ในเครื่อง host, base image และเครื่องมือในการจัดการ container</li>
<li><strong>D3 Network Separation and Firewalling : </strong><span style="font-weight: 400;">ต้องให้ความสำคัญกับการออกแบบระบบ network&nbsp; ทั้ง network ของเครื่องมือในการจัดการ และ network ของ container ต่างๆ ว่า container ใดจะเข้าถึงได้จากภายในหรือภายนอกเท่านั้น</span></li>
<li><span style="font-weight: 400;"><strong>D4 Secure Defaults and Hardening : </strong>สิ่งที่ถูกติดตั้งและใช้งานอยู่ ไม่ว่าจะเป็นที่ host, container หรือเครื่องมือในการจัดการ ต้องเป็นสิ่งที่เราใช้งานจริงๆเท่านั้น</span></li>
<li><span style="font-weight: 400;"><strong>D5 Maintain Security Contexts : </strong>ทำการแยกการทำงานในส่วนของ frontend และ backend ออกจากกัน เพื่อเพิ่มความปลอดภัย และลดข้อผิดพลาดในการทำงานที่อาจเกิดขึ้น</span></li>
<li><span style="font-weight: 400;"><strong>D6 Protect Secrets :</strong> ต้องมีการจัดการในส่วนของการป้องกันข้อมูลที่เป็นความลับ เช่น การจัดการ password, การจัดการ private key เป็นต้น</span></li>
<li><span style="font-weight: 400;"><strong>D7 Resource Protection</strong> : ต้องมีการกำหนด limit ของการใช้งาน resource ให้กับแต่ละ container เพื่อให้แน่ใจว่าการทำงานของ container หนึ่ง จะไม่กระทบไปยังการทำงานของ container อื่นๆ</span></li>
<li><span style="font-weight: 400;"><strong>D8 Container Image Integrity and Origin : </strong>image ต้องได้รับการปกป้องไม่ให้ถูกแก้ไข ตั้งแต่ต้นจนถึงการ deploy</span></li>
<li><span style="font-weight: 400;"><strong>D9 Follow Immutable Paradigm : </strong>เพื่อช่วยเพิ่มความปลอดภัย ควรกำหนดให้ container มีการทำงานแบบ Read-only เพราะ container ส่วนใหญ่ไม่ต้องการเขียนข้อมูลหรือ mount ไปยัง file system อยู่แล้ว</span></li>
<li style="font-weight: 400;" aria-level="1"><strong>D10 Logging : </strong><span style="font-weight: 400;">ควรจะมีการบันทึก log ของการทำงานต่างๆ จากทุก ๆ container, host และเครื่องมือในการ deploy และควรเก็บ log ไว้ในรูปแบบของ remote หรือพวก centralize log</span></li>
</ul>
<h1><strong>ยกตัวอย่างการใช้งานจาก docker image/container ของ Group1</strong></h1>
<p>ในการใช้งาน docker image/container ของ Group1 จะมีรูปแบบของการทำงานที่ตรงกับข้อแนะนำใน top 10 :: docker security จาก OWASP อยู่ทั้งหมด ดังนี้</p>
<ol>
<li>มีการใช้งานข้อแนะนำ D4 Secure Defaults and Hardening เพราะสิ่งที่ถูกติดตั้งและใช้งานใน container เป็นสิ่งที่ได้ใช้งานจริงๆ<strong><br /></strong></li>
<li>มีการใช้งานข้อแนะนำ D5 Maintain Security Contexts เพราะมีการแยกการทำงานในส่วนของ frontend และ backend ออกจากกัน</li>
</ol>
<h1>สรุปเรื่อง 12-factor</h1>
<p><strong>12-factor</strong> หรือ <strong>THE TWELVE FACTORS</strong> เป็นข้อแนะนำ 12 ข้อ ที่ถูกเขียนขึ้นโดยบริษัท Heroku ซึ่งถูกเขียนขึ้นมาเป็นเวลานานแล้ว เพื่อใช้เป็นแนวทางในการพัฒนา application software เพื่อให้บริการผ่านอินเทอร์เน็ต และทำงานร่วมกับ cloud อย่างไรให้มีประสิทธิภาพ โดย 12-factor จำนวน 12 ข้อ สามารถแบ่งออกเป็นกลุ่มๆ ได้ทั้งหมด 3 กลุ่ม ดังนี้</p>
<ul style="list-style-type: square;">
<li><strong>build</strong> เป็นกลุ่มของแนวคิด 12-factor ที่เกี่ยวข้องกับการจัดการ Source Code จนได้เป็น Software เพื่อให้พร้อมใช้งานได้บน Environment ต่างๆ โดยมีอยู่ทั้งหมด 5 ข้อ ดังนี</li>
</ul>
<ol>
<li><strong>Codebase</strong> คือ การที่โค้ดมีแหล่งที่อยู่ที่เดียวกันใน control version เช่น git และ sub version เป็นต้น โดย 1 โปรเจคควรอยู่เพียงแค่ที่เดียวถึงแม้ว่าจะมีการทำ microservice หลาย service ก็ควรอยู่ที่ repository เดียวกัน เพื่อลดปัญหาการสื่อสารกันภายใน</li>
<li><strong>Dependencies</strong> เป็นการกำหนดตัว Dependency รวมไปถึง version ของ software ที่ถูกใช้งาน ให้ถูกต้อง ซึ่งทุกครั้งที่มีการแก้ไข หรือเปลี่ยนแปลงตัว source code และมีการ build ใหม่ จะต้องทำการเรียกใช้หรือติดตั้ง Dependency ใหม่ ทุกครั้งเสมอ</li>
<li><strong>Config</strong> เป็นการแยกตัว configuration ออกจากตัว Application และDatabase ให้มาอยู่ที่ System environment, configuration server หรือ remote configuration เพื่อที่สามารถทำการแก้ไขได้ โดยไม่กระทบกับตัว code ใน Application</li>
<li><strong>Backing services</strong> คือการที่ service ต่างๆ ทีถูกเรียกใช้ใน Applicationโดยเรียกใช้ผ่าน Network เช่น Database, Messaging/Queueing Systems และCaching Systems โดย service เหล่านี้ควรจะต้องถูกแยกออกจากตัว Application ซึ่งจะส่งผลให้สามารถนำ service เข้าใช้งาน หรือถอดจากการใช้งาน เพื่อทำการแก้ไขหรือเปลี่ยนใหม่ได้โดยง่าย และไม่ต้องแก้ไขในส่วนของ source code ใหม่</li>
<li><strong>Build, release, run</strong> คือการแยก process ในการ Build, ReleaseและRun ออกจากกัน โดยจะเริ่มในส่วนของการ Build คือการเอา source code ทั้งหมด มาแปลงเป็นตัว software ที่พร้อมใช้งาน จากนั้นมาต่อในส่วนของ Release คือการนำ software ที่ได้จากการ Build มารวมกับ config ต่าง ๆ เพื่อเตรียมนำไปใช้งานจริง และส่วนสุดท้ายคือการ Run จะเป็นการนำตัว software ไปใช้ใน Environment ต่าง ๆ ซึ่งการแยกขั้นตอนตามนี้จะส่งผลให้มีการแก้ไขที่งาย และสามารถรับรู้ได้ว่าเกิดข้อผิดพลาดตรงไหนได้ง่ายขึ้น</li>
</ol>
<p>&nbsp;</p>
<ul style="list-style-type: square;">
<li><strong>scaleable</strong> เป็นกลุ่มของแนวคิด 12-factor ที่เกี่ยวข้องกับการรองรับขยายความสามารถของทรัพยากร หรือ Environment เพื่อให้รองรับปริมาณของผู้ใช้งานตามจริง โดยมีอยู่ทั้งหมด 4 ข้อ ดังนี้</li>
</ul>
<ol>
<li><strong>Processes </strong><span style="font-weight: 400;">คือการกำหนดกระบวนการทำงาน</span> <span style="font-weight: 400;">ใน </span><span style="font-weight: 400;">12-factor ได้มีการแนะนำในส่วนของ processes ให้ทำงานแบบ stateless process เพื่อให้มีการเก็บ session ไว้ใช้ร่วมกันในรูปแบบของ server กลาง ให้สามารถใช้ร่วมกันได้จากทุกๆ cloud server เพื่อให้ยังสามารถใช้งานได้ปกติ แม้ว่าจะมีการเปลี่ยนแปลงของ cloud server ที่ใช้งาน</span></li>
<li><span style="font-weight: 400;"><strong>Port binding </strong>คือ ข้อแนะนำในการกำาหนด port เพื่อเรียกใช้งาน ใน 12-factor ได้มีข้อแนะนำ ว่าให้มีการระบุชัดเจนในแต่ละ service ว่าแต่ละตัวใช้งาน port อะไร ทำให้เวลาเรียกใช้งาน เราไม่จำเป็นต้องสนใจว่าอยู่ที่ IP address ไหน รู้แค่ว่าถ้าอยู่วง Network เดียวกัน แต่ต่อด้วย Port นี้ จะต้องได้ Service นี้เสมอ</span></li>
<li><span style="font-weight: 400;"><strong>Concurrency </strong>คือ การขยายทรัพยากร (scale out) โดยไม่ได้มีผลกระทบกับการทำงานทั้งระบบ หรือในส่วนอื่นๆของระบบที่ไม่มีความจำเป็นต้องขยาย ซึ่งคำแนะนำในข้อนี้ ถือเป็นส่วนหนึ่งจากคำแนะนำในส่วนของ processes นั่นคือเมื่อเรากำหนดกระบวนการทำงานให้อยู่ในรูปแบบของ stateless process แล้ว เราจึงสามารถขยายทรัพยากรเฉพาะในส่วนที่เกี่ยวข้องได้ โดยไม่ได้กระทบกับส่วนอื่นๆ</span></li>
<li><span style="font-weight: 400;"><strong>Disposability</strong> คือ การที่ application ของเราควรจะเริ่มต้นการทำงานได้เร็ว (fast startup) โดยมีผลลัพธ์ในตอนจบของการทำงานที่สมบูรณ์ (graceful shutdown) เพื่อป้องกันข้อผิดพลาดที่อาจจะเกิดขึ้นจากการเปิดหรือปิดของ application ที่ไม่สมบูรณ์</span></li>
</ol>
<p>&nbsp;</p>
<ul style="list-style-type: square;">
<li><span style="font-weight: 400;"><strong>maintainable</strong> </span><span style="font-weight: 400;">เป็นกลุ่มของแนวคิด 12-factor ที่เกี่ยวข้องกับการดูและรักษา software และ environment ต่างๆ โดยมีอยู่ทั้งหมด 3 ข้อ ดังนี้</span></li>
</ul>
<ol>
<li><span style="font-weight: 400;"><strong>Dev/prod parity</strong> เป็นการทำ Environment ให้มีความแตกต่างกันน้อยที่สุด เช่น หากตัว production มี load balance ที่ตัว dev ก็ควรจะมี load balance ด้วยเช่นกัน รวมถึงการทำ Deployment จาก Environment หนึ่ง ไปยังอีก Environment หนึ่ง จะต้องทำได้อย่างรวดเร็วเช่นกัน</span></li>
<li><span style="font-weight: 400;"><strong>Logs</strong> คือการเก็บข้อมูลของเหตุการณ์ต่างๆทั้งหมดที่เกิดขึ้นใน process เพื่อนำมาเก็บเอาไว้ โดยใน 12-factor ได้มีการแนะนำให้ทุกๆเหตุการณ์ มีการปล่อย log ออกมาในรูปแบบของ stdout (standard output) และค่อยทำการนำซอฟแวร์ที่ใช้ในการเก็บ log มา capture ตัว log ที่ปล่อยออกมาในรูปแบบของ stdout อีกทีหนึ่ง</span></li>
<li><span style="font-weight: 400;"><strong>Admin processes</strong> แยกชุดคำสั่งที่ใช้ทำงานในระดับ Server Admin อย่างเช่น Database Migrations ,Shell และCommandบางอย่าง ออกจากตัว Application แต่ต้องใช้คำสั่งข้างต้นให้อยู่ในชุดโค้ดเดียวกับ Application ซึ่งเมื่อใช้เสร็จแล้วจะต้องทำลายทิ้งให้หมด รวมถึงปิดการเข้าถึงภายในระบบของ server เพื่อป้องกันการกระทำที่ไม่ผ่านชุดคำสั่งที่ถูกกำหนดไว้ให้ ซึ่งสามารถลดปัญหาในการเปลี่ยนแปลงที่ไม่เหมือนกันในแต่ละ environment ได้<br /></span></li>
</ol>
<h1><span style="font-weight: 400;"><strong>สรุปเรื่อง 12-factor with docker</strong><br /></span></h1>
<p><span style="font-weight: 400;">ในส่วนของ 12-factor with docker จะเป็นการประยุกต์ใช้ข้อแนะนำ 12-factor เข้ากับการใช้งานของตัว docker โดยจะยังมีข้อแนะนำอยู่ทั้งหมด 12 ข้อ แต่จะมีรายละเอียดโดยคร่าวๆที่เพิ่มเติมเข้ามา ดังนี้</span></p>
<ol>
<li><span style="font-weight: 400;"><strong>codebase</strong> ใน 12-factor with docker ได้มีการแนะนำให้มีการใช้ git versioning system เพื่อควบคุมตัว source code โดยในคำแนะนำนี้ การ update ใดๆ ก็ตามที่เราได้ทำไป จะยังไม่มีการ link เข้ากับตัว docker ของเรา แต่เราจะได้รู้ในข้อแนะนำถัดๆไป</span></li>
<li><span style="font-weight: 400;"><strong>dependencies</strong> ใน 12-factor with docker ได้แนะนำให้มีการระบุ dependencies ที่ต้องทำการติดตั้ง รวมเอาไว้ใน file package.json ที่เดียว และทำการติดตั้งตัว dependencies เพิ่มเติม ที่มีชื่อว่า sails-mongo โดยใช้คำสั่ง npm install sails-mongo --save</span></li>
<li><span style="font-weight: 400;"><strong>configuration</strong> ใน 12-factor with docker ได้แนะนำให้ใน file config/connections.js มีการระบุตัว mongo connection และให้ใช้ MONGO_URL environment variable เพื่อใช้ในการส่งผ่านตัว mongo connection string จากนั้นใน file config/model.js เราจะทำการตรวจสอบให้แน่ใจว่า mongo connection ที่เราได้ระบุไปก่อนหน้านี้ มีการใช้งานจริง</span></li>
<li><span style="font-weight: 400;"><strong>external services </strong>ใน 12-factor with docker นั้น จะมี external service เพียงตัวเดียวที่ถูกใช้งาน นั่นก็คือ MongoDB database โดยที่ถ้าเกิดข้อผิดพลาดขึ้นกับตัว MongoDB instance ของเรา เราก็สามารถเปลี่ยนไปใช้ instance ใหม่ได้ง่าย โดยการเปลี่ยนตัว MONGO_URL environment variable และทำการ restart application</span></li>
<li><span style="font-weight: 400;"><strong>build / release / run </strong>ใน 12-factor with docker นั้น จะใช้ Docker ในกระบวนการ development ทั้งหมด เริ่มจากการเพิ่ม Dockerfile เพื่อช่วยระบุขั้นตอนใน build phase หลังจากทำการ build เสร็จ จะได้ตัว image ออกมา ซึ่งจะนำมาใช้ในการ release ออกไปเป็น docker-compose file และทำการ run แบบ manual ผ่านตัว compose CLI</span></li>
<li><span style="font-weight: 400;"><strong>processes </strong>ใน 12-factor with docker นั้น ได้ระบุว่าใน config/sessions.js จะต้องมีการปรับแต่งตัว adapter เพื่อใช้ในการเก็บ session ไว้ใน distributed Redis kv store</span></li>
<li><span style="font-weight: 400;"><strong>port binding </strong>ใน 12-factor with docker นั้น ได้มีการระบุในส่วนของ port ไว้ให้แล้ว โดยจะถูกระบุไว้ใน docker-compose file</span></li>
<li><span style="font-weight: 400;"><strong>concurrency</strong> ใน 12-factor with docker นั้น ระบุว่าในกระบวนการ process จะมีอยู่เพียงแบบเดียวคือ http server ซึ่งสามารถทำงานแบบ multiplexing โดยใช้ Node.js http server ทำให้ง่ายในการทำ scale out<br /></span></li>
<li><span style="font-weight: 400;"><strong>disposability </strong>ใน 12-factor with docker นั้น ได้แนะนำให้มีการใช้งาน queueing system เช่น Apache, Kafka เป็นต้น เพื่อช่วยเพิ่มประสิทธิภาพในการ restart application</span></li>
<li><span style="font-weight: 400;"><strong>dev / prod parity </strong>ใน 12-factor with docker นั้น ระบุว่าตัว docker-compose file นั้น สามารถ run ได้ทั้งบน local machine หรือบน Docker Host ทำให้ความแตกต่างในการ run บน environment ที่ต่างกันมีน้อย</span></li>
<li><span style="font-weight: 400;"><strong>logs </strong>ใน 12-factor with docker นั้น ได้แนะนำว่าถ้าต้องการเก็บ log ในแบบ centralize สามารถเพิ่ม log service ลงใน docker-compose file ได้เลย</span></li>
<li><span style="font-weight: 400;"><strong>admin processes </strong>ใน 12-factor with docker นั้น ได้แนะนำว่าควรมีการระบุตัว admin service ลงใน docker-compose file และ service ตัวนั้น ควรจะถูก run ในเวลาเดียวกันกับ application เพอื่ใช้ในการ run admin tasks</span></li>
</ol>
<p>&nbsp;</p>
<h1><span style="font-weight: 400;"><strong>ยกตัวอย่างการใช้งาน 12-factor with docker </strong><strong>ของ Group1</strong></span></h1>
<p><span style="font-weight: 400;">ในการใช้งาน docker image/container ของ Group1 จะมีรูปแบบของการทำงานที่ตรงกับข้อแนะนำใน 12-factor with docker อยู่ทั้งหมด ดังนี้</span></p>
<ol>
<li><span style="font-weight: 400;">มีการใช้งานข้อแนะนำในส่วนของ dependencies นั่นก็คือการระบุ dependencies ที่ต้องทำการติดตั้ง รวมเอาไว้ใน file package.json ที่เดียว ตามที่ได้ระบุไว้ใน 12-factor with docker</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">มีการใช้ข้อแนะนำในส่วนของ </span><span style="font-weight: 400;">build / release / run นั่นก็คือการแยกการทำงานของทั้ง 3 ส่วนออกจากกัน และมีการใช้ Dockerfile ในการกำหนดขั้นตอนภายใน build phase</span></li>
</ol>
<p>&nbsp;</p>
<h2><span style="font-weight: 400;"><strong>feature ที่ปรับปรุง และเพิ่มเข้ามา</strong></span></h2>
<p><span style="font-weight: 400;"><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/1.PNG?raw=true" alt="" /></strong></span></p>
<p><span style="font-weight: 400;">ทำการออกแบบเว็บแอปพลิเคชันใหม่ Bestbeds 2.0 ซึ่งมีฟีเจอร์ ได้แก่</span></p>
<p>&nbsp;</p>
<h1><span style="font-weight: 400;"><strong>1.ปรับปรุงใหม่ ฟีเจอร์: แสดงสถิติข้อมูล Covid-19</strong></span></h1>
<h4><strong>User Flow</strong></h4>
<p><span style="font-weight: 400;"><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/2.PNG?raw=true" alt="" /></strong></span></p>
<p><span style="font-weight: 400;">User Flow ของ feature แสดงสถิติข้อมูล Covid - 19 ประกอบด้วย 2 ขั้นตอน ดังนี้</span></p>
<ol>
<li><span style="font-weight: 400;">user ทำการเข้าสู่หน้า Home ของ website<br /></span></li>
<li><span style="font-weight: 400;">user ทำการกดเลือกข้อมูลสถิติของ Covid - 19 ที่ต้องการให้แสดง</span></li>
<li><span style="font-weight: 400;">website แสดงสถิติของ Covis - 19 ตามที่ user เลือก</span></li>
</ol>
<p>&nbsp;</p>
<p><span style="font-weight: 400;"><strong>UI Flow</strong></span></p>
<p><span style="font-weight: 400;"><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/3.png?raw=true" alt="" /></strong></span></p>
<p><span style="font-weight: 400;">UI Flow ของ feature แสดงสถิติข้อมูล Covid - 19 ประกอบด้วย 1 หน้าหลัก ได้แก่ หน้า Home ซึ่งเป็นหน้าแรกของ website ที่จะแสดงสถิติต่างๆของ Covid - 19 รวมอยู่ในหน้านี้นั่นเอง</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;"><strong>Acceptance Test</strong></span></p>
<p><span style="font-weight: 400;"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/4.png?raw=true" alt="" width="1195" height="94" /></span></p>
<p><span style="font-weight: 400;"><strong>case1:</strong> การที่ระบบจะสามารถแสดงผลข้อมูลเกี่ยวกับการติดเชื้อโควิดได้นั้นจะต้อง ทำการ Get ข้อมูลจากเว็บปลายทางสำเร็จ<br /><strong>case2:</strong> การที่ระบบไม่สามาถแสดงผลข้อมูลเกี่ยวกับการติดเชื้อโควิดได้นั้นสามารถเกิดจากระบบไม่สามารถ Get ข้อมูล จากเว็บปลายทางได้</span></p>
<h4><strong>Technical</strong></h4>
<p><span style="font-weight: 400;">ในด้าน technical ของ feature แสดงสถิติข้อมูล Covid-19 สามารถอธิบายและแบ่งออกเป็นหัวข้อย่อยๆได้ ดังนี้</span></p>
<p><strong>Frontend</strong></p>
<p><strong><span style="font-weight: 400;">ในส่วน Frontend เราจะมีการกำหนดขั้นตอนการพัฒนาอยู่ทั้งหมด 5 ขั้นตอน พร้อมกำหนดรายละเอียดคร่าวๆ ลงในแต่ละขั้นตอน ดังนี้</span></strong></p>
<ol>
<li><strong><span style="font-weight: 400;">ออกแบบ UI เป็นการออกแบบหน้าตา UI ของการทำงานต่างๆ ที่เกี่ยวข้องกับ Feature การค้นหาและจองเตียง โดยแบ่งออกได้เป็น 1 หน้าจอหลัก 3 หน้าจอย่อยได้แก่ ได้แก่</span></strong>
<ol>
<li><strong><span style="font-weight: 400;">หน้า Home (หน้าหลัก)<br /></span></strong></li>
<li><strong><span style="font-weight: 400;"> หน้าแสดงกราฟผู้ติดเชื้อประจำวัน (หน้าย่อยในหน้า Home)</span></strong></li>
<li><strong><span style="font-weight: 400;">หน้าแสดงรวมทุกกราฟสถิติ Covid - 19 (หน้าย่อยในหน้า Home)<br /></span></strong></li>
<li><strong><span style="font-weight: 400;">หน้าแสดงสถิติรวมผู้ตืดเชื้อในแต่ละจังหวัด (หน้าย่อยในหน้า Home)<br /></span></strong></li>
</ol>
</li>
<li><strong><span style="font-weight: 400;">ออกแบบ Business Logic เป็นการออกแบบตัว Frontend ให้ตอบสนองกับตัว Business ที่ต้องการจาก feature ตัวนี้</span></strong></li>
<li><strong><span style="font-weight: 400;">ทำการเขียนโค้ดเพื่อพัฒนาหน้า UI ต่างๆขึ้นมา ตามที่ได้ออกแบบไว้ใน 2 ขั้นตอนที่กล่าวไปข้างต้น โดยในส่วนนี้จะใช้ Vue.JS ในการพัฒนาเป็นหลัก โดยที่อาจจะมีการใช้เครื่องมืออื่นๆในการพัฒนาร่วมด้วย ยกตัวอย่างเช่น</span></strong>
<ul style="list-style-type: circle;">
<li><strong><span style="font-weight: 400;">HTML</span></strong></li>
<li><strong><span style="font-weight: 400;">CSS</span></strong></li>
<li><strong><span style="font-weight: 400;">Bootstrap</span></strong></li>
</ul>
</li>
<li><strong><span style="font-weight: 400;">ทำการ Test หรือก็คือ ทำการทดสอบตัว Frontend ที่พัฒนาจนเสร็จสิ้นแล้วในแต่ละส่วน ว่าสามารถทำงานได้สมบูรณ์ตามที่คาดหวังไว้หรือไม่ ไปจนถึงการทดสอบส่วนของ Frontend ที่เกี่ยวข้องทั้งหมด เพื่อทำการยืนยันความสมบูรณ์ในขั้นสุดท้าย<br /></span></strong></li>
<li><strong><span style="font-weight: 400;">ทำการ Deploy เป็นขั้นตอนสุดท้ายในขั้นตอนการพัฒนาที่ได้กำหนดไว้ โดยเมื่อทำการทดสอบตัว Frontend จนสมบูรณ์แล้ว จะทำการ Deploy Frontend ในส่วนนั้นๆ โดยใช้ Docker</span></strong></li>
</ol>
<p><strong>Backend</strong></p>
<p><span style="font-weight: 400;">API ของทาง Department of Disease Control of Thailand (กรมควบคุมโรค) โดยเราจะใช้ API ที่แตกต่างกันตามสถิติ ดังนี้&nbsp;</span></p>
<ul style="list-style-type: square;">
<li><span style="font-weight: 400;"><span style="font-weight: 400;">API รายงานสถานการณ์ COVID-19 ระลอก 3 (ตั้งแต่ 01/04/2021 &ndash;ปัจจุบัน)&nbsp; &nbsp; <a href="https://covid19.ddc.moph.go.th/api/Cases/today-cases-all">https://covid19.ddc.moph.go.th/api/Cases/today-cases-all</a></span></span></li>
<li>API รายงานสถานการณ์ COVID-19 ประจำวัน แยกตามรายจังหวัด&nbsp; <a href="https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces"><span style="font-weight: 400;">https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces</span></a></li>
</ul>
<h3><strong>List of Task</strong></h3>
<p><strong>Frontend</strong></p>
<table style="border-collapse: collapse; width: 100%; height: 348px;" border="1">
<tbody>
<tr style="height: 46px;">
<td style="width: 56.1864%; height: 46px;">
<p style="text-align: center;"><strong>Task</strong></p>
</td>
<td style="width: 18.4862%; height: 46px;">
<p style="text-align: center;"><strong>เวลาที่กำหนด</strong></p>
</td>
<td style="width: 25.1819%; height: 46px;">
<p style="text-align: center;"><strong>ผู้รับผิดชอบ</strong></p>
</td>
</tr>
<tr style="height: 64px;">
<td style="width: 56.1864%; height: 64px;">
<p><span style="font-weight: 400;">1.ออกแบบหน้าตา UI ในส่วนของการแสดงสถิติข้อมูล Covid - 19</span></p>
</td>
<td style="width: 18.4862%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 25.1819%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">นายอคิราภ์ สีแสนยง</span></p>
</td>
</tr>
<tr style="height: 46px;">
<td style="width: 56.1864%; height: 46px;">
<p><span style="font-weight: 400;">2.ทำการพัฒนาหน้า Home โดยใช้ Vue.JS ในการพัฒนา</span></p>
</td>
<td style="width: 18.4862%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">5 ชั่วโมง</span></p>
</td>
<td style="width: 25.1819%; text-align: center; height: 46px;">
<p><span style="font-weight: 400;">นายอคิราภ์ สีแสนยง</span></p>
</td>
</tr>
<tr style="height: 64px;">
<td style="width: 56.1864%; height: 64px;">
<p><span style="font-weight: 400;">3.ทำการพัฒนาส่วนแสดงกราฟผู้ติดเชื้อประจำวัน โดยใช้ Vue.JS ในการพัฒนา</span></p>
</td>
<td style="width: 18.4862%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 25.1819%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">นายวิชยุตม์ ทวิชัยยุทธ</span></p>
</td>
</tr>
<tr style="height: 64px;">
<td style="width: 56.1864%; height: 64px;">
<p><span style="font-weight: 400;">4.ทำการพัฒนาส่วนแสดงรวมทุกกราฟสถิติของ Covid - 19 โดยใช้ Vue.JS ในการพัฒนา</span></p>
</td>
<td style="width: 18.4862%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 25.1819%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">นายวิชยุตม์ ทวิชัยยุทธ</span></p>
</td>
</tr>
<tr style="height: 64px;">
<td style="width: 56.1864%; height: 64px;">
<p><span style="font-weight: 400;">5.ทำการพัฒนาส่วนแสดงสถิติรวมผู้ติดเชื้อในแต่ละจังหวัด โดยใช้ Vue.JS ในการพัฒนา</span></p>
</td>
<td style="width: 18.4862%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 25.1819%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">นายพิชญะ สิงห์มีศรี</span></p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p><strong>เงื่อนไขในการผ่าน Acceptance Test</strong></p>
<p><strong>Frontend</strong></p>
<p><strong>Task 1 : </strong>ออกแบบหน้าตา UI ในส่วนของการแสดงสถิติข้อมูล Covid - 19</p>
<ul>
<li><span style="font-weight: 400;">ต้องมีหน้า UI ของ 1 หน้าหลัก ได้แก่ หน้า Home และ 3 ส่วนย่อย ได้แก่ ส่วนแสดงกราฟผู้ติดเชื้อประจำวัน, ส่วนแสดงรวมทุกกราฟสถิติของ Covid - 19 และส่วนแสดงสถิติรวมผู้ติดเชื้อในแต่ละจังหวัด</span></li>
<li><span style="font-weight: 400;">ในหน้า Home จะต้องมีในส่วนของปุ่มที่ใช้ในการกดเลือกดูสถิติของ Covid - 19 ซึ่งจะมี 3 โหมดในการดู เท่ากับจำนวนส่วนย่อยที่เราใช้ในการแสดงสถิติของ Covid - 19</span></li>
<li><span style="font-weight: 400;">ในส่วนแสดงรวมกราฟสถิติของ Covid - 19 จะต้องมีการแสดงกราฟสถิติทั้งหมด 3 สถิติ ได้แก่่ กราฟสถิติรวมจำนวนผู้ติดเชื้อ, กราฟสถิติรวมจำนวนผู้ป่วยที่ได้รับการรักษาแล้ว และกราฟสถิติรวมจำนวนผู้เสียชีวิตจาก Covid - 19</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">ในส่วนแสดงสถิติรวมผู้ติดเชื้อในแต่ละจังหวัด จะต้องมีช่องค้นหาสำหรับพิมพ์ชื่อจังหวัด เพื่อใช้หาจังหวัดที่ user ต้องการรู้สถิติโดยเฉพาะ</span></li>
</ul>
<p><span style="font-weight: 400;"><strong>Task 2 :</strong> ทำการพัฒนาหน้า Home โดยใช้ Vue.JS ในการพัฒนา</span></p>
<ul>
<li><span style="font-weight: 400;">หน้า Home ที่ได้ทำการพัฒนาแล้วนั้น ต้องมีรูปแบบ UI ตามที่ได้ออกแบบไว้ครบถ้วน</span></li>
<li><span style="font-weight: 400;">สามารถเลือกดูสถิติต่างๆเกี่ยวกับ Covid - 19 ได้ บนหน้า Home</span></li>
</ul>
<p><span style="font-weight: 400;"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/5.png?raw=true" alt="" /></span></p>
<p><span style="font-weight: 400;"> <br /><strong>Task 3 :</strong> ทำการพัฒนาส่วนแสดงกราฟผู้ติดเชื้อประจำวัน โดยใช้ Vue.JS ในการพัฒนา<br /></span></p>
<ul>
<li><span style="font-weight: 400;">ส่วนแสดงกราฟผู้ติดเชื้อประจำวันที่ได้ทำการพัฒนาแล้วนั้น ต้องมีรูปแบบ UI ตามที่ได้ออกแบบไว้ครบถ้วน</span></li>
<li><span style="font-weight: 400;">กราฟผู้ติดเชื้อ Covid - 19 ประจำวันที่แสดงผลออกมานั้น จะต้องเป็นข้อมูลที่อัปเดตในวันที่ปัจจุบัน (Up - to date)</span></li>
</ul>
<p><span style="font-weight: 400;"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/6.PNG?raw=true" alt="" /></span></p>
<p><span style="font-weight: 400;"><strong>Task 4 :</strong> ทำการพัฒนาส่วนแสดงรวมทุกกราฟสถิติของ Covid - 19 โดยใช้ Vue.JS ในการพัฒนา</span></p>
<ul>
<li><span style="font-weight: 400;">ส่วนแสดงรวมทุกกราฟสถิติของ Covid - 19 ที่ได้ทำการพัฒนาแล้วนั้น ต้องมีรูปแบบ UI ตามที่ได้ออกแบบไว้ครบถ้วน<br /></span></li>
<li><span style="font-weight: 400;">ทุกกราฟสถิติรวมที่แสดงออกมา จะต้องเป็นข้อมูลที่อัปเดตในวันที่ปัจจุบัน (Up - to - date)</span></li>
<li><span style="font-weight: 400;">จะต้องมีการแสดงกราฟสถิติทั้งหมด 3 สถิติ ได้แก่ กราฟสถิติรวมจำนวนผู้ติดเชื้อ, กราฟสถิติรวมจำนวนผู้ป่วยที่ได้รับการรักษาแล้ว และกราฟสถิติรวมจำนวนผู้เสียชีวิตจาก Covid - 19</span></li>
</ul>
<p><span style="font-weight: 400;"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/7.PNG?raw=true" alt="" /></span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;"><strong>Task 5 :</strong> ทำการพัฒนาส่วนแสดงสถิติรวมผู้ติดเชื้อในแต่ละจังหวัด โดยใช้ Vue.JS ในการพัฒนา</span></p>
<ul>
<li><span style="font-weight: 400;">ส่วนหน้าแสดงสถิติรวมผู้ติดเชื้อในแต่ละจังหวัด ที่ได้ทำการพัฒนาแล้วนั้น ต้องมีรูปแบบ UI ตามที่ได้ออกแบบไว้ครบถ้วน</span></li>
<li><span style="font-weight: 400;">ในช่องค้นหาจังหวัด เมื่อ user ทำการกรอกตัวอักษรลงไปในช่องค้นหา จะต้องปรากฏเฉพาะจังหวัดที่มีตัวอักษรดังกล่าวอยู่ภายในชื่อจังหวัดเท่านั้น</span></li>
</ul>
<p><span style="font-weight: 400;"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/8.PNG?raw=true" alt="" /></span></p>
<p><span style="font-weight: 400;"><strong>Test Stratergies</strong></span></p>
<p><span style="font-weight: 400;">ในการทดสอบระบบเพิ่ม - ลดจำนวนเตียงที่ให้บริการ จะมีการแบ่งรูปแบบของการทดสอบออกเป็น 3 ส่วน ดังนี้</span></p>
<p><span style="font-weight: 400;"><strong>Unit test</strong></span></p>
<ul style="list-style-type: square;">
<li><span style="font-weight: 400;"><strong>Frontend<br /></strong></span><span style="font-weight: 400;">ไม่มีการทำงานที่เป็นฟังก์ชันย่อยๆในส่วนนี้ จึงไม่มีในส่วนของ unit testing</span></li>
<li><span style="font-weight: 400;"><strong>Backend</strong><br /></span><span style="font-weight: 400;">การทำงานในส่วนนี้เป็นการใช้ service API จากภายนอก จึงทำให้ไม่มีการ test ในส่วนของ Backend</span></li>
</ul>
<p><span style="font-weight: 400;"><strong>Component test</strong></span></p>
<ul style="list-style-type: square;">
<li><span style="font-weight: 400;"><strong>Frontend</strong></span></li>
</ul>
<p><span style="font-weight: 400;">เป็นการทดสอบว่าในแต่ละหน้าที่เกี่ยวข้องกับ feature แสดงสถิติข้อมูล Covid - 19 นั้น มีส่วนประกอบ หรือ component ที่ควรจะอยู่ในหน้านั้น ๆ ครบถ้วนหรือไม่ โดยจะเน้นเฉพาะส่วนของ Frontend ที่เกี่ยวข้อง การทดสอบในส่วน Component test จะสามารถแบ่งออกได้เป็น 4 ส่วน ดังนี้</span></p>
<ol>
<li><span style="font-weight: 400;">การทำ Component test ในส่วนของหน้าแสดงกราฟผู้ติดเชื้อประจำวัน เป็นการทดสอบเพื่อดูว่าหน้าแสดงกราฟผู้ติดเชื้อประจำวัน มีส่วนประกอบต่างๆครบถ้วนหรือไม่ โดยในหน้าแสดงกราฟผู้ติดเชื้อประจำวัน จะมีส่วนประกอบที่ต้องมีอยู่เพียง 1 ส่วนประกอบ ได้แก่ กราฟแสดงสถิติผู้ติดเชื้อประจำวัน<br /></span></li>
<li><span style="font-weight: 400;">การทำ Component test ในส่วนของหน้าแสดงรวมทุกกราฟสถิติของ Covid - 19 เป็นการทดสอบเพื่อดูว่าหน้าแสดงรวมทุกกราฟสถิติของ Covid - 19 มีส่วนประกอบต่างๆครบถ้วนหรือไม่ โดยในหน้าแสดงรวมทุกกราฟสถิติของ Covid - 19 จะมีส่วนประกอบที่ต้องมีอยู่ทั้งหมด 3 ส่วนประกอบ ได้แก่</span>
<ul>
<li><span style="font-weight: 400;">กราฟสถิติรวมจำนวนผู้ติดเชื้อ</span></li>
<li><span style="font-weight: 400;">กราฟสถิติรวมจำนวนผู้ป่วยที่ได้รับการรักษาแล้ว</span></li>
<li><span style="font-weight: 400;">กราฟสถิติรวมจำนวนผู้เสียชีวิตจาก Covid - 19</span></li>
</ul>
</li>
</ol>
<p>&nbsp;</p>
<ul style="list-style-type: square;">
<li><strong>Backend&nbsp; </strong></li>
</ul>
<p>การทำงานในส่วนนี้เป็นการใช้ service API จากภายนอก จึงทำให้ไม่มีการ test ในส่วนของ Backend</p>
<p><br /><strong>E2E test</strong></p>
<ul style="list-style-type: square;">
<li><strong>Frontend</strong>เป็นการทดสอบตัว feature แสดงสถิติข้อมูล Covid - 19 ซึ่งจะทดสอบที่หน้า main ที่มีหน้าย่อยทั้งหมด 4 หน้าย่อย โดยมีจุดประสงค์เพื่อทดลองว่า feature นี้ สามารถใช้งานได้จริง โดยเริ่มจาก
<ol>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">กดเข้าไปที่หน้าย่อย แท็บ ประจำวัน ในหน้า main จะต้องมีการแสดงข้อมูล ติดเชื้อรายใหม่, ตาย, รักษาหาย และกราฟแสดงผู้ติดเชื้อรายวัน</span></li>
<li>กดเข้าไปที่หน้าย่อย แท็บ ทั้งหมด ในหน้า main จะต้องมีการแสดงข้อมูล ติดเชื้อสะสม, ตายสะสม และรักษาหายสะสม</li>
<li>กดเข้าไปที่หน้าย่อย แท็บ ทั้งหมด ในหน้า main จะต้องมีการแสดงข้อมูล กราฟสถิติผู้ติดเชื้อเพิ่มในแต่ละวัน, กราฟสถิติการรักษาผู้ป่วยหายเพิ่มในแต่ละวัน และกราฟสถิติผู้เสียชีวิตสะสม</li>
<li>กดเข้าไปที่หน้าย่อย แท็บ ทั้งหมด ในหน้า main จะต้องมีการแสดงข้อมูล รายงานสถานการณ์ Covid-19 ประจำวันของแต่ละจังหวัด และใส่ชื่อจังหวัดเพื่อดูข้อมูลในจังหวัดที่ต้องการ</li>
</ol>
</li>
<li><strong>Backend</strong>การทำงานในส่วนนี้เป็นการใช้ service API จากภายนอก จึงทำให้ไม่มีการ test ในส่วนของ Backend</li>
</ul>
<p>&nbsp;</p>
<h4><strong>Test Result</strong></h4>
<p><strong>Unit test</strong></p>
<ul style="list-style-type: square;">
<li><strong>Frontend</strong>ไม่มีการทำงานที่เป็นฟังก์ชันย่อยๆในส่วนนี้ จึงไม่มีในส่วนของ unit testing</li>
<li><strong>Backend</strong><strong><span style="font-weight: 400;">การทำงานในส่วนนี้เป็นการใช้ service API จากภายนอก จึงทำให้ไม่มีการ test ในส่วนของ Backend</span></strong></li>
</ul>
<p><strong>Component test</strong></p>
<ul style="list-style-type: square;">
<li><strong>Frontend</strong><strong><span style="font-weight: 400;">ผลการทดสอบ frontend component test จะแบ่งออกเป็น 3 ส่วน เหมือนที่ได้ระบุไว้ใน test stratergies ดังนี้</span></strong>
<ol>
<li><strong><span style="font-weight: 400;">การทำ Component test ในส่วนของหน้าแสดงกราฟผู้ติดเชื้อประจำวัน<br /></span></strong>
<ul style="list-style-type: square;">
<li><strong><span style="font-weight: 400;">กราฟแสดงสถิติผู้ติดเชื้อประจำวัน<br />ผลการทดสอบ : success (มี element นี้อยู่จริง)<br /></span></strong></li>
</ul>
</li>
<li><strong><span style="font-weight: 400;">การทำ Component test ในส่วนของหน้าแสดงรวมทุกกราฟสถิติของ Covid - 19<br /></span></strong>
<ul style="list-style-type: square;">
<li><strong><span style="font-weight: 400;">กราฟสถิติรวมจำนวนผู้ติดเชื้อ<br />ผลการทดสอบ : success (มี element นี้อยู่จริง)<br /></span></strong></li>
<li><strong><span style="font-weight: 400;">กราฟสถิติรวมจำนวนผู้ป่วยที่ได้รับการรักษาแล้ว<br />ผลการทดสอบ : success (มี element นี้อยู่จริง)<br /></span></strong></li>
<li><strong><span style="font-weight: 400;">กราฟสถิติรวมจำนวนผู้เสียชีวิตจาก Covid - 19<br />ผลการทดสอบ : success (มี element นี้อยู่จริง)<br /></span></strong></li>
</ul>
</li>
</ol>
</li>
<li>Backend<br />การทำงานในส่วนนี้เป็นการใช้ service API จากภายนอก จึงทำให้ไม่มีการ test ในส่วนของ Backend</li>
</ul>
<p><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/9.PNG?raw=true" alt="" /></p>
<p><strong>E2E test</strong></p>
<ul style="list-style-type: square;">
<li><strong>Frontend<br /></strong>ผลการทดสอบของ feature การแสดงข้อมูลสถิ Covid-19 ที่ฝั่ง Frontend มีเพียงผลลัพธ์การทดสอบเดียว คือการที่ผุ็ใช้สามารถเข้าถึงหน้า Home เพื่อดูข้อมูลได้: Success (สามารถเข้าถึงหน้า Home)</li>
<li><strong>Backend</strong><br />การทำงานในส่วนนี้เป็นการใช้ service API จากภายนอก จึงทำให้ไม่มีการ test ในส่วนของ Backend</li>
</ul>
<p>&nbsp;</p>
<h1>2.ปรับปรุงใหม่ ฟีเจอร์: การค้นหาและจองเตียง</h1>
<p><strong>User Flow</strong></p>
<p><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/10.PNG?raw=true" alt="" /></strong></p>
<p><br />User Flow ของ feature การค้นหาและจองเตียง</p>
<ol>
<li>ผู้ใช้เลือกเข้าหน้าค้นหาเตียงผ่าน menu ค้นหาเตียง</li>
<li><span style="font-weight: 400;">ผู้ใช้กรอกข้อมูลของสถานที่ ที่ต้องการค้นหาเตียง</span></li>
<li><span style="font-weight: 400;">ผู้ใช้กดค้นหาเตียง</span></li>
<li><span style="font-weight: 400;">ผู้ใช้ทำการเลือกเตียงที่ต้องการจอง</span></li>
<li><span style="font-weight: 400;">ผู้ใช้ตรวจสอบข้อมูลเตียงที่ต้องการจองและเลือกวันที่จากนั้นกดยืนยันการจองเตียง</span></li>
</ol>
<p><strong>UI Flow</strong></p>
<p><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/11.PNG?raw=true" alt="" /></strong></p>
<p><span style="font-weight: 400;">UI Flow หลักๆที่มีส่วนเกี่ยวข้องกับ feature การค้นหาและจองเตียงได้แก่</span></p>
<ol>
<li><span style="font-weight: 400;">หน้า Home เป็นหน้าแรกของ website</span></li>
<li><span style="font-weight: 400;">หน้าค้นหาเตียง เป็นหน้าที่ user ใช้ในการค้นหาสถานที่ให้บริการเตียง โดยดูจากตำแหน่งของ user หรือตำแหน่งที่ user ต้องการ<br /></span></li>
<li><span style="font-weight: 400;">หน้าจองเตียง เป็นหน้าที่ user ใช้เพื่อยืนยันการจองเตียงในสถานที่ให้บริการเตียงที่ user ต้องการ</span></li>
</ol>
<p>&nbsp;</p>
<p><span style="font-weight: 400;"><strong>Acceptance Test</strong><br /></span></p>
<p><span style="font-weight: 400;"><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/12.PNG?raw=true" alt="" /></strong></span></p>
<p><span style="font-weight: 400;"><strong>case1: </strong>การค้นหาเตียงนั้นจะมีการแสดงผลก็ต่อเมื่อผู้ใช้ใส่ input ที่เป็นชื่อจังหวัดอย่างถูกต้องและมีในฐานข้อมูล<strong><br />case2: </strong>เมื่อผู้ใช้ใส่ input ที่เป็นชื่อจังหวัดไม่ถูกต้อง หรือไม่มีในฐานข้อมูลระบบจะไม่มีการแสดง ผลลัพธ์ออกมาให้<strong><br />case3: </strong>การจองเตียงที่สำเร็จนั้นจะเกิดจากการกดยืนยันแล้วระบบเช็คได้ว่ามีเตียงเหลือให้<strong><br />case4: </strong>การจองที่ไม่สำเร็จสามารถเกิดจากการกดยืนยันแล้วระบบเช็คได้ว่าเตียงเต็มแล้ว<strong><br />case5: </strong>การจองเตียงที่ไม่สำเร็จสามารถเกิดจากการกดยืนยันแล้วระบบเช็คได้ว่าผู้ใช้นั้นได้ใช้สิทธ์จองไปแล้ว<strong><br /></strong></span></p>
<p>&nbsp;</p>
<p><strong>Technical</strong></p>
<p>ในด้าน Technical ของ feature การค้นหาและจองเตียง สามารถอธิบายและแบ่งออกเป็นหัวข้อย่อยๆได้ ดังนี้<strong><br /></strong></p>
<p><strong>Frontend</strong></p>
<p>ในส่วนของ Frontend เราจะมีการกำหนดขั้นตอนการพัฒนาอยู่ทั้งหมด 5 ขั้นตอน พร้อมกำหนดรายละเอียดคร่าวๆ ลงในแต่ละขั้นตอน ดังนี้</p>
<ol>
<li>ออกแบบ UI เป็นการออกแบบหน้าตา UI ของการทำงานต่างๆที่เกี่ยวข้องกับ Feature การค้นหาและจองเตียง โดยแบ่งออกได้เป็น 2 หน้าจอหลักๆ ได้แก่<br />
<ol>
<li>หน้าค้นหาเตียง</li>
<li><span style="font-weight: 400;">หน้าจองเตียง</span></li>
</ol>
</li>
<li><span style="font-weight: 400;">ออกแบบ Business Logic เป็นการออกแบบตัว Frontend ให้ตอบสนองกับตัว Business ที่ต้องการจาก feature ตัวนี้</span></li>
<li><span style="font-weight: 400;">ทำการเขียนโค้ดเพื่อพัฒนาหน้า UI ต่างๆขึ้นมา ตามที่ได้ออกแบบไว้ใน 2 ขั้นตอนที่กล่าวไปข้างต้น โดยในส่วนนี้จะใช้ Vue.JS ในการพัฒนาเป็นหลัก โดยที่อาจจะมีการใช้เครื่องมืออื่นๆในการพัฒนาร่วมด้วย ยกตัวอย่างเช่น <br /></span>
<ul>
<li><span style="font-weight: 400;">HTML</span></li>
<li><span style="font-weight: 400;">CSS</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Bootstrap</span></li>
</ul>
</li>
<li><span style="font-weight: 400;">ทำการ Test หรือก็คือ ทำการทดสอบตัว Frontend ที่พัฒนาจนเสร็จแล้วในแต่ละส่วน ว่าสามารถทำงานได้สมบูรณ์ตามที่คาดหวังไว้หรือไม่ ไปจนถึงการทดสอบส่วนของ Frontend ที่เกี่ยวข้องทั้งหมด เพื่อทำการยืนยันความสมบูรณ์ในขั้นตอนสุดท้าย</span></li>
<li><span style="font-weight: 400;">ทำการ Deploy เป็นขั้นตอนสุดท้ายในขั้นตอนการพัฒนาที่ได้กำหนดไว้ โดยเมื่อทำการทดสอบตัว Frontend จนสมบูรณ์แล้ว จะทำการ Deploy Frontend ในส่วนนั้นๆ โดยใช้ Docker</span></li>
</ol>
<p><strong>Backend</strong></p>
<p>ในส่วนของ Backend เราจะมีการกำหนดขั้นตอนการพัฒนาอยู่ทั้งหมด 4 ขั้นตอน พร้อมกำหนดรายละเอียดคร่าวๆ ลงในแต่ละขั้นตอน ดังนี้</p>
<ol>
<li>ออกแบบ API ที่ใช้ในการค้นหาและจองเตียงทั้งหมด</li>
<li>ทำการพัฒนาโดยใช้ Express.js ซึ่งเป็นเว็บเฟรมเวิร์คจาก NPM ที่ใช้สำหรับพัฒนาเว็บแอพพลิเคชั่นหรือเว็บไซต์บน Node.js ที่ทำงานที่ฝั่งของ Backend</li>
<li>ทำการ Test หรือก็คือ ทำการทดสอบตัว Backend ที่พัฒนาจนเสร็จแล้วในแต่ละส่วน ว่าสามารถทำงานได้สมบูรณ์ตามที่คาดหวังไว้หรือไม่ ตามหัวข้อดังนี้
<ul>
<li>ตรวจสอบการส่งข้อมูลของผู้ใช้จาก Frontend ไปที่ Backend</li>
<li><span style="font-weight: 400;">ตรวจสอบข้อมูลที่ส่งมา ว่าได้รับข้อมูลถูกต้องครบถ้วนหรือไม่</span></li>
<li><span style="font-weight: 400;">ตรวจสอบการเข้าถึงและการเชื่อมต่อกับฐานข้อมูล</span></li>
</ul>
</li>
<li><span style="font-weight: 400;">ทำการ Deploy เป็นขั้นตอนสุดท้ายในขั้นตอนการพัฒนาที่ได้กำหนดไว้ โดยเมื่อทำการทดสอบตัว Backend จนสมบูรณ์แล้ว จะทำการ Deploy Backend ในส่วนนั้นๆ โดยใช้ Docker</span></li>
</ol>
<p><strong>Database</strong></p>
<p>ในส่วนของ database เราเลือกใช้เป็น MySQL เพื่อง่ายต่อการเข้าถึงข้อมูลที่มีความสัมพันธ์กันได้เป็นอย่างดี โดยเราจะทำการกำหนดข้อมูลที่ต้องการจัดเก็บและออกแบบตารางและความสัมพันธ์บนระบบคลาวด์ AWS Amazon RDS</p>
<p>&nbsp;</p>
<p><strong>List of Task</strong></p>
<p><strong>Frontend</strong></p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 58.8064%;">
<p style="text-align: center;"><strong>Task</strong></p>
</td>
<td style="width: 15.2839%; text-align: center;">
<p><strong>เวลาที่กำหนด</strong></p>
</td>
<td style="width: 25.7642%; text-align: center;">
<p><strong>ผู้รับผิดชอบ</strong></p>
</td>
</tr>
<tr>
<td style="width: 58.8064%;">
<p><span style="font-weight: 400;">1. ออกแบบหน้า UI ในส่วนของการค้นหาและจองเตียง</span></p>
</td>
<td style="width: 15.2839%; text-align: center;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 25.7642%; text-align: center;">
<p><span style="font-weight: 400;">นายวิชยุตม์ ทวิชัยยุทธ</span></p>
</td>
</tr>
<tr>
<td style="width: 58.8064%;">
<p><span style="font-weight: 400;">2. ทำการพัฒนาหน้าค้นหาเตียงโดยใช้ Vue.JS ในการพัฒนา</span></p>
</td>
<td style="width: 15.2839%; text-align: center;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 25.7642%; text-align: center;">
<p><span style="font-weight: 400;">นายอคิราภ์ สีแสนยง</span></p>
</td>
</tr>
<tr>
<td style="width: 58.8064%;">
<p><span style="font-weight: 400;">3. ทำการพัฒนาหน้าการจองเตียงโดยใช้ Vue.JS ในการพัฒนา</span></p>
</td>
<td style="width: 15.2839%; text-align: center;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 25.7642%; text-align: center;">
<p><span style="font-weight: 400;">นายพิชญะ สิงห์มีศรี</span></p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p><strong>Backend</strong></p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 59.0976%; text-align: center;">
<p><strong>Task</strong></p>
</td>
<td style="width: 16.4483%; text-align: center;">
<p><strong>เวลาที่กำหนด</strong></p>
</td>
<td style="width: 24.3086%; text-align: center;">
<p><strong>ผู้รับผิดชอบ</strong></p>
</td>
</tr>
<tr>
<td style="width: 59.0976%;">
<p><span style="font-weight: 400;">1. ออกแบบ Backend เพื่อรองรับในส่วนของการค้นหาและจองเตียง</span></p>
</td>
<td style="width: 16.4483%; text-align: center;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 24.3086%; text-align: center;">
<p><span style="font-weight: 400;">นายพลัฏฐ์ วงศ์สิทธิพรรุ่ง</span></p>
</td>
</tr>
<tr>
<td style="width: 59.0976%;">
<p><span style="font-weight: 400;">2. พัฒนา Backend เพื่อรองรับการเข้าถึงข้อมูลสถานที่ให้บริการเตียงโดยใช้ Node.js ในการพัฒนา</span></p>
</td>
<td style="width: 16.4483%; text-align: center;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 24.3086%; text-align: center;">
<p><span style="font-weight: 400;">นายพลัฏฐ์ วงศ์สิทธิพรรุ่ง</span></p>
</td>
</tr>
<tr>
<td style="width: 59.0976%;">
<p><span style="font-weight: 400;">3. พัฒนา Backend สำหรับจัดเก็บข้อมูลการจองเตียง เพื่อรองรับการจองเตียงของ User โดยใช้ Node.js ในการพัฒนา</span></p>
</td>
<td style="width: 16.4483%; text-align: center;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 24.3086%; text-align: center;">
<p><span style="font-weight: 400;">นายประธาน นาเวียง</span></p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p><strong>Database</strong></p>
<table style="border-collapse: collapse; width: 100%; height: 174px;" border="1">
<tbody>
<tr style="height: 46px;">
<td style="width: 58.8064%; text-align: center; height: 46px;">
<p><strong>Task</strong></p>
</td>
<td style="width: 18.0495%; text-align: center; height: 46px;">
<p><strong>เวลาที่กำหนด</strong></p>
</td>
<td style="width: 22.9985%; text-align: center; height: 46px;">
<p><strong>ผู้รับผิดชอบ</strong></p>
</td>
</tr>
<tr style="height: 64px;">
<td style="width: 58.8064%; height: 64px;">
<p><span style="font-weight: 400;">1. ออกแบบ Database สำหรับเก็บข้อมูลของสถานที่ให้บริการเตียง, ผู้ให้บริการ และจำนวนเตียงที่ให้บริการ</span></p>
</td>
<td style="width: 18.0495%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 22.9985%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">นายปภัส เงาธัมมะสกุล</span></p>
</td>
</tr>
<tr style="height: 64px;">
<td style="width: 58.8064%; height: 64px;">
<p><span style="font-weight: 400;">2. พัฒนา Database สำหรับเก็บข้อมูลของสถานที่ให้บริการเตียง, ผู้ให้บริการ และจำนวนเตียงที่ให้บริการ โดยใช้ MySQL ในการพัฒนา</span></p>
</td>
<td style="width: 18.0495%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 22.9985%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">นายประธาน นาเวียง</span></p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p><strong>เงื่อนไขในการผ่าน Acceptance Test</strong></p>
<p><strong>Frontend</strong></p>
<p><strong>task 1: <span style="font-weight: 400;">ออกแบบหน้า UI ในส่วนของการค้นหาและจองเตียง</span></strong></p>
<ul>
<li><strong><span style="font-weight: 400;">ต้องมีหน้า UI ทั้ง 2 หน้าครบได้แก่ หน้าค้นหาเตียง และ หน้าจองเตียง<br /></span></strong></li>
<li><strong><span style="font-weight: 400;">ในส่วนหน้า UI ของหน้าค้นหาเตียง ต้องมีการแสดงผล UI Elements ต่างๆที่ช่วยให้ User สามารถ Interact ในการเข้าถึงฟังก์ชั่นการค้นหาเตียงที่ User ต้องการ</span></strong></li>
<li><strong><span style="font-weight: 400;">ในส่วนหน้า UI ของหน้าจองเตียง ต้องมีการแสดงผล UI Components ที่แสดงรายละเอียดของเตียงที่ User ต้องการจองครบถ้วน และมี UI Components ที่เป็นช่อง Input ที่ User สามารถเลือกวันที่ต้องการจองได้</span></strong></li>
</ul>
<p><strong><span style="font-weight: 400;"><strong>task 2:</strong> ทำการพัฒนาหน้าค้นหาเตียงโดยใช้ Vue.JS ในการพัฒนา</span></strong></p>
<ul>
<li><strong><span style="font-weight: 400;">feature ค้นหาเตียงต้องที่ได้พัฒนาแล้วนั้น ต้องมีหน้า UI ตามที่ได้ออกแบบไว้ครบถ้วน</span></strong></li>
<li><strong><span style="font-weight: 400;">ต้องสามารถใช้งานฟังก์ชั่นการค้นหาเตียงที่ user ต้องการได้อย่างถูกต้อง</span></strong></li>
<li><strong><span style="font-weight: 400;">ต้องมีการแสดงผลลัพธ์ของการค้นหาเตียงที่ user ต้องการได้อย่างถูกต้อง</span></strong></li>
</ul>
<p><strong><span style="font-weight: 400;"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/13.PNG?raw=true" alt="" /></span></strong></p>
<p><strong><span style="font-weight: 400;"><strong>task 3:</strong> ทำการพัฒนาหน้าการจองเตียงโดยใช้ Vue.JS ในการพัฒนา</span></strong></p>
<ul>
<li><strong><span style="font-weight: 400;">feature การจองเตียงที่ได้พัฒนาแล้วนั้นต้องมีหน้า UI ตามที่ได้ออกแบบไว้ครบถ้วน</span></strong></li>
<li><strong><span style="font-weight: 400;">ต้องมีการแสดงผลรายละเอียดของเตียงที่ user ต้องการจองได้ครบถ้วน<br /></span></strong></li>
<li><strong><span style="font-weight: 400;">ต้องมีการ validate ช่อง Input วันที่ ที่ user ต้องการจอง</span></strong></li>
</ul>
<p>&nbsp;</p>
<p><strong><span style="font-weight: 400;"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/14.PNG?raw=true" alt="" /></span></strong></p>
<p><strong>Backend</strong></p>
<p><strong>task 1:</strong> ออกแบบ Backend เพื่อรองรับในส่วนของการค้นหาและจองเตียง<strong><br /></strong></p>
<ul>
<li>Backend ที่ได้ออกแบบมีรูปแบบการทำงานที่รองรับการเรียกใช้จากฝั่ง Frontend</li>
<li>Backend ที่ได้ออกแบบแล้วต้องมีรูปแบบของ API ที่เข้าใจง่ายไม่ซับซ้อนเพื่อง่ายต่อการเรียกใช้งาน</li>
<li>Backend ที่ได้ออกแบบแล้วต้องมีการรองรับฟังก์ชั่นการค้นหาและจองเตียงทั้งหมด</li>
</ul>
<p><strong>task 2:</strong> พัฒนา Backend เพื่อรองรับการเข้าถึงข้อมูลสถานที่ให้บริการเตียงโดยใช้ Node.js ในการพัฒนา</p>
<ul>
<li><span style="font-weight: 400;">สามารถเข้าถึงข้อมูลสถานที่ให้บริการเตียงในฐานข้อมูลได้</span></li>
<li><span style="font-weight: 400;">สามารถส่งข้อมูลสถานที่บริการเตียงที่ผู้ใช้ทำการค้นไปแสดงที่ฝั่ง Frontend ได้อย่างถูกต้อง</span></li>
</ul>
<p><span style="font-weight: 400;"><strong>task 3:</strong> พัฒนา Backend สำหรับจัดเก็บข้อมูลการจองเตียง เพื่อรองรับการจองเตียงของ User โดยใช้ Node.js ใน</span></p>
<ul>
<li><span style="font-weight: 400;">สามารถเข้าถึงและแก้ไขข้อมูลในฐานข้อมูลของการจองเตียงได้</span></li>
<li><span style="font-weight: 400;">สามารถนำข้อมูลการจองเตียงของผู้ใช้จัดเก็บลงฐานข้อมูลได้ ที่ใช้จัดเก็บข้อมูลการจองเตียงได้อย่างถูกต้อง</span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;"><strong>Database</strong></span></p>
<p><span style="font-weight: 400;"><strong>task 1: </strong>ออกแบบ Database สำหรับเก็บข้อมูลของสถานที่ให้บริการเตียง, ผู้ให้บริการ และจำนวนเตียงที่ให้บริการ</span></p>
<ul>
<li><span style="font-weight: 400;">ฐานข้อมูลที่ได้ทำการออกแบบต้องเป็นรูปแบบของ SQL</span></li>
<li><span style="font-weight: 400;">ฐานข้อมูลที่ได้ทำการออกแบบต้องมีการเก็บข้อมูลแยกกันเป็น 2 ตาราง ได้แก่ ข้อมูลสถานที่ให้บริการเตียง (beds) และ ข้อมูลการจองเตียงของผู้ใช้ (bedsdealing)</span></li>
</ul>
<p><span style="font-weight: 400;"><strong>task 2:</strong> พัฒนา Database สำหรับเก็บข้อมูลของสถานที่ให้บริการเตียง, ผู้ให้ บริการ และจำนวนเตียงที่ให้บริการ โดยใช้ MySQL ในการพัฒนา<br /></span></p>
<ul>
<li><span style="font-weight: 400;">ฐานข้อมูลที่ได้ทำการพัฒนาขึ้นจะต้องมีชนิดของข้อมูล หรือ Data type ที่เหมาะสมกับชนิดข้อมูลนั้นๆ<br /></span></li>
<li><span style="font-weight: 400;">ฐานข้อมูลที่ได้ทำการพัฒนาขึ้นมาสามารถจัดเก็บข้อมูลที่จำเป็นในการใช้งานฟีเจอร์ ค้นหาและจองเตียงได้ ตามที่ได้ออกแบบไว้</span></li>
</ul>
<p><strong>Test Stratergies</strong></p>
<p><strong>Unit test</strong></p>
<ul style="list-style-type: square;">
<li><strong>Frontend<br /></strong>เป็นการทดสอบตัว feature การค้นหาและจองเตียง ของระบบ โดยจะทำการทดสอบในส่วนของ วันเดือนปี ซึ่งมีขั้นตอนดังนี้<strong><br /></strong>
<ol>
<li><span style="font-weight: 400;">ทดสอบการเปลี่ยน format วันที่แบบปกติให้อยู่ในรูปแบบ ไทย โดยมีขั้นตอนย่อยดังนี้</span>
<ol>
<li><span style="font-weight: 400;">ทดสอบในส่วนของวันที่ ตั้งแต่วันที่ 1 - 31 (31 cases)</span></li>
<li><span style="font-weight: 400;">ทดสอบในส่วนของเดือน ตั้งแต่มกราคม - ธันวาคม (12 cases)</span></li>
<li><span style="font-weight: 400;">ทดสอบในส่วนของปี ตั้งแต่ 1970 - 2021 (51 cases)<br /></span></li>
</ol>
</li>
</ol>
</li>
<li><span style="font-weight: 400;"><strong>Backend</strong><br />เป็นการทดสอบส่วนย่อยของระบบ โดยจะเน้นไปที่การทดสอบ Request ที่เข้ามา โดยที่เป็นส่วนสำคัญของระบบค้นหาและจองเตียง โดยจะแบ่งออกเป็น 2 ส่วน และมีการทดสอบด้วย Test case ต่างๆ ดังนี้<br /></span>
<ol>
<li><span style="font-weight: 400;"><strong>ทดสอบการเรียกข้อมูลของสถานที่ให้บริการเตียง</strong><br />การทดสอบในส่วนนี้จะใช้การ Get และ Post ในรูปแบบต่าง ๆ ในการทดสอบโดยแบ่งออกเป็น 3 รูปแบบ ดังนี้<br /></span>
<ul style="list-style-type: square;">
<li><span style="font-weight: 400;"><strong>ทำการเรียกข้อมูลสถานที่ให้บริการเตียงที่มีเตียงพร้อมให้บริการ</strong><br /><strong>เป้าหมายในการทดสอบ :</strong> เพื่อทดสอบการเรียกข้อมูลของสถานที่ให้บรอการเตียงทั้งหมดที่มีเตียงพร้อมให้บริการได้จริงหรือไม่ (GET: /beds/available)</span></li>
<li><span style="font-weight: 400;"><strong>ทำการเรียกข้อมูลสถานที่ให้บริการเตียงที่มีเตียงพร้อมให้บริการด้วยการค้นหา</strong><br /><strong>เป้าหมายในการทดสอบ :</strong> เพื่อทดสอบการเรียกข้อมูลของสถานที่ให้บริการที่มีเตียงพร้อมให้บริการด้วยการค้นหาได้จริงหรือไม่ (GET: /beds/search)<br /></span></li>
<li><span style="font-weight: 400;"><strong>ทำการเรียกข้อมูลสถานที่ให้บริการเตียงโดยใช้เลขประจำตัวของผู้ให้บริการเตียง</strong><br /><strong>เป้าหมายในการทดสอบ :</strong> เพื่อทดสอบการเรียกข้อมูลของสถานที่ให้บริการว่าสามารถใช้เลขประจำตัวของผู้ให้บริการเตียงในการเรียกข้อมูลได้จริงหรือไม่ (GET: /bedsByUser)<br /></span></li>
<li><span style="font-weight: 400;"><strong>ทำการเรียกดูข้อมูลรายละเอียดของสถานที่โดยใช้ ID ของเตียง :</strong> เพื่อทดสอบการเรียกดูข้อมูลรายละเอียดของเตียงโดยใช้ ID ของเตียงนั้น ๆว่าทำได้จริงหรือไม่<br /></span></li>
</ul>
</li>
<li><span style="font-weight: 400;"><strong>ทดสอบระบบการจองเตียง&nbsp; และเรียกดูประวัติการจองเตียง</strong></span>
<ul style="list-style-type: square;">
<li><span style="font-weight: 400;"><strong>ทำการจองเตียงโดยที่สถานที่ให้บริการนั้น ๆ ไม่มีเตียงเพียงพอ:</strong> เพื่อทดสอบว่าสามารถทำการจองเตียงในขณะที่สถานที่ให้บริการมีจำนวนเตียงไม่เพียงพอได้หรือไม่ (POST: /bedsdealing)</span></li>
<li><span style="font-weight: 400;"><strong>ทำการจองเตียงโดยใส่ข้อมูลทุกอย่างให้ถูกต้อง: </strong>เพื่อทดสอบว่าสามารถทำการจองเตียงได้หรือไม่ถ้าได้กรอกข้อมูลทุกอย่างถูกต้องแล้ว (POST: /bedsdealing)</span></li>
<li><span style="font-weight: 400;"><strong>ทำการจองเตียงโดยที่ไมสามารถระบุข้อมูลของสถานที่ให้บริการ:</strong> เพื่อทดสอบว่าสามารถทำการจองเตียงได้หรือไม่ถ้าไม่สามารถระบุข้อมูลของสถานที่ให้บริการ (POST: /bedsdealing)<br /></span></li>
<li><span style="font-weight: 400;"><strong>ทำการเรียกดูประวัติการจองเตียงของผู้ใช้:</strong> เพื่อทดสอบว่าสามารถเรียกดูข้อมูลประวัติการจองเตียงของผู้ใช้ได้หรือไม่ (GET: /bedsdealingByUser)</span></li>
<li><span style="font-weight: 400;"><strong>ทำการเรียกดูประวัติการจองเตียงโดย ID ของผู้ใช้:</strong> เพื่อทดสอบว่าสามารถเรียกดูข้อมูลประวัติการจองเตียงผ่าน ID ของผู้ใช้ได้หรือไม่ (GET: /bedsdealing/customer/51)</span></li>
<li><span style="font-weight: 400;"><strong>ทำการทดสอบการเปลี่ยนสถานะของสถานที่ให้บริการผ่าน ID ของสถานที่ให้บริการนั้น ๆ:</strong> เพื่อทดสอบว่าสามารถทำการเปลี่ยนสถานะของสถานที่ให้บริการได้หรือไม่</span></li>
</ul>
</li>
</ol>
</li>
</ul>
<p><span style="font-weight: 400;"><strong>Component test</strong></span></p>
<ul style="list-style-type: square;">
<li><span style="font-weight: 400;"><strong>Frontend</strong></span>
<p><span style="font-weight: 400;">เป็นการทดสอบว่าในแต่ละหน้าที่เกี่ยวข้องกับ feature </span><span style="font-weight: 400;">การค้นหาและจองเตียง</span><span style="font-weight: 400;">นั้น มีส่วนประกอบ หรือ component ที่ควรจะอยู่ในหน้านั้น ๆ ครบถ้วนหรือไม่ โดยจะเน้นเฉพาะส่วนของ Frontend ที่เกี่ยวข้อง การทดสอบในส่วน Component test จะสามารถแบ่งออกได้เป็น 1 ส่วน ดังนี้</span></p>
<ol>
<li><span style="font-weight: 400;"><strong>การทำ Component test ในส่วนของหน้าค้นหาเตียง </strong>เป็นการทดสอบเพื่อดูว่าหน้าค้นหาเตียง มีส่วนประกอบต่างๆครบถ้วนหรือไม่ โดยในหน้าค้นหาเตียง จะมีส่วนประกอบที่ต้องมีอยู่ทั้งหมด 2 ส่วนประกอบ ได้แก่</span>
<ul style="list-style-type: square;">
<li><span style="font-weight: 400;">ช่องค้นหาสถานที่ให้บริการเตียง</span></li>
<li><span style="font-weight: 400;">กล่องแสดงข้อมูลสถานที่ให้บริการเตียง</span></li>
</ul>
</li>
</ol>
</li>
<li><span style="font-weight: 400;"><strong>Backend</strong><br />การทดสอบ component test ของ feature การค้นหาและจองเตียง ของฝั่ง Backend มี 2 ส่วนดังนี้<br /></span></li>
</ul>
<ul>
<li><strong>ส่วนที่ 1: การทดสอบการเรียกข้อมูลของสถานที่ให้บริการเตียง</strong></li>
<li style="list-style-type: none;">
<ul style="list-style-type: square;">
<li>สามารถเรียกดูจำนวนเตียงที่เหลือได้</li>
<li>สามารถเรียกดูสถานที่ให้บริการผ่าน ID ได้</li>
<li>สามารถเรียกดูข้อมูลสถานที่ให้บริการผ่าน User ได้</li>
<li><span style="font-weight: 400;">สามารถตอบสนองต่อรายละเอียดของสถานที่ให้บริการได้</span></li>
<li><span style="font-weight: 400;">สามารถทำการค้นหาเตียงได้</span></li>
</ul>
</li>
</ul>
<ul>
<li><strong>ส่วนที่ 2: ทดสอบระบบการจองเตียง&nbsp; และเรียกดูประวัติการจองเตียง</strong>
<ul style="list-style-type: square;">
<li><strong><span style="font-weight: 400;">สามารถทำการจองเตียงได้</span></strong></li>
<li><strong><span style="font-weight: 400;">สามารถเรียกดูประวัติการจองผ่าน bed_id ได้</span></strong></li>
<li><strong><span style="font-weight: 400;">สามารถเรียกดูประวัติการจองของผู้ใช้</span></strong></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">สามารถเรียกดูประวัติการจองผ่าน user id ได้</span></li>
<li><strong><span style="font-weight: 400;">สามารถเรียกดูประวัติการจองของผู้ใช้ทุกคนได้</span></strong></li>
</ul>
</li>
</ul>
<p><strong>E2E test</strong></p>
<ul style="list-style-type: square;">
<li><strong>Frontend</strong><br />เป็นการทดสอบตัว feature ระบบการค้นหาและจองเตียง ตั้งแต่เริ่มต้น จนจบ ซึ่งจะเริ่มตั้งแต่หน้า Login เข้าสู่ระบบ =&gt; หน้า main =&gt; หน้าค้นหาเตียง =&gt; หน้าจองเตียง โดยมีจุดประสงค์เพื่อทดลองว่า feature นี้ สามารถใช้งานได้จริง โดยมีขั้นตอนดังนี้ โดยเริ่มจาก<br />
<ol>
<li><span style="font-weight: 400;">การกรอกข้อมูล email และ รหัสผ่านให้ถูกต้อง เพื่อลงชื่อเข้าใช้งานที่หน้า login</span></li>
<li><span style="font-weight: 400;">กดปุ่ม ค้นหาเตียง ที่แถบ Nav bar เพื่อไปที่หน้า ค้นหาเตียง</span></li>
<li><span style="font-weight: 400;">กรอกชื่อจังหวัด หรือคำที่ใกล้เคียง เพื่อค้นหาสถานที่ ที่ต้องการ</span></li>
<li><span style="font-weight: 400;">กดปุ่ม ดูรายละเอียด ในช่องสถานที่ที่ต้องการ เพื่อไปที่หน้า จองเตียง</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">เลือกวันที่ต้องการจองให้ถูกต้อง</span></li>
<li><span style="font-weight: 400;">กดปุ่ม จอง และยืนยัน</span></li>
</ol>
</li>
<li><span style="font-weight: 400;"><strong>Backend</strong><br />เป็นการทดสอบการเรียก API ทั้งหมดที่เกี่ยวข้องกับ feature การค้นหา และจองเตียง ตั้งแต่การ Signin จนถึง การจองเตียง ดังนี้<br /></span>
<ul style="list-style-type: square;">
<li><span style="font-weight: 400;">POST: user/signin</span></li>
<li><span style="font-weight: 400;">GET: bedsByUser</span></li>
<li><span style="font-weight: 400;">POST: /users/signin</span></li>
<li><span style="font-weight: 400;">POST: bedsdealing</span></li>
<li><span style="font-weight: 400;">GET: bedsdealingByUser</span></li>
<li><span style="font-weight: 400;">POST: /users/logout</span></li>
<li><span style="font-weight: 400;">PUT: /bedsdealing/customer/104</span></li>
</ul>
</li>
</ul>
<p>&nbsp;</p>
<p><strong>Test Result</strong></p>
<p><strong>Unit test<br /></strong></p>
<ul style="list-style-type: square;">
<li>
<p><strong>Frontend</strong></p>
<p>ผลการทดสอบ unit test ของ function การเปลี่ยน format วันที่แบบปกติให้อยู่ในรูปแบบ ไทย มีผลลัพธ์จากการทดสอบ ดังนี้</p>
<ul style="list-style-type: square;">
<li>ทดสอบในส่วนของวันที่ ตั้งแต่วันที่ 1 - 31 (31 cases)<br />ผลการทดสอบ : success (ผ่านทั้ง 31 case)</li>
<li>ทดสอบในส่วนของเดือน ตั้งแต่มกราคม - ธันวาคม (12 cases)<br />ผลการทดสอบ : success (ผ่านทั้ง 12 case)</li>
<li>ทดสอบในส่วนของปี ตั้งแต่ 1970 - 2021 (51 cases)<br />ผลการทดสอบ : success (ผ่านทั้ง 51 case)</li>
</ul>
</li>
</ul>
<p><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/15.PNG?raw=true" alt="" /></p>
<ul style="list-style-type: square;">
<li><strong>Backend</strong>
<ol>
<li><strong>ทดสอบการเรียกข้อมูลของสถานที่ให้บริการเตียง<br /></strong>การทดสอบในส่วนนี้จะใช้การGet และ Post ในรูปแบบต่าง ๆ ในการทดสอบโดยแบ่งออกเป็น 3 รูปแบบ ดังนี้<strong><br /></strong>
<ul style="list-style-type: square;">
<li><strong>ทำการเรียกข้อมูลสถานที่ให้บริการเตียงที่มีเตียงพร้อมให้บริการ</strong><br /><strong>เป้าหมายในการทดสอบ :</strong> เพื่อทดสอบการเรียกข้อมูลของสถานที่ให้บรอการเตียงทั้งหมดที่มีเตียงพร้อมให้บริการได้จริงหรือไม่ (GET: /beds/available) =&gt; <strong>Success (เรียกได้)</strong></li>
<li><strong>ทำการเรียกข้อมูลสถานที่ให้บริการเตียงที่มีเตียงพร้อมให้บริการด้วยการค้นหา</strong><br /><strong>เป้าหมายในการทดสอบ :</strong> เพื่อทดสอบการเรียกข้อมูลของสถานที่ให้บริการที่มีเตียงพร้อมให้บริการด้วยการค้นหาได้จริงหรือไม่ (GET: /beds/search) =&gt; <strong>Success (เรียกได้)</strong></li>
<li><strong>ทำการเรียกข้อมูลสถานที่ให้บริการเตียงโดยใช้เลขประจำตัวของผู้ให้บริการเตียง</strong><br /><strong>เป้าหมายในการทดสอบ :</strong> เพื่อทดสอบการเรียกข้อมูลของสถานที่ให้บริการว่าสามารถใช้เลขประจำตัวของผู้ให้บริการเตียงในการเรียกข้อมูลได้จริงหรือไม่ (GET: /bedsByUser) =&gt; <strong>Success (เรียกได้)</strong></li>
<li><strong>ทำการเรียกดูข้อมูลรายละเอียดของสถานที่โดยใช้ ID ของเตียง : </strong>เพื่อทดสอบการเรียกดูข้อมูลรายละเอียดของเตียงโดยใช้ ID ของเตียงนั้น ๆว่าทำได้จริงหรือไม่ (GET: bed/125) =&gt;<strong> Success (เรียกได้)</strong></li>
</ul>
</li>
<li><strong>ทดสอบระบบการจองเตียง และเรียกดูประวัติการจองเตียง</strong>
<ul style="list-style-type: square;">
<li><strong>ทำการจองเตียงโดยที่สถานที่ให้บริการนั้น ๆ ไม่มีเตียงเพียงพอ: </strong>เพื่อทดสอบว่าสามารถทำการจองเตียงในขณะที่สถานที่ให้บริการมีจำนวนเตียงไม่เพียงพอได้หรือไม่ (POST: /bedsdealing) =&gt;<strong> Success (ต้องจองไม่ได้)</strong></li>
<li><strong>ทำการจองเตียงโดยใส่ข้อมูลทุกอย่างให้ถูกต้อง: <span style="font-weight: 400;">เพื่อทดสอบว่าสามารถทำการจองเตียงได้หรือไม่ถ้าได้กรอกข้อมูลทุกอย่างถูกต้องแล้ว (POST: /bedsdealing)&nbsp; =&gt; </span>Success (ต้องจองได้)</strong></li>
<li style="font-weight: 400;" aria-level="1"><strong>ทำการจองเตียงซำ้ ในสถานที่ให้บริการที่เดียวกัน: </strong><span style="font-weight: 400;">เพื่อทดสอบว่าสามารถจองเตียงในสถานที่ให้บริการเตียงที่ซำ้กันได้หรือไม่ (POST: /bedsdealing)&nbsp; =&gt; </span><strong>Success (ต้องจองไม่ได้)</strong></li>
<li><strong>ทำการจองเตียงโดยที่ไมสามารถระบุข้อมูลของสถานที่ให้บริการ:</strong> เพื่อทดสอบว่าสามารถทำการจองเตียงได้หรือไม่ถ้าไม่สามารถระบุข้อมูลของสถานที่ให้บริการ (POST: /bedsdealing) =&gt;<strong> Success (ต้องจองไม่ได้)</strong></li>
<li><strong>ทำการเรียกดูประวัติการจองเตียงของผู้ใช้: </strong>เพื่อทดสอบว่าสามารถเรียกดูข้อมูลประวัติการจองเตียงของผู้ใช้ได้หรือไม่ (GET: /bedsdealingByUser) =&gt;<strong> Success (เรียกได้)</strong></li>
<li><strong>ทำการเรียกดูประวัติการจองเตียงโดย ID ของผู้ใช้: </strong>เพื่อทดสอบว่าสามารถเรียกดูข้อมูลประวัติการจองเตียงผ่าน ID ของผู้ใช้ได้หรือไม่ (GET: /bedsdealing/customer/51) =&gt;<strong> Success (เรียกได้)</strong></li>
<li><strong>ทำการทดสอบการเปลี่ยนสถานะของสถานที่ให้บริการผ่าน ID ของสถานที่ให้บริการนั้น ๆ: </strong>เพื่อทดสอบว่าสามารถทำการเปลี่ยนสถานะของสถานที่ให้บริการได้หรือไม่ =&gt;<strong> Success (เปลี่ยนได้)</strong></li>
</ul>
</li>
</ol>
</li>
</ul>
<p><strong>Component test</strong></p>
<ul style="list-style-type: square;">
<li>
<p><strong>Frontend</strong></p>
<p>ผลการทดสอบ frontend component test จะแบ่งออกเป็น 2 ส่วน เหมือนที่ได้ระบุไว้ใน test stratergies ดังนี้</p>
<ol>
<li><span style="font-weight: 400;">การทำ Component test ในส่วนของหน้าค้นหาเตียง</span>
<ul style="list-style-type: square;">
<li><span style="font-weight: 400;">ช่องค้นหาสถานที่ให้บริการเตียง<br />ผลการทดสอบ : success (มี Element นี้อยู่จริง)<br /></span></li>
<li><span style="font-weight: 400;">กล่องแสดงข้อมูลสถานที่ให้บริการเตียง<br />ผลการทดสอบ : success (มี Element นี้อยู่จริง)<br /></span></li>
</ul>
</li>
</ol>
</li>
</ul>
<p><span style="font-weight: 400;"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/16.PNG?raw=true" alt="" /></span></p>
<ul style="list-style-type: square;">
<li><span style="font-weight: 400;"><strong>Backend</strong><br /></span>
<ul style="list-style-type: square;">
<li><span style="font-weight: 400;"><strong>ส่วนที่ 1: การทดสอบการเรียกข้อมูลของสถานที่ให้บริการเตียง<br /></strong></span>
<ul style="list-style-type: circle;">
<li><span style="font-weight: 400;">สามารถเรียกดูจำนวนเตียงที่เหลือได้ (Success)<strong><br /></strong></span></li>
<li><span style="font-weight: 400;">สามารถเรียกดูสถานที่ให้บริการผ่าน ID ได้ (Success)</span></li>
<li><span style="font-weight: 400;">สามารถเรียกดูข้อมูลสถานที่ให้บริการผ่าน User ได้ (Success)</span></li>
<li><span style="font-weight: 400;">สามารถตอบสนองต่อรายละเอียดของสถานที่ให้บริการได้ (Success)</span></li>
<li><span style="font-weight: 400;">สามารถทำการค้นหาเตียงได้ (Success)</span></li>
</ul>
</li>
<li><strong>ส่วนที่ 2: ทดสอบระบบการจองเตียง และเรียกดูประวัติการจองเตียง</strong>
<ul style="list-style-type: circle;">
<li>สามารถทำการจองเตียงได้ (Success)</li>
<li>สามารถเรียกดูประวัติการจองผ่าน bed_id ได้ (Success)</li>
<li><span style="font-weight: 400;">สามารถเรียกดูประวัติการจองของผู้ใช้ (Success)</span></li>
<li><span style="font-weight: 400;">สามารถเรียกดูประวัติการจองผ่าน user id ได้ (Success)</span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">สามารถเรียกดูประวัติการจองของผู้ใช้ทุกคนได้ (Success)</span></li>
</ul>
</li>
</ul>
</li>
</ul>
<p><strong>E2E test</strong></p>
<ul style="list-style-type: square;">
<li><strong>Frontend<br /></strong>ผลการทดสอบของ feature กาค้นหาและจองเตียง ที่ฝั่ง Frontend มีเพียงผลลัพธ์การทดสอบเดียว คือการที่สามารถค้นหาสถานที่ที่ต้องการ และทำการจองได้ หลังจากกรอกวันที่อย่างถูกต้อง: Success (สามารถค้นหา และจองเตียงได้)</li>
<li><strong>Backend</strong></li>
</ul>
<p><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/17.PNG?raw=true" alt="" /></strong></p>
<p>&nbsp;</p>
<h1><strong>3.เพิ่มฟีเจอร์ใหม่ : การเพิ่มสถานที่ให้บริการเตียง</strong></h1>
<p><strong>User Flow</strong></p>
<p><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/18.PNG?raw=true" alt="" /></strong></p>
<p><strong><span style="font-weight: 400;">User Flow ของ feature เพิ่มสถานที่ให้บริการเตียง ประกอบด้วยขั้นตอนดังนี้</span></strong></p>
<ol>
<li><strong><span style="font-weight: 400;">User ทำการ Login เข้าสู่หน้า Home ของ website</span></strong></li>
<li><strong><span style="font-weight: 400;">User กดไปที่ปุ่ม ฉันต้องการลงเตียง ที่แถบ Nav bar เพื่อเข้าไปที่หน้า จัดกานสถานที่</span></strong></li>
<li><strong><span style="font-weight: 400;">User กดไปที่ปุ่ม เพิ่มสถานที่ เพื่อไปที่หน้า เพิ่มสถานที่</span></strong></li>
<li><strong><span style="font-weight: 400;">User ทำการกรอกจำนวนเตียง และระบุพิกัดที่อยู่</span></strong></li>
<li><strong><span style="font-weight: 400;">User กดปุ่ม เพิ่มสถานที่เดี๋ยวนี้ และกดยืนยัน</span></strong></li>
</ol>
<p>&nbsp;</p>
<p><strong>UI Flow</strong></p>
<p><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/19.PNG?raw=true" alt="" width="1136" height="207" /></strong></p>
<p><span style="font-weight: 400;">UI หลักๆที่เกี่ยวข้องกับ feature นี้ ประกอบด้วย</span></p>
<ol>
<li><span style="font-weight: 400;">หน้า bedsmanage (หน้าการจัดการเตียง) ในหน้านี้จะมีการแสดงผลของสถานที่ให้บริการเตียงทั้งหมดที่เปิดให้บริการโดย user ซึ่ง user สามารถเลือกสถานที่ให้บริการเตียงที่ต้องการแก้ไขข้อมูลได้ผ่านทางหน้านี้</span></li>
<li><span style="font-weight: 400;">หน้าเพิ่มสถานที่ให้บริการเตียง ในหน้านี้จะมีฟอร์มให้ user กรอกข้อมูล เพื่อใช้้ในการเปิดสถานที่ให้บริการเตียงเพิ่ม</span></li>
</ol>
<p>&nbsp;</p>
<p><span style="font-weight: 400;"><strong>Acceptance Test</strong></span></p>
<p><span style="font-weight: 400;"><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/20.PNG?raw=true" alt="" /></strong></span></p>
<p><span style="font-weight: 400;"><strong>Technical</strong></span></p>
<p><span style="font-weight: 400;">ในด้าน technical ของ feature เพิ่มสถานที่ให้บริการเตียง สามารถอธิบายและแบ่งออกเป็นหัวข้อย่อยๆได้ ดังนี้</span></p>
<p><span style="font-weight: 400;"><strong>Frontend</strong><br />ในส่วน Frontend เราจะมีการกำหนดขั้นตอนการพัฒนาอยู่ทั้งหมด 5 ขั้นตอน พร้อมกำหนดรายละเอียดคร่าวๆ ลงในแต่ละขั้นตอน ดังนี้<br /></span></p>
<ol>
<li><span style="font-weight: 400;">ออกแบบ UI เป็นการออกแบบหน้าตา UI ของการทำงานต่างๆ ที่เกี่ยวข้องกับ Feature การเพิ่มสถานที่ให้บริการเตียง โดยแบ่งออกเป็น 2 หน้าจอหลัก</span>
<ol>
<li><span style="font-weight: 400;">หน้าจัดการสถานที่</span></li>
<li><span style="font-weight: 400;">หน้าเพิ่มสถานที่</span></li>
</ol>
</li>
<li><span style="font-weight: 400;">ออกแบบ Business Logic เป็นการออกแบบตัว Frontend ให้ตอบสนองกับตัว Business ที่ต้องการจาก feature ตัวนี้</span></li>
<li><span style="font-weight: 400;">ทำการเขียนโค้ดเพื่อพัฒนาหน้า UI ต่าง ๆ ขึ้นมา ตามที่ได้ออกแบบไว้ใน 2 ขั้นตอนที่กล่าวไปข้างต้น โดยในส่วนนี้จะใช้ Vue.JS ในการพัฒนาเป็นหลัก โดยที่อาจจะมีการใช้เครื่องมืออื่นๆในการพัฒนาร่วมด้วย ยกตัวอย่างเช่น</span>
<ul style="list-style-type: circle;">
<li><span style="font-weight: 400;">HTML</span></li>
<li><span style="font-weight: 400;">CSS</span></li>
<li><span style="font-weight: 400;">Bootstrap</span></li>
</ul>
</li>
<li><span style="font-weight: 400;">ทำการ Test หรือก็คือ ทำการทดสอบตัว Frontend ที่พัฒนาจนเสร็จสิ้นแล้วในแต่ละส่วน ว่าสามารถทำงานได้สมบูรณ์ตามที่คาดหวังไว้หรือไม่ ไปจนถึงการทดสอบส่วนของ Frontend ที่เกี่ยวข้องทั้งหมด เพื่อทำการยืนยันความสมบูรณ์ในขั้นสุดท้าย</span></li>
<li><span style="font-weight: 400;">ทำการ Deploy เป็นขั้นตอนสุดท้ายในขั้นตอนการพัฒนาที่ได้กำหนดไว้ โดยเมื่อทำการทดสอบตัว Frontend จนสมบูรณ์ในแต่ละส่วนแล้ว จะทำการ Deploy Frontend ในส่วนนั้น ๆ โดยใช้ Docker</span></li>
</ol>
<p><strong>Backend</strong><br />ในส่วนของ Backend เราจะมีการกำหนดขั้นตอนการพัฒนาอยู่ทั้งหมด 4 ขั้นตอน พร้อมกำหนดรายละเอียดคร่าวๆ ลงในแต่ละขั้นตอน ดังนี้</p>
<ol>
<li><span style="font-weight: 400;">ออกแบบ API ที่ใช้ในการเพิ่มสถานที่ให้บริการเตียง</span></li>
<li><span style="font-weight: 400;">ทำการพัฒนาโดยใช้ Express.js ซึ่งเป็นเฟรมเวิร์คจาก NPM ที่ใช้พัฒนาเว็บแอพพลิเคชั่นหรือเว็บไซต์บน Node.js ที่ทำงานที่ฝั่งของ Backend</span></li>
<li><span style="font-weight: 400;">ทำการ Test หรือก็คือ ทำการทดสอบตัว Backend ที่พัฒนาจนเสร็จแล้วในแต่ละส่วน ว่าสามารถทำงานได้สมบูรณ์ตามที่คาดหวังไว้หรือไม่ ตามหัวข้อดังนี้</span>
<ul style="list-style-type: circle;">
<li><span style="font-weight: 400;">ตรวจสอบการส่งข้อมูลของผู้ใช้จาก Frontend ไปที่ Backend</span></li>
<li><span style="font-weight: 400;">ตรวจสอบข้อมูลที่ส่งมา ว่าได้รับข้อมูลมูลถูกต้องครบถ้วนหรือไม่</span></li>
<li><span style="font-weight: 400;">ตรวจสอบการเข้าถึงและการเชื่อมต่อฐานข้อมูล</span></li>
</ul>
</li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">ทำการ Deploy เป็นขั้นตอนสุดท้ายในขั้นตอนการพัฒนาที่ได้กำหนดไว้โดยเมื่อ ทำการทดสอบตัว Backend จนสมบูรณ์แล้ว จะทำการ Deploy Backend ในส่วนนั้นๆ โดยใช้ Docker</span></li>
</ol>
<p><span style="font-weight: 400;"><strong>Database</strong></span></p>
<p><span style="font-weight: 400;">ในส่วนของ database เราเลือกใช้เป็น MySQL เพื่อง่ายต่อการเข้าถึงข้อมูลที่มีความสัมพันธ์กันได้เป็นอย่างดี โดยเราจะทำการกำหนดข้อมูลที่ต้องการจัดเก็บและออกแบบตารางและความสัมพันธ์บนระบบคลาวด์ AWS Amazon RDS</span></p>
<p><span style="font-weight: 400;"><strong>List of Task</strong></span></p>
<p><span style="font-weight: 400;"><strong>Frontend</strong></span></p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 57.6419%; text-align: center;">
<p><strong>Task</strong></p>
</td>
<td style="width: 18.1951%; text-align: center;">
<p><strong>เวลาที่กำหนด</strong></p>
</td>
<td style="width: 24.0175%; text-align: center;">
<p><strong>ผู้รับผิดชอบ</strong></p>
</td>
</tr>
<tr>
<td style="width: 57.6419%;">
<p><span style="font-weight: 400;">1.ออกแบบหน้า UI ในส่วนของการเพิ่ม</span><span style="font-weight: 400;">สถานที่ให้บริการเตียง</span></p>
</td>
<td style="width: 18.1951%; text-align: center;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 24.0175%; text-align: center;">
<p><span style="font-weight: 400;">นายอคิราภ์ สีแสนยง</span></p>
</td>
</tr>
<tr>
<td style="width: 57.6419%;">
<p><span style="font-weight: 400;">2.ทำการพัฒนาหน้าการจัดการสถานที่ โดยใช้ Vue.JS ในการพัฒนา</span></p>
</td>
<td style="width: 18.1951%; text-align: center;">
<p><span style="font-weight: 400;">2 ชั่วโมง</span></p>
</td>
<td style="width: 24.0175%; text-align: center;">
<p><span style="font-weight: 400;">นายวิชยุตม์ ทวิชัยยุทธ</span></p>
</td>
</tr>
<tr>
<td style="width: 57.6419%;">
<p><span style="font-weight: 400;">3.ทำการพัฒนาหน้า</span><span style="font-weight: 400;">เพิ่มสถานที่ให้บริการเตียง</span><span style="font-weight: 400;">โดยใช้ Vue.JS ในการพัฒนา</span></p>
</td>
<td style="width: 18.1951%; text-align: center;">
<p><span style="font-weight: 400;">4 ชั่วโมง</span></p>
</td>
<td style="width: 24.0175%; text-align: center;">
<p><span style="font-weight: 400;">นายพิชญะ สิงห์มีศรี</span></p>
</td>
</tr>
</tbody>
</table>
<p><strong>Backend</strong></p>
<table style="border-collapse: collapse; width: 100%; height: 243px;" border="1">
<tbody>
<tr style="height: 46px;">
<td style="width: 57.642%; text-align: center; height: 46px;">
<p><strong>Task</strong></p>
</td>
<td style="width: 18.3405%; text-align: center; height: 46px;">
<p><strong>เวลาที่กำหนด</strong></p>
</td>
<td style="width: 23.8719%; text-align: center; height: 46px;">
<p><strong>ผู้รับผิดชอบ</strong></p>
</td>
</tr>
<tr style="height: 69px;">
<td style="width: 57.642%; height: 69px;">
<p><span style="font-weight: 400;">1.ออกแบบ backend เพื่อรองรับในส่วนของการเพิ่ม</span><span style="font-weight: 400;">สถานที่ให้บริการเตียง</span></p>
</td>
<td style="width: 18.3405%; height: 69px; text-align: center;">
<p><span style="font-weight: 400;">3 ชัวโมง</span></p>
</td>
<td style="width: 23.8719%; height: 69px; text-align: center;">
<p><span style="font-weight: 400;">นายพลัฏฐ์ วงศ์สิทธิพรรุ่ง</span></p>
</td>
</tr>
<tr style="height: 64px;">
<td style="width: 57.642%; height: 64px;">
<p><span style="font-weight: 400;">2.พัฒนา Backend เพื่อรองรับการเข้าถึงข้อมูลสถานที่ให้บริการเตียงโดยใช้ Node.js ในการพัฒนา</span></p>
</td>
<td style="width: 18.3405%; height: 64px; text-align: center;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 23.8719%; height: 64px; text-align: center;">
<p><span style="font-weight: 400;">นายพลัฏฐ์ วงศ์สิทธิพรรุ่ง</span></p>
</td>
</tr>
<tr style="height: 64px;">
<td style="width: 57.642%; height: 64px;">
<p><span style="font-weight: 400;">3.พัฒนา Backend สำหรับการเพิ่มสถานที่ให้บริการเตียง โดยใช้ Node.js ในการพัฒนา</span></p>
</td>
<td style="width: 18.3405%; height: 64px; text-align: center;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 23.8719%; height: 64px; text-align: center;">
<p><span style="font-weight: 400;">นายประธาน นาเวียง</span></p>
</td>
</tr>
</tbody>
</table>
<p><strong>Database</strong></p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 58.8064%; text-align: center;">
<p><strong>Task</strong></p>
</td>
<td style="width: 17.6129%; text-align: center;">
<p><strong>เวลาที่กำหนด</strong></p>
</td>
<td style="width: 23.4352%; text-align: center;">
<p><strong>ผู้รับผิดชอบ</strong></p>
</td>
</tr>
<tr>
<td style="width: 58.8064%;">
<p><span style="font-weight: 400;">1.ออกแบบ Database สำหรับเก็บข้อมูลของสถานที่ให้บริการเตียง, ผู้ให้บริการ และจำนวนเตียงที่ให้บริการ</span></p>
</td>
<td style="width: 17.6129%; text-align: center;">
<p><span style="font-weight: 400;">3 ชัวโมง</span></p>
</td>
<td style="width: 23.4352%; text-align: center;">
<p><span style="font-weight: 400;">นายปภัส เงาธัมมะสกุล</span></p>
</td>
</tr>
<tr>
<td style="width: 58.8064%;">
<p><span style="font-weight: 400;">2.พัฒนา Database สำหรับเก็บข้อมูลของสถานที่ให้บริการเตียง, ผู้ให้บริการ และจำนวนเตียงที่ให้บริการ โดยใช้ MySQL ในการพัฒนา</span></p>
</td>
<td style="width: 17.6129%; text-align: center;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 23.4352%; text-align: center;">
<p><span style="font-weight: 400;">นายประธาน นาเวียง</span></p>
</td>
</tr>
</tbody>
</table>
<p><strong>เงื่อนไขในการผ่าน Acceptance Test</strong></p>
<p><strong>Frontend</strong></p>
<p><strong>Task 1 : ออกแบบหน้า UI ในส่วนของการเพิ่มสถานที่ให้บริการเตียง</strong></p>
<ul>
<li><strong><span style="font-weight: 400;">ต้องมีหน้า UI ของ 2 หน้าหลักครบ ได้แก่ หน้าการจัดการสถานที่ และ</span><span style="font-weight: 400;">เพิ่ม</span><span style="font-weight: 400;">สถานที่ให้บริการเตียง</span></strong></li>
<li><strong><span style="font-weight: 400;">หน้าการจัดการเตียงที่ออกแบบออกมา จะต้องมีการแสดงผลข้อมูลสถานที่ให้บริการเตียงที่ user เป็นผู้ให้บริการทั้งหมด</span></strong></li>
<li><strong><span style="font-weight: 400;">หน้าการจัดการเตียงที่ออกแบบออกมา จะต้องมี Element ปุ่มที่ใช้ในการกด เพิ่มสถานที่ และปุ่มยกเลิก</span></strong></li>
<li><strong><span style="font-weight: 400;">หน้าเพิ่มสถานที่ให้บริการเตียง จะต้องมีการช่องกรอกข้อมูลทั้งหมด 5 ช่อง โดยจะสามารถกรอกได้เฉพาะ 2 ช่อง คือ ช่องจำนวนเตียง และช่องพิกัดที่อยู่</span></strong></li>
<li><strong><span style="font-weight: 400;">ในหน้าเพิ่มสถานที่ให้บริการเตียง จะต้องมีการแสดง แผนทีีที่อยู่ หลังจากระบุพิกัดที่อยู่ที่ถูกต้อง</span></strong></li>
</ul>
<p><strong>Task 2 : ทำการพัฒนาหน้าการจัดการเตียง โดยใช้ Vue.JS ในการพัฒนา</strong></p>
<ul>
<li><strong><span style="font-weight: 400;">หน้าการจัดการสถานที่</span><span style="font-weight: 400;">ที่ได้ทำการพัฒนาแล้วนั้นต้องมีรูปแบบ UI ตามที่ได้ออกแบบไว้ครบถ้วน</span></strong></li>
<li><strong><span style="font-weight: 400;">หน้าการจัดการสถานที่ที่ได้ทำการพัฒนาแล้วนั้น จะต้องมีปุ่มที่สามารถลิ้งค์ไปที่หน้า เพิ่มสถานที่ให้บริการเตียงได้</span></strong></li>
</ul>
<p><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/21.PNG?raw=true" alt="" /></p>
<p><strong>Task 3 : </strong><strong>ทำการพัฒนาหน้าเพิ่ม</strong><strong>สถานที่ให้บริการเตียง</strong><strong> โดยใช้ Vue.JS ในการพัฒนา</strong></p>
<ul>
<li><strong><span style="font-weight: 400;">หน้าเพิ่ม</span><span style="font-weight: 400;">สถานที่ให้บริการเตียงที่ได้ทำการพัฒนาแล้วนั้นจะต้องมีรูปแบบ UI ตามที่ได้ออกแบบไว้ครบถ้วน</span></strong></li>
<li><strong><span style="font-weight: 400;">หน้าเพิ่มสถานที่ให้บริการเตียงที่ได้ทำการพัฒนาแล้วนั้นจะต้องสามารถกรอกข้อมูล จำนวนเตียง และพิกัดที่อยู่ได้</span></strong></li>
<li><strong><span style="font-weight: 400;">หน้าเพิ่มสถานที่ให้บริการเตียงที่ได้ทำการพัฒนาแล้วนั้นจะต้องมีการแสดงผลในรูปแบบแผนที่ หลังจากระบุพิกัดเสร็จ</span></strong></li>
<li><strong><span style="font-weight: 400;">หน้าเพิ่มสถานที่ให้บริการเตียงที่ได้ทำการพัฒนาแล้วนั้นจะต้องสามารถกดปุ่มเพื่อยืนยันความถูกต้องของข้อมูล และเพิ่มสถานที่ได้</span></strong></li>
</ul>
<p><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/22.PNG?raw=true" alt="" /></p>
<p><strong>Backend</strong></p>
<p><strong>Task 1: ออกแบบ backend เพื่อรองรับในส่วนของการเพิ่มสถานที่ให้บริการเตียง</strong></p>
<ul>
<li><strong><span style="font-weight: 400;">backend ที่ได้ออกแบบมีรูปแบบการทำงานที่รองรับการเรียกใช้งานจากฝั่ง frontend</span></strong></li>
<li><strong><span style="font-weight: 400;">backend ที่ออกแแบบออกมาต้องมีรูปแบบของ API ที่เข้าใจได้ง่าย เพื่อง่ายแก่การเรียกใช้งาน</span></strong></li>
<li><strong><span style="font-weight: 400;">Backend ที่ออกแบบมาจะต้องมีการรองรับฟังก์ชันทั้งหมด 2 ฟังก์ชันหลัก ได้แก่ การดึงข้อมูลขอลสถานที่ให้บริการเตียงที่ user เป็นผู้ให้บริการ และการเพิ่มข้อมูลสถานที่บริการเตียงใหม่ที่ user ต้องการเพิ่ม</span></strong></li>
</ul>
<p><strong>Task 2: พัฒนา Backend เพื่อรองรับการเข้าถึงข้อมูลสถานที่ให้บริการเตียงโดยใช้ Node.js ในการพัฒนา</strong></p>
<ul>
<li><strong><span style="font-weight: 400;">สามารถเข้าถึงข้อมูลของสถานที่ให้บริการเตียงใน database ที่ user เป็นผู้ให้บริการได้</span></strong></li>
<li><strong><span style="font-weight: 400;">สามารถส่งข้อมูลสถานที่ให้บริการเตียงดังกล่าว กลับไปยังฝั่งของ frontend ได้อย่างถูกต้อง</span></strong></li>
</ul>
<p><strong>Task 3: พัฒนา Backend สำหรับการเพิ่มสถานที่ให้บริการเตียง โดยใช้ Node.js ในการพัฒนา</strong></p>
<ul>
<li>สามารถเพิ่มข้อมูลสถานที่ให้บริการเตียงที่ user เป็นผู้ให้บริการลงใน database ได้<strong><br /></strong></li>
<li>สามารถ check ของสถานที่ให้บริการเตียงที่จะเพิ่มว่ามีความถูกต้องหรือไม่ ก่อนทำการเพิ่มข้อมูลเข้าไปยัง database ได้</li>
</ul>
<p><strong>Database</strong></p>
<p><strong>Task 1: ออกแบบ Database สำหรับเก็บข้อมูลของสถานที่ให้บริการเตียง, ผู้ให้บริการ และจำนวนเตียงที่ให้บริการ</strong></p>
<ul>
<li><strong><span style="font-weight: 400;">Database ที่ออกแบบจะต้องเป็นในรูปแบบของ MySQL</span></strong></li>
<li><strong><span style="font-weight: 400;">Database ที่ออกแบบจะต้องมีการเก็บข้อมูลทั้งหมด 2 ส่วน ได้แก่ ข้อมูลสถานที่ให้บริการเตียง user ที่เป็นเจ้าของสถานที่ และจำนวนเตียงที่ให้บริการ</span></strong></li>
</ul>
<p><strong>Task 2: พัฒนา Database สำหรับเก็บข้อมูลของสถานที่ให้บริการเตียง, ผู้ให้บริการ และจำนวนเตียงที่ให้บริการ โดยใช้ MySQL ในการพัฒนา</strong></p>
<ul>
<li><strong><span style="font-weight: 400;">Database ที่พัฒนาขึ้นมาสามารถจัดเก็บข้อมูลที่จำเป็นทั้งหมดได้ ตามที่ออกแบบไว้</span></strong></li>
<li><strong><span style="font-weight: 400;">Database ที่พัฒนาขึ้นมาจะต้องมีการใช้ชนิดข้อมูล (Data Type) ที่เหมาะสมกับข้อมูลนั้น</span></strong></li>
</ul>
<p>&nbsp;</p>
<p><strong>Test Stratergies</strong></p>
<p><strong><span style="font-weight: 400;">ในการทดสอบระบบเพิ่ม</span><span style="font-weight: 400;">สถานที่ให้บริการเตียง</span><span style="font-weight: 400;"> จะมีการแบ่งรูปแบบของการทดสอบออกเป็น 3 ส่วน ดังนี้</span></strong></p>
<p><strong>Unit Test</strong></p>
<ul style="list-style-type: square;">
<li><strong>Frontend<br /></strong>เป็นการทดสอบตัว feature เพิ่มสถานที่ให้บริการเตียง ของระบบ โดยจะทำการทดสอบในส่วนของ พิกัดที่อยู่ ซึ่งมีขั้นตอนดังนี้
<ol>
<li>ทดสอบการเปลี่ยนค่าจาก องศา(Degree) ไปเป็น เรเดียน
<ol>
<li>ทดสอบค่าองศาที่ 0</li>
<li>ทดสอบค่าองศาที่ 90</li>
<li>ทดสอบค่าองศาที่ 180</li>
<li>ทดสอบค่าองศาที่ 360</li>
</ol>
</li>
<li>ทดสอบการแปลงค่า Latitude และLongtitude เพื่อหาระยะทางในกิโล
<ol>
<li>ทดสอบค่า Latitude1 = 0 , Longtitude1 = 0, Latitude2 = 0 ,Longtitude2 = 0</li>
<li><span style="font-weight: 400;">ทดสอบค่า Latitude1 = 0 , Longtitude1 = 0, Latitude2 = 0 ,Longtitude2 = 90</span></li>
<li><span style="font-weight: 400;">ทดสอบค่า Latitude1 = 0 , Longtitude1 = 0, Latitude2 = 0 ,Longtitude2 = 180<br /></span></li>
<li><span style="font-weight: 400;">ทดสอบค่า Latitude1 = 0 , Longtitude1 = 0, Latitude2 = 0 ,Longtitude2 = 360<br /></span></li>
</ol>
</li>
</ol>
</li>
<li><span style="font-weight: 400;"><strong>Backend</strong><br />เป็นการทดสอบส่วนย่อยของระบบ โดยจะเน้นไปที่การทดสอบ Request ที่เข้ามา โดยที่เป็นส่วนสำคัญของระบบการเพิ่มสถานที่ให้บริการเตียง โดยมี test case คือ</span>
<ul style="list-style-type: square;">
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">สามารสร้างสถานที่ให้บริการเตียงเพิ่มขึ้นใหม่ได้หรือไม่&nbsp; (POST: /beds)</span></li>
</ul>
</li>
</ul>
<p><span style="font-weight: 400;"><strong>Component Test</strong></span></p>
<ul style="list-style-type: square;">
<li>
<p><strong>Frontend</strong></p>
<p>เป็นการทดสอบว่าในแต่ละหน้าที่เกี่ยวข้องกับ feature การเพิ่มสถานที่ให้บริการเตียงนั้น มีส่วนประกอบ หรือ component ที่ควรจะอยู่ในหน้านั้น ๆ ครบถ้วนหรือไม่ โดยจะเน้นเฉพาะส่วนของ Frontend ที่เกี่ยวข้อง การทดสอบในส่วน Component test จะสามารถแบ่งออกได้เป็น 1 ส่วน ดังนี้</p>
<ol>
<li><strong>การทำ Component test ในส่วนของหน้าการจัดการเตียง</strong> เป็นการทดสอบเพื่อดูว่าหน้าการจัดการเตียง มีส่วนประกอบต่างๆครบถ้วนหรือไม่ โดยในหน้าการจัดการเตียง จะมีส่วนประกอบที่ต้องมีอยู่เพียง 1 ส่วนประกอบ ได้แก่ ปุ่มสำหรับกดเพื่อเข้าถึงหน้าเพิ่มสถานที่ให้บริการเตียง</li>
</ol>
</li>
<li><strong>Backend</strong><br />การทดสอบ component test ของ feature การเพิ่มสถานที่ให้บริการเตียง ของฝั่ง Backend มี test case คือ<br />
<ul style="list-style-type: square;">
<li>การทดสอบการสร้างสถานที่ให้บริการเตียงเพิ่ม</li>
</ul>
</li>
</ul>
<p><strong>E2E Test</strong></p>
<ul style="list-style-type: square;">
<li>
<p><strong>Frontend</strong></p>
<p>เป็นการทดสอบตัว feature ระบบเพิ่มสถานที่ให้บริการเตียง ตั้งแต่เริ่มต้น จนจบ ซึ่งจะเริ่มตั้งแต่หน้า Login เข้าสู่ระบบ =&gt; หน้า main =&gt; หน้าจัดการสถานที่ =&gt; หน้าเพิ่มสถานที่ให้บริการเตียง โดยมีจุดประสงค์เพื่อทดลองว่า feature นี้ สามารถใช้งานได้จริง</p>
<p>โดยเริ่มจาก</p>
<ol>
<li>การกรอกข้อมูล email และ รหัสผ่านให้ถูกต้อง เพื่อลงชื่อเข้าใช้งานที่หน้า login</li>
<li>กดปุ่ม ฉันต้องการลงเตียง ที่แถบ Nav bar เพื่อไปที่หน้า จัดการสถานที่</li>
<li><span style="font-weight: 400;">กดปุ่ม เพิ่มสถานที่ เพื่อไปที่หน้า เพิ่มสถานที่</span></li>
<li><span style="font-weight: 400;">กรอกข้อมูล จำนวนเตียง และระบุพิกัดที่อยู่ ให้ถูกต้อง</span></li>
<li><span style="font-weight: 400;">กดปุ่ม เพิ่มสถานที่เดี๋ยวนี้ และกดยืนยัน</span></li>
</ol>
</li>
<li>
<p><strong>Backend</strong></p>
<p>เป็นการทดสอบการเรียก API ทั้งหมดที่เกี่ยวข้องกับ feature การเพิ่มสถานที่ให้บริการเตียง ตั้งแต่การ Signin จนถึง การแก้ไขจำนวนเตียง ดังนี้</p>
<ul style="list-style-type: square;">
<li>POST: user/signin</li>
<li>POST: /beds</li>
</ul>
</li>
</ul>
<p><strong>Test Result</strong></p>
<p><strong>Unit Test</strong></p>
<ul style="list-style-type: square;">
<li>
<p><strong>Frontend</strong></p>
<p>ผลการทดสอบ unit test ในส่วนของ function ที่เกี่ยวข้องกับพิกัดที่อยู่ ซึ่งจะมีการทดสอบทั้งหมด 2 ส่วน ดังนี้</p>
<ol>
<li>ทดสอบการเปลี่ยนค่าจาก องศา(Degree) ไปเป็น เรเดียน
<ul style="list-style-type: square;">
<li>ทดสอบค่าองศาที่ 0<br />ผลการทดสอบ : success (เปลี่ยนองศาไปเรเดียนได้จริง)</li>
<li>ทดสอบค่าองศาที่ 90<br />ผลการทดสอบ : success (เปลี่ยนองศาไปเรเดียนได้จริง)</li>
<li>ทดสอบค่าองศาที่ 180<br />ผลการทดสอบ : success (เปลี่ยนองศาไปเรเดียนได้จริง)</li>
<li>ทดสอบค่าองศาที่ 360<br />ผลการทดสอบ : success (เปลี่ยนองศาไปเรเดียนได้จริง)</li>
</ul>
</li>
<li>ทดสอบการแปลงค่า Latitude และLongtitude เพื่อหาระยะทางในกิโล
<ul style="list-style-type: square;">
<li>ทดสอบค่า Latitude1 = 0 , Longtitude1 = 0, Latitude2 = 0 ,Longtitude2 = 0<br />ผลการทดสอบ : success (สามารถหาระยะทางได้จริง)</li>
<li>ทดสอบค่า Latitude1 = 0 , Longtitude1 = 0, Latitude2 = 0 ,Longtitude2 = 90<br />ผลการทดสอบ : success (สามารถหาระยะทางได้จริง)</li>
<li>ทดสอบค่า Latitude1 = 0 , Longtitude1 = 0, Latitude2 = 0 ,Longtitude2 = 180<br />ผลการทดสอบ : success (สามารถหาระยะทางได้จริง)</li>
<li>ทดสอบค่า Latitude1 = 0 , Longtitude1 = 0, Latitude2 = 0 ,Longtitude2 = 360<br />ผลการทดสอบ : success (สามารถหาระยะทางได้จริง)</li>
</ul>
</li>
</ol>
</li>
<li><strong>Backend</strong><br />เป็นการทดสอบส่วนย่อยของระบบ โดยจะเน้นไปที่การทดสอบ Request ที่เข้ามา โดยที่เป็นส่วนสำคัญของระบบการเพิ่มสถานที่ให้บริการเตียง โดยมี test case คือ สามารถทำการสร้างสถานที่ให้บริการเตียงเพิ่มได้ (POST: /beds) =&gt; <strong>(Success)</strong></li>
</ul>
<p><strong>Component Test</strong></p>
<ul style="list-style-type: square;">
<li>
<p><strong>Frontend</strong></p>
<p>ผลการทดสอบ frontend component test จะแบ่งออกเป็น 2 ส่วน เหมือนที่ได้ระบุไว้ใน test stratergies ดังนี้</p>
<ol>
<li>การทำ Component test ในส่วนของหน้าการจัดการเตียง
<ul style="list-style-type: square;">
<li>ปุ่มสำหรับกดเพื่อเข้าถึงหน้าเพิ่มสถานที่ให้บริการเตียง<br />ผลการทดสอบ : success (มี Element นี้อยู่จริง)</li>
</ul>
</li>
</ol>
</li>
</ul>
<p><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/23.PNG?raw=true" alt="" /></p>
<ul style="list-style-type: square;">
<li><strong>Backend</strong><br />การทดสอบ component test ของ feature การเพิ่มสถานที่ให้บริการเตียง ของฝั่ง Backend มี test case คือ<br />
<ul style="list-style-type: square;">
<li>การทดสอบการสร้างสถานที่ให้บริการเตียงเพิ่ม (Success)</li>
</ul>
</li>
</ul>
<p><strong>E2E Test</strong></p>
<ul style="list-style-type: square;">
<li><strong>Frontend<br /></strong>ผลการทดสอบของ feature การเพิ่มสถานที่ให้บริการเตียง ที่ฝั่ง Frontend มีเพียงผลลัพธ์การทดสอบเดียว คือการเพิ่มสถานที่จองเตียง หลังจากกรอกจำนวนเตียง และระบุพิกัดอย่างถูกต้อง: Success (สามารถเพิ่มสถานที่จองเตียงได้)</li>
<li><strong>Backend</strong></li>
</ul>
<p><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/24.PNG?raw=true" alt="" /></strong></p>
<h1><strong>4.เพิ่มฟีเจอร์ใหม่ : ผู้ให้บริการเตียงเพิ่ม/ลดจำนวนเตียงที่ให้บริการได้</strong></h1>
<p><strong>User Flow</strong></p>
<p><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/25.PNG?raw=true" alt="" /></strong></p>
<p><strong><span style="font-weight: 400;">User Flow ของ feature ผู้ให้บริการเตียงเพิ่ม/ลดจำนวนเตียงที่ให้บริการได้ประกอบด้วย&nbsp; ขั้นตอน ดังนี้</span></strong></p>
<ol>
<li><strong><span style="font-weight: 400;">ผู้ให้บริการเตียงเลือกเข้าหน้าการจัดการเตียง และทำการเลือกสถานที่ให้บริการเตียงที่ต้องการแก้ไข</span></strong></li>
<li><strong><span style="font-weight: 400;">เมื่อเข้ามาที่หน้าของการแก้ไขข้อมูลเตียงแล้ว ทำการเพิ่ม - ลดจำนวนเตียงตามที่ต้องการ</span></strong></li>
<li><strong><span style="font-weight: 400;">ทำการยืนยันการเพิ่ม - ลดจำนวนเตียง</span></strong></li>
</ol>
<p><strong>UI Flow</strong></p>
<p><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/26.PNG?raw=true" alt="" /></strong></p>
<p><span style="font-weight: 400;">ในส่วนของ UI Flow จะประกอบไปด้วย 2 หน้าหลัก ดังนี้</span></p>
<ol>
<li>หน้า bedsmanage (หน้าการจัดการเตียง) ในหน้านี้จะมีการแสดงผลของสถานที่ให้บริการเตียงทั้งหมดที่เปิดให้บริการโดย user ซึ่ง user สามารถเลือกสถานที่ให้บริการเตียงที่ต้องการแก้ไขข้อมูลได้ผ่านทางหน้านี้</li>
<li>หน้า bedsedit (หน้าแก้ไขข้อมูลสถานที่ให้บริการเตียง) หน้านี้จะปรากฏขึ้น เมื่อผู้ใช้เลือกสถานที่ให้บริการเตียงที่จะทำการแก้ไขข้อมูล จากรายชื่อสถานที่ในหน้าการจัดการเตียงเรียบร้อยแล้ว ในหน้านี้จะมีการแสดงผลปุ่ม + และปุ่ม - สำหรับกดเพื่อเพิ่มลดจำนวนเตียง จำนวนเตียงที่ให้บริการได้ในปัจจุบัน และปุ่มยืนยันการแก้ไขข้อมูลสถานที่ให้บริการเตียง</li>
</ol>
<p><strong>Acceptance Test</strong></p>
<p><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/27.PNG?raw=true" alt="" /></strong></p>
<p><strong>Technical</strong></p>
<p>ในด้าน technical ของ feature การเพิ่ม/ลดจำนวนเตียงที่ให้บริการของผู้ให้บริการ สามารถอธิบายและแบ่งออกเป็นหัวข้อย่อย ๆได้ ดังนี้</p>
<p><strong><br />Frontend <br /></strong>ในส่วน Frontend เราจะมีการกำหนดขั้นตอนการพัฒนาอยู่ทั้งหมด 5 ขั้นตอน พร้อมกำหนดรายละเอียดคร่าวๆ ลงในแต่ละขั้นตอน ดังนี้<strong><br /></strong></p>
<ol>
<li>ออกแบบ UI เป็นการออกแบบหน้าตา UI ของการทำงานต่างๆ ที่เกี่ยวข้องกับ Feature การเพิ่ม/ลดจำนวนเตียงที่ให้บริการของผู้ให้บริการ โดยแบ่งออกได้เป็น 2 หน้าจอหลัก ได้แก่
<ol>
<li>หน้าการจัดการเตียง</li>
<li>หน้าแก้ไขข้อมูลสถานที่ให้บริการเตียง</li>
</ol>
</li>
<li>ออกแบบ Business Logic เป็นการออกแบบตัว Frontend ให้ตอบสนองกับตัว Business ที่ต้องการจาก feature ตัวนี้</li>
<li>ทำการเขียนโค้ดเพื่อพัฒนาหน้า UI ต่าง ๆ ขึ้นมา ตามที่ได้ออกแบบไว้ใน 2 ขั้นตอนที่กล่าวไปข้างต้น โดยในส่วนนี้จะใช้ Vue.JS ในการพัฒนาเป็นหลัก โดยที่อาจจะมีการใช้เครื่องมืออื่นๆในการพัฒนาร่วมด้วย ยกตัวอย่างเช่น
<ul>
<li>HTML</li>
<li>CSS</li>
<li>Boostrap</li>
</ul>
</li>
<li>ทำการ Test หรือก็คือ ทำการทดสอบตัว Frontend ที่พัฒนาจนเสร็จสิ้นแล้วในแต่ละส่วน ว่าสามารถทำงานได้สมบูรณ์ตามที่คาดหวังไว้หรือไม่ ไปจนถึงการทดสอบส่วนของ Frontend ที่เกี่ยวข้องทั้งหมด เพื่อทำการยืนยันความสมบูรณ์ในขั้นสุดท้าย</li>
<li>ทำการ Deploy เป็นขั้นตอนสุดท้ายในขั้นตอนการพัฒนาที่ได้กำหนดไว้ โดยเมื่อทำการทดสอบตัว Frontend จนสมบูรณ์ในแต่ละส่วนแล้ว จะทำการ Deploy Frontend ในส่วนนั้น ๆ โดยใช้ Docker</li>
</ol>
<p><strong>Backend</strong><br />ในส่วนของ Backend เราจะมีการกำหนดขั้นตอนการพัฒนาอยู่ทั้งหมด 4 ขั้นตอนพร้อมกำหนดลายละเอียดคร่าวๆ ลงในแต่ละขั้นตอน ดังนี้</p>
<ol>
<li>ออกแบบ API ที่ใช้ในการเพิ่ม/ลดจำนวนเตียงที่ให้บริการของผู้ให้บริการเตียง</li>
<li>ทำการพัฒนาโดยใช้ Express.js ซึ่งเป็นเว็บเฟรมเวิร์คจาก NPM ที่ใช้สำหรับพัฒนาเว็บแอพพลิเคชั่นหรือเว็บไซต์บน Node.js ที่ทำงานที่ฝั่งของ Backend</li>
<li>ทำการ Test หรือก็คือ ทำการทดสอบตัว Backend ที่พัฒนาจนเสร็จแล้วในแต่ละส่วน ว่าสามารถทำงานได้สมบูรณ์ตามที่คาดหวังไว้หรือไม่ ตามหัวข้อดังนี้
<ul>
<li>ตรวจสอบการส่งข้อมูลของผู้ใช้จาก Frontend ไปที่ Backend</li>
<li>ตรวจสอบข้อมูลที่ส่งมา ว่าได้รับข้อมูลถูกต้องครบถ้วนหรือไม่</li>
<li>ตรวจสอบการเข้าถึงและการเชื่อมต่อกับฐานข้อมูล</li>
</ul>
</li>
<li>ทำการ Deploy เป็นขั้นตอนสุดท้ายในขั้นตอนการพัฒนาที่ได้กำหนดไว้ โดยเมื่อทำการทดสอบตัว Backend จนสมบูรณ์แล้ว จะทำการ Deploy Backend ในส่วนนั้นๆ โดยใช้ Docker</li>
</ol>
<p><strong>Database</strong><br />ในส่วนของ database เราเลือกใช้เป็น MySQL เพื่อง่ายต่อการเข้าถึงข้อมูลที่มีความสัมพันธ์กันได้เป็นอย่างดี โดยเราจะทำการกำหนดข้อมูลที่ต้องการจัดเก็บและออกแบบตารางและความสัมพันธ์บนระบบคลาวด์ AWS Amazon RDS</p>
<p><strong>List of Task</strong></p>
<p><strong>Frontend</strong></p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 61.2809%; text-align: center;">
<p><strong>Task</strong></p>
</td>
<td style="width: 16.5939%; text-align: center;">
<p><strong>เวลาที่กำหนด</strong></p>
</td>
<td style="width: 21.9796%; text-align: center;">
<p><strong>ผู้รับผิดชอบ</strong></p>
</td>
</tr>
<tr>
<td style="width: 61.2809%;">
<p><span style="font-weight: 400;">1.ออกแบบหน้า UI ในส่วนของการเพิ่ม - ลดจำนวนเตียง</span></p>
</td>
<td style="width: 16.5939%; text-align: center;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 21.9796%; text-align: center;">
<p><span style="font-weight: 400;">นายอคิราภ์ สีแสนยง</span></p>
</td>
</tr>
<tr>
<td style="width: 61.2809%;">
<p><span style="font-weight: 400;">2.ทำการพัฒนาหน้าการจัดการเตียง โดยใช้ Vue.JS ในการพัฒนา</span></p>
</td>
<td style="width: 16.5939%; text-align: center;">
<p><span style="font-weight: 400;">4 ชั่วโมง</span></p>
</td>
<td style="width: 21.9796%; text-align: center;">
<p><span style="font-weight: 400;">นายวิชยุตม์ ทวิชัยยุทธ</span></p>
</td>
</tr>
<tr>
<td style="width: 61.2809%;">
<p><span style="font-weight: 400;">3.ทำการพัฒนาหน้าแก้ไขข้อมูลสถานที่ให้บริการเตียง โดยใช้ Vue.JS ในการพัฒนา</span></p>
</td>
<td style="width: 16.5939%; text-align: center;">
<p><span style="font-weight: 400;">4 ชั่วโมง</span></p>
</td>
<td style="width: 21.9796%; text-align: center;">
<p><span style="font-weight: 400;">นายพิชญะ สิงห์มีศรี</span></p>
</td>
</tr>
</tbody>
</table>
<p><strong>Backend</strong></p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 61.5721%; text-align: center;">
<p><strong>Task</strong></p>
</td>
<td style="width: 16.4483%; text-align: center;">
<p><strong>เวลาที่กำหนด</strong></p>
</td>
<td style="width: 21.834%; text-align: center;">
<p><strong>ผู้รับผิดชอบ</strong></p>
</td>
</tr>
<tr>
<td style="width: 61.5721%;">
<p><span style="font-weight: 400;">1.ออกแบบ backend เพื่อรองรับในส่วนของการเพิ่ม - ลดจำนวนเตียง</span></p>
</td>
<td style="width: 16.4483%; text-align: center;">
<p><span style="font-weight: 400;">3 ชัวโมง</span></p>
</td>
<td style="width: 21.834%; text-align: center;">
<p><span style="font-weight: 400;">นายพลัฏฐ์ วงศ์สิทธิพรรุ่ง</span></p>
</td>
</tr>
<tr>
<td style="width: 61.5721%;">
<p><span style="font-weight: 400;">2.พัฒนา Backend เพื่อรองรับการเข้าถึงข้อมูลสถานที่ให้บริการเตียงโดยใช้ Node.js ในการพัฒนา</span></p>
</td>
<td style="width: 16.4483%; text-align: center;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 21.834%; text-align: center;">
<p><span style="font-weight: 400;">นายพลัฏฐ์ วงศ์สิทธิพรรุ่ง</span></p>
</td>
</tr>
<tr>
<td style="width: 61.5721%;">
<p><span style="font-weight: 400;">3.พัฒนา Backend สำหรับแก้ไขข้อมูสถานที่ให้บริการเตียง โดยใช้ Node.js ในการพัฒนา</span></p>
</td>
<td style="width: 16.4483%; text-align: center;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 21.834%; text-align: center;">
<p><span style="font-weight: 400;">นายประธาน นาเวียง</span></p>
</td>
</tr>
</tbody>
</table>
<p><strong>Database</strong></p>
<table style="border-collapse: collapse; width: 100%; height: 174px;" border="1">
<tbody>
<tr style="height: 46px;">
<td style="width: 61.4265%; text-align: center; height: 46px;">
<p><strong>Task</strong></p>
</td>
<td style="width: 17.0306%; text-align: center; height: 46px;">
<p><strong>เวลาที่กำหนด</strong></p>
</td>
<td style="width: 21.3974%; text-align: center; height: 46px;">
<p><strong>ผู้รับผิดชอบ</strong></p>
</td>
</tr>
<tr style="height: 64px;">
<td style="width: 61.4265%; height: 64px;">
<p><span style="font-weight: 400;">1.ออกแบบ Database สำหรับเก็บข้อมูลของสถานที่ให้บริการเตียง, ผู้ให้บริการ และจำนวนเตียงที่ให้บริการ</span></p>
</td>
<td style="width: 17.0306%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">3 ชัวโมง</span></p>
</td>
<td style="width: 21.3974%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">นายปภัส เงาธัมมะสกุล</span></p>
</td>
</tr>
<tr style="height: 64px;">
<td style="width: 61.4265%; height: 64px;">
<p><span style="font-weight: 400;">2.พัฒนา Database สำหรับเก็บข้อมูลของสถานที่ให้บริการเตียง, ผู้ให้บริการ และจำนวนเตียงที่ให้บริการ โดยใช้ MySQL ในการพัฒนา</span></p>
</td>
<td style="width: 17.0306%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">3 ชั่วโมง</span></p>
</td>
<td style="width: 21.3974%; text-align: center; height: 64px;">
<p><span style="font-weight: 400;">นายประธาน นาเวียง</span></p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p><strong>เงื่อนไขในการผ่าน Acceptance Test</strong></p>
<p><strong>Frontend</strong></p>
<p><strong>Task 1 : ออกแบบหน้า UI ในส่วนของการเพิ่ม - ลดจำนวนเตียง</strong></p>
<ul>
<li><strong><span style="font-weight: 400;">ต้องมีหน้า UI ของ 2 หน้าหลักครบ ได้แก่ หน้าการจัดการเตียง และหน้าแก้ไขข้อมูลสถานที่ให้บริการเตียง</span></strong></li>
<li><strong><span style="font-weight: 400;">หน้าการจัดการเตียงที่ออกแบบออกมา จะต้องมีการแสดงผลข้อมูลสถานที่ให้บริการเตียงที่ user เป็นผู้ให้บริการทั้งหมด</span></strong></li>
<li><strong><span style="font-weight: 400;">หน้าการจัดการเตียงที่ออกแบบออกมา จะต้องมี Element ปุ่มที่ใช้ในการกดเลือกสถานที่ให้บริการเตียงที่ต้องการแก้ไขข้อมูล</span></strong></li>
<li><strong><span style="font-weight: 400;">หน้าแก้ไขข้อมูลสถานที่ให้บริการเตียง จะต้องมีการแสดงผลจำนวนเตียงที่ให้บริการ ของสถานที่ให้บริการเตียงที่เลือกมา และสามารถพิมพ์ค่าเพื่อแก้ไขจำนวนเตียงได้</span></strong></li>
</ul>
<p><strong>Task 2 : ทำการพัฒนาหน้าการจัดการเตียง โดยใช้ Vue.JS ในการพัฒนา</strong></p>
<ul>
<li>หน้าการจัดการเตียงที่ได้ทำการพัฒนาแล้วนั้นต้องมีรูปแบบ UI ตามที่ได้ออกแบบไว้ครบถ้วน</li>
<li><span style="font-weight: 400;">หน้าการจัดการเตียงที่ได้ทำการพัฒนาแล้วนั้น ต้องสามารถกดปุ่มเพื่อเลือกสถานที่ให้บริการเตียงที่จะทำการแก้ไขข้อมูลได้</span></li>
</ul>
<p><span style="font-weight: 400;"><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/28.PNG?raw=true" alt="" /></span></p>
<p><strong>Task 3 : ทำการพัฒนาหน้าแก้ไขข้อมูลสถานที่ให้บริการเตียง โดยใช้ Vue.JS ในการพัฒนา</strong></p>
<ul>
<li>หน้าแก้ไขข้อมูลสถานที่ให้บริการเตียงที่ได้ทำการพัฒนาแล้วนั้นต้องมีรูปแบบ UI ตามที่ได้ออกแบบไว้ครบถ้วน</li>
<li>หน้าแก้ไขข้อมูลสถานที่ให้บริการเตียงที่ได้ทำการพัฒนาแล้วนั้น ต้องสามารถพิมพ์ค่าเพื่อเพิ่ม - ลดจำนวนเตียงที่ให้บริการได้</li>
<li>หน้าแก้ไขข้อมูลสถานที่ให้บริการเตียงที่ได้ทำการพัฒนาแล้วนั้น ต้องสามารถกดปุ่มเพื่อยืนยันการแก้ไขข้อมูลสถานที่ให้บริการเตียงนั้นๆได้</li>
</ul>
<p><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/29.PNG?raw=true" alt="" /></p>
<p>&nbsp;</p>
<p><strong>Backend</strong></p>
<p><strong>Task 1: ออกแบบ backend เพื่อรองรับในส่วนของการเพิ่ม - ลดจำนวนเตียง</strong></p>
<ul>
<li><strong><span style="font-weight: 400;">Backend ที่ได้ออกแบบมีรูปแบบการทำงานที่รองรับการเรียกใช้งานจากฝั่ง frontend</span></strong></li>
<li><strong><span style="font-weight: 400;">Backend ที่ออกแแบบออกมาต้องมีรูปแบบของ API ที่เข้าใจได้ง่าย เพื่อง่ายแก่การเรียกใช้งาน<br /></span></strong></li>
<li><strong><span style="font-weight: 400;">Backend ที่ออกแบบมาจะต้องมีการรองรับฟังก์ชันทั้งหมด 2 ฟังก์ชันหลัก ได้แก่ การเข้าถึงข้อมูลสถานที่ให้บริการเตียงที่ user เป็นผู้ให้บริการ และการจัดเก็บและแก้ไขข้อมูลสถานที่ให้บริการเตียงที่ user เป็นผู้ให้บริการ</span></strong></li>
</ul>
<p><strong>Task 2: พัฒนา Backend เพื่อรองรับการเข้าถึงข้อมูลสถานที่ให้บริการเตียงที่ user เป็นผู้ให้บริการ โดยใช้ Node.js ในการพัฒนา</strong></p>
<ul>
<li>สามารถเข้าถึงข้อมูลของสถานที่ให้บริการเตียงที่ user เป็นผู้ให้บริการใน database ได้<strong><br /></strong></li>
<li>สามารถส่งข้อมูลสถานที่ให้บริการเตียงกลับไปยังฝั่งของ frontend ได้อย่างถูกต้อง</li>
</ul>
<p><strong>Task 3: พัฒนา Backend สำหรับแก้ไขข้อมูสถานที่ให้บริการเตียงที่ user เป็นผู้ให้บริการ โดยใช้ Node.js ในการพัฒนา</strong></p>
<ul>
<li>สามารถเข้าถึงและแก้ไขข้อมูลใน Database ของสถานที่ให้บริการเตียงที่ user เป็นผู้ให้บริการได้</li>
<li><span style="font-weight: 400;">สามารถนำข้อมูลการจองเตียงของ User จัดเก็บลง database ที่ใช้จัดเก็บข้อมูลของสถานที่ให้บริการเตียงที่ user เป็นผู้ให้บริการได้</span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;"><strong>Database</strong></span></p>
<p><span style="font-weight: 400;"><strong>Task 1: ออกแบบ Database สำหรับเก็บข้อมูลของสถานที่ให้บริการเตียง, ผู้ให้บริการ และจำนวนเตียงที่ให้บริการ</strong></span></p>
<ul>
<li><span style="font-weight: 400;">Database ที่ออกแบบจะต้องเป็นในรูปแบบของ MySQL</span></li>
<li><span style="font-weight: 400;">Database ที่ออกแบบจะต้องมีการเก็บข้อมูลทั้งหมด 2 ส่วน ได้แก่ ข้อมูลสถานที่ให้บริการเตียง user ที่เป็นเจ้าของสถานที่ และจำนวนเตียงที่ให้บริการ</span></li>
</ul>
<p><strong>Task 2: พัฒนา Database สำหรับเก็บข้อมูลของสถานที่ให้บริการเตียง, ผู้ให้บริการ และจำนวนเตียงที่ให้บริการ โดยใช้ MySQL ในการพัฒนา</strong></p>
<ul>
<li>Database ที่พัฒนาขึ้นมาสามารถจัดเก็บข้อมูลที่จำเป็นทั้งหมดได้ ตามที่ออกแบบไว้</li>
<li>Database ที่พัฒนาขึ้นมาจะต้องมีการใช้ชนิดข้อมูล (Data Type) ที่เหมาะสมกับข้อมูลนั้น</li>
</ul>
<p>&nbsp;</p>
<p><strong>Test Stratergies</strong></p>
<p>ในการทดสอบระบบเพิ่ม - ลดจำนวนเตียงที่ให้บริการ จะมีการแบ่งรูปแบบของการทดสอบออกเป็น 3 ส่วน ดังนี้</p>
<p><strong>Unit Test</strong></p>
<ul style="list-style-type: square;">
<li>
<p><strong>Frontend</strong></p>
<p>ไม่มีการทำงานที่เป็นฟังก์ชันย่อยๆในส่วนนี้ จึงไม่มีในส่วนของ unit testing</p>
</li>
<li><strong>Backend</strong><br />เป็นการทดสอบส่วนย่อยของระบบ โดยจะเน้นไปที่การทดสอบ Request ที่เข้ามา โดยที่เป็นส่วนสำคัญของระบบการเพิ่ม - ลดจำนวนเตียง โดยมี test case คือ สามารถทำการแก้ไข เพิ่ม - ลดจำนวนเตียงได้ (PUT: /bed/amount/125)</li>
</ul>
<p><strong>Component Test</strong></p>
<ul style="list-style-type: square;">
<li>
<p><strong>Frontend</strong></p>
<p>เป็นการทดสอบว่าในแต่ละหน้าที่เกี่ยวข้องกับ feature ผู้ให้บริการเตียงเพิ่ม/ลดจำนวนเตียงที่ให้บริการได้นั้น มีส่วนประกอบ หรือ component ที่ควรจะอยู่ในหน้านั้น ๆ ครบถ้วนหรือไม่ โดยจะเน้นเฉพาะส่วนของ Frontend ที่เกี่ยวข้อง การทดสอบในส่วน Component test จะสามารถแบ่งออกได้เป็น 2 ส่วน ดังนี้</p>
<ol>
<li><strong>การทำ Component test ในส่วนของหน้าการจัดการเตียง</strong> เป็นการทดสอบเพื่อดูว่าหน้าการจัดการเตียง มีส่วนประกอบต่างๆครบถ้วนหรือไม่ โดยในหน้าการจัดการเตียง จะมีส่วนประกอบที่ต้องมีอยู่ทั้งหมด 2 ส่วนประกอบ ได้แก่
<ul style="list-style-type: square;">
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">กล่องแสดงรายละเอียดของสถานที่ให้บริการเตียง</span></li>
<li><span style="font-weight: 400;">ปุ่มสำหรับกดเพื่อเลือกสถานที่ให้บริการเตียงที่ต้องการแก้ไขข้อมูล</span></li>
</ul>
</li>
</ol>
</li>
<li><span style="font-weight: 400;"><strong>Backend</strong><br />การทดสอบ component test ของ feature การเพิ่มเพิ่ม - ลดจำนวนเตียง ของฝั่ง Backend มี test case คือ<br /></span>
<ol>
<li><span style="font-weight: 400;">การทดสอบการ Update เพิ่ม - ลดจำนวนเตียงของสถานที่ได้ <br /></span></li>
</ol>
</li>
</ul>
<p><span style="font-weight: 400;"><strong>E2E Test</strong><br /></span></p>
<ul style="list-style-type: square;">
<li><span style="font-weight: 400;"><strong>Frontend<br /></strong>เป็นการทดสอบตัว feature ระบบเพิ่ม - ลดจำนวนเตียง ตั้งแต่เริ่มต้น จนจบ ซึ่งจะเริ่มตั้งแต่หน้า Login เข้าสู่ระบบ =&gt; หน้า main =&gt;หน้าจัดการสถานที่ =&gt; หน้าแก้ไขสถานที่ จำนวนเตียง โดยมีจุดประสงค์เพื่อทดลองว่า feature นี้ สามารถใช้งานได้จริง โดยเริ่มจาก<strong><br /></strong></span>
<ol>
<li><span style="font-weight: 400;">การกรอกข้อมูล email และ รหัสผ่านให้ถูกต้อง เพื่อลงชื่อเข้าใช้งานที่หน้า login</span></li>
<li><span style="font-weight: 400;">กดปุ่ม ฉันต้องการลงเตียง ที่แถบ Nav bar เพื่อไปที่หน้า จัดการสถานที่</span></li>
<li><span style="font-weight: 400;">กดปุ่ม แก้ไข ที่ช่องของสถานที่ ที่ต้องการแก้ไข เพื่อไปที่หน้า แก้ไขสถานที่ จำนวนเตียง</span></li>
<li><span style="font-weight: 400;">กรอกเลขจำนวนเตียงให้ถูกต้อง</span></li>
<li><span style="font-weight: 400;">กดปุ่มบันทึก</span></li>
</ol>
</li>
<li><span style="font-weight: 400;"><strong>Backend</strong><br />เป็นการทดสอบการเรียก API ทั้งหมดที่เกี่ยวข้องกับ feature การเพิ่ม - ลด จำนวนเตียง ตั้งแต่การ Signin จนถึง การแก้ไขจำนวนเตียง ดังนี้</span>
<ul style="list-style-type: square;">
<li><span style="font-weight: 400;">POST: user/signin</span></li>
<li><span style="font-weight: 400;">PUT: /bed/amount/51</span></li>
</ul>
</li>
</ul>
<p><strong>Test Result</strong></p>
<p><strong>Unit test</strong></p>
<ul style="list-style-type: square;">
<li>
<p><strong>Frontend</strong></p>
<p>ไม่มีการทำงานที่เป็นฟังก์ชันย่อยๆในส่วนนี้ จึงไม่มีในส่วนของ unit testing</p>
</li>
<li><strong>Backend</strong><br />เป็นการทดสอบส่วนย่อยของระบบ โดยจะเน้นไปที่การทดสอบ Request ที่เข้ามา โดยที่เป็นส่วนสำคัญของระบบการเพิ่ม - ลดจำนวนเตียง โดยมี test case คือ สามารถทำการแก้ไข เพิ่ม - ลดจำนวนเตียงได้ (PUT: /bed/amount/125) =&gt; (Success)</li>
</ul>
<p><strong>Component test</strong></p>
<ul style="list-style-type: square;">
<li>
<p><strong>Frontend</strong></p>
<p>ผลการทดสอบ frontend component test จะแบ่งออกเป็น 2 ส่วน เหมือนที่ได้ระบุไว้ใน test stratergies ดังนี้</p>
<ol>
<li>การทำ Component test ในส่วนของหน้าการจัดการเตียง
<ul style="list-style-type: square;">
<li>กล่องแสดงรายละเอียดของสถานที่ให้บริการเตียง<br />ผลการทดสอบ : success (มี Element นี้อยู่จริง)</li>
<li>ปุ่มสำหรับกดเพื่อเลือกสถานที่ให้บริการเตียงที่ต้องการแก้ไขข้อมูล<br />ผลการทดสอบ : success (มี Element นี้อยู่จริง)</li>
</ul>
</li>
</ol>
</li>
</ul>
<p><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/30.PNG?raw=true" alt="" /></p>
<ul style="list-style-type: square;">
<li><strong>Backend</strong><br />การทดสอบ component test ของ feature การเพิ่มเพิ่ม - ลดจำนวนเตียง ของฝั่ง Backend มี test case คือ
<ul style="list-style-type: square;">
<li>การทดสอบการ Update เพิ่ม - ลดจำนวนเตียงของสถานที่ได้ (Success)</li>
</ul>
</li>
</ul>
<p>&nbsp;</p>
<p><strong>E2E test</strong></p>
<ul style="list-style-type: square;">
<li><strong>Frontend<br /></strong>ผลการทดสอบของ feature การแก้ไขสถานที่ให้บริการเตียง ที่ฝั่ง Frontend มีเพียงผลลัพธ์การทดสอบเดียว คือ การแก้ไขสถานที่จองเตียง หลังจากกรอกข้อมูลที่ต้องการแก้ไขอย่างถูกต้อง: Success (สามารถแก้ไขข้อมูลสถานที่จองเตียงได้)</li>
<li><strong>Backend</strong></li>
</ul>
<p><strong><img src="https://github.com/Po-Pon/SW-Development-Tool-And-Environments-Group1/blob/main/Tasks/Task9/31.PNG?raw=true" alt="" /></strong></p>
<h1><strong>สรุปจำนวนครั้งในการ build แบบอัตโนมัติของทุกวันในสัปดาห์นี้</strong></h1>
<p><strong>Frontend</strong></p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 22.7075%; text-align: center;">
<p><span style="font-weight: 400;">Date</span></p>
</td>
<td style="width: 25.6186%; text-align: center;">
<p><span style="font-weight: 400;">Build</span></p>
</td>
<td style="width: 26.0553%; text-align: center;">
<p><span style="font-weight: 400;">Build success</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">Build failure</span></p>
</td>
</tr>
<tr>
<td style="width: 22.7075%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/11</span></p>
</td>
<td style="width: 25.6186%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 26.0553%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 22.7075%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/12</span></p>
</td>
<td style="width: 25.6186%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 26.0553%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 22.7075%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/13</span></p>
</td>
<td style="width: 25.6186%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 26.0553%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 22.7075%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/14</span></p>
</td>
<td style="width: 25.6186%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 26.0553%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 22.7075%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/15</span></p>
</td>
<td style="width: 25.6186%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 26.0553%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 22.7075%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/16</span></p>
</td>
<td style="width: 25.6186%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 26.0553%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 22.7075%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/17</span></p>
</td>
<td style="width: 25.6186%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 26.0553%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
</tbody>
</table>
<p><strong>Backend</strong></p>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 23.1441%; text-align: center;">
<p><span style="font-weight: 400;">Date</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">Build</span></p>
</td>
<td style="width: 26.7832%; text-align: center;">
<p><span style="font-weight: 400;">Build success</span></p>
</td>
<td style="width: 24.4541%; text-align: center;">
<p><span style="font-weight: 400;">Build failure</span></p>
</td>
</tr>
<tr>
<td style="width: 23.1441%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/11</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 26.7832%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 24.4541%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 23.1441%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/12</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 26.7832%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 24.4541%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 23.1441%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/13</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 26.7832%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 24.4541%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 23.1441%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/14</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 26.7832%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 24.4541%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 23.1441%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/15</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 26.7832%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 24.4541%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 23.1441%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/16</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 26.7832%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 24.4541%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
<tr>
<td style="width: 23.1441%; text-align: center;">
<p><span style="font-weight: 400;">2022/04/17</span></p>
</td>
<td style="width: 25.4731%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 26.7832%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
<td style="width: 24.4541%; text-align: center;">
<p><span style="font-weight: 400;">0</span></p>
</td>
</tr>
</tbody>
</table>
<h1><strong>Line change and Number commit of Group (wiki)</strong></h1>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><strong>Student No.</strong></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><strong>Name</strong></p>
</td>
<td style="width: 24.5997%; text-align: center;">
<p><strong>Line Change (%)</strong></p>
</td>
<td style="width: 27.802%; text-align: center;">
<p><strong>No. of Commit (%)</strong></p>
</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070112</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายปภัส&nbsp; เงาธัมมะสกุล</span></p>
</td>
<td style="width: 24.5997%;">&nbsp;</td>
<td style="width: 27.802%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070113</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายประธาน นาเวียง</span></p>
</td>
<td style="width: 24.5997%;">&nbsp;</td>
<td style="width: 27.802%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070134</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายพลัฏฐ์&nbsp; วงศ์สิทธิพรรุ่ง</span></p>
</td>
<td style="width: 24.5997%;">&nbsp;</td>
<td style="width: 27.802%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070139</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายพิชญะ&nbsp; สิงห์มีศรี</span></p>
</td>
<td style="width: 24.5997%;">&nbsp;</td>
<td style="width: 27.802%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070168</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายวิชยุตม์&nbsp; ทวิชัยยุทธ</span></p>
</td>
<td style="width: 24.5997%;">&nbsp;</td>
<td style="width: 27.802%;">&nbsp;</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070215</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายอคิราภ์&nbsp; สีแสนยง</span></p>
</td>
<td style="width: 24.5997%;">&nbsp;</td>
<td style="width: 27.802%;">&nbsp;</td>
</tr>
</tbody>
</table>
<h1><strong>Code (ก่อนเพิ่ม feature)</strong></h1>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><strong>Student No.</strong></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><strong>Name</strong></p>
</td>
<td style="width: 24.5997%; text-align: center;">
<p><strong>Line Change (%)</strong></p>
</td>
<td style="width: 27.802%; text-align: center;">
<p><strong>No. of Commit (%)</strong></p>
</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070112</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายปภัส&nbsp; เงาธัมมะสกุล</span></p>
</td>
<td style="width: 24.5997%; text-align: center;">
<p><span style="font-weight: 400;">2.68%</span></p>
</td>
<td style="width: 27.802%; text-align: center;">
<p><span style="font-weight: 400;">12%</span></p>
</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070113</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายประธาน นาเวียง</span></p>
</td>
<td style="width: 24.5997%; text-align: center;">
<p><span style="font-weight: 400;">4.15%</span></p>
</td>
<td style="width: 27.802%; text-align: center;">
<p><span style="font-weight: 400;">7%</span></p>
</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070134</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายพลัฏฐ์&nbsp; วงศ์สิทธิพรรุ่ง</span></p>
</td>
<td style="width: 24.5997%; text-align: center;">
<p><span style="font-weight: 400;">18.09%</span></p>
</td>
<td style="width: 27.802%; text-align: center;">
<p><span style="font-weight: 400;">12%</span></p>
</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070139</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายพิชญะ&nbsp; สิงห์มีศรี</span></p>
</td>
<td style="width: 24.5997%; text-align: center;">
<p><span style="font-weight: 400;">1.73%</span></p>
</td>
<td style="width: 27.802%; text-align: center;">
<p><span style="font-weight: 400;">8%</span></p>
</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070168</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายวิชยุตม์&nbsp; ทวิชัยยุทธ</span></p>
</td>
<td style="width: 24.5997%; text-align: center;">
<p><span style="font-weight: 400;">2.04%</span></p>
</td>
<td style="width: 27.802%; text-align: center;">
<p><span style="font-weight: 400;">14%</span></p>
</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070215</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายอคิราภ์&nbsp; สีแสนยง</span></p>
</td>
<td style="width: 24.5997%; text-align: center;">
<p><span style="font-weight: 400;">71.30%</span></p>
</td>
<td style="width: 27.802%; text-align: center;">
<p><span style="font-weight: 400;">41%</span></p>
</td>
</tr>
</tbody>
</table>
<h1><strong>Code (หลังเพิ่ม feature)</strong></h1>
<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><strong>Student No.</strong></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><strong>Name</strong></p>
</td>
<td style="width: 24.5997%; text-align: center;">
<p><strong>Line Change (%)</strong></p>
</td>
<td style="width: 27.802%; text-align: center;">
<p><strong>No. of Commit (%)</strong></p>
</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070112</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายปภัส&nbsp; เงาธัมมะสกุล</span></p>
</td>
<td style="width: 24.5997%; text-align: center;">
<p><span style="font-weight: 400;">4.37%</span></p>
</td>
<td style="width: 27.802%; text-align: center;">
<p><span style="font-weight: 400;">14.77%</span></p>
</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070113</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายประธาน นาเวียง</span></p>
</td>
<td style="width: 24.5997%; text-align: center;">
<p><span style="font-weight: 400;">4.88%</span></p>
</td>
<td style="width: 27.802%; text-align: center;">
<p><span style="font-weight: 400;">9.66%</span></p>
</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070134</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายพลัฏฐ์&nbsp; วงศ์สิทธิพรรุ่ง</span></p>
</td>
<td style="width: 24.5997%; text-align: center;">
<p><span style="font-weight: 400;">14.40%</span></p>
</td>
<td style="width: 27.802%; text-align: center;">
<p><span style="font-weight: 400;">9.66%</span></p>
</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070139</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายพิชญะ&nbsp; สิงห์มีศรี</span></p>
</td>
<td style="width: 24.5997%; text-align: center;">
<p><span style="font-weight: 400;">9.84%</span></p>
</td>
<td style="width: 27.802%; text-align: center;">
<p><span style="font-weight: 400;">7.95%</span></p>
</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070168</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายวิชยุตม์&nbsp; ทวิชัยยุทธ</span></p>
</td>
<td style="width: 24.5997%; text-align: center;">
<p><span style="font-weight: 400;">9.72%</span></p>
</td>
<td style="width: 27.802%; text-align: center;">
<p><span style="font-weight: 400;">17.05%</span></p>
</td>
</tr>
<tr>
<td style="width: 17.4672%; text-align: center;">
<p><span style="font-weight: 400;">62070215</span></p>
</td>
<td style="width: 29.9854%; text-align: center;">
<p><span style="font-weight: 400;">นายอคิราภ์&nbsp; สีแสนยง</span></p>
</td>
<td style="width: 24.5997%; text-align: center;">
<p><span style="font-weight: 400;">56.79%</span></p>
</td>
<td style="width: 27.802%; text-align: center;">
<p><span style="font-weight: 400;">40.91%</span></p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
