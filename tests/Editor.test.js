import Editor from "@/components/Editor.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

describe('Editor Componenet', () => {
    it('model value should be update', async () => {
        const wrapper = mount(Editor, {
            props: {
                modelValue: "initial text",
                'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
            }
        })

        await wrapper.find('input').setValue('test');
        expect(wrapper.props('modelValue')).toBe('test');
    })
})
