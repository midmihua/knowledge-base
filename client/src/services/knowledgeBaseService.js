import { BACKEND_URL } from '../config';

export default class KnowledeBaseService {

    constructor() {
        this._baseUrl = BACKEND_URL;
    }

    _get = async (url) => {
        const response = await fetch(`${this._baseUrl} ${url} `);
        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status} `);
        }
        return await response.json();
    };

    getLinks = async () => {
        const result = await this._get(`/ link`);
        return result.collection.map(this._transformLink);
    };

    getLink = async (linkID) => {
        const result = await this._get(`/ link / ${linkID} `);
        return this._transformLink(result.collection);
    };

    getUsers = async () => {
        const result = await this._get(`/ user`);
        return result.collection.map(this._transformUser);
    };

    //---------------------------------------------------

    _transformLink = (document) => {
        const { _id, creator, link, props } = document;
        return {
            _id,
            creator,
            link,
            props
        }
    }

    _transformUser = (document) => {
        const { _id, username, email } = document;
        return {
            _id,
            username,
            email
        }
    }
};