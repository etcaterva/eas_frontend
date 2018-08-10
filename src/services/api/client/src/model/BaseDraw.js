/**
 * EAS API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BaseObject from './BaseObject';
import DrawMetadata from './DrawMetadata';

/**
 * The BaseDraw model module.
 * @module model/BaseDraw
 * @version v1
 */
class BaseDraw {
    /**
     * Constructs a new <code>BaseDraw</code>.
     * @alias module:model/BaseDraw
     * @extends module:model/BaseObject
     * @implements module:model/BaseObject
     */
    constructor() { 
        BaseObject.initialize(this);
        BaseDraw.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseDraw</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseDraw} obj Optional instance to populate.
     * @return {module:model/BaseDraw} The populated <code>BaseDraw</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseDraw();
            BaseObject.constructFromObject(data, obj);
            BaseObject.constructFromObject(data, obj);

            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('private_id')) {
                obj['private_id'] = ApiClient.convertToType(data['private_id'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], [DrawMetadata]);
            }
        }
        return obj;
    }


}

/**
 * @member {Date} updated_at
 */
BaseDraw.prototype['updated_at'] = undefined;

/**
 * @member {String} title
 */
BaseDraw.prototype['title'] = undefined;

/**
 * @member {String} description
 */
BaseDraw.prototype['description'] = undefined;

/**
 * @member {String} private_id
 */
BaseDraw.prototype['private_id'] = undefined;

/**
 * @member {Array.<module:model/DrawMetadata>} metadata
 */
BaseDraw.prototype['metadata'] = undefined;


// Implement BaseObject interface:
/**
 * @member {String} id
 */
BaseObject.prototype['id'] = undefined;
/**
 * @member {Date} created_at
 */
BaseObject.prototype['created_at'] = undefined;




export default BaseDraw;

