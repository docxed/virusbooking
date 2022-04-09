import { mount } from "@vue/test-utils"
import Signin from "@/views/Signin.vue"
import Signup from "@/views/Signup.vue"
import Home from "@/views/Home.vue"
import Findbeds from "@/views/Findbeds.vue"
import Chart2 from "@/components/Chartstats.vue"

describe("test that signin page have all elements that must be have.", () => {
  const forSignin = mount(Signin)
  it("test that signin page have input element for email and can type data.", () => {
    expect(forSignin.findAll("input").at(0).element.name).toBe("email")
    expect(forSignin.findAll("input").at(0).element.placeholder).toBe("อีเมล")
    forSignin.findAll("input").at(0).setValue("test@gmail.com")
    expect(forSignin.findAll("input").at(0).element.value).toBe(
      "test@gmail.com"
    )
  })
  it("test that signin page have input element for password and can type data.", () => {
    expect(forSignin.findAll("input").at(1).element.name).toBe("password")
    expect(forSignin.findAll("input").at(1).element.placeholder).toBe(
      "รหัสผ่าน"
    )
    forSignin.findAll("input").at(1).setValue("KKK12345678")
    expect(forSignin.findAll("input").at(1).element.value).toBe("KKK12345678")
  })
  it("test that signin page have button element for submit signin", () => {
    expect(forSignin.find("button").element.type).toBe("submit")
    expect(forSignin.find("button").element.innerHTML).toBe(
      " ลงชื่อเข้าเข้าใช้งาน "
    )
  })
})

describe("test that findbeds page have all element that must be have", () => {
  it("test that findbeds page have input element for search beds places and can type data.", () => {
    const forFindBeds = mount(Findbeds)
    expect(forFindBeds.find("input").element.type).toBe("text")
    expect(forFindBeds.find("input").element.placeholder).toBe("ค้นหา")
    forFindBeds.find("input").setValue("กรุงเทพ")
    expect(forFindBeds.find("input").element.value).toBe("กรุงเทพ")
  })
  it("test that findbeds page can display beds place when user search beds place", async () => {
    const forFindBeds = await mount(Findbeds, {
      data() {
        return {
          beds: [
            {
              address:
                "19/49 ซอย สายไหม 15 แขวง สายไหม เขตสายไหม กรุงเทพมหานคร 10220 ประเทศไทย",
              amount: "599",
              distance: 11155.936209906078,
              id: 11,
              lat: "13.9276745",
              lng: "100.6441675",
              state: 1,
              timestamp: "2022-03-21T12:34:24.000Z",
              user_id: 3,
            },
          ],
          isLoading: false,
        }
      },
    })
    forFindBeds.find("input").setValue("กรุงเทพ")
    await expect(forFindBeds.find("#test-bedplace").exists()).toBe(true)
  })
})
