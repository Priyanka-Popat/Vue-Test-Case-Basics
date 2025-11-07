import PostList from "@/components/PostList.vue";
import { flushPromises, mount } from "@vue/test-utils";
import axios from "axios";
import { expect, test, vi } from "vitest";

const mockPostList = [
    { id: 1, title: 'title1', body: 'body1' },
    { id: 2, title: 'title2', body: 'body2' }
]

// if axios
// vi.spyOn(axios, 'get').mockResolvedValue({
//     data: {
//         posts: mockPostList
//     }
// })

// if fetch
// global.fetch = vi.fn(() =>
//     Promise.resolve({
//         json: () => Promise.resolve({ posts: mockPostList })
//     })
// );

global.fetch = vi.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve({ posts: mockPostList })
    })
});



test('load post on buttonclick', async () => {
    const wrapper = mount(PostList);
    // click button 
    await wrapper.get('button').trigger('click');

    // no. of time axios called and url if using axios
    // expect(axios.get).toHaveBeenCalledTimes(1);
    // expect(axios.get).toHaveBeenCalledWith('https://dummyjson.com/posts');
    // if using fetch 
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/posts');

    // wait for dom updates
    await flushPromises();

    // making sure if content is dispalyed 
    const posts = wrapper.findAll('[data-test="post"]');

    expect(posts).toHaveLength(2);
    expect(posts[0].text()).toContain('title1');
    expect(posts[0].text()).toContain('title1');
})

test('display loading state on button click', async () => {
    const wrapper = mount(PostList);

    // checking if loading is false or not before clicking 
    expect(wrapper.find('[role="alert"]').exists()).toBe(false);
    // expecting button isnt disabled 
    expect(wrapper.get('button').attributes()).not.toHaveProperty('disabled')
    // buton click
    await wrapper.get('button').trigger("click");

    // changing loading state
    expect(wrapper.find('[role="alert"]').exists()).toBe(true);
    // making button diabbled 
    expect(wrapper.get('button').attributes()).toHaveProperty('disabled');

    // wait for dom to update 
    await flushPromises();

    // again loading false 
    expect(wrapper.find('[role="alert"]').exists()).toBe(false);
    expect(wrapper.get('button').attributes()).not.toHaveProperty('disabled');


})

test('transition working', async () => {
    const wrapper = mount(PostList);

    // expect(wrapper.find('Hello Transition').exists()).toBe(false);
    expect(wrapper.find('#transitionText').exists()).toBe(false);
    await wrapper.find('#toggleBtn').trigger('click');
    expect(wrapper.get('#transitionText').text()).toEqual('Hello Transition');
})