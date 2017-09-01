import { getDicTree } from '@/services/util';
import axios from 'axios';

export const state = () => {
	return {
		// 数据字典
		dicTree: null
	}
};

export const mutations = {
	// 获取数据字典
	GET_DICTREE(state, tree) {
		let result = tree.reduce(function(prev, item) {
			prev[item.typeKey] ?
				prev[item.typeKey].push(item) :
				prev[item.typeKey] = [item];
			return prev;
		}, {});
		// 是否接受开机
		result.PRODUCT_STARTUP = [{dicValue: 0, name: '不接受'},{dicValue: 1, name: '接受'}];
		state.dicTree = result;
	}
};
export const actions = {
	// 根据typeKey获取字典列表
	async getDicTree({
		commit
	}, params) {
		let data = await getDicTree(params);
		commit('GET_DICTREE', data.data.data);
	}
};
export const getters = {
	isDicTree: (state) => !!state.dicTree,
	dicTree: (state) => state.dicTree
};