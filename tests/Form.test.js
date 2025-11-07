import Form from "@/components/Form.vue";
import { mount, shallowMount } from "@vue/test-utils";
import { describe, test, expect, it } from "vitest";
// mount and shallow mount returns a warpper wrapped around componenet
// mount is used for test inluding child components shows actual dom structure , used for integration testing
// shallow mount used for unit testing , isolates component makes child stubs(placeholder components) child logic is not executed, child componenet error dont affet in testing 
describe('Form', () => {
    it('rendering correct text', () => {
        const wrapper = shallowMount(Form);
        let header = wrapper.find('.htmlClass h1');
        expect(header.exists()).toBe(true);
        expect(header.text()).toBe("World");
    })
    // find and exist used when u are not sure elemt is in dom or not
    // find method finds elemnets if doesnt exist returns empty wrapper 
    // exist method returns a boolean if element exsit or not true false
    // exist is called on wrapper returned by find() 
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

    // conditional rendering
    it('remdering profile', () => {
        const wrapper = mount(Form);
        // using get method assuming eelement exist in dom 
        // if elemnet doesnt exist the test fails 
        // get uses select quesry syntax searches for exsiting element
        const profileLink = wrapper.get('#profile');
        // get returns domwrapper (wrapper around element) which uses wrapper api and text() helps to access text 
        expect(profileLink.text()).toEqual('My Profile');
    })
    // doesnt return admin as it is false by default
    it('doesnt return admin', () => {
        const wrapper = mount(Form);
        expect(wrapper.find('#admin').exists()).toBe(false);
    })
    // rendering admin by changing default value
    test('rendering admin', () => {
        const wrapper = mount(Form, {
            data() {
                return {
                    admin: true
                }
            }
        });

        const adminLink = wrapper.get('#admin');
        expect(adminLink.text()).toEqual('Admin');
    })
    // isvisisblie () is used with get() to check visibility ofthat elelemnt in dom it will check if element or its ancestors have display none, visibility hidden , opacity 0    
    test('doesnt show the user drop down', () => {
        const wrapper = mount(Form);
        expect(wrapper.get('#user-dropdown').isVisible()).toBe(false);
    })

    // testing if password has min length or not using props 
    // tocontain to dispaly message
    it('shows error if length of password is short', () => {
        const wrapper = mount(Form, {
            props: {
                minLength: 8,
                maxLength: 10
            },
            data() {
                return {
                    password: 'abc'
                }
            }
        });
        expect(wrapper.html()).toContain('Password must be at least 8 and max 10 characters.');
    })

    // using setprops() to update props change its value
    test('render greeting when show = true', async () => {
        const wrapper = mount(Form, {
            props: { show: true }
        });
        // setting data in greeting can also do it thru data() in mount
        await wrapper.setData({ greeting: 'Hello' });

        expect(wrapper.html()).toContain('Hello');
        // using await to make sure that dom has been updated 
        await wrapper.setProps({ show: false });

        expect(wrapper.html()).not.toContain('Hello');
    });

})