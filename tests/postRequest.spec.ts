import { expect, test } from "@playwright/test";

test('Test to create a new incident', async ({ request }) => {

  const response = await request.post(
    "https://dev220741.service-now.com/api/now/table/incident",
    {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      auth: {
        username: "admin",
        password: "your_password"
      },
      data: {
        "short_description": "Created using Playwright API"
      }
    }
  );

  console.log("STATUS:", response.status());

  const text = await response.text();
  console.log("BODY:", text);
});