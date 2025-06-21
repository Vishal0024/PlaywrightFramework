import { expect, test } from "@playwright/test";
import { resolve } from "path";

test('get api response status and body', async ({ request }) => {
    const response = await request.get("https://reqres.in/api/users/2", {
        headers: {
        'x-api-key':'reqres-free-v1'
        }
    });

    expect(response.status()).toBe(200);
    console.log(response.json());

    const responseBody = await response.json();
    expect(responseBody.data.id).toBe(2);
});

test('post api response status and body', async ({ request }) => {
    const response = await request.post("https://reqres.in/api/users", {
        data: {
            "name": "morpheus",
            "job": "leader"
        },
        headers:{
            "x-api-key":"reqres-free-v1"
        }
    });

    expect(response.status()).toBe(201);
    const res = await response.json();
    expect(res).toStrictEqual(expect.objectContaining({
        "name": "morpheus",
        "job": "leader",
        "id": expect.any(String),
        "createdAt": expect.any(String)
    }));
});