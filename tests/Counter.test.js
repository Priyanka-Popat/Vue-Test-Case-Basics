import Counter from "@/components/Counter.vue";
import { flushPromises, mount } from "@vue/test-utils";
import { describe, test, expect, it } from "vitest";
import { defineComponent, nextTick } from "vue";

describe('Counter', () => {
    // it('emits increment even when click', () => {
    //     const wrapper = mount(Counter);

    //     // clicking button
    //     wrapper.find('button').trigger('click');
    //     wrapper.find('button').trigger('click');
    //     // emitted method returns a record of all events emitted in test something like { incremnt: [[1],[2]] }tohave property is used to check if somethign contains a specific key or property arg takes name of emitted event
    //     // expect(wrapper.emitted()).toHaveProperty('increment')

    //     // passing arg with emmitted()
    //     // to check occurance 
    //     const incrementEvent = wrapper.emitted("increment");
    //     expect(incrementEvent).toHaveLength(2);
    //     // expect(incrementEvent[0]).toEqual([1])
    //     // expect(incrementEvent[1]).toEqual([2])
    //     expect(wrapper.emitted('increment')[0]).toEqual([
    //         {
    //             count: 1,
    //             isEven: false
    //         }
    //     ])

    //     expect(wrapper.emitted('increment')[1]).toEqual([
    //         {
    //             count: 2,
    //             isEven: true
    //         }
    //     ])
    //     console.log("--->", wrapper.emitted('increment'))
    // })

    // test('increment by 1', async () => {
    //     const wrapper = mount(Counter);
    //     // wrapper.find('button').trigger('click');
    //     // if i write this expect(wrapper.html()).toContain('Count: 1') the test will fail coz expect() assertion will be called before vue updates dom to avoid that we ahve nextTick method in vue :
    //     // await nextTick();
    //     // expect(wrapper.html()).toContain('Count: 1')

    //     // but we can simply add await before as trigger and set value both return nextTick 
    //     await wrapper.find('button').trigger('click');
    //     expect(wrapper.html()).toContain('Count: 1')
    // })

    test('renders async username', async () => {

        // creates a wrapper componenet  with suspense
        const TestCompoenent = defineComponent({
            components: { Counter },
            template: `<Suspense>
        <template #default>
          <Counter />
        </template>
        <template #fallback>
          <p>Loading...</p>
        </template>
      </Suspense>`

        })

        const wrapper = mount(TestCompoenent);
        await new Promise(r => setTimeout(r, 0))
        // flusproimse is use to wait for async setup inside  the compoenent to infish 
        await flushPromises();
        // to re rednder ui 
        await nextTick()

        // to access internal component using findcompoent
        console.log("-------->", wrapper.html())
        const user = wrapper.findComponent(Counter);
        expect(user.text()).toContain('Priyanka')
    })

})