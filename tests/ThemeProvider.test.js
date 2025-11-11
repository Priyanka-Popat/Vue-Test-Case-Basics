import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import ThemeButton from "@/components/ThemeButton.vue";
import ThemeProvider from "@/components/ThemeProvider.vue";

describe("theme provider with theme button", () => {
    test("provides theme and changes dynamically", async () => {
        const wrapper = mount(ThemeProvider, {
            slots: {
                default: ThemeButton
            }
        });
        const button = wrapper.find('button');

        expect(button.text()).toContain('Light');

        await button.trigger('click');

        expect(button.text()).toContain('Dark');

        await button.trigger('click');

        expect(button.text()).toContain('Light')
    });

    test("check if deafult theme is light", () => {
        const wrapper = mount(ThemeProvider, {
            slots: {
                default: ThemeButton
            }
        })

        const button = wrapper.find('button');

        expect(button.text()).toContain('Light');
    })

    test("updates all injected buttons when theme changes ", async () => {
        const wrapper = mount(ThemeProvider, {
            slots: {
                default: `
                <ThemeButton />
                <ThemeButton />
                `
            },
            global: {
                components: { ThemeButton }
            }
        })

        const buttons = wrapper.findAll('button');
        console.log("---->",buttons[0])
        expect(buttons[0].text()).toContain('Light');
        expect(buttons[1].text()).toContain('Light');

        await buttons[0].trigger('click');

        expect(buttons[0].text()).toContain('Dark');
        expect(buttons[1].text()).toContain('Dark');
    })
})