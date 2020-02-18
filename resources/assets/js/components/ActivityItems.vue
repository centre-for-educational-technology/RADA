<template>
    <div>
        <div ref="modal" class="modal fade" tabindex="-1" role="dialog" v-on:click.self="closeDialog()" v-on:keyup.esc="closeDialog()">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" aria-label="Close" v-on:click="closeDialog()"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">{{ $t('search-activity-items') }}</h4>
                    </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                            <div class="form-group">
                                <label>{{ $t('keywords') }}</label>
                                <input type="text" class="form-control" v-bind:placeholder="$t('keyword-or-title')" v-model="searchForm.keywords" v-on:keydown.enter.prevent.stop="searchForItems">
                            </div>
                            <div class="form-group">
                                <label>{{ $t('question-type') }}</label>
                                <select class="form-control" v-model="searchForm.questionType" v-on:keydown.enter.prevent.stop="searchForItems">
                                    <option v-for="(title, key) in questionTypeOptions" v-bind:value="key">{{ title }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>{{ $t('language') }}</label>
                                <select class="form-control" v-model="searchForm.language" v-on:keydown.enter.prevent.stop="searchForItems">
                                    <option v-for="(title, key) in languageOptions" v-bind:value="key">{{ title }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn btn-primary" v-bind:disabled="inAjaxCall" v-on:click="searchForItems">
                                    <i class="mdi mdi-search-web" aria-hidden="true"></i>
                                    {{ $t('search') }}
                                </button>
                            </div>

                            <div class="well text-center" v-if="searchResults.total === 0 && searchResults.currentPage">{{ $t('none-found') }}</div>

                            <div v-if="searchResults.data && searchResults.data.length > 0">
                                <strong>{{ searchResults.total }} {{ $t('items-found') }}:</strong>
                                <table class="table table-striped table-hover sz-search-results">
                                    <thead>
                                        <tr>
                                            <th class="sortable" v-bind:class="{ active: isOrderedBy('title') }" v-on:click="sortSearchResults('title')">
                                                <i class="mdi mdi-sort-alphabetical pull-right"></i>
                                                {{ $t('title') }}
                                            </th>
                                            <th class="sortable hidden-xs" v-bind:class="{ active: isOrderedBy('zoo') }" v-on:click="sortSearchResults('zoo')">
                                                <i class="mdi mdi-sort-numeric pull-right"></i>
                                                {{ $t('zoo') }}
                                            </th>
                                            <th class="sortable" v-bind:class="{ active: isOrderedBy('type') }" v-on:click="sortSearchResults('type')">
                                                <i class="mdi mdi-sort-numeric pull-right hidden-xs"></i>
                                                <span class="hidden-xs">
                                                {{ $t('question-type') }}
                                                </span>
                                            </th>
                                            <th class="sortable hidden-xs" v-bind:class="{ active: isOrderedBy('language') }" v-on:click="sortSearchResults('language')">
                                                <i class="mdi mdi-sort-numeric pull-right"></i>
                                                {{ $t('language') }}
                                            </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in sortedSearchResults" ref="searchResult" v-on:click="showQuestionPreview(item, true)">
                                            <td v-bind:title="item.description">{{ item.title }}</td>
                                            <td class="hidden-xs">{{ getZooFromId(item.zoo) }}</td>
                                            <td>
                                                <img class="sz-img-w30" v-bind:src="item.icon_url" alt="icon">
                                                <span class="hidden-xs">&nbsp;{{ getQuestionTypeFromId(item.type) }}</span>
                                            </td>
                                            <td class="hidden-xs">{{ getLanguageFromId(item.language) }}</td>
                                            <td>
                                                <transition name="button-toggle" mode="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                                    <button type="button" class="btn btn-success btn-sm" v-on:click.stop="addItem(item)" v-if="!hasItem(item)" key="add"><i class="mdi mdi-plus"></i></button>
                                                    <button type="button" class="btn btn-danger btn-sm" v-on:click.stop="removeItem(item)" v-else key="remove"><i class="mdi mdi-minus"></i></button>
                                                </transition>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="text-center">
                                    <transition name="button-load-more" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                                    <button type="button" class="btn btn-default" v-on:click="loadMoreItems()" v-if="searchResults.loadMore" v-bind:disabled="inAjaxCall">{{ $t('load-more') }}</button>
                                    </transition>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" v-on:click="closeDialog()" v-bind:disabled="inAjaxCall">{{ $t('close') }}</button>
                    </div>
                </div>
            </div>
        </div>

        <game-question-modal v-bind:question="previewItem" v-bind:game-id="fakeGameId" v-bind:base-url="baseUrl" v-bind:is-preview="true" v-if="previewItem" ref="questionModal"></game-question-modal>

<!--        <button type="button" class="btn btn-success" v-on:click="openDialog()">-->
<!--            <i class="mdi mdi-search-web" aria-hidden="true"></i>-->
<!--            {{ $t('search-activity-items') }}-->
<!--        </button>-->
        <button type="button" class="btn btn-success" v-if="canCreateActivityItem" v-on:click="createNewActivityItem">
            <i class="mdi mdi-plus" aria-hidden="true"></i>
            {{ $t('create-new-activity-item') }}
            <i class="mdi mdi-open-in-new" aria-hidden="true"></i>
        </button>
        <ul class="list-group sz-sortable-list">
            <draggable :list="items" :options="options" @change="onChange">
                <li class="list-group-item" v-for="(item, index) in items" v-bind:title="item.description">
                    <input type="hidden" class="form-control" name="activity_items[]" v-bind:value="item.id">
                    <i class="mdi mdi-drag-vertical"></i>
                    <span class="pull-right">
                        <input type="number"
                               v-if="enforceItemsOrder"
                               v-bind:name="'order['+index+']'"
                               v-bind:value="item.order || (index+1)"
                               v-bind:data-item-index="index"
                               @change="itemOrderChange"
                               class="draggable-order-number"
                        />
                        <button type="button" class="btn btn-primary btn-sm" v-on:click="editItem(item)"><i class="mdi mdi-pencil"></i></button>
                        <button type="button" class="btn btn-primary btn-sm" v-on:click="showQuestionPreview(item)"><i class="mdi mdi-open-in-app"></i></button>
                        <button type="button" class="btn btn-danger btn-sm" v-on:click="removeItem(item)"><i class="mdi mdi-minus"></i></button>
                    </span>
                    <img class="sz-img-w30" v-bind:src="item.icon_url" alt="icon">
                    &nbsp;
                    <span>
                        {{ item.title }}
                    </span>
                </li>
            </draggable>
        </ul>

        <div class="checkbox">
            <label for="enforce-items-order">
                <input id="enforce-items-order" type="checkbox" name="enforce_items_order" value="1" v-model="enforceItemsOrder" @click="enforceItemsOrderChange" />
                {{ $t('enforce_items_order') }}
            </label>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';

    export default {
        components: {
            draggable,
            'game-question-modal': require('./GameQuestionModal.vue').default
        },
        props: ['baseUrl', 'apiUrl', 'canCreateActivityItem'],
        mounted() {
            const vm = this;

            // TODO Consider moving options definition to the App instance and passing those on to component
            if ( window.Laravel.activityItems ) {
                this.items = window.Laravel.activityItems;
                let positions = window.Laravel.activityItemPositions;
                for (let i in this.items) {
                    this.items[i].order = parseInt(positions[i]) || (i+1);
                }
            }
            if ( window.Laravel.zooOptions ) {
                this.zooOptions = _.merge(window.Laravel.zooOptions, this.zooOptions);
            }
            if ( window.Laravel.questionTypeOptions ) {
                this.questionTypeOptions = _.merge(window.Laravel.questionTypeOptions, this.questionTypeOptions);
            }
            if ( window.Laravel.languageOptions ) {
                this.languageOptions = _.merge(window.Laravel.languageOptions, this.languageOptions);
            }
            if (window.Laravel.enforceItemsOrder) {
                this.enforceItemsOrder = window.Laravel.enforceItemsOrder;
            }

            this.$nextTick(() => {
                $(this.$refs.modal).on('hide.bs.modal', e => {
                    if ( vm.inAjaxCall ) {
                        e.preventDefault();
                    }
                });
            });

            window.addEventListener('message', function(e) {
                if ( e.origin !== window.origin ) {
                    return;
                }

                if ( e.data && e.data.type === 'addActivityItem' && e.data.activityItem ) {
                    vm.addItem(_.cloneDeep(e.data.activityItem));
                    e.source.close();
                }
            }, false);
        },
        data() {
            return {
                items: [],
                options: {
                    sort: true
                },
                inAjaxCall: false,
                searchResults: {
                    data: [],
                    total: 0,
                    loadMore: false,
                    order: {
                        by: null,
                        direction: null
                    }
                },
                zooOptions: {
                    0: this.$t('any')
                },
                questionTypeOptions: {
                    0: this.$t('any')
                },
                languageOptions: {
                    0: this.$t('any')
                },
                searchForm: {
                    keywords: '',
                    zoo: '0',
                    questionType: '0',
                    language: '0'
                },
                fakeGameId: 0,
                previewItem: null,
                enforceItemsOrder: false
            };
        },
        computed: {
            sortedSearchResults() {
                if ( this.searchResults.order.by && this.searchResults.order.direction ) {
                    return _.orderBy(this.searchResults.data, this.searchResults.order.by, this.searchResults.order.direction);
                }

                return this.searchResults.data;
            }
        },
        methods: {
            enforceItemsOrderChange: function (evt) {
                this.enforceItemsOrder = evt.target.checked;
            },
            getNewOrder: function(newIndex, oldIndex, oldItemBeforeIndex, oldItemAfterIndex, newItemBeforeIndex, newItemAfterIndex, oldOrder, oldItemBeforeOrder, oldItemAfterOrder, newItemBeforeOrder, newItemAfterOrder) {
                let newOrder = newItemBeforeOrder + 1;

                if (oldOrder < newItemBeforeOrder && newItemBeforeOrder === newItemAfterOrder && (oldOrder === oldItemAfterOrder || oldOrder === oldItemBeforeOrder)) {
                    newOrder = newItemBeforeOrder;
                } else if (oldOrder < newItemBeforeOrder && newItemBeforeOrder === newItemAfterOrder) {
                    newOrder = newItemBeforeOrder;
                } else if (oldOrder === newItemBeforeOrder && newItemBeforeOrder === newItemAfterOrder) {
                    newOrder = newItemBeforeOrder;
                } else if (oldOrder > newItemAfterOrder && newItemBeforeOrder === newItemAfterOrder) {
                    newOrder = newItemBeforeOrder;
                } else if (oldOrder < newItemBeforeOrder && oldOrder !== oldItemAfterOrder) {
                    newOrder = newItemBeforeOrder;
                } else if (oldOrder > newItemAfterOrder && newItemBeforeOrder < 0) {
                    newOrder = 1;
                }
                return newOrder;

            },
            changeOtherItemsOrder: function (newOrder, oldOrder, newIndex, oldIndex, oldItemBeforeIndex, oldItemAfterIndex, newItemBeforeIndex, newItemAfterIndex, oldItemBeforeOrder, oldItemAfterOrder, newItemBeforeOrder, newItemAfterOrder) {
                const itemsLength = this.items.length;

                if (oldOrder === newItemBeforeOrder && oldOrder === newOrder) {
                    // do nothing
                } else if (newItemBeforeOrder === newItemAfterOrder && (oldOrder === oldItemAfterOrder || oldOrder === oldItemBeforeOrder)) {
                    // do nothing
                } else if (oldIndex < newIndex) {
                    if (newOrder === newItemBeforeOrder && newOrder === newItemAfterOrder) {
                        for (let i=oldIndex; i<itemsLength; i++) {
                            this.decreaseItemOrder(i);
                        }
                    } else if (oldOrder === oldItemBeforeOrder && oldOrder === oldItemAfterOrder && oldOrder < newOrder) {
                        for (let i=(newIndex+1); i<itemsLength; i++) {
                            if (this.getItemOrder(i) === newOrder) {
                                continue;
                            }
                            this.increaseItemOrder(i);
                        }
                    } else if (oldOrder > oldItemBeforeOrder && oldOrder < oldItemAfterOrder && newOrder === newItemBeforeOrder) {
                        for (let i=oldItemAfterIndex; i<newIndex; i++) {
                            this.decreaseItemOrder(i);
                        }
                    }
                } else {
                    if (newItemBeforeOrder === newItemAfterOrder) {
                        for (let i=oldItemAfterIndex; i<itemsLength; i++) {
                            let currentItemOrder = this.getItemOrder(i);
                            if (currentItemOrder === newItemAfterOrder || currentItemOrder === oldItemBeforeOrder) {
                                continue;
                            }
                            this.decreaseItemOrder(i);
                        }
                    } else if (oldOrder === oldItemAfterOrder) {
                        for (let i=(newIndex+1); i<itemsLength; i++) {
                            this.increaseItemOrder(i);
                        }
                    } else {
                        let lastItemOrder = this.getItemOrder(newIndex);
                        let oldLastItemOrder = 0;
                        for (let i=(newIndex+1); i<=oldIndex; i++) {
                            let currentOrder = this.getItemOrder(i);
                            if ( (currentOrder > lastItemOrder) ||
                                (oldLastItemOrder === lastItemOrder && lastItemOrder === currentOrder) ) {
                                lastItemOrder = currentOrder;
                                oldLastItemOrder = currentOrder;
                                continue;
                            }
                            oldLastItemOrder = currentOrder;
                            this.increaseItemOrder(i);
                            lastItemOrder = this.getItemOrder(i);
                        }
                    }
                }
            },
            onChange: function(evt){
                let itemsLength = this.items.length;
                let newIndex = parseInt(evt.moved.newIndex);
                let oldIndex = parseInt(evt.moved.oldIndex);
                let oldItemBeforeIndex = oldIndex < newIndex ? oldIndex - 1 : oldIndex;
                let oldItemAfterIndex = oldIndex < newIndex ? oldIndex : oldIndex + 1;
                let newItemBeforeIndex = newIndex === 0 ? false : newIndex - 1;
                let newItemAfterIndex = newIndex + 1 === itemsLength ? false : newIndex + 1;
                let oldOrder = this.items[newIndex].order;
                let oldItemBeforeOrder = oldItemBeforeIndex >= 0 ? this.items[oldItemBeforeIndex].order : -1;
                let oldItemAfterOrder = oldItemAfterIndex < itemsLength ? this.items[oldItemAfterIndex].order : 999999;
                let newItemBeforeOrder = newItemBeforeIndex !== false ? this.items[newItemBeforeIndex].order : -1;
                let newItemAfterOrder = newItemAfterIndex !== false ? this.items[newItemAfterIndex].order : 999999;

                let newOrder = this.getNewOrder(newIndex, oldIndex, oldItemBeforeIndex, oldItemAfterIndex, newItemBeforeIndex, newItemAfterIndex, oldOrder, oldItemBeforeOrder, oldItemAfterOrder, newItemBeforeOrder, newItemAfterOrder);
                this.changeItemOrder(newIndex, function (item) {
                    item.order = newOrder;
                });
                this.changeOtherItemsOrder(newOrder, oldOrder, newIndex, oldIndex, oldItemBeforeIndex, oldItemAfterIndex, newItemBeforeIndex, newItemAfterIndex, oldItemBeforeOrder, oldItemAfterOrder, newItemBeforeOrder, newItemAfterOrder);
            },
            itemOrderChange: function(evt) {
                let index = parseInt(evt.target.attributes['data-item-index'].value);
                let item = this.items[index];
                let order = parseInt(evt.target.value);
                if (order < 1) {
                    order = 1;
                }
                let newIndex = this.findNewIndex(order, index);
                this.items.splice(index, 1);
                item.order = order;
                this.items.splice(newIndex, 0, item);
            },
            increaseItemOrder: function (index) {
                this.changeItemOrder(index, function (item) {
                    item.order ++;
                });
            },
            decreaseItemOrder: function (index) {
                this.changeItemOrder(index, function (item) {
                    item.order --;
                });
            },
            getItemOrder: function(index) {
                if (index < this.items.length && index >= 0) {
                    return this.items[index].order;
                }

                return 0;
            },
            changeItemOrder: function(index, callback) {
                let newItem = this.items[index];
                callback(newItem);
                this.items.splice(index, 1, newItem);
            },
            findNewIndex: function (newOrder, oldIndex) {
                let itemsLength = this.items.length;
                for (let i=0; i<itemsLength; i++) {
                    let currentItem = this.items[i];
                    let currentOrder = currentItem.order;
                    if (currentOrder >= newOrder) {
                        return oldIndex < i ? i - 1 : i;
                    }
                }
                return itemsLength - 1;
            },
            openDialog() {
                this.$nextTick(() => {
                    $(this.$refs.modal).modal('show');
                });
            },
            closeDialog() {
                if ( this.inAjaxCall ) return;

                this.$nextTick(() => {
                    $(this.$refs.modal).modal('hide');
                    // TODO Make sure results are purged and data values are reset
                });
            },
            searchForItems() {
                if ( this.inAjaxCall ) return;
                const vm = this;
                let params = {
                    keywords: vm.searchForm.keywords,
                    zoo: vm.searchForm.zoo,
                    questionType: vm.searchForm.questionType,
                    language: vm.searchForm.language
                };
                vm.inAjaxCall= true;
                this.$http.get(vm.apiUrl + '/tasks/search', { params: params }).then(response => {
                    vm.inAjaxCall = false;
                    vm.searchResults.total = response.body.total;
                    vm.searchResults.currentPage = response.body.current_page;
                    vm.searchResults.params = params;
                    vm.searchResults.loadMore = response.body.current_page < response.body.last_page;
                    vm.searchResults.data = _.cloneDeep(response.body.data);
                }, response => {
                    vm.inAjaxCall = false;
                    // TODO Needs some visual error handling
                    console.error('Error', response);
                });
            },
            loadMoreItems() {
                const vm = this;
                vm.inAjaxCall = true;
                vm.searchResults.params.page = vm.searchResults.currentPage + 1;
                this.$http.get(vm.apiUrl + '/tasks/search', { params: vm.searchResults.params }).then(response => {
                    vm.inAjaxCall = false;
                    vm.searchResults.data.push(..._.cloneDeep(response.body.data));
                    vm.searchResults.currentPage = response.body.current_page;
                    vm.searchResults.loadMore = response.body.current_page < response.body.last_page;
                }, response => {
                    vm.inAjaxCall = false;
                    // TODO Needs some visual error handling
                    console.error('Error', response);
                });
            },
            getItemIndex(item) {
                return _.findIndex(this.items, (single) => { return single.id === item.id; });
            },
            hasItem(item) {
                return this.getItemIndex(item) !== -1;
            },
            addItem(item) {
                if ( !this.hasItem(item) ) {
                    this.items.push(item);
                }
            },
            removeItem(item) {
                const itemIndex = this.getItemIndex(item);
                if ( itemIndex !== -1 ) {
                    this.items.splice(itemIndex, 1);
                }
            },
            editItem(item) {
                window.open(this.baseUrl + '/tasks/' + item.id + '/edit', '_blank');
            },
            getOptionValueFromId(options, id) {
                const option = options[id];
                return option ? option : id;
            },
            getZooFromId(id) {
                return this.getOptionValueFromId(this.zooOptions, id);
            },
            getQuestionTypeFromId(id) {
                return this.getOptionValueFromId(this.questionTypeOptions, id);
            },
            getLanguageFromId(id) {
                return this.getOptionValueFromId(this.languageOptions, id);
            },
            sortSearchResults(orderBy) {
                const tmpOrderBy = this.searchResults.order.by;
                const tmpOrderDirection = this.searchResults.order.direction;
                if ( tmpOrderBy === orderBy ) {
                    this.searchResults.order.direction = ( tmpOrderDirection === 'desc' ) ? 'asc' : 'desc';
                } else {
                    this.searchResults.order.by = orderBy;
                    this.searchResults.order.direction = tmpOrderDirection ? tmpOrderDirection : 'desc';
                }
            },
            isOrderedBy(orderBy) {
                return this.searchResults.order.by === orderBy;
            },
            showQuestionPreview(item, reapplyBodyClass) {
                this.previewItem = item;

                this.$nextTick(() => {
                    const modal = this.$refs.questionModal.open();

                    if ( reapplyBodyClass ) {
                        modal.one('hidden.bs.modal', () => {
                            // Fix .modal-open issue
                            $(document).find('body').addClass('modal-open');
                        });
                    }

                    this.$nextTick(() => {
                        const modalData = modal.data();
                        modalData['bs.modal'].$backdrop.css('z-index', 1051);
                        modalData['bs.modal'].$element.css('z-index', 1061);
                        modalData['bs.modal'].$dialog.css('margin-top', '50px');
                        modalData['bs.modal'].$dialog.find('.modal-content')
                            .css('margin-left', '20px')
                            .css('margin-right', '20px')
                            .css('margin-top', '20px');
                    })
                });
            },
            createNewActivityItem() {
                window.open(this.baseUrl + '/tasks/create', '_blank');
            }
        }
    }
</script>
