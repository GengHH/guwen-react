/**
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
 */
const counter = (state = 10, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};
// 默认分页数据
const defaultPagination = {
    "total": 0,
    "current_page": 1,
    "total_page": 0,
    "page_size": 14
};
const booklist = (state = {
    list: [],
    pagination: defaultPagination
}, action) => {

    switch (action.type) {
        case 'BOOKLIST':
            let res = {
                pagination: action.data ? action.data.pagination : defaultPagination,
                list: action.data ? state.list.concat(action.data.list) : state.list
            };
            state = res;
            return state;
        default:
            return state;
    }
}
// 具体书籍 信息
const bookitem = (state = {
    list: [],
    pagination: defaultPagination
}, action) => {
    switch (action.type) {
        case 'BOOKITEM':
            let res = {
                pagination: action.data ? action.data.pagination : defaultPagination,
                list: action.data ? action.data.list : []
            };
            state = res;
            return state;
        default:
            return state;
    }
}
const chapterlist = (state = [], action) => {
    switch (action.type) {
        case 'CHAPTERLIST':
            state = action.data;
            return state;
        default:
            return state;
    }

}

export {
    counter,
    booklist,
    bookitem,
    chapterlist
};