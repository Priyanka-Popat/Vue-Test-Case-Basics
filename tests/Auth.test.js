import LoginForm from "@/components/LoginForm.vue";
import { useAuth } from "@/composables/useAuth";
import { mount } from "@vue/test-utils";
import { expect, test, vi } from "vitest";

test('login updates user and token', async () => {

    const mockResponse = {
        id: 1,
        username: "emilys",
        firstName: "Emily",
        lastName: "Johnson",
        email: "emily.johnson@x.dummyjson.com",
        gender: "female",
        image: "https://dummyjson.com/icon/emilys/128",
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwid…M3NX0.--ehoEbq0ExYcl7E5kJrazQTYbG5pyi4ZL-bpLrmCQo",
        refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwid…c3NX0.FI8xU2zECSOdbEC2WgvDhjPA3jjyaxcdVYFPyCqQ9Qo"
    };


    global.fetch = vi.fn(() => {
        return Promise.resolve({
            ok: true,
            json: () => Promise.resolve(mockResponse)
        });
    });

    const auth = useAuth();

    expect(auth.user.value).toBe(null);
    expect(auth.accessToken.value).toBe(null);
    expect(auth.refreshToken.value).toBe(null);
    expect(auth.error.value).toBe(null);
    expect(auth.loading.value).toBe(false);

    await auth.login("emilys", "emilyspass");

    expect(global.fetch).toHaveBeenCalledWith(
        "https://dummyjson.com/auth/login",
        expect.objectContaining({
            method: "POST",
            headers: { "content-type": "application/json" },
        })
    );
    expect(auth.user.value).toEqual({
        id: 1,
        username: "emilys",
        firstName: "Emily",
        lastName: "Johnson",
        email: "emily.johnson@x.dummyjson.com",
        gender: "female",
        image: "https://dummyjson.com/icon/emilys/128"
    });

    expect(auth.accessToken.value).toBe(mockResponse.accessToken);
    expect(auth.refreshToken.value).toBe(mockResponse.refreshToken);
    expect(auth.error.value).toBe(null);
    expect(auth.loading.value).toBe(false);


})