import Form from "@/components/Form.vue";
import { shallowMount } from "@vue/test-utils";
import { describe, test, expect, it } from "vitest";

describe('Form', () => {
    it ('rendering correct text', () => {
        const wrapper = shallowMount(Form);
        let header = wrapper.find('.htmlClass h1');
        expect(header.exists()).toBe(true);
        expect(header.text()).toBe("Hello World");
    })

    it('to check if form exist', () => {
        const wrapper = shallowMount(Form);
        expect(wrapper.find('form').exists()).toBe(true);
    })

    it('to check if input fields in form exist', () => {
        const wrapper = shallowMount(Form);
        expect(wrapper.find('form > input').exists()).toBe(true)
    })

    it('to check if button is present', () => {
        const wrapper = shallowMount(Form);
        expect(wrapper.find('button').exists()).toBe(true);
    })
})