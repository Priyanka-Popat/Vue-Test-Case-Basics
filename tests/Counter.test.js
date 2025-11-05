import Counter from "@/components/Counter.vue";
import { mount } from "@vue/test-utils";
import { describe, test, expect, it } from "vitest";

describe('Counter', () => {
    it('emits increment even when click', () => {
        const wrapper = mount(Counter);

        // clicking button
        wrapper.find('button').trigger('click');
        wrapper.find('button').trigger('click');
        // emitted method returns a record of all events emitted in test something like { incremnt: [[1],[2]] }tohave property is used to check if somethign contains a specific key or property arg takes name of emitted event
        // expect(wrapper.emitted()).toHaveProperty('increment')

        // passing arg with emmitted()
        // to check occurance 
        const incrementEvent = wrapper.emitted("increment");
        expect(incrementEvent).toHaveLength(2);
        // expect(incrementEvent[0]).toEqual([1])
        // expect(incrementEvent[1]).toEqual([2])
        expect(wrapper.emitted('increment')[0]).toEqual([
            {
                count: 1,
                isEven: false
            }
        ])

        expect(wrapper.emitted('increment')[1]).toEqual([
            {
                count: 2,
                isEven: true
            }
        ])
        console.log("--->", wrapper.emitted('increment'))
    })
})