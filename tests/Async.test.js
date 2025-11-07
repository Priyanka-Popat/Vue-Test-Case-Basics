import { mount, flushPromises } from '@vue/test-utils'
import Async from '@/components/Async.vue'
import { test, expect } from 'vitest'

test('Async component loads data', async () => {
    const wrapper = mount({
        components: { Async },
        template: `
      <Suspense>
        <Async />
      </Suspense>
    `
    })

    await new Promise(r => setTimeout(r, 0))
    await flushPromises()

    expect(wrapper.text()).toBe('Data Loaded')
})
