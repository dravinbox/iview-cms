<template>
    <div>
        <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
        <div style="margin: 10px;overflow: hidden">
            <div style="float: right;">
                <Page :total="100" :current="1" @on-change="changePage"></Page>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tableData1: this.mockTableData1(),
            tableColumns1: [
                {
                    title: '名称',
                    key: 'name',
                    //fixed:'left',
                    sortable: true
                },
                {
                    title: '状态',
                    key: 'status',
                    render: (h, params) => {
                        const row = params.row;
                        const color = row.status === 1 ? 'blue' : row.status === 2 ? 'green' : 'red';
                        const text = row.status === 1 ? '构建中' : row.status === 2 ? '构建完成' : '构建失败';

                        return h('Tag', {
                            props: {
                                type: 'dot',
                                color: color
                            }
                        }, text);
                    }
                },
                {
                    title: '画像内容',
                    key: 'portrayal',
                    render: (h, params) => {
                        return h('Poptip', {
                            props: {
                                trigger: 'hover',
                                title: params.row.portrayal.length + '个画像',
                                placement: 'bottom'
                            }
                        }, [
                                h('Tag', params.row.portrayal.length),
                                h('div', {
                                    slot: 'content'
                                }, [
                                        h('ul', this.tableData1[params.index].portrayal.map(item => {
                                            return h('li', {
                                                style: {
                                                    textAlign: 'center',
                                                    padding: '4px'
                                                }
                                            }, item)
                                        }))
                                    ])
                            ]);
                    }
                },
                {
                    title: '选定人群数',
                    key: 'people',
                    render: (h, params) => {
                        return h('Poptip', {
                            props: {
                                trigger: 'hover',
                                title: params.row.people.length + '个客群',
                                placement: 'bottom'
                            }
                        }, [
                                h('Tag', params.row.people.length),
                                h('div', {
                                    slot: 'content'
                                }, [
                                        h('ul', this.tableData1[params.index].people.map(item => {
                                            return h('li', {
                                                style: {
                                                    textAlign: 'center',
                                                    padding: '4px'
                                                }
                                            }, item.n + '：' + item.c + '人')
                                        }))
                                    ])
                            ]);
                    }
                },
                {
                    title: '取样时段',
                    key: 'time',
                    render: (h, params) => {
                        return h('div', '近' + params.row.time + '天');
                    }
                },
                {
                    title: '更新时间',
                    key: 'update',
                    render: (h, params) => {
                        return h('div', this.formatDate(this.tableData1[params.index].update));
                    }
                },
                {
                    title: '操作',
                    key: 'action',
                    width: 150,
                    align: 'center',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index)
                                    }
                                }
                            }, '查看'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, '删除')
                        ]);
                    }
                }

            ]
        }
    },
    methods: {
        mockTableData1() {
            let data = [];
            for (let i = 0; i < 10; i++) {
                data.push({
                    name: '商圈' + Math.floor(Math.random() * 100 + 1),
                    status: Math.floor(Math.random() * 3 + 1),
                    portrayal: ['城市渗透', '人群迁移', '消费指数', '生活指数', '娱乐指数'],
                    people: [
                        {
                            n: '客群' + Math.floor(Math.random() * 100 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        },
                        {
                            n: '客群' + Math.floor(Math.random() * 100 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        },
                        {
                            n: '客群' + Math.floor(Math.random() * 100 + 1),
                            c: Math.floor(Math.random() * 1000000 + 100000)
                        }
                    ],
                    time: Math.floor(Math.random() * 7 + 1),
                    update: new Date()
                })
            }
            return data;
        },
        formatDate(date) {
            const y = date.getFullYear();
            let m = date.getMonth() + 1;
            m = m < 10 ? '0' + m : m;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            return y + '-' + m + '-' + d;
        },
        show(index) {
            this.$Modal.info({
                title: '商圈信息',
                content: `名称：${this.tableData1[index].name}<br>状态：${this.tableData1[index].status}<br>画像内容：${this.tableData1[index].portrayal}`
            })
        },
        remove(index) {
            this.tableData1.splice(index, 1);
        },
        changePage() {
            // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
            this.tableData1 = this.mockTableData1();
        }
    }
}
</script>
