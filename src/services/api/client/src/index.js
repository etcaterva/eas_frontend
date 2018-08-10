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


import ApiClient from './ApiClient';
import BaseDraw from './model/BaseDraw';
import BaseObject from './model/BaseObject';
import BaseResult from './model/BaseResult';
import Coin from './model/Coin';
import CoinResult from './model/CoinResult';
import DrawMetadata from './model/DrawMetadata';
import DrawTossPayload from './model/DrawTossPayload';
import Groups from './model/Groups';
import GroupsResult from './model/GroupsResult';
import Letter from './model/Letter';
import LetterResult from './model/LetterResult';
import Lottery from './model/Lottery';
import LotteryResult from './model/LotteryResult';
import Participant from './model/Participant';
import Prize from './model/Prize';
import Raffle from './model/Raffle';
import RaffleResult from './model/RaffleResult';
import RaffleResultValue from './model/RaffleResultValue';
import RandomNumber from './model/RandomNumber';
import RandomNumberResult from './model/RandomNumberResult';
import Spinner from './model/Spinner';
import SpinnerResult from './model/SpinnerResult';
import CoinApi from './api/CoinApi';
import GroupsApi from './api/GroupsApi';
import LetterApi from './api/LetterApi';
import LotteryApi from './api/LotteryApi';
import RaffleApi from './api/RaffleApi';
import RandomNumberApi from './api/RandomNumberApi';
import SpinnerApi from './api/SpinnerApi';


/**
* ERROR_UNKNOWN.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var EchaloasuerteApi = require('index'); // See note below*.
* var xxxSvc = new EchaloasuerteApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new EchaloasuerteApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new EchaloasuerteApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new EchaloasuerteApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The BaseDraw model constructor.
     * @property {module:model/BaseDraw}
     */
    BaseDraw,

    /**
     * The BaseObject model constructor.
     * @property {module:model/BaseObject}
     */
    BaseObject,

    /**
     * The BaseResult model constructor.
     * @property {module:model/BaseResult}
     */
    BaseResult,

    /**
     * The Coin model constructor.
     * @property {module:model/Coin}
     */
    Coin,

    /**
     * The CoinResult model constructor.
     * @property {module:model/CoinResult}
     */
    CoinResult,

    /**
     * The DrawMetadata model constructor.
     * @property {module:model/DrawMetadata}
     */
    DrawMetadata,

    /**
     * The DrawTossPayload model constructor.
     * @property {module:model/DrawTossPayload}
     */
    DrawTossPayload,

    /**
     * The Groups model constructor.
     * @property {module:model/Groups}
     */
    Groups,

    /**
     * The GroupsResult model constructor.
     * @property {module:model/GroupsResult}
     */
    GroupsResult,

    /**
     * The Letter model constructor.
     * @property {module:model/Letter}
     */
    Letter,

    /**
     * The LetterResult model constructor.
     * @property {module:model/LetterResult}
     */
    LetterResult,

    /**
     * The Lottery model constructor.
     * @property {module:model/Lottery}
     */
    Lottery,

    /**
     * The LotteryResult model constructor.
     * @property {module:model/LotteryResult}
     */
    LotteryResult,

    /**
     * The Participant model constructor.
     * @property {module:model/Participant}
     */
    Participant,

    /**
     * The Prize model constructor.
     * @property {module:model/Prize}
     */
    Prize,

    /**
     * The Raffle model constructor.
     * @property {module:model/Raffle}
     */
    Raffle,

    /**
     * The RaffleResult model constructor.
     * @property {module:model/RaffleResult}
     */
    RaffleResult,

    /**
     * The RaffleResultValue model constructor.
     * @property {module:model/RaffleResultValue}
     */
    RaffleResultValue,

    /**
     * The RandomNumber model constructor.
     * @property {module:model/RandomNumber}
     */
    RandomNumber,

    /**
     * The RandomNumberResult model constructor.
     * @property {module:model/RandomNumberResult}
     */
    RandomNumberResult,

    /**
     * The Spinner model constructor.
     * @property {module:model/Spinner}
     */
    Spinner,

    /**
     * The SpinnerResult model constructor.
     * @property {module:model/SpinnerResult}
     */
    SpinnerResult,

    /**
    * The CoinApi service constructor.
    * @property {module:api/CoinApi}
    */
    CoinApi,

    /**
    * The GroupsApi service constructor.
    * @property {module:api/GroupsApi}
    */
    GroupsApi,

    /**
    * The LetterApi service constructor.
    * @property {module:api/LetterApi}
    */
    LetterApi,

    /**
    * The LotteryApi service constructor.
    * @property {module:api/LotteryApi}
    */
    LotteryApi,

    /**
    * The RaffleApi service constructor.
    * @property {module:api/RaffleApi}
    */
    RaffleApi,

    /**
    * The RandomNumberApi service constructor.
    * @property {module:api/RandomNumberApi}
    */
    RandomNumberApi,

    /**
    * The SpinnerApi service constructor.
    * @property {module:api/SpinnerApi}
    */
    SpinnerApi
};
