/* Magic Mirror
 * Module: MMM-ShipmentTracking
 *
 * By fewieden https://github.com/fewieden/MMM-ShipmentTracking
 * MIT Licensed.
 */

const carriers = ['DHL'];

module.exports = () => {
    return {
        track: function(carrier, ids) {
            if(carriers.indexOf(carrier) !== -1){
                var track = require('./carriers/' + carrier + '.js').track;
                return new Promise((resolve, reject)=>{
                    track(ids)
                    .then((res) => { resolve(res); })
                    .catch((res) => { reject(res); });
                });
            } else {
                return new Promise((resolve, reject)=>{
                    reject({error: "Carrier is not supported!"});
                });
            }
        }
    };
};