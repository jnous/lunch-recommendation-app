import { error } from '@sveltejs/kit';
import {data} from '../assets/data.js';

export function load() {
    return {
        restaurants: data.elements
    };

    throw error(404, 'Not found');
}