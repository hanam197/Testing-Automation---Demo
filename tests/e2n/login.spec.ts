import { expect, test } from "../../src/fixtures/fixture";
import { userData } from "../../testData/userData";

userData.forEach((user, index) => {
  test(`Login test #${index + 1} - User: ${user.username} - Expect success: ${user.expectedResult}`, async ({ loginPage }) => {
    // Thực hiện đăng nhập với dữ liệu user hiện tại
    await loginPage.login(user);

    if (!user.expectedResult) {
      // Nếu đăng nhập thất bại, kiểm tra thông báo lỗi hiển thị đúng
      const error = await loginPage.getErrorMessage();
      expect(error).toContain(user.expectedErrorMessage!);
    } else {
      // Nếu đăng nhập thành công, kiểm tra chuyển hướng đúng trang Inventory
      await expect(loginPage.page).toHaveURL("https://www.saucedemo.com/inventory.html");
    }
  });
});


