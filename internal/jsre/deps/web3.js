require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) {
          return a(o, !0);
        }
        if (i) {
          return i(o, !0);
        }
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f;
      }
      var l = n[o] = {exports:{}};
      t[o][0].call(l.exports, function(e) {
        var n = t[o][1][e];
        return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = typeof require == "function" && require;
  for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }
  return s;
}({1:[function(require, module, exports) {
  module.exports = [{"constant":true, "inputs":[{"name":"_owner", "type":"address"}], "name":"name", "outputs":[{"name":"o_name", "type":"bytes32"}], "type":"function"}, {"constant":true, "inputs":[{"name":"_name", "type":"bytes32"}], "name":"owner", "outputs":[{"name":"", "type":"address"}], "type":"function"}, {"constant":true, "inputs":[{"name":"_name", "type":"bytes32"}], "name":"content", "outputs":[{"name":"", "type":"bytes32"}], "type":"function"}, {"constant":true, "inputs":[{"name":"_name", 
  "type":"bytes32"}], "name":"addr", "outputs":[{"name":"", "type":"address"}], "type":"function"}, {"constant":false, "inputs":[{"name":"_name", "type":"bytes32"}], "name":"reserve", "outputs":[], "type":"function"}, {"constant":true, "inputs":[{"name":"_name", "type":"bytes32"}], "name":"subRegistrar", "outputs":[{"name":"", "type":"address"}], "type":"function"}, {"constant":false, "inputs":[{"name":"_name", "type":"bytes32"}, {"name":"_newOwner", "type":"address"}], "name":"transfer", "outputs":[], 
  "type":"function"}, {"constant":false, "inputs":[{"name":"_name", "type":"bytes32"}, {"name":"_registrar", "type":"address"}], "name":"setSubRegistrar", "outputs":[], "type":"function"}, {"constant":false, "inputs":[], "name":"Registrar", "outputs":[], "type":"function"}, {"constant":false, "inputs":[{"name":"_name", "type":"bytes32"}, {"name":"_a", "type":"address"}, {"name":"_primary", "type":"bool"}], "name":"setAddress", "outputs":[], "type":"function"}, {"constant":false, "inputs":[{"name":"_name", 
  "type":"bytes32"}, {"name":"_content", "type":"bytes32"}], "name":"setContent", "outputs":[], "type":"function"}, {"constant":false, "inputs":[{"name":"_name", "type":"bytes32"}], "name":"disown", "outputs":[], "type":"function"}, {"anonymous":false, "inputs":[{"indexed":true, "name":"_name", "type":"bytes32"}, {"indexed":false, "name":"_winner", "type":"address"}], "name":"AuctionEnded", "type":"event"}, {"anonymous":false, "inputs":[{"indexed":true, "name":"_name", "type":"bytes32"}, {"indexed":false, 
  "name":"_bidder", "type":"address"}, {"indexed":false, "name":"_value", "type":"uint256"}], "name":"NewBid", "type":"event"}, {"anonymous":false, "inputs":[{"indexed":true, "name":"name", "type":"bytes32"}], "name":"Changed", "type":"event"}, {"anonymous":false, "inputs":[{"indexed":true, "name":"name", "type":"bytes32"}, {"indexed":true, "name":"addr", "type":"address"}], "name":"PrimaryChanged", "type":"event"}];
}, {}], 2:[function(require, module, exports) {
  module.exports = [{"constant":true, "inputs":[{"name":"_name", "type":"bytes32"}], "name":"owner", "outputs":[{"name":"", "type":"address"}], "type":"function"}, {"constant":false, "inputs":[{"name":"_name", "type":"bytes32"}, {"name":"_refund", "type":"address"}], "name":"disown", "outputs":[], "type":"function"}, {"constant":true, "inputs":[{"name":"_name", "type":"bytes32"}], "name":"addr", "outputs":[{"name":"", "type":"address"}], "type":"function"}, {"constant":false, "inputs":[{"name":"_name", 
  "type":"bytes32"}], "name":"reserve", "outputs":[], "type":"function"}, {"constant":false, "inputs":[{"name":"_name", "type":"bytes32"}, {"name":"_newOwner", "type":"address"}], "name":"transfer", "outputs":[], "type":"function"}, {"constant":false, "inputs":[{"name":"_name", "type":"bytes32"}, {"name":"_a", "type":"address"}], "name":"setAddr", "outputs":[], "type":"function"}, {"anonymous":false, "inputs":[{"indexed":true, "name":"name", "type":"bytes32"}], "name":"Changed", "type":"event"}];
}, {}], 3:[function(require, module, exports) {
  module.exports = [{"constant":false, "inputs":[{"name":"from", "type":"bytes32"}, {"name":"to", "type":"address"}, {"name":"value", "type":"uint256"}], "name":"transfer", "outputs":[], "type":"function"}, {"constant":false, "inputs":[{"name":"from", "type":"bytes32"}, {"name":"to", "type":"address"}, {"name":"indirectId", "type":"bytes32"}, {"name":"value", "type":"uint256"}], "name":"icapTransfer", "outputs":[], "type":"function"}, {"constant":false, "inputs":[{"name":"to", "type":"bytes32"}], 
  "name":"deposit", "outputs":[], "payable":true, "type":"function"}, {"anonymous":false, "inputs":[{"indexed":true, "name":"from", "type":"address"}, {"indexed":false, "name":"value", "type":"uint256"}], "name":"AnonymousDeposit", "type":"event"}, {"anonymous":false, "inputs":[{"indexed":true, "name":"from", "type":"address"}, {"indexed":true, "name":"to", "type":"bytes32"}, {"indexed":false, "name":"value", "type":"uint256"}], "name":"Deposit", "type":"event"}, {"anonymous":false, "inputs":[{"indexed":true, 
  "name":"from", "type":"bytes32"}, {"indexed":true, "name":"to", "type":"address"}, {"indexed":false, "name":"value", "type":"uint256"}], "name":"Transfer", "type":"event"}, {"anonymous":false, "inputs":[{"indexed":true, "name":"from", "type":"bytes32"}, {"indexed":true, "name":"to", "type":"address"}, {"indexed":false, "name":"indirectId", "type":"bytes32"}, {"indexed":false, "name":"value", "type":"uint256"}], "name":"IcapTransfer", "type":"event"}];
}, {}], 4:[function(require, module, exports) {
  var f = require("./formatters");
  var SolidityType = require("./type");
  var SolidityTypeAddress = function() {
    this._inputFormatter = f.formatInputInt;
    this._outputFormatter = f.formatOutputAddress;
  };
  SolidityTypeAddress.prototype = new SolidityType({});
  SolidityTypeAddress.prototype.constructor = SolidityTypeAddress;
  SolidityTypeAddress.prototype.isType = function(name) {
    return !!name.match(/address(\[([0-9]*)\])?/);
  };
  module.exports = SolidityTypeAddress;
}, {"./formatters":9, "./type":14}], 5:[function(require, module, exports) {
  var f = require("./formatters");
  var SolidityType = require("./type");
  var SolidityTypeBool = function() {
    this._inputFormatter = f.formatInputBool;
    this._outputFormatter = f.formatOutputBool;
  };
  SolidityTypeBool.prototype = new SolidityType({});
  SolidityTypeBool.prototype.constructor = SolidityTypeBool;
  SolidityTypeBool.prototype.isType = function(name) {
    return !!name.match(/^bool(\[([0-9]*)\])*$/);
  };
  module.exports = SolidityTypeBool;
}, {"./formatters":9, "./type":14}], 6:[function(require, module, exports) {
  var f = require("./formatters");
  var SolidityType = require("./type");
  var SolidityTypeBytes = function() {
    this._inputFormatter = f.formatInputBytes;
    this._outputFormatter = f.formatOutputBytes;
  };
  SolidityTypeBytes.prototype = new SolidityType({});
  SolidityTypeBytes.prototype.constructor = SolidityTypeBytes;
  SolidityTypeBytes.prototype.isType = function(name) {
    return !!name.match(/^bytes([0-9]{1,})(\[([0-9]*)\])*$/);
  };
  module.exports = SolidityTypeBytes;
}, {"./formatters":9, "./type":14}], 7:[function(require, module, exports) {
  var f = require("./formatters");
  var SolidityTypeAddress = require("./address");
  var SolidityTypeBool = require("./bool");
  var SolidityTypeInt = require("./int");
  var SolidityTypeUInt = require("./uint");
  var SolidityTypeDynamicBytes = require("./dynamicbytes");
  var SolidityTypeString = require("./string");
  var SolidityTypeReal = require("./real");
  var SolidityTypeUReal = require("./ureal");
  var SolidityTypeBytes = require("./bytes");
  var isDynamic = function(solidityType, type) {
    return solidityType.isDynamicType(type) || solidityType.isDynamicArray(type);
  };
  var SolidityCoder = function(types) {
    this._types = types;
  };
  SolidityCoder.prototype._requireType = function(type) {
    var solidityType = this._types.filter(function(t) {
      return t.isType(type);
    })[0];
    if (!solidityType) {
      throw Error("invalid solidity type!: " + type);
    }
    return solidityType;
  };
  SolidityCoder.prototype.encodeParam = function(type, param) {
    return this.encodeParams([type], [param]);
  };
  SolidityCoder.prototype.encodeParams = function(types, params) {
    var solidityTypes = this.getSolidityTypes(types);
    var encodeds = solidityTypes.map(function(solidityType, index) {
      return solidityType.encode(params[index], types[index]);
    });
    var dynamicOffset = solidityTypes.reduce(function(acc, solidityType, index) {
      var staticPartLength = solidityType.staticPartLength(types[index]);
      var roundedStaticPartLength = Math.floor((staticPartLength + 31) / 32) * 32;
      return acc + (isDynamic(solidityTypes[index], types[index]) ? 32 : roundedStaticPartLength);
    }, 0);
    var result = this.encodeMultiWithOffset(types, solidityTypes, encodeds, dynamicOffset);
    return result;
  };
  SolidityCoder.prototype.encodeMultiWithOffset = function(types, solidityTypes, encodeds, dynamicOffset) {
    var result = "";
    var self = this;
    types.forEach(function(type, i) {
      if (isDynamic(solidityTypes[i], types[i])) {
        result += f.formatInputInt(dynamicOffset).encode();
        var e = self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
        dynamicOffset += e.length / 2;
      } else {
        result += self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
      }
    });
    types.forEach(function(type, i) {
      if (isDynamic(solidityTypes[i], types[i])) {
        var e = self.encodeWithOffset(types[i], solidityTypes[i], encodeds[i], dynamicOffset);
        dynamicOffset += e.length / 2;
        result += e;
      }
    });
    return result;
  };
  SolidityCoder.prototype.encodeWithOffset = function(type, solidityType, encoded, offset) {
    var self = this;
    if (solidityType.isDynamicArray(type)) {
      return function() {
        var nestedName = solidityType.nestedName(type);
        var nestedStaticPartLength = solidityType.staticPartLength(nestedName);
        var result = encoded[0];
        (function() {
          var previousLength = 2;
          if (solidityType.isDynamicArray(nestedName)) {
            for (var i = 1; i < encoded.length; i++) {
              previousLength += +encoded[i - 1][0] || 0;
              result += f.formatInputInt(offset + i * nestedStaticPartLength + previousLength * 32).encode();
            }
          }
        })();
        (function() {
          for (var i = 0; i < encoded.length - 1; i++) {
            var additionalOffset = result / 2;
            result += self.encodeWithOffset(nestedName, solidityType, encoded[i + 1], offset + additionalOffset);
          }
        })();
        return result;
      }();
    } else {
      if (solidityType.isStaticArray(type)) {
        return function() {
          var nestedName = solidityType.nestedName(type);
          var nestedStaticPartLength = solidityType.staticPartLength(nestedName);
          var result = "";
          if (solidityType.isDynamicArray(nestedName)) {
            (function() {
              var previousLength = 0;
              for (var i = 0; i < encoded.length; i++) {
                previousLength += +(encoded[i - 1] || [])[0] || 0;
                result += f.formatInputInt(offset + i * nestedStaticPartLength + previousLength * 32).encode();
              }
            })();
          }
          (function() {
            for (var i = 0; i < encoded.length; i++) {
              var additionalOffset = result / 2;
              result += self.encodeWithOffset(nestedName, solidityType, encoded[i], offset + additionalOffset);
            }
          })();
          return result;
        }();
      }
    }
    return encoded;
  };
  SolidityCoder.prototype.decodeParam = function(type, bytes) {
    return this.decodeParams([type], bytes)[0];
  };
  SolidityCoder.prototype.decodeParams = function(types, bytes) {
    var solidityTypes = this.getSolidityTypes(types);
    var offsets = this.getOffsets(types, solidityTypes);
    return solidityTypes.map(function(solidityType, index) {
      return solidityType.decode(bytes, offsets[index], types[index], index);
    });
  };
  SolidityCoder.prototype.getOffsets = function(types, solidityTypes) {
    var lengths = solidityTypes.map(function(solidityType, index) {
      return solidityType.staticPartLength(types[index]);
    });
    for (var i = 1; i < lengths.length; i++) {
      lengths[i] += lengths[i - 1];
    }
    return lengths.map(function(length, index) {
      var staticPartLength = solidityTypes[index].staticPartLength(types[index]);
      return length - staticPartLength;
    });
  };
  SolidityCoder.prototype.getSolidityTypes = function(types) {
    var self = this;
    return types.map(function(type) {
      return self._requireType(type);
    });
  };
  var coder = new SolidityCoder([new SolidityTypeAddress, new SolidityTypeBool, new SolidityTypeInt, new SolidityTypeUInt, new SolidityTypeDynamicBytes, new SolidityTypeBytes, new SolidityTypeString, new SolidityTypeReal, new SolidityTypeUReal]);
  module.exports = coder;
}, {"./address":4, "./bool":5, "./bytes":6, "./dynamicbytes":8, "./formatters":9, "./int":10, "./real":12, "./string":13, "./uint":15, "./ureal":16}], 8:[function(require, module, exports) {
  var f = require("./formatters");
  var SolidityType = require("./type");
  var SolidityTypeDynamicBytes = function() {
    this._inputFormatter = f.formatInputDynamicBytes;
    this._outputFormatter = f.formatOutputDynamicBytes;
  };
  SolidityTypeDynamicBytes.prototype = new SolidityType({});
  SolidityTypeDynamicBytes.prototype.constructor = SolidityTypeDynamicBytes;
  SolidityTypeDynamicBytes.prototype.isType = function(name) {
    return !!name.match(/^bytes(\[([0-9]*)\])*$/);
  };
  SolidityTypeDynamicBytes.prototype.isDynamicType = function() {
    return true;
  };
  module.exports = SolidityTypeDynamicBytes;
}, {"./formatters":9, "./type":14}], 9:[function(require, module, exports) {
  var BigNumber = require("bignumber.js");
  var utils = require("../utils/utils");
  var c = require("../utils/config");
  var SolidityParam = require("./param");
  var formatInputInt = function(value) {
    BigNumber.config(c.ETH_BIGNUMBER_ROUNDING_MODE);
    var result = utils.padLeft(utils.toTwosComplement(value).toString(16), 64);
    return new SolidityParam(result);
  };
  var formatInputBytes = function(value) {
    var result = utils.toHex(value).substr(2);
    var l = Math.floor((result.length + 63) / 64);
    result = utils.padRight(result, l * 64);
    return new SolidityParam(result);
  };
  var formatInputDynamicBytes = function(value) {
    var result = utils.toHex(value).substr(2);
    var length = result.length / 2;
    var l = Math.floor((result.length + 63) / 64);
    result = utils.padRight(result, l * 64);
    return new SolidityParam(formatInputInt(length).value + result);
  };
  var formatInputString = function(value) {
    var result = utils.fromUtf8(value).substr(2);
    var length = result.length / 2;
    var l = Math.floor((result.length + 63) / 64);
    result = utils.padRight(result, l * 64);
    return new SolidityParam(formatInputInt(length).value + result);
  };
  var formatInputBool = function(value) {
    var result = "000000000000000000000000000000000000000000000000000000000000000" + (value ? "1" : "0");
    return new SolidityParam(result);
  };
  var formatInputReal = function(value) {
    return formatInputInt((new BigNumber(value)).times((new BigNumber(2)).pow(128)));
  };
  var signedIsNegative = function(value) {
    return (new BigNumber(value.substr(0, 1), 16)).toString(2).substr(0, 1) === "1";
  };
  var formatOutputInt = function(param) {
    var value = param.staticPart() || "0";
    if (signedIsNegative(value)) {
      return (new BigNumber(value, 16)).minus(new BigNumber("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16)).minus(1);
    }
    return new BigNumber(value, 16);
  };
  var formatOutputUInt = function(param) {
    var value = param.staticPart() || "0";
    return new BigNumber(value, 16);
  };
  var formatOutputReal = function(param) {
    return formatOutputInt(param).dividedBy((new BigNumber(2)).pow(128));
  };
  var formatOutputUReal = function(param) {
    return formatOutputUInt(param).dividedBy((new BigNumber(2)).pow(128));
  };
  var formatOutputBool = function(param) {
    return param.staticPart() === "0000000000000000000000000000000000000000000000000000000000000001" ? true : false;
  };
  var formatOutputBytes = function(param, name) {
    var matches = name.match(/^bytes([0-9]*)/);
    var size = parseInt(matches[1]);
    return "0x" + param.staticPart().slice(0, 2 * size);
  };
  var formatOutputDynamicBytes = function(param) {
    var length = (new BigNumber(param.dynamicPart().slice(0, 64), 16)).toNumber() * 2;
    return "0x" + param.dynamicPart().substr(64, length);
  };
  var formatOutputString = function(param) {
    var length = (new BigNumber(param.dynamicPart().slice(0, 64), 16)).toNumber() * 2;
    return utils.toUtf8(param.dynamicPart().substr(64, length));
  };
  var formatOutputAddress = function(param) {
    var value = param.staticPart();
    return "0x" + value.slice(value.length - 40, value.length);
  };
  module.exports = {formatInputInt:formatInputInt, formatInputBytes:formatInputBytes, formatInputDynamicBytes:formatInputDynamicBytes, formatInputString:formatInputString, formatInputBool:formatInputBool, formatInputReal:formatInputReal, formatOutputInt:formatOutputInt, formatOutputUInt:formatOutputUInt, formatOutputReal:formatOutputReal, formatOutputUReal:formatOutputUReal, formatOutputBool:formatOutputBool, formatOutputBytes:formatOutputBytes, formatOutputDynamicBytes:formatOutputDynamicBytes, 
  formatOutputString:formatOutputString, formatOutputAddress:formatOutputAddress};
}, {"../utils/config":18, "../utils/utils":20, "./param":11, "bignumber.js":"bignumber.js"}], 10:[function(require, module, exports) {
  var f = require("./formatters");
  var SolidityType = require("./type");
  var SolidityTypeInt = function() {
    this._inputFormatter = f.formatInputInt;
    this._outputFormatter = f.formatOutputInt;
  };
  SolidityTypeInt.prototype = new SolidityType({});
  SolidityTypeInt.prototype.constructor = SolidityTypeInt;
  SolidityTypeInt.prototype.isType = function(name) {
    return !!name.match(/^int([0-9]*)?(\[([0-9]*)\])*$/);
  };
  module.exports = SolidityTypeInt;
}, {"./formatters":9, "./type":14}], 11:[function(require, module, exports) {
  var utils = require("../utils/utils");
  var SolidityParam = function(value, offset) {
    this.value = value || "";
    this.offset = offset;
  };
  SolidityParam.prototype.dynamicPartLength = function() {
    return this.dynamicPart().length / 2;
  };
  SolidityParam.prototype.withOffset = function(offset) {
    return new SolidityParam(this.value, offset);
  };
  SolidityParam.prototype.combine = function(param) {
    return new SolidityParam(this.value + param.value);
  };
  SolidityParam.prototype.isDynamic = function() {
    return this.offset !== undefined;
  };
  SolidityParam.prototype.offsetAsBytes = function() {
    return !this.isDynamic() ? "" : utils.padLeft(utils.toTwosComplement(this.offset).toString(16), 64);
  };
  SolidityParam.prototype.staticPart = function() {
    if (!this.isDynamic()) {
      return this.value;
    }
    return this.offsetAsBytes();
  };
  SolidityParam.prototype.dynamicPart = function() {
    return this.isDynamic() ? this.value : "";
  };
  SolidityParam.prototype.encode = function() {
    return this.staticPart() + this.dynamicPart();
  };
  SolidityParam.encodeList = function(params) {
    var totalOffset = params.length * 32;
    var offsetParams = params.map(function(param) {
      if (!param.isDynamic()) {
        return param;
      }
      var offset = totalOffset;
      totalOffset += param.dynamicPartLength();
      return param.withOffset(offset);
    });
    return offsetParams.reduce(function(result, param) {
      return result + param.dynamicPart();
    }, offsetParams.reduce(function(result, param) {
      return result + param.staticPart();
    }, ""));
  };
  module.exports = SolidityParam;
}, {"../utils/utils":20}], 12:[function(require, module, exports) {
  var f = require("./formatters");
  var SolidityType = require("./type");
  var SolidityTypeReal = function() {
    this._inputFormatter = f.formatInputReal;
    this._outputFormatter = f.formatOutputReal;
  };
  SolidityTypeReal.prototype = new SolidityType({});
  SolidityTypeReal.prototype.constructor = SolidityTypeReal;
  SolidityTypeReal.prototype.isType = function(name) {
    return !!name.match(/real([0-9]*)?(\[([0-9]*)\])?/);
  };
  module.exports = SolidityTypeReal;
}, {"./formatters":9, "./type":14}], 13:[function(require, module, exports) {
  var f = require("./formatters");
  var SolidityType = require("./type");
  var SolidityTypeString = function() {
    this._inputFormatter = f.formatInputString;
    this._outputFormatter = f.formatOutputString;
  };
  SolidityTypeString.prototype = new SolidityType({});
  SolidityTypeString.prototype.constructor = SolidityTypeString;
  SolidityTypeString.prototype.isType = function(name) {
    return !!name.match(/^string(\[([0-9]*)\])*$/);
  };
  SolidityTypeString.prototype.isDynamicType = function() {
    return true;
  };
  module.exports = SolidityTypeString;
}, {"./formatters":9, "./type":14}], 14:[function(require, module, exports) {
  var f = require("./formatters");
  var SolidityParam = require("./param");
  var SolidityType = function(config) {
    this._inputFormatter = config.inputFormatter;
    this._outputFormatter = config.outputFormatter;
  };
  SolidityType.prototype.isType = function(name) {
    throw "this method should be overrwritten for type " + name;
  };
  SolidityType.prototype.staticPartLength = function(name) {
    return (this.nestedTypes(name) || ["[1]"]).map(function(type) {
      return parseInt(type.slice(1, -1), 10) || 1;
    }).reduce(function(previous, current) {
      return previous * current;
    }, 32);
  };
  SolidityType.prototype.isDynamicArray = function(name) {
    var nestedTypes = this.nestedTypes(name);
    return !!nestedTypes && !nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g);
  };
  SolidityType.prototype.isStaticArray = function(name) {
    var nestedTypes = this.nestedTypes(name);
    return !!nestedTypes && !!nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g);
  };
  SolidityType.prototype.staticArrayLength = function(name) {
    var nestedTypes = this.nestedTypes(name);
    if (nestedTypes) {
      return parseInt(nestedTypes[nestedTypes.length - 1].match(/[0-9]{1,}/g) || 1);
    }
    return 1;
  };
  SolidityType.prototype.nestedName = function(name) {
    var nestedTypes = this.nestedTypes(name);
    if (!nestedTypes) {
      return name;
    }
    return name.substr(0, name.length - nestedTypes[nestedTypes.length - 1].length);
  };
  SolidityType.prototype.isDynamicType = function() {
    return false;
  };
  SolidityType.prototype.nestedTypes = function(name) {
    return name.match(/(\[[0-9]*\])/g);
  };
  SolidityType.prototype.encode = function(value, name) {
    var self = this;
    if (this.isDynamicArray(name)) {
      return function() {
        var length = value.length;
        var nestedName = self.nestedName(name);
        var result = [];
        result.push(f.formatInputInt(length).encode());
        value.forEach(function(v) {
          result.push(self.encode(v, nestedName));
        });
        return result;
      }();
    } else {
      if (this.isStaticArray(name)) {
        return function() {
          var length = self.staticArrayLength(name);
          var nestedName = self.nestedName(name);
          var result = [];
          for (var i = 0; i < length; i++) {
            result.push(self.encode(value[i], nestedName));
          }
          return result;
        }();
      }
    }
    return this._inputFormatter(value, name).encode();
  };
  SolidityType.prototype.decode = function(bytes, offset, name) {
    var self = this;
    if (this.isDynamicArray(name)) {
      return function() {
        var arrayOffset = parseInt("0x" + bytes.substr(offset * 2, 64));
        var length = parseInt("0x" + bytes.substr(arrayOffset * 2, 64));
        var arrayStart = arrayOffset + 32;
        var nestedName = self.nestedName(name);
        var nestedStaticPartLength = self.staticPartLength(nestedName);
        var roundedNestedStaticPartLength = Math.floor((nestedStaticPartLength + 31) / 32) * 32;
        var result = [];
        for (var i = 0; i < length * roundedNestedStaticPartLength; i += roundedNestedStaticPartLength) {
          result.push(self.decode(bytes, arrayStart + i, nestedName));
        }
        return result;
      }();
    } else {
      if (this.isStaticArray(name)) {
        return function() {
          var length = self.staticArrayLength(name);
          var arrayStart = offset;
          var nestedName = self.nestedName(name);
          var nestedStaticPartLength = self.staticPartLength(nestedName);
          var roundedNestedStaticPartLength = Math.floor((nestedStaticPartLength + 31) / 32) * 32;
          var result = [];
          for (var i = 0; i < length * roundedNestedStaticPartLength; i += roundedNestedStaticPartLength) {
            result.push(self.decode(bytes, arrayStart + i, nestedName));
          }
          return result;
        }();
      } else {
        if (this.isDynamicType(name)) {
          return function() {
            var dynamicOffset = parseInt("0x" + bytes.substr(offset * 2, 64));
            var length = parseInt("0x" + bytes.substr(dynamicOffset * 2, 64));
            var roundedLength = Math.floor((length + 31) / 32);
            var param = new SolidityParam(bytes.substr(dynamicOffset * 2, (1 + roundedLength) * 64), 0);
            return self._outputFormatter(param, name);
          }();
        }
      }
    }
    var length = this.staticPartLength(name);
    var param = new SolidityParam(bytes.substr(offset * 2, length * 2));
    return this._outputFormatter(param, name);
  };
  module.exports = SolidityType;
}, {"./formatters":9, "./param":11}], 15:[function(require, module, exports) {
  var f = require("./formatters");
  var SolidityType = require("./type");
  var SolidityTypeUInt = function() {
    this._inputFormatter = f.formatInputInt;
    this._outputFormatter = f.formatOutputUInt;
  };
  SolidityTypeUInt.prototype = new SolidityType({});
  SolidityTypeUInt.prototype.constructor = SolidityTypeUInt;
  SolidityTypeUInt.prototype.isType = function(name) {
    return !!name.match(/^uint([0-9]*)?(\[([0-9]*)\])*$/);
  };
  module.exports = SolidityTypeUInt;
}, {"./formatters":9, "./type":14}], 16:[function(require, module, exports) {
  var f = require("./formatters");
  var SolidityType = require("./type");
  var SolidityTypeUReal = function() {
    this._inputFormatter = f.formatInputReal;
    this._outputFormatter = f.formatOutputUReal;
  };
  SolidityTypeUReal.prototype = new SolidityType({});
  SolidityTypeUReal.prototype.constructor = SolidityTypeUReal;
  SolidityTypeUReal.prototype.isType = function(name) {
    return !!name.match(/^ureal([0-9]*)?(\[([0-9]*)\])*$/);
  };
  module.exports = SolidityTypeUReal;
}, {"./formatters":9, "./type":14}], 17:[function(require, module, exports) {
  if (typeof XMLHttpRequest === "undefined") {
    exports.XMLHttpRequest = {};
  } else {
    exports.XMLHttpRequest = XMLHttpRequest;
  }
}, {}], 18:[function(require, module, exports) {
  var BigNumber = require("bignumber.js");
  var ETH_UNITS = ["wei", "kwei", "Mwei", "Gwei", "szabo", "finney", "femtoether", "picoether", "nanoether", "microether", "milliether", "nano", "micro", "milli", "ether", "grand", "Mether", "Gether", "Tether", "Pether", "Eether", "Zether", "Yether", "Nether", "Dether", "Vether", "Uether"];
  module.exports = {ETH_PADDING:32, ETH_SIGNATURE_LENGTH:4, ETH_UNITS:ETH_UNITS, ETH_BIGNUMBER_ROUNDING_MODE:{ROUNDING_MODE:BigNumber.ROUND_DOWN}, ETH_POLLING_TIMEOUT:1000 / 2, defaultBlock:"latest", defaultAccount:undefined};
}, {"bignumber.js":"bignumber.js"}], 19:[function(require, module, exports) {
  var CryptoJS = require("crypto-js");
  var sha3 = require("crypto-js/sha3");
  module.exports = function(value, options) {
    if (options && options.encoding === "hex") {
      if (value.length > 2 && value.substr(0, 2) === "0x") {
        value = value.substr(2);
      }
      value = CryptoJS.enc.Hex.parse(value);
    }
    return sha3(value, {outputLength:256}).toString();
  };
}, {"crypto-js":59, "crypto-js/sha3":80}], 20:[function(require, module, exports) {
  var BigNumber = require("bignumber.js");
  var sha3 = require("./sha3.js");
  var utf8 = require("utf8");
  var unitMap = {"noether":"0", "wei":"1", "kwei":"1000", "Kwei":"1000", "babbage":"1000", "femtoether":"1000", "mwei":"1000000", "Mwei":"1000000", "lovelace":"1000000", "picoether":"1000000", "gwei":"1000000000", "Gwei":"1000000000", "shannon":"1000000000", "nanoether":"1000000000", "nano":"1000000000", "szabo":"1000000000000", "microether":"1000000000000", "micro":"1000000000000", "finney":"1000000000000000", "milliether":"1000000000000000", "milli":"1000000000000000", "ether":"1000000000000000000", 
  "kether":"1000000000000000000000", "grand":"1000000000000000000000", "mether":"1000000000000000000000000", "gether":"1000000000000000000000000000", "tether":"1000000000000000000000000000000"};
  var padLeft = function(string, chars, sign) {
    return (new Array(chars - string.length + 1)).join(sign ? sign : "0") + string;
  };
  var padRight = function(string, chars, sign) {
    return string + (new Array(chars - string.length + 1)).join(sign ? sign : "0");
  };
  var toUtf8 = function(hex) {
    var str = "";
    var i = 0, l = hex.length;
    if (hex.substring(0, 2) === "0x") {
      i = 2;
    }
    for (; i < l; i += 2) {
      var code = parseInt(hex.substr(i, 2), 16);
      if (code === 0) {
        break;
      }
      str += String.fromCharCode(code);
    }
    return utf8.decode(str);
  };
  var toAscii = function(hex) {
    var str = "";
    var i = 0, l = hex.length;
    if (hex.substring(0, 2) === "0x") {
      i = 2;
    }
    for (; i < l; i += 2) {
      var code = parseInt(hex.substr(i, 2), 16);
      str += String.fromCharCode(code);
    }
    return str;
  };
  var fromUtf8 = function(str) {
    str = utf8.encode(str);
    var hex = "";
    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);
      if (code === 0) {
        break;
      }
      var n = code.toString(16);
      hex += n.length < 2 ? "0" + n : n;
    }
    return "0x" + hex;
  };
  var fromAscii = function(str) {
    var hex = "";
    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);
      var n = code.toString(16);
      hex += n.length < 2 ? "0" + n : n;
    }
    return "0x" + hex;
  };
  var transformToFullName = function(json) {
    if (json.name.indexOf("(") !== -1) {
      return json.name;
    }
    var typeName = json.inputs.map(function(i) {
      return i.type;
    }).join();
    return json.name + "(" + typeName + ")";
  };
  var extractDisplayName = function(name) {
    var length = name.indexOf("(");
    return length !== -1 ? name.substr(0, length) : name;
  };
  var extractTypeName = function(name) {
    var length = name.indexOf("(");
    return length !== -1 ? name.substr(length + 1, name.length - 1 - (length + 1)).replace(" ", "") : "";
  };
  var toDecimal = function(value) {
    return toBigNumber(value).toNumber();
  };
  var fromDecimal = function(value) {
    var number = toBigNumber(value);
    var result = number.toString(16);
    return number.lessThan(0) ? "-0x" + result.substr(1) : "0x" + result;
  };
  var toHex = function(val) {
    if (isBoolean(val)) {
      return fromDecimal(+val);
    }
    if (isBigNumber(val)) {
      return fromDecimal(val);
    }
    if (typeof val === "object") {
      return fromUtf8(JSON.stringify(val));
    }
    if (isString(val)) {
      if (val.indexOf("-0x") === 0) {
        return fromDecimal(val);
      } else {
        if (val.indexOf("0x") === 0) {
          return val;
        } else {
          if (!isFinite(val)) {
            return fromAscii(val);
          }
        }
      }
    }
    return fromDecimal(val);
  };
  var getValueOfUnit = function(unit) {
    unit = unit ? unit.toLowerCase() : "ether";
    var unitValue = unitMap[unit];
    if (unitValue === undefined) {
      throw new Error("This unit doesn't exists, please use the one of the following units" + JSON.stringify(unitMap, null, 2));
    }
    return new BigNumber(unitValue, 10);
  };
  var fromWei = function(number, unit) {
    var returnValue = toBigNumber(number).dividedBy(getValueOfUnit(unit));
    return isBigNumber(number) ? returnValue : returnValue.toString(10);
  };
  var toWei = function(number, unit) {
    var returnValue = toBigNumber(number).times(getValueOfUnit(unit));
    return isBigNumber(number) ? returnValue : returnValue.toString(10);
  };
  var toBigNumber = function(number) {
    number = number || 0;
    if (isBigNumber(number)) {
      return number;
    }
    if (isString(number) && (number.indexOf("0x") === 0 || number.indexOf("-0x") === 0)) {
      return new BigNumber(number.replace("0x", ""), 16);
    }
    return new BigNumber(number.toString(10), 10);
  };
  var toTwosComplement = function(number) {
    var bigNumber = toBigNumber(number).round();
    if (bigNumber.lessThan(0)) {
      return (new BigNumber("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16)).plus(bigNumber).plus(1);
    }
    return bigNumber;
  };
  var isStrictAddress = function(address) {
    return /^0x[0-9a-f]{40}$/i.test(address);
  };
  var isAddress = function(address) {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
      return false;
    } else {
      if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
        return true;
      } else {
        return isChecksumAddress(address);
      }
    }
  };
  var isChecksumAddress = function(address) {
    address = address.replace("0x", "");
    var addressHash = sha3(address.toLowerCase());
    for (var i = 0; i < 40; i++) {
      if (parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i] || parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i]) {
        return false;
      }
    }
    return true;
  };
  var toChecksumAddress = function(address) {
    if (typeof address === "undefined") {
      return "";
    }
    address = address.toLowerCase().replace("0x", "");
    var addressHash = sha3(address);
    var checksumAddress = "0x";
    for (var i = 0; i < address.length; i++) {
      if (parseInt(addressHash[i], 16) > 7) {
        checksumAddress += address[i].toUpperCase();
      } else {
        checksumAddress += address[i];
      }
    }
    return checksumAddress;
  };
  var toAddress = function(address) {
    if (isStrictAddress(address)) {
      return address;
    }
    if (/^[0-9a-f]{40}$/.test(address)) {
      return "0x" + address;
    }
    return "0x" + padLeft(toHex(address).substr(2), 40);
  };
  var isBigNumber = function(object) {
    return object instanceof BigNumber || object && object.constructor && object.constructor.name === "BigNumber";
  };
  var isString = function(object) {
    return typeof object === "string" || object && object.constructor && object.constructor.name === "String";
  };
  var isFunction = function(object) {
    return typeof object === "function";
  };
  var isObject = function(object) {
    return object !== null && !(object instanceof Array) && typeof object === "object";
  };
  var isBoolean = function(object) {
    return typeof object === "boolean";
  };
  var isArray = function(object) {
    return object instanceof Array;
  };
  var isJson = function(str) {
    try {
      return !!JSON.parse(str);
    } catch (e) {
      return false;
    }
  };
  var isBloom = function(bloom) {
    if (!/^(0x)?[0-9a-f]{512}$/i.test(bloom)) {
      return false;
    } else {
      if (/^(0x)?[0-9a-f]{512}$/.test(bloom) || /^(0x)?[0-9A-F]{512}$/.test(bloom)) {
        return true;
      }
    }
    return false;
  };
  var isTopic = function(topic) {
    if (!/^(0x)?[0-9a-f]{64}$/i.test(topic)) {
      return false;
    } else {
      if (/^(0x)?[0-9a-f]{64}$/.test(topic) || /^(0x)?[0-9A-F]{64}$/.test(topic)) {
        return true;
      }
    }
    return false;
  };
  module.exports = {padLeft:padLeft, padRight:padRight, toHex:toHex, toDecimal:toDecimal, fromDecimal:fromDecimal, toUtf8:toUtf8, toAscii:toAscii, fromUtf8:fromUtf8, fromAscii:fromAscii, transformToFullName:transformToFullName, extractDisplayName:extractDisplayName, extractTypeName:extractTypeName, toWei:toWei, fromWei:fromWei, toBigNumber:toBigNumber, toTwosComplement:toTwosComplement, toAddress:toAddress, isBigNumber:isBigNumber, isStrictAddress:isStrictAddress, isAddress:isAddress, isChecksumAddress:isChecksumAddress, 
  toChecksumAddress:toChecksumAddress, isFunction:isFunction, isString:isString, isObject:isObject, isBoolean:isBoolean, isArray:isArray, isJson:isJson, isBloom:isBloom, isTopic:isTopic};
}, {"./sha3.js":19, "bignumber.js":"bignumber.js", "utf8":85}], 21:[function(require, module, exports) {
  module.exports = {"version":"0.20.1"};
}, {}], 22:[function(require, module, exports) {
  var RequestManager = require("./web3/requestmanager");
  var Iban = require("./web3/iban");
  var Yoc = require("./web3/methods/yoc");
  var DB = require("./web3/methods/db");
  var Shh = require("./web3/methods/shh");
  var Net = require("./web3/methods/net");
  var Personal = require("./web3/methods/personal");
  var Swarm = require("./web3/methods/swarm");
  var Settings = require("./web3/settings");
  var version = require("./version.json");
  var utils = require("./utils/utils");
  var sha3 = require("./utils/sha3");
  var extend = require("./web3/extend");
  var Batch = require("./web3/batch");
  var Property = require("./web3/property");
  var HttpProvider = require("./web3/httpprovider");
  var IpcProvider = require("./web3/ipcprovider");
  var BigNumber = require("bignumber.js");
  function Web3(provider) {
    this._requestManager = new RequestManager(provider);
    this.currentProvider = provider;
    this.yoc = new Yoc(this);
    this.db = new DB(this);
    this.shh = new Shh(this);
    this.net = new Net(this);
    this.personal = new Personal(this);
    this.bzz = new Swarm(this);
    this.settings = new Settings;
    this.version = {api:version.version};
    this.providers = {HttpProvider:HttpProvider, IpcProvider:IpcProvider};
    this._extend = extend(this);
    this._extend({properties:properties()});
  }
  Web3.providers = {HttpProvider:HttpProvider, IpcProvider:IpcProvider};
  Web3.prototype.setProvider = function(provider) {
    this._requestManager.setProvider(provider);
    this.currentProvider = provider;
  };
  Web3.prototype.reset = function(keepIsSyncing) {
    this._requestManager.reset(keepIsSyncing);
    this.settings = new Settings;
  };
  Web3.prototype.BigNumber = BigNumber;
  Web3.prototype.toHex = utils.toHex;
  Web3.prototype.toAscii = utils.toAscii;
  Web3.prototype.toUtf8 = utils.toUtf8;
  Web3.prototype.fromAscii = utils.fromAscii;
  Web3.prototype.fromUtf8 = utils.fromUtf8;
  Web3.prototype.toDecimal = utils.toDecimal;
  Web3.prototype.fromDecimal = utils.fromDecimal;
  Web3.prototype.toBigNumber = utils.toBigNumber;
  Web3.prototype.toWei = utils.toWei;
  Web3.prototype.fromWei = utils.fromWei;
  Web3.prototype.isAddress = utils.isAddress;
  Web3.prototype.isChecksumAddress = utils.isChecksumAddress;
  Web3.prototype.toChecksumAddress = utils.toChecksumAddress;
  Web3.prototype.isIBAN = utils.isIBAN;
  Web3.prototype.padLeft = utils.padLeft;
  Web3.prototype.padRight = utils.padRight;
  Web3.prototype.sha3 = function(string, options) {
    return "0x" + sha3(string, options);
  };
  Web3.prototype.fromICAP = function(icap) {
    var iban = new Iban(icap);
    return iban.address();
  };
  var properties = function() {
    return [new Property({name:"version.node", getter:"web3_clientVersion"}), new Property({name:"version.network", getter:"net_version", inputFormatter:utils.toDecimal}), new Property({name:"version.yocoin", getter:"yoc_protocolVersion", inputFormatter:utils.toDecimal}), new Property({name:"version.whisper", getter:"shh_version", inputFormatter:utils.toDecimal})];
  };
  Web3.prototype.isConnected = function() {
    return this.currentProvider && this.currentProvider.isConnected();
  };
  Web3.prototype.createBatch = function() {
    return new Batch(this);
  };
  module.exports = Web3;
}, {"./utils/sha3":19, "./utils/utils":20, "./version.json":21, "./web3/batch":24, "./web3/extend":28, "./web3/httpprovider":32, "./web3/iban":33, "./web3/ipcprovider":34, "./web3/methods/db":37, "./web3/methods/yoc":38, "./web3/methods/net":39, "./web3/methods/personal":40, "./web3/methods/shh":41, "./web3/methods/swarm":42, "./web3/property":45, "./web3/requestmanager":46, "./web3/settings":47, "bignumber.js":"bignumber.js"}], 23:[function(require, module, exports) {
  var sha3 = require("../utils/sha3");
  var SolidityEvent = require("./event");
  var formatters = require("./formatters");
  var utils = require("../utils/utils");
  var Filter = require("./filter");
  var watches = require("./methods/watches");
  var AllSolidityEvents = function(requestManager, json, address) {
    this._requestManager = requestManager;
    this._json = json;
    this._address = address;
  };
  AllSolidityEvents.prototype.encode = function(options) {
    options = options || {};
    var result = {};
    ["fromBlock", "toBlock"].filter(function(f) {
      return options[f] !== undefined;
    }).forEach(function(f) {
      result[f] = formatters.inputBlockNumberFormatter(options[f]);
    });
    result.address = this._address;
    return result;
  };
  AllSolidityEvents.prototype.decode = function(data) {
    data.data = data.data || "";
    data.topics = data.topics || [];
    var eventTopic = data.topics[0].slice(2);
    var match = this._json.filter(function(j) {
      return eventTopic === sha3(utils.transformToFullName(j));
    })[0];
    if (!match) {
      console.warn("cannot find event for log");
      return data;
    }
    var event = new SolidityEvent(this._requestManager, match, this._address);
    return event.decode(data);
  };
  AllSolidityEvents.prototype.execute = function(options, callback) {
    if (utils.isFunction(arguments[arguments.length - 1])) {
      callback = arguments[arguments.length - 1];
      if (arguments.length === 1) {
        options = null;
      }
    }
    var o = this.encode(options);
    var formatter = this.decode.bind(this);
    return new Filter(o, "yoc", this._requestManager, watches.yoc(), formatter, callback);
  };
  AllSolidityEvents.prototype.attachToContract = function(contract) {
    var execute = this.execute.bind(this);
    contract.allEvents = execute;
  };
  module.exports = AllSolidityEvents;
}, {"../utils/sha3":19, "../utils/utils":20, "./event":27, "./filter":29, "./formatters":30, "./methods/watches":43}], 24:[function(require, module, exports) {
  var Jsonrpc = require("./jsonrpc");
  var errors = require("./errors");
  var Batch = function(web3) {
    this.requestManager = web3._requestManager;
    this.requests = [];
  };
  Batch.prototype.add = function(request) {
    this.requests.push(request);
  };
  Batch.prototype.execute = function() {
    var requests = this.requests;
    this.requestManager.sendBatch(requests, function(err, results) {
      results = results || [];
      requests.map(function(request, index) {
        return results[index] || {};
      }).forEach(function(result, index) {
        if (requests[index].callback) {
          if (!Jsonrpc.isValidResponse(result)) {
            return requests[index].callback(errors.InvalidResponse(result));
          }
          requests[index].callback(null, requests[index].format ? requests[index].format(result.result) : result.result);
        }
      });
    });
  };
  module.exports = Batch;
}, {"./errors":26, "./jsonrpc":35}], 25:[function(require, module, exports) {
  var utils = require("../utils/utils");
  var coder = require("../solidity/coder");
  var SolidityEvent = require("./event");
  var SolidityFunction = require("./function");
  var AllEvents = require("./allevents");
  var encodeConstructorParams = function(abi, params) {
    return abi.filter(function(json) {
      return json.type === "constructor" && json.inputs.length === params.length;
    }).map(function(json) {
      return json.inputs.map(function(input) {
        return input.type;
      });
    }).map(function(types) {
      return coder.encodeParams(types, params);
    })[0] || "";
  };
  var addFunctionsToContract = function(contract) {
    contract.abi.filter(function(json) {
      return json.type === "function";
    }).map(function(json) {
      return new SolidityFunction(contract._yoc, json, contract.address);
    }).forEach(function(f) {
      f.attachToContract(contract);
    });
  };
  var addEventsToContract = function(contract) {
    var events = contract.abi.filter(function(json) {
      return json.type === "event";
    });
    var All = new AllEvents(contract._yoc._requestManager, events, contract.address);
    All.attachToContract(contract);
    events.map(function(json) {
      return new SolidityEvent(contract._yoc._requestManager, json, contract.address);
    }).forEach(function(e) {
      e.attachToContract(contract);
    });
  };
  var checkForContractAddress = function(contract, callback) {
    var count = 0, callbackFired = false;
    var filter = contract._yoc.filter("latest", function(e) {
      if (!e && !callbackFired) {
        count++;
        if (count > 50) {
          filter.stopWatching(function() {
          });
          callbackFired = true;
          if (callback) {
            callback(new Error("Contract transaction couldn't be found after 50 blocks"));
          } else {
            throw new Error("Contract transaction couldn't be found after 50 blocks");
          }
        } else {
          contract._yoc.getTransactionReceipt(contract.transactionHash, function(e, receipt) {
            if (receipt && !callbackFired) {
              contract._yoc.getCode(receipt.contractAddress, function(e, code) {
                if (callbackFired || !code) {
                  return;
                }
                filter.stopWatching(function() {
                });
                callbackFired = true;
                if (code.length > 3) {
                  contract.address = receipt.contractAddress;
                  addFunctionsToContract(contract);
                  addEventsToContract(contract);
                  if (callback) {
                    callback(null, contract);
                  }
                } else {
                  if (callback) {
                    callback(new Error("The contract code couldn't be stored, please check your gas amount."));
                  } else {
                    throw new Error("The contract code couldn't be stored, please check your gas amount.");
                  }
                }
              });
            }
          });
        }
      }
    });
  };
  var ContractFactory = function(yoc, abi) {
    this.yoc = yoc;
    this.abi = abi;
    this["new"] = function() {
      var contract = new Contract(this.yoc, this.abi);
      var options = {};
      var callback;
      var args = Array.prototype.slice.call(arguments);
      if (utils.isFunction(args[args.length - 1])) {
        callback = args.pop();
      }
      var last = args[args.length - 1];
      if (utils.isObject(last) && !utils.isArray(last)) {
        options = args.pop();
      }
      if (options.value > 0) {
        var constructorAbi = abi.filter(function(json) {
          return json.type === "constructor" && json.inputs.length === args.length;
        })[0] || {};
        if (!constructorAbi.payable) {
          throw new Error("Cannot send value to non-payable constructor");
        }
      }
      var bytes = encodeConstructorParams(this.abi, args);
      options.data += bytes;
      if (callback) {
        this.yoc.sendTransaction(options, function(err, hash) {
          if (err) {
            callback(err);
          } else {
            contract.transactionHash = hash;
            callback(null, contract);
            checkForContractAddress(contract, callback);
          }
        });
      } else {
        var hash = this.yoc.sendTransaction(options);
        contract.transactionHash = hash;
        checkForContractAddress(contract);
      }
      return contract;
    };
    this["new"].getData = this.getData.bind(this);
  };
  ContractFactory.prototype.at = function(address, callback) {
    var contract = new Contract(this.yoc, this.abi, address);
    addFunctionsToContract(contract);
    addEventsToContract(contract);
    if (callback) {
      callback(null, contract);
    }
    return contract;
  };
  ContractFactory.prototype.getData = function() {
    var options = {};
    var args = Array.prototype.slice.call(arguments);
    var last = args[args.length - 1];
    if (utils.isObject(last) && !utils.isArray(last)) {
      options = args.pop();
    }
    var bytes = encodeConstructorParams(this.abi, args);
    options.data += bytes;
    return options.data;
  };
  var Contract = function(yoc, abi, address) {
    this._yoc = yoc;
    this.transactionHash = null;
    this.address = address;
    this.abi = abi;
  };
  module.exports = ContractFactory;
}, {"../solidity/coder":7, "../utils/utils":20, "./allevents":23, "./event":27, "./function":31}], 26:[function(require, module, exports) {
  module.exports = {InvalidNumberOfSolidityArgs:function() {
    return new Error("Invalid number of arguments to Solidity function");
  }, InvalidNumberOfRPCParams:function() {
    return new Error("Invalid number of input parameters to RPC method");
  }, InvalidConnection:function(host) {
    return new Error("CONNECTION ERROR: Couldn't connect to node " + host + ".");
  }, InvalidProvider:function() {
    return new Error("Provider not set or invalid");
  }, InvalidResponse:function(result) {
    var message = !!result && !!result.error && !!result.error.message ? result.error.message : "Invalid JSON RPC response: " + JSON.stringify(result);
    return new Error(message);
  }, ConnectionTimeout:function(ms) {
    return new Error("CONNECTION TIMEOUT: timeout of " + ms + " ms achived");
  }};
}, {}], 27:[function(require, module, exports) {
  var utils = require("../utils/utils");
  var coder = require("../solidity/coder");
  var formatters = require("./formatters");
  var sha3 = require("../utils/sha3");
  var Filter = require("./filter");
  var watches = require("./methods/watches");
  var SolidityEvent = function(requestManager, json, address) {
    this._requestManager = requestManager;
    this._params = json.inputs;
    this._name = utils.transformToFullName(json);
    this._address = address;
    this._anonymous = json.anonymous;
  };
  SolidityEvent.prototype.types = function(indexed) {
    return this._params.filter(function(i) {
      return i.indexed === indexed;
    }).map(function(i) {
      return i.type;
    });
  };
  SolidityEvent.prototype.displayName = function() {
    return utils.extractDisplayName(this._name);
  };
  SolidityEvent.prototype.typeName = function() {
    return utils.extractTypeName(this._name);
  };
  SolidityEvent.prototype.signature = function() {
    return sha3(this._name);
  };
  SolidityEvent.prototype.encode = function(indexed, options) {
    indexed = indexed || {};
    options = options || {};
    var result = {};
    ["fromBlock", "toBlock"].filter(function(f) {
      return options[f] !== undefined;
    }).forEach(function(f) {
      result[f] = formatters.inputBlockNumberFormatter(options[f]);
    });
    result.topics = [];
    result.address = this._address;
    if (!this._anonymous) {
      result.topics.push("0x" + this.signature());
    }
    var indexedTopics = this._params.filter(function(i) {
      return i.indexed === true;
    }).map(function(i) {
      var value = indexed[i.name];
      if (value === undefined || value === null) {
        return null;
      }
      if (utils.isArray(value)) {
        return value.map(function(v) {
          return "0x" + coder.encodeParam(i.type, v);
        });
      }
      return "0x" + coder.encodeParam(i.type, value);
    });
    result.topics = result.topics.concat(indexedTopics);
    return result;
  };
  SolidityEvent.prototype.decode = function(data) {
    data.data = data.data || "";
    data.topics = data.topics || [];
    var argTopics = this._anonymous ? data.topics : data.topics.slice(1);
    var indexedData = argTopics.map(function(topics) {
      return topics.slice(2);
    }).join("");
    var indexedParams = coder.decodeParams(this.types(true), indexedData);
    var notIndexedData = data.data.slice(2);
    var notIndexedParams = coder.decodeParams(this.types(false), notIndexedData);
    var result = formatters.outputLogFormatter(data);
    result.event = this.displayName();
    result.address = data.address;
    result.args = this._params.reduce(function(acc, current) {
      acc[current.name] = current.indexed ? indexedParams.shift() : notIndexedParams.shift();
      return acc;
    }, {});
    delete result.data;
    delete result.topics;
    return result;
  };
  SolidityEvent.prototype.execute = function(indexed, options, callback) {
    if (utils.isFunction(arguments[arguments.length - 1])) {
      callback = arguments[arguments.length - 1];
      if (arguments.length === 2) {
        options = null;
      }
      if (arguments.length === 1) {
        options = null;
        indexed = {};
      }
    }
    var o = this.encode(indexed, options);
    var formatter = this.decode.bind(this);
    return new Filter(o, "yoc", this._requestManager, watches.yoc(), formatter, callback);
  };
  SolidityEvent.prototype.attachToContract = function(contract) {
    var execute = this.execute.bind(this);
    var displayName = this.displayName();
    if (!contract[displayName]) {
      contract[displayName] = execute;
    }
    contract[displayName][this.typeName()] = this.execute.bind(this, contract);
  };
  module.exports = SolidityEvent;
}, {"../solidity/coder":7, "../utils/sha3":19, "../utils/utils":20, "./filter":29, "./formatters":30, "./methods/watches":43}], 28:[function(require, module, exports) {
  var formatters = require("./formatters");
  var utils = require("./../utils/utils");
  var Method = require("./method");
  var Property = require("./property");
  var extend = function(web3) {
    var ex = function(extension) {
      var extendedObject;
      if (extension.property) {
        if (!web3[extension.property]) {
          web3[extension.property] = {};
        }
        extendedObject = web3[extension.property];
      } else {
        extendedObject = web3;
      }
      if (extension.methods) {
        extension.methods.forEach(function(method) {
          method.attachToObject(extendedObject);
          method.setRequestManager(web3._requestManager);
        });
      }
      if (extension.properties) {
        extension.properties.forEach(function(property) {
          property.attachToObject(extendedObject);
          property.setRequestManager(web3._requestManager);
        });
      }
    };
    ex.formatters = formatters;
    ex.utils = utils;
    ex.Method = Method;
    ex.Property = Property;
    return ex;
  };
  module.exports = extend;
}, {"./../utils/utils":20, "./formatters":30, "./method":36, "./property":45}], 29:[function(require, module, exports) {
  var formatters = require("./formatters");
  var utils = require("../utils/utils");
  var toTopic = function(value) {
    if (value === null || typeof value === "undefined") {
      return null;
    }
    value = String(value);
    if (value.indexOf("0x") === 0) {
      return value;
    } else {
      return utils.fromUtf8(value);
    }
  };
  var getOptions = function(options, type) {
    if (utils.isString(options)) {
      return options;
    }
    options = options || {};
    switch(type) {
      case "yoc":
        options.topics = options.topics || [];
        options.topics = options.topics.map(function(topic) {
          return utils.isArray(topic) ? topic.map(toTopic) : toTopic(topic);
        });
        return {topics:options.topics, from:options.from, to:options.to, address:options.address, fromBlock:formatters.inputBlockNumberFormatter(options.fromBlock), toBlock:formatters.inputBlockNumberFormatter(options.toBlock)};
      case "shh":
        return options;
    }
  };
  var getLogsAtStart = function(self, callback) {
    if (!utils.isString(self.options)) {
      self.get(function(err, messages) {
        if (err) {
          callback(err);
        }
        if (utils.isArray(messages)) {
          messages.forEach(function(message) {
            callback(null, message);
          });
        }
      });
    }
  };
  var pollFilter = function(self) {
    var onMessage = function(error, messages) {
      if (error) {
        return self.callbacks.forEach(function(callback) {
          callback(error);
        });
      }
      if (utils.isArray(messages)) {
        messages.forEach(function(message) {
          message = self.formatter ? self.formatter(message) : message;
          self.callbacks.forEach(function(callback) {
            callback(null, message);
          });
        });
      }
    };
    self.requestManager.startPolling({method:self.implementation.poll.call, params:[self.filterId]}, self.filterId, onMessage, self.stopWatching.bind(self));
  };
  var Filter = function(options, type, requestManager, methods, formatter, callback, filterCreationErrorCallback) {
    var self = this;
    var implementation = {};
    methods.forEach(function(method) {
      method.setRequestManager(requestManager);
      method.attachToObject(implementation);
    });
    this.requestManager = requestManager;
    this.options = getOptions(options, type);
    this.implementation = implementation;
    this.filterId = null;
    this.callbacks = [];
    this.getLogsCallbacks = [];
    this.pollFilters = [];
    this.formatter = formatter;
    this.implementation.newFilter(this.options, function(error, id) {
      if (error) {
        self.callbacks.forEach(function(cb) {
          cb(error);
        });
        if (typeof filterCreationErrorCallback === "function") {
          filterCreationErrorCallback(error);
        }
      } else {
        self.filterId = id;
        self.getLogsCallbacks.forEach(function(cb) {
          self.get(cb);
        });
        self.getLogsCallbacks = [];
        self.callbacks.forEach(function(cb) {
          getLogsAtStart(self, cb);
        });
        if (self.callbacks.length > 0) {
          pollFilter(self);
        }
        if (typeof callback === "function") {
          return self.watch(callback);
        }
      }
    });
    return this;
  };
  Filter.prototype.watch = function(callback) {
    this.callbacks.push(callback);
    if (this.filterId) {
      getLogsAtStart(this, callback);
      pollFilter(this);
    }
    return this;
  };
  Filter.prototype.stopWatching = function(callback) {
    this.requestManager.stopPolling(this.filterId);
    this.callbacks = [];
    if (callback) {
      this.implementation.uninstallFilter(this.filterId, callback);
    } else {
      return this.implementation.uninstallFilter(this.filterId);
    }
  };
  Filter.prototype.get = function(callback) {
    var self = this;
    if (utils.isFunction(callback)) {
      if (this.filterId === null) {
        this.getLogsCallbacks.push(callback);
      } else {
        this.implementation.getLogs(this.filterId, function(err, res) {
          if (err) {
            callback(err);
          } else {
            callback(null, res.map(function(log) {
              return self.formatter ? self.formatter(log) : log;
            }));
          }
        });
      }
    } else {
      if (this.filterId === null) {
        throw new Error("Filter ID Error: filter().get() can't be chained synchronous, please provide a callback for the get() method.");
      }
      var logs = this.implementation.getLogs(this.filterId);
      return logs.map(function(log) {
        return self.formatter ? self.formatter(log) : log;
      });
    }
    return this;
  };
  module.exports = Filter;
}, {"../utils/utils":20, "./formatters":30}], 30:[function(require, module, exports) {
  var utils = require("../utils/utils");
  var config = require("../utils/config");
  var Iban = require("./iban");
  var outputBigNumberFormatter = function(number) {
    return utils.toBigNumber(number);
  };
  var isPredefinedBlockNumber = function(blockNumber) {
    return blockNumber === "latest" || blockNumber === "pending" || blockNumber === "earliest";
  };
  var inputDefaultBlockNumberFormatter = function(blockNumber) {
    if (blockNumber === undefined) {
      return config.defaultBlock;
    }
    return inputBlockNumberFormatter(blockNumber);
  };
  var inputBlockNumberFormatter = function(blockNumber) {
    if (blockNumber === undefined) {
      return undefined;
    } else {
      if (isPredefinedBlockNumber(blockNumber)) {
        return blockNumber;
      }
    }
    return utils.toHex(blockNumber);
  };
  var inputCallFormatter = function(options) {
    options.from = options.from || config.defaultAccount;
    if (options.from) {
      options.from = inputAddressFormatter(options.from);
    }
    if (options.to) {
      options.to = inputAddressFormatter(options.to);
    }
    ["gasPrice", "gas", "value", "nonce"].filter(function(key) {
      return options[key] !== undefined;
    }).forEach(function(key) {
      options[key] = utils.fromDecimal(options[key]);
    });
    return options;
  };
  var inputTransactionFormatter = function(options) {
    options.from = options.from || config.defaultAccount;
    options.from = inputAddressFormatter(options.from);
    if (options.to) {
      options.to = inputAddressFormatter(options.to);
    }
    ["gasPrice", "gas", "value", "nonce"].filter(function(key) {
      return options[key] !== undefined;
    }).forEach(function(key) {
      options[key] = utils.fromDecimal(options[key]);
    });
    return options;
  };
  var outputTransactionFormatter = function(tx) {
    if (tx.blockNumber !== null) {
      tx.blockNumber = utils.toDecimal(tx.blockNumber);
    }
    if (tx.transactionIndex !== null) {
      tx.transactionIndex = utils.toDecimal(tx.transactionIndex);
    }
    tx.nonce = utils.toDecimal(tx.nonce);
    tx.gas = utils.toDecimal(tx.gas);
    tx.gasPrice = utils.toBigNumber(tx.gasPrice);
    tx.value = utils.toBigNumber(tx.value);
    return tx;
  };
  var outputTransactionReceiptFormatter = function(receipt) {
    if (receipt.blockNumber !== null) {
      receipt.blockNumber = utils.toDecimal(receipt.blockNumber);
    }
    if (receipt.transactionIndex !== null) {
      receipt.transactionIndex = utils.toDecimal(receipt.transactionIndex);
    }
    receipt.cumulativeGasUsed = utils.toDecimal(receipt.cumulativeGasUsed);
    receipt.gasUsed = utils.toDecimal(receipt.gasUsed);
    if (utils.isArray(receipt.logs)) {
      receipt.logs = receipt.logs.map(function(log) {
        return outputLogFormatter(log);
      });
    }
    return receipt;
  };
  var outputBlockFormatter = function(block) {
    block.gasLimit = utils.toDecimal(block.gasLimit);
    block.gasUsed = utils.toDecimal(block.gasUsed);
    block.size = utils.toDecimal(block.size);
    block.timestamp = utils.toDecimal(block.timestamp);
    if (block.number !== null) {
      block.number = utils.toDecimal(block.number);
    }
    block.difficulty = utils.toBigNumber(block.difficulty);
    block.totalDifficulty = utils.toBigNumber(block.totalDifficulty);
    if (utils.isArray(block.transactions)) {
      block.transactions.forEach(function(item) {
        if (!utils.isString(item)) {
          return outputTransactionFormatter(item);
        }
      });
    }
    return block;
  };
  var outputLogFormatter = function(log) {
    if (log.blockNumber) {
      log.blockNumber = utils.toDecimal(log.blockNumber);
    }
    if (log.transactionIndex) {
      log.transactionIndex = utils.toDecimal(log.transactionIndex);
    }
    if (log.logIndex) {
      log.logIndex = utils.toDecimal(log.logIndex);
    }
    return log;
  };
  var inputPostFormatter = function(post) {
    post.ttl = utils.fromDecimal(post.ttl);
    post.workToProve = utils.fromDecimal(post.workToProve);
    post.priority = utils.fromDecimal(post.priority);
    if (!utils.isArray(post.topics)) {
      post.topics = post.topics ? [post.topics] : [];
    }
    post.topics = post.topics.map(function(topic) {
      return topic.indexOf("0x") === 0 ? topic : utils.fromUtf8(topic);
    });
    return post;
  };
  var outputPostFormatter = function(post) {
    post.expiry = utils.toDecimal(post.expiry);
    post.sent = utils.toDecimal(post.sent);
    post.ttl = utils.toDecimal(post.ttl);
    post.workProved = utils.toDecimal(post.workProved);
    if (!post.topics) {
      post.topics = [];
    }
    post.topics = post.topics.map(function(topic) {
      return utils.toAscii(topic);
    });
    return post;
  };
  var inputAddressFormatter = function(address) {
    var iban = new Iban(address);
    if (iban.isValid() && iban.isDirect()) {
      return "0x" + iban.address();
    } else {
      if (utils.isStrictAddress(address)) {
        return address;
      } else {
        if (utils.isAddress(address)) {
          return "0x" + address;
        }
      }
    }
    throw new Error("invalid address");
  };
  var outputSyncingFormatter = function(result) {
    if (!result) {
      return result;
    }
    result.startingBlock = utils.toDecimal(result.startingBlock);
    result.currentBlock = utils.toDecimal(result.currentBlock);
    result.highestBlock = utils.toDecimal(result.highestBlock);
    if (result.knownStates) {
      result.knownStates = utils.toDecimal(result.knownStates);
      result.pulledStates = utils.toDecimal(result.pulledStates);
    }
    return result;
  };
  module.exports = {inputDefaultBlockNumberFormatter:inputDefaultBlockNumberFormatter, inputBlockNumberFormatter:inputBlockNumberFormatter, inputCallFormatter:inputCallFormatter, inputTransactionFormatter:inputTransactionFormatter, inputAddressFormatter:inputAddressFormatter, inputPostFormatter:inputPostFormatter, outputBigNumberFormatter:outputBigNumberFormatter, outputTransactionFormatter:outputTransactionFormatter, outputTransactionReceiptFormatter:outputTransactionReceiptFormatter, outputBlockFormatter:outputBlockFormatter, 
  outputLogFormatter:outputLogFormatter, outputPostFormatter:outputPostFormatter, outputSyncingFormatter:outputSyncingFormatter};
}, {"../utils/config":18, "../utils/utils":20, "./iban":33}], 31:[function(require, module, exports) {
  var coder = require("../solidity/coder");
  var utils = require("../utils/utils");
  var errors = require("./errors");
  var formatters = require("./formatters");
  var sha3 = require("../utils/sha3");
  var SolidityFunction = function(yoc, json, address) {
    this._yoc = yoc;
    this._inputTypes = json.inputs.map(function(i) {
      return i.type;
    });
    this._outputTypes = json.outputs.map(function(i) {
      return i.type;
    });
    this._constant = json.constant;
    this._payable = json.payable;
    this._name = utils.transformToFullName(json);
    this._address = address;
  };
  SolidityFunction.prototype.extractCallback = function(args) {
    if (utils.isFunction(args[args.length - 1])) {
      return args.pop();
    }
  };
  SolidityFunction.prototype.extractDefaultBlock = function(args) {
    if (args.length > this._inputTypes.length && !utils.isObject(args[args.length - 1])) {
      return formatters.inputDefaultBlockNumberFormatter(args.pop());
    }
  };
  SolidityFunction.prototype.validateArgs = function(args) {
    var inputArgs = args.filter(function(a) {
      return !(utils.isObject(a) === true && utils.isArray(a) === false && utils.isBigNumber(a) === false);
    });
    if (inputArgs.length !== this._inputTypes.length) {
      throw errors.InvalidNumberOfSolidityArgs();
    }
  };
  SolidityFunction.prototype.toPayload = function(args) {
    var options = {};
    if (args.length > this._inputTypes.length && utils.isObject(args[args.length - 1])) {
      options = args[args.length - 1];
    }
    this.validateArgs(args);
    options.to = this._address;
    options.data = "0x" + this.signature() + coder.encodeParams(this._inputTypes, args);
    return options;
  };
  SolidityFunction.prototype.signature = function() {
    return sha3(this._name).slice(0, 8);
  };
  SolidityFunction.prototype.unpackOutput = function(output) {
    if (!output) {
      return;
    }
    output = output.length >= 2 ? output.slice(2) : output;
    var result = coder.decodeParams(this._outputTypes, output);
    return result.length === 1 ? result[0] : result;
  };
  SolidityFunction.prototype.call = function() {
    var args = Array.prototype.slice.call(arguments).filter(function(a) {
      return a !== undefined;
    });
    var callback = this.extractCallback(args);
    var defaultBlock = this.extractDefaultBlock(args);
    var payload = this.toPayload(args);
    if (!callback) {
      var output = this._yoc.call(payload, defaultBlock);
      return this.unpackOutput(output);
    }
    var self = this;
    this._yoc.call(payload, defaultBlock, function(error, output) {
      if (error) {
        return callback(error, null);
      }
      var unpacked = null;
      try {
        unpacked = self.unpackOutput(output);
      } catch (e) {
        error = e;
      }
      callback(error, unpacked);
    });
  };
  SolidityFunction.prototype.sendTransaction = function() {
    var args = Array.prototype.slice.call(arguments).filter(function(a) {
      return a !== undefined;
    });
    var callback = this.extractCallback(args);
    var payload = this.toPayload(args);
    if (payload.value > 0 && !this._payable) {
      throw new Error("Cannot send value to non-payable function");
    }
    if (!callback) {
      return this._yoc.sendTransaction(payload);
    }
    this._yoc.sendTransaction(payload, callback);
  };
  SolidityFunction.prototype.estimateGas = function() {
    var args = Array.prototype.slice.call(arguments);
    var callback = this.extractCallback(args);
    var payload = this.toPayload(args);
    if (!callback) {
      return this._yoc.estimateGas(payload);
    }
    this._yoc.estimateGas(payload, callback);
  };
  SolidityFunction.prototype.getData = function() {
    var args = Array.prototype.slice.call(arguments);
    var payload = this.toPayload(args);
    return payload.data;
  };
  SolidityFunction.prototype.displayName = function() {
    return utils.extractDisplayName(this._name);
  };
  SolidityFunction.prototype.typeName = function() {
    return utils.extractTypeName(this._name);
  };
  SolidityFunction.prototype.request = function() {
    var args = Array.prototype.slice.call(arguments);
    var callback = this.extractCallback(args);
    var payload = this.toPayload(args);
    var format = this.unpackOutput.bind(this);
    return {method:this._constant ? "yoc_call" : "yoc_sendTransaction", callback:callback, params:[payload], format:format};
  };
  SolidityFunction.prototype.execute = function() {
    var transaction = !this._constant;
    if (transaction) {
      return this.sendTransaction.apply(this, Array.prototype.slice.call(arguments));
    }
    return this.call.apply(this, Array.prototype.slice.call(arguments));
  };
  SolidityFunction.prototype.attachToContract = function(contract) {
    var execute = this.execute.bind(this);
    execute.request = this.request.bind(this);
    execute.call = this.call.bind(this);
    execute.sendTransaction = this.sendTransaction.bind(this);
    execute.estimateGas = this.estimateGas.bind(this);
    execute.getData = this.getData.bind(this);
    var displayName = this.displayName();
    if (!contract[displayName]) {
      contract[displayName] = execute;
    }
    contract[displayName][this.typeName()] = execute;
  };
  module.exports = SolidityFunction;
}, {"../solidity/coder":7, "../utils/sha3":19, "../utils/utils":20, "./errors":26, "./formatters":30}], 32:[function(require, module, exports) {
  var errors = require("./errors");
  if (typeof window !== "undefined" && window.XMLHttpRequest) {
    XMLHttpRequest = window.XMLHttpRequest;
  } else {
    XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  }
  var XHR2 = require("xhr2");
  var HttpProvider = function(host, timeout, user, password) {
    this.host = host || "http://localhost:8545";
    this.timeout = timeout || 0;
    this.user = user;
    this.password = password;
  };
  HttpProvider.prototype.prepareRequest = function(async) {
    var request;
    if (async) {
      request = new XHR2;
      request.timeout = this.timeout;
    } else {
      request = new XMLHttpRequest;
    }
    request.open("POST", this.host, async);
    if (this.user && this.password) {
      var auth = "Basic " + (new Buffer(this.user + ":" + this.password)).toString("base64");
      request.setRequestHeader("Authorization", auth);
    }
    request.setRequestHeader("Content-Type", "application/json");
    return request;
  };
  HttpProvider.prototype.send = function(payload) {
    var request = this.prepareRequest(false);
    try {
      request.send(JSON.stringify(payload));
    } catch (error) {
      throw errors.InvalidConnection(this.host);
    }
    var result = request.responseText;
    try {
      result = JSON.parse(result);
    } catch (e) {
      throw errors.InvalidResponse(request.responseText);
    }
    return result;
  };
  HttpProvider.prototype.sendAsync = function(payload, callback) {
    var request = this.prepareRequest(true);
    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.timeout !== 1) {
        var result = request.responseText;
        var error = null;
        try {
          result = JSON.parse(result);
        } catch (e) {
          error = errors.InvalidResponse(request.responseText);
        }
        callback(error, result);
      }
    };
    request.ontimeout = function() {
      callback(errors.ConnectionTimeout(this.timeout));
    };
    try {
      request.send(JSON.stringify(payload));
    } catch (error) {
      callback(errors.InvalidConnection(this.host));
    }
  };
  HttpProvider.prototype.isConnected = function() {
    try {
      this.send({id:9999999999, jsonrpc:"2.0", method:"net_listening", params:[]});
      return true;
    } catch (e) {
      return false;
    }
  };
  module.exports = HttpProvider;
}, {"./errors":26, "xhr2":86, "xmlhttprequest":17}], 33:[function(require, module, exports) {
  var BigNumber = require("bignumber.js");
  var padLeft = function(string, bytes) {
    var result = string;
    while (result.length < bytes * 2) {
      result = "0" + result;
    }
    return result;
  };
  var iso13616Prepare = function(iban) {
    var A = "A".charCodeAt(0);
    var Z = "Z".charCodeAt(0);
    iban = iban.toUpperCase();
    iban = iban.substr(4) + iban.substr(0, 4);
    return iban.split("").map(function(n) {
      var code = n.charCodeAt(0);
      if (code >= A && code <= Z) {
        return code - A + 10;
      } else {
        return n;
      }
    }).join("");
  };
  var mod9710 = function(iban) {
    var remainder = iban, block;
    while (remainder.length > 2) {
      block = remainder.slice(0, 9);
      remainder = parseInt(block, 10) % 97 + remainder.slice(block.length);
    }
    return parseInt(remainder, 10) % 97;
  };
  var Iban = function(iban) {
    this._iban = iban;
  };
  Iban.fromAddress = function(address) {
    var asBn = new BigNumber(address, 16);
    var base36 = asBn.toString(36);
    var padded = padLeft(base36, 15);
    return Iban.fromBban(padded.toUpperCase());
  };
  Iban.fromBban = function(bban) {
    var countryCode = "XE";
    var remainder = mod9710(iso13616Prepare(countryCode + "00" + bban));
    var checkDigit = ("0" + (98 - remainder)).slice(-2);
    return new Iban(countryCode + checkDigit + bban);
  };
  Iban.createIndirect = function(options) {
    return Iban.fromBban("ETH" + options.institution + options.identifier);
  };
  Iban.isValid = function(iban) {
    var i = new Iban(iban);
    return i.isValid();
  };
  Iban.prototype.isValid = function() {
    return /^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(this._iban) && mod9710(iso13616Prepare(this._iban)) === 1;
  };
  Iban.prototype.isDirect = function() {
    return this._iban.length === 34 || this._iban.length === 35;
  };
  Iban.prototype.isIndirect = function() {
    return this._iban.length === 20;
  };
  Iban.prototype.checksum = function() {
    return this._iban.substr(2, 2);
  };
  Iban.prototype.institution = function() {
    return this.isIndirect() ? this._iban.substr(7, 4) : "";
  };
  Iban.prototype.client = function() {
    return this.isIndirect() ? this._iban.substr(11) : "";
  };
  Iban.prototype.address = function() {
    if (this.isDirect()) {
      var base36 = this._iban.substr(4);
      var asBn = new BigNumber(base36, 36);
      return padLeft(asBn.toString(16), 20);
    }
    return "";
  };
  Iban.prototype.toString = function() {
    return this._iban;
  };
  module.exports = Iban;
}, {"bignumber.js":"bignumber.js"}], 34:[function(require, module, exports) {
  var utils = require("../utils/utils");
  var errors = require("./errors");
  var IpcProvider = function(path, net) {
    var _this = this;
    this.responseCallbacks = {};
    this.path = path;
    this.connection = net.connect({path:this.path});
    this.connection.on("error", function(e) {
      console.error("IPC Connection Error", e);
      _this._timeout();
    });
    this.connection.on("end", function() {
      _this._timeout();
    });
    this.connection.on("data", function(data) {
      _this._parseResponse(data.toString()).forEach(function(result) {
        var id = null;
        if (utils.isArray(result)) {
          result.forEach(function(load) {
            if (_this.responseCallbacks[load.id]) {
              id = load.id;
            }
          });
        } else {
          id = result.id;
        }
        if (_this.responseCallbacks[id]) {
          _this.responseCallbacks[id](null, result);
          delete _this.responseCallbacks[id];
        }
      });
    });
  };
  IpcProvider.prototype._parseResponse = function(data) {
    var _this = this, returnValues = [];
    var dechunkedData = data.replace(/\}[\n\r]?\{/g, "}|--|{").replace(/\}\][\n\r]?\[\{/g, "}]|--|[{").replace(/\}[\n\r]?\[\{/g, "}|--|[{").replace(/\}\][\n\r]?\{/g, "}]|--|{").split("|--|");
    dechunkedData.forEach(function(data) {
      if (_this.lastChunk) {
        data = _this.lastChunk + data;
      }
      var result = null;
      try {
        result = JSON.parse(data);
      } catch (e) {
        _this.lastChunk = data;
        clearTimeout(_this.lastChunkTimeout);
        _this.lastChunkTimeout = setTimeout(function() {
          _this._timeout();
          throw errors.InvalidResponse(data);
        }, 1000 * 15);
        return;
      }
      clearTimeout(_this.lastChunkTimeout);
      _this.lastChunk = null;
      if (result) {
        returnValues.push(result);
      }
    });
    return returnValues;
  };
  IpcProvider.prototype._addResponseCallback = function(payload, callback) {
    var id = payload.id || payload[0].id;
    var method = payload.method || payload[0].method;
    this.responseCallbacks[id] = callback;
    this.responseCallbacks[id].method = method;
  };
  IpcProvider.prototype._timeout = function() {
    for (var key in this.responseCallbacks) {
      if (this.responseCallbacks.hasOwnProperty(key)) {
        this.responseCallbacks[key](errors.InvalidConnection("on IPC"));
        delete this.responseCallbacks[key];
      }
    }
  };
  IpcProvider.prototype.isConnected = function() {
    var _this = this;
    if (!_this.connection.writable) {
      _this.connection.connect({path:_this.path});
    }
    return !!this.connection.writable;
  };
  IpcProvider.prototype.send = function(payload) {
    if (this.connection.writeSync) {
      var result;
      if (!this.connection.writable) {
        this.connection.connect({path:this.path});
      }
      var data = this.connection.writeSync(JSON.stringify(payload));
      try {
        result = JSON.parse(data);
      } catch (e) {
        throw errors.InvalidResponse(data);
      }
      return result;
    } else {
      throw new Error('You tried to send "' + payload.method + '" synchronously. Synchronous requests are not supported by the IPC provider.');
    }
  };
  IpcProvider.prototype.sendAsync = function(payload, callback) {
    if (!this.connection.writable) {
      this.connection.connect({path:this.path});
    }
    this.connection.write(JSON.stringify(payload));
    this._addResponseCallback(payload, callback);
  };
  module.exports = IpcProvider;
}, {"../utils/utils":20, "./errors":26}], 35:[function(require, module, exports) {
  var Jsonrpc = {messageId:0};
  Jsonrpc.toPayload = function(method, params) {
    if (!method) {
      console.error("jsonrpc method should be specified!");
    }
    Jsonrpc.messageId++;
    return {jsonrpc:"2.0", id:Jsonrpc.messageId, method:method, params:params || []};
  };
  Jsonrpc.isValidResponse = function(response) {
    return Array.isArray(response) ? response.every(validateSingleMessage) : validateSingleMessage(response);
    function validateSingleMessage(message) {
      return !!message && !message.error && message.jsonrpc === "2.0" && typeof message.id === "number" && message.result !== undefined;
    }
  };
  Jsonrpc.toBatchPayload = function(messages) {
    return messages.map(function(message) {
      return Jsonrpc.toPayload(message.method, message.params);
    });
  };
  module.exports = Jsonrpc;
}, {}], 36:[function(require, module, exports) {
  var utils = require("../utils/utils");
  var errors = require("./errors");
  var Method = function(options) {
    this.name = options.name;
    this.call = options.call;
    this.params = options.params || 0;
    this.inputFormatter = options.inputFormatter;
    this.outputFormatter = options.outputFormatter;
    this.requestManager = null;
  };
  Method.prototype.setRequestManager = function(rm) {
    this.requestManager = rm;
  };
  Method.prototype.getCall = function(args) {
    return utils.isFunction(this.call) ? this.call(args) : this.call;
  };
  Method.prototype.extractCallback = function(args) {
    if (utils.isFunction(args[args.length - 1])) {
      return args.pop();
    }
  };
  Method.prototype.validateArgs = function(args) {
    if (args.length !== this.params) {
      throw errors.InvalidNumberOfRPCParams();
    }
  };
  Method.prototype.formatInput = function(args) {
    if (!this.inputFormatter) {
      return args;
    }
    return this.inputFormatter.map(function(formatter, index) {
      return formatter ? formatter(args[index]) : args[index];
    });
  };
  Method.prototype.formatOutput = function(result) {
    return this.outputFormatter && result ? this.outputFormatter(result) : result;
  };
  Method.prototype.toPayload = function(args) {
    var call = this.getCall(args);
    var callback = this.extractCallback(args);
    var params = this.formatInput(args);
    this.validateArgs(params);
    return {method:call, params:params, callback:callback};
  };
  Method.prototype.attachToObject = function(obj) {
    var func = this.buildCall();
    func.call = this.call;
    var name = this.name.split(".");
    if (name.length > 1) {
      obj[name[0]] = obj[name[0]] || {};
      obj[name[0]][name[1]] = func;
    } else {
      obj[name[0]] = func;
    }
  };
  Method.prototype.buildCall = function() {
    var method = this;
    var send = function() {
      var payload = method.toPayload(Array.prototype.slice.call(arguments));
      if (payload.callback) {
        return method.requestManager.sendAsync(payload, function(err, result) {
          payload.callback(err, method.formatOutput(result));
        });
      }
      return method.formatOutput(method.requestManager.send(payload));
    };
    send.request = this.request.bind(this);
    return send;
  };
  Method.prototype.request = function() {
    var payload = this.toPayload(Array.prototype.slice.call(arguments));
    payload.format = this.formatOutput.bind(this);
    return payload;
  };
  module.exports = Method;
}, {"../utils/utils":20, "./errors":26}], 37:[function(require, module, exports) {
  var Method = require("../method");
  var DB = function(web3) {
    this._requestManager = web3._requestManager;
    var self = this;
    methods().forEach(function(method) {
      method.attachToObject(self);
      method.setRequestManager(web3._requestManager);
    });
  };
  var methods = function() {
    var putString = new Method({name:"putString", call:"db_putString", params:3});
    var getString = new Method({name:"getString", call:"db_getString", params:2});
    var putHex = new Method({name:"putHex", call:"db_putHex", params:3});
    var getHex = new Method({name:"getHex", call:"db_getHex", params:2});
    return [putString, getString, putHex, getHex];
  };
  module.exports = DB;
}, {"../method":36}], 38:[function(require, module, exports) {
  var formatters = require("../formatters");
  var utils = require("../../utils/utils");
  var Method = require("../method");
  var Property = require("../property");
  var c = require("../../utils/config");
  var Contract = require("../contract");
  var watches = require("./watches");
  var Filter = require("../filter");
  var IsSyncing = require("../syncing");
  var namereg = require("../namereg");
  var Iban = require("../iban");
  var transfer = require("../transfer");
  var blockCall = function(args) {
    return utils.isString(args[0]) && args[0].indexOf("0x") === 0 ? "yoc_getBlockByHash" : "yoc_getBlockByNumber";
  };
  var transactionFromBlockCall = function(args) {
    return utils.isString(args[0]) && args[0].indexOf("0x") === 0 ? "yoc_getTransactionByBlockHashAndIndex" : "yoc_getTransactionByBlockNumberAndIndex";
  };
  var uncleCall = function(args) {
    return utils.isString(args[0]) && args[0].indexOf("0x") === 0 ? "yoc_getUncleByBlockHashAndIndex" : "yoc_getUncleByBlockNumberAndIndex";
  };
  var getBlockTransactionCountCall = function(args) {
    return utils.isString(args[0]) && args[0].indexOf("0x") === 0 ? "yoc_getBlockTransactionCountByHash" : "yoc_getBlockTransactionCountByNumber";
  };
  var uncleCountCall = function(args) {
    return utils.isString(args[0]) && args[0].indexOf("0x") === 0 ? "yoc_getUncleCountByBlockHash" : "yoc_getUncleCountByBlockNumber";
  };
  function Yoc(web3) {
    this._requestManager = web3._requestManager;
    var self = this;
    methods().forEach(function(method) {
      method.attachToObject(self);
      method.setRequestManager(self._requestManager);
    });
    properties().forEach(function(p) {
      p.attachToObject(self);
      p.setRequestManager(self._requestManager);
    });
    this.iban = Iban;
    this.sendIBANTransaction = transfer.bind(null, this);
  }
  Object.defineProperty(Yoc.prototype, "defaultBlock", {get:function() {
    return c.defaultBlock;
  }, set:function(val) {
    c.defaultBlock = val;
    return val;
  }});
  Object.defineProperty(Yoc.prototype, "defaultAccount", {get:function() {
    return c.defaultAccount;
  }, set:function(val) {
    c.defaultAccount = val;
    return val;
  }});
  var methods = function() {
    var getBalance = new Method({name:"getBalance", call:"yoc_getBalance", params:2, inputFormatter:[formatters.inputAddressFormatter, formatters.inputDefaultBlockNumberFormatter], outputFormatter:formatters.outputBigNumberFormatter});
    var getStorageAt = new Method({name:"getStorageAt", call:"yoc_getStorageAt", params:3, inputFormatter:[null, utils.toHex, formatters.inputDefaultBlockNumberFormatter]});
    var getCode = new Method({name:"getCode", call:"yoc_getCode", params:2, inputFormatter:[formatters.inputAddressFormatter, formatters.inputDefaultBlockNumberFormatter]});
    var getBlock = new Method({name:"getBlock", call:blockCall, params:2, inputFormatter:[formatters.inputBlockNumberFormatter, function(val) {
      return !!val;
    }], outputFormatter:formatters.outputBlockFormatter});
    var getUncle = new Method({name:"getUncle", call:uncleCall, params:2, inputFormatter:[formatters.inputBlockNumberFormatter, utils.toHex], outputFormatter:formatters.outputBlockFormatter});
    var getCompilers = new Method({name:"getCompilers", call:"yoc_getCompilers", params:0});
    var getBlockTransactionCount = new Method({name:"getBlockTransactionCount", call:getBlockTransactionCountCall, params:1, inputFormatter:[formatters.inputBlockNumberFormatter], outputFormatter:utils.toDecimal});
    var getBlockUncleCount = new Method({name:"getBlockUncleCount", call:uncleCountCall, params:1, inputFormatter:[formatters.inputBlockNumberFormatter], outputFormatter:utils.toDecimal});
    var getTransaction = new Method({name:"getTransaction", call:"yoc_getTransactionByHash", params:1, outputFormatter:formatters.outputTransactionFormatter});
    var getTransactionFromBlock = new Method({name:"getTransactionFromBlock", call:transactionFromBlockCall, params:2, inputFormatter:[formatters.inputBlockNumberFormatter, utils.toHex], outputFormatter:formatters.outputTransactionFormatter});
    var getTransactionReceipt = new Method({name:"getTransactionReceipt", call:"yoc_getTransactionReceipt", params:1, outputFormatter:formatters.outputTransactionReceiptFormatter});
    var getTransactionCount = new Method({name:"getTransactionCount", call:"yoc_getTransactionCount", params:2, inputFormatter:[null, formatters.inputDefaultBlockNumberFormatter], outputFormatter:utils.toDecimal});
    var sendRawTransaction = new Method({name:"sendRawTransaction", call:"yoc_sendRawTransaction", params:1, inputFormatter:[null]});
    var sendTransaction = new Method({name:"sendTransaction", call:"yoc_sendTransaction", params:1, inputFormatter:[formatters.inputTransactionFormatter]});
    var signTransaction = new Method({name:"signTransaction", call:"yoc_signTransaction", params:1, inputFormatter:[formatters.inputTransactionFormatter]});
    var sign = new Method({name:"sign", call:"yoc_sign", params:2, inputFormatter:[formatters.inputAddressFormatter, null]});
    var call = new Method({name:"call", call:"yoc_call", params:2, inputFormatter:[formatters.inputCallFormatter, formatters.inputDefaultBlockNumberFormatter]});
    var estimateGas = new Method({name:"estimateGas", call:"yoc_estimateGas", params:1, inputFormatter:[formatters.inputCallFormatter], outputFormatter:utils.toDecimal});
    var compileSolidity = new Method({name:"compile.solidity", call:"yoc_compileSolidity", params:1});
    var compileLLL = new Method({name:"compile.lll", call:"yoc_compileLLL", params:1});
    var compileSerpent = new Method({name:"compile.serpent", call:"yoc_compileSerpent", params:1});
    var submitWork = new Method({name:"submitWork", call:"yoc_submitWork", params:3});
    var getWork = new Method({name:"getWork", call:"yoc_getWork", params:0});
    return [getBalance, getStorageAt, getCode, getBlock, getUncle, getCompilers, getBlockTransactionCount, getBlockUncleCount, getTransaction, getTransactionFromBlock, getTransactionReceipt, getTransactionCount, call, estimateGas, sendRawTransaction, signTransaction, sendTransaction, sign, compileSolidity, compileLLL, compileSerpent, submitWork, getWork];
  };
  var properties = function() {
    return [new Property({name:"coinbase", getter:"yoc_coinbase"}), new Property({name:"mining", getter:"yoc_mining"}), new Property({name:"hashrate", getter:"yoc_hashrate", outputFormatter:utils.toDecimal}), new Property({name:"syncing", getter:"yoc_syncing", outputFormatter:formatters.outputSyncingFormatter}), new Property({name:"gasPrice", getter:"yoc_gasPrice", outputFormatter:formatters.outputBigNumberFormatter}), new Property({name:"accounts", getter:"yoc_accounts"}), new Property({name:"blockNumber", 
    getter:"yoc_blockNumber", outputFormatter:utils.toDecimal}), new Property({name:"protocolVersion", getter:"yoc_protocolVersion"})];
  };
  Yoc.prototype.contract = function(abi) {
    var factory = new Contract(this, abi);
    return factory;
  };
  Yoc.prototype.filter = function(options, callback, filterCreationErrorCallback) {
    return new Filter(options, "yoc", this._requestManager, watches.yoc(), formatters.outputLogFormatter, callback, filterCreationErrorCallback);
  };
  Yoc.prototype.namereg = function() {
    return this.contract(namereg.global.abi).at(namereg.global.address);
  };
  Yoc.prototype.icapNamereg = function() {
    return this.contract(namereg.icap.abi).at(namereg.icap.address);
  };
  Yoc.prototype.isSyncing = function(callback) {
    return new IsSyncing(this._requestManager, callback);
  };
  module.exports = Yoc;
}, {"../../utils/config":18, "../../utils/utils":20, "../contract":25, "../filter":29, "../formatters":30, "../iban":33, "../method":36, "../namereg":44, "../property":45, "../syncing":48, "../transfer":49, "./watches":43}], 39:[function(require, module, exports) {
  var utils = require("../../utils/utils");
  var Property = require("../property");
  var Net = function(web3) {
    this._requestManager = web3._requestManager;
    var self = this;
    properties().forEach(function(p) {
      p.attachToObject(self);
      p.setRequestManager(web3._requestManager);
    });
  };
  var properties = function() {
    return [new Property({name:"listening", getter:"net_listening"}), new Property({name:"peerCount", getter:"net_peerCount", outputFormatter:utils.toDecimal})];
  };
  module.exports = Net;
}, {"../../utils/utils":20, "../property":45}], 40:[function(require, module, exports) {
  var Method = require("../method");
  var Property = require("../property");
  var formatters = require("../formatters");
  function Personal(web3) {
    this._requestManager = web3._requestManager;
    var self = this;
    methods().forEach(function(method) {
      method.attachToObject(self);
      method.setRequestManager(self._requestManager);
    });
    properties().forEach(function(p) {
      p.attachToObject(self);
      p.setRequestManager(self._requestManager);
    });
  }
  var methods = function() {
    var newAccount = new Method({name:"newAccount", call:"personal_newAccount", params:1, inputFormatter:[null]});
    var importRawKey = new Method({name:"importRawKey", call:"personal_importRawKey", params:2});
    var sign = new Method({name:"sign", call:"personal_sign", params:3, inputFormatter:[null, formatters.inputAddressFormatter, null]});
    var ecRecover = new Method({name:"ecRecover", call:"personal_ecRecover", params:2});
    var unlockAccount = new Method({name:"unlockAccount", call:"personal_unlockAccount", params:3, inputFormatter:[formatters.inputAddressFormatter, null, null]});
    var sendTransaction = new Method({name:"sendTransaction", call:"personal_sendTransaction", params:2, inputFormatter:[formatters.inputTransactionFormatter, null]});
    var lockAccount = new Method({name:"lockAccount", call:"personal_lockAccount", params:1, inputFormatter:[formatters.inputAddressFormatter]});
    return [newAccount, importRawKey, unlockAccount, ecRecover, sign, sendTransaction, lockAccount];
  };
  var properties = function() {
    return [new Property({name:"listAccounts", getter:"personal_listAccounts"})];
  };
  module.exports = Personal;
}, {"../formatters":30, "../method":36, "../property":45}], 41:[function(require, module, exports) {
  var Method = require("../method");
  var Filter = require("../filter");
  var watches = require("./watches");
  var Shh = function(web3) {
    this._requestManager = web3._requestManager;
    var self = this;
    methods().forEach(function(method) {
      method.attachToObject(self);
      method.setRequestManager(self._requestManager);
    });
  };
  Shh.prototype.newMessageFilter = function(options, callback, filterCreationErrorCallback) {
    return new Filter(options, "shh", this._requestManager, watches.shh(), null, callback, filterCreationErrorCallback);
  };
  var methods = function() {
    return [new Method({name:"version", call:"shh_version", params:0}), new Method({name:"info", call:"shh_info", params:0}), new Method({name:"setMaxMessageSize", call:"shh_setMaxMessageSize", params:1}), new Method({name:"setMinPoW", call:"shh_setMinPoW", params:1}), new Method({name:"markTrustedPeer", call:"shh_markTrustedPeer", params:1}), new Method({name:"newKeyPair", call:"shh_newKeyPair", params:0}), new Method({name:"addPrivateKey", call:"shh_addPrivateKey", params:1}), new Method({name:"deleteKeyPair", 
    call:"shh_deleteKeyPair", params:1}), new Method({name:"hasKeyPair", call:"shh_hasKeyPair", params:1}), new Method({name:"getPublicKey", call:"shh_getPublicKey", params:1}), new Method({name:"getPrivateKey", call:"shh_getPrivateKey", params:1}), new Method({name:"newSymKey", call:"shh_newSymKey", params:0}), new Method({name:"addSymKey", call:"shh_addSymKey", params:1}), new Method({name:"generateSymKeyFromPassword", call:"shh_generateSymKeyFromPassword", params:1}), new Method({name:"hasSymKey", 
    call:"shh_hasSymKey", params:1}), new Method({name:"getSymKey", call:"shh_getSymKey", params:1}), new Method({name:"deleteSymKey", call:"shh_deleteSymKey", params:1}), new Method({name:"post", call:"shh_post", params:1, inputFormatter:[null]})];
  };
  module.exports = Shh;
}, {"../filter":29, "../method":36, "./watches":43}], 42:[function(require, module, exports) {
  var Method = require("../method");
  var Property = require("../property");
  function Swarm(web3) {
    this._requestManager = web3._requestManager;
    var self = this;
    methods().forEach(function(method) {
      method.attachToObject(self);
      method.setRequestManager(self._requestManager);
    });
    properties().forEach(function(p) {
      p.attachToObject(self);
      p.setRequestManager(self._requestManager);
    });
  }
  var methods = function() {
    var blockNetworkRead = new Method({name:"blockNetworkRead", call:"bzz_blockNetworkRead", params:1, inputFormatter:[null]});
    var syncEnabled = new Method({name:"syncEnabled", call:"bzz_syncEnabled", params:1, inputFormatter:[null]});
    var swapEnabled = new Method({name:"swapEnabled", call:"bzz_swapEnabled", params:1, inputFormatter:[null]});
    var download = new Method({name:"download", call:"bzz_download", params:2, inputFormatter:[null, null]});
    var upload = new Method({name:"upload", call:"bzz_upload", params:2, inputFormatter:[null, null]});
    var retrieve = new Method({name:"retrieve", call:"bzz_retrieve", params:1, inputFormatter:[null]});
    var store = new Method({name:"store", call:"bzz_store", params:2, inputFormatter:[null, null]});
    var get = new Method({name:"get", call:"bzz_get", params:1, inputFormatter:[null]});
    var put = new Method({name:"put", call:"bzz_put", params:2, inputFormatter:[null, null]});
    var modify = new Method({name:"modify", call:"bzz_modify", params:4, inputFormatter:[null, null, null, null]});
    return [blockNetworkRead, syncEnabled, swapEnabled, download, upload, retrieve, store, get, put, modify];
  };
  var properties = function() {
    return [new Property({name:"hive", getter:"bzz_hive"}), new Property({name:"info", getter:"bzz_info"})];
  };
  module.exports = Swarm;
}, {"../method":36, "../property":45}], 43:[function(require, module, exports) {
  var Method = require("../method");
  var yoc = function() {
    var newFilterCall = function(args) {
      var type = args[0];
      switch(type) {
        case "latest":
          args.shift();
          this.params = 0;
          return "yoc_newBlockFilter";
        case "pending":
          args.shift();
          this.params = 0;
          return "yoc_newPendingTransactionFilter";
        default:
          return "yoc_newFilter";
      }
    };
    var newFilter = new Method({name:"newFilter", call:newFilterCall, params:1});
    var uninstallFilter = new Method({name:"uninstallFilter", call:"yoc_uninstallFilter", params:1});
    var getLogs = new Method({name:"getLogs", call:"yoc_getFilterLogs", params:1});
    var poll = new Method({name:"poll", call:"yoc_getFilterChanges", params:1});
    return [newFilter, uninstallFilter, getLogs, poll];
  };
  var shh = function() {
    return [new Method({name:"newFilter", call:"shh_newMessageFilter", params:1}), new Method({name:"uninstallFilter", call:"shh_deleteMessageFilter", params:1}), new Method({name:"getLogs", call:"shh_getFilterMessages", params:1}), new Method({name:"poll", call:"shh_getFilterMessages", params:1})];
  };
  module.exports = {yoc:yoc, shh:shh};
}, {"../method":36}], 44:[function(require, module, exports) {
  var globalRegistrarAbi = require("../contracts/GlobalRegistrar.json");
  var icapRegistrarAbi = require("../contracts/ICAPRegistrar.json");
  var globalNameregAddress = "0xc6d9d2cd449a754c494264e1809c50e34d64562b";
  var icapNameregAddress = "0xa1a111bc074c9cfa781f0c38e63bd51c91b8af00";
  module.exports = {global:{abi:globalRegistrarAbi, address:globalNameregAddress}, icap:{abi:icapRegistrarAbi, address:icapNameregAddress}};
}, {"../contracts/GlobalRegistrar.json":1, "../contracts/ICAPRegistrar.json":2}], 45:[function(require, module, exports) {
  var utils = require("../utils/utils");
  var Property = function(options) {
    this.name = options.name;
    this.getter = options.getter;
    this.setter = options.setter;
    this.outputFormatter = options.outputFormatter;
    this.inputFormatter = options.inputFormatter;
    this.requestManager = null;
  };
  Property.prototype.setRequestManager = function(rm) {
    this.requestManager = rm;
  };
  Property.prototype.formatInput = function(arg) {
    return this.inputFormatter ? this.inputFormatter(arg) : arg;
  };
  Property.prototype.formatOutput = function(result) {
    return this.outputFormatter && result !== null && result !== undefined ? this.outputFormatter(result) : result;
  };
  Property.prototype.extractCallback = function(args) {
    if (utils.isFunction(args[args.length - 1])) {
      return args.pop();
    }
  };
  Property.prototype.attachToObject = function(obj) {
    var proto = {get:this.buildGet(), enumerable:true};
    var names = this.name.split(".");
    var name = names[0];
    if (names.length > 1) {
      obj[names[0]] = obj[names[0]] || {};
      obj = obj[names[0]];
      name = names[1];
    }
    Object.defineProperty(obj, name, proto);
    obj[asyncGetterName(name)] = this.buildAsyncGet();
  };
  var asyncGetterName = function(name) {
    return "get" + name.charAt(0).toUpperCase() + name.slice(1);
  };
  Property.prototype.buildGet = function() {
    var property = this;
    return function get() {
      return property.formatOutput(property.requestManager.send({method:property.getter}));
    };
  };
  Property.prototype.buildAsyncGet = function() {
    var property = this;
    var get = function(callback) {
      property.requestManager.sendAsync({method:property.getter}, function(err, result) {
        callback(err, property.formatOutput(result));
      });
    };
    get.request = this.request.bind(this);
    return get;
  };
  Property.prototype.request = function() {
    var payload = {method:this.getter, params:[], callback:this.extractCallback(Array.prototype.slice.call(arguments))};
    payload.format = this.formatOutput.bind(this);
    return payload;
  };
  module.exports = Property;
}, {"../utils/utils":20}], 46:[function(require, module, exports) {
  var Jsonrpc = require("./jsonrpc");
  var utils = require("../utils/utils");
  var c = require("../utils/config");
  var errors = require("./errors");
  var RequestManager = function(provider) {
    this.provider = provider;
    this.polls = {};
    this.timeout = null;
  };
  RequestManager.prototype.send = function(data) {
    if (!this.provider) {
      console.error(errors.InvalidProvider());
      return null;
    }
    var payload = Jsonrpc.toPayload(data.method, data.params);
    var result = this.provider.send(payload);
    if (!Jsonrpc.isValidResponse(result)) {
      throw errors.InvalidResponse(result);
    }
    return result.result;
  };
  RequestManager.prototype.sendAsync = function(data, callback) {
    if (!this.provider) {
      return callback(errors.InvalidProvider());
    }
    var payload = Jsonrpc.toPayload(data.method, data.params);
    this.provider.sendAsync(payload, function(err, result) {
      if (err) {
        return callback(err);
      }
      if (!Jsonrpc.isValidResponse(result)) {
        return callback(errors.InvalidResponse(result));
      }
      callback(null, result.result);
    });
  };
  RequestManager.prototype.sendBatch = function(data, callback) {
    if (!this.provider) {
      return callback(errors.InvalidProvider());
    }
    var payload = Jsonrpc.toBatchPayload(data);
    this.provider.sendAsync(payload, function(err, results) {
      if (err) {
        return callback(err);
      }
      if (!utils.isArray(results)) {
        return callback(errors.InvalidResponse(results));
      }
      callback(err, results);
    });
  };
  RequestManager.prototype.setProvider = function(p) {
    this.provider = p;
  };
  RequestManager.prototype.startPolling = function(data, pollId, callback, uninstall) {
    this.polls[pollId] = {data:data, id:pollId, callback:callback, uninstall:uninstall};
    if (!this.timeout) {
      this.poll();
    }
  };
  RequestManager.prototype.stopPolling = function(pollId) {
    delete this.polls[pollId];
    if (Object.keys(this.polls).length === 0 && this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  };
  RequestManager.prototype.reset = function(keepIsSyncing) {
    for (var key in this.polls) {
      if (!keepIsSyncing || key.indexOf("syncPoll_") === -1) {
        this.polls[key].uninstall();
        delete this.polls[key];
      }
    }
    if (Object.keys(this.polls).length === 0 && this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  };
  RequestManager.prototype.poll = function() {
    this.timeout = setTimeout(this.poll.bind(this), c.ETH_POLLING_TIMEOUT);
    if (Object.keys(this.polls).length === 0) {
      return;
    }
    if (!this.provider) {
      console.error(errors.InvalidProvider());
      return;
    }
    var pollsData = [];
    var pollsIds = [];
    for (var key in this.polls) {
      pollsData.push(this.polls[key].data);
      pollsIds.push(key);
    }
    if (pollsData.length === 0) {
      return;
    }
    var payload = Jsonrpc.toBatchPayload(pollsData);
    var pollsIdMap = {};
    payload.forEach(function(load, index) {
      pollsIdMap[load.id] = pollsIds[index];
    });
    var self = this;
    this.provider.sendAsync(payload, function(error, results) {
      if (error) {
        return;
      }
      if (!utils.isArray(results)) {
        throw errors.InvalidResponse(results);
      }
      results.map(function(result) {
        var id = pollsIdMap[result.id];
        if (self.polls[id]) {
          result.callback = self.polls[id].callback;
          return result;
        } else {
          return false;
        }
      }).filter(function(result) {
        return !!result;
      }).filter(function(result) {
        var valid = Jsonrpc.isValidResponse(result);
        if (!valid) {
          result.callback(errors.InvalidResponse(result));
        }
        return valid;
      }).forEach(function(result) {
        result.callback(null, result.result);
      });
    });
  };
  module.exports = RequestManager;
}, {"../utils/config":18, "../utils/utils":20, "./errors":26, "./jsonrpc":35}], 47:[function(require, module, exports) {
  var Settings = function() {
    this.defaultBlock = "latest";
    this.defaultAccount = undefined;
  };
  module.exports = Settings;
}, {}], 48:[function(require, module, exports) {
  var formatters = require("./formatters");
  var utils = require("../utils/utils");
  var count = 1;
  var pollSyncing = function(self) {
    var onMessage = function(error, sync) {
      if (error) {
        return self.callbacks.forEach(function(callback) {
          callback(error);
        });
      }
      if (utils.isObject(sync) && sync.startingBlock) {
        sync = formatters.outputSyncingFormatter(sync);
      }
      self.callbacks.forEach(function(callback) {
        if (self.lastSyncState !== sync) {
          if (!self.lastSyncState && utils.isObject(sync)) {
            callback(null, true);
          }
          setTimeout(function() {
            callback(null, sync);
          }, 0);
          self.lastSyncState = sync;
        }
      });
    };
    self.requestManager.startPolling({method:"yoc_syncing", params:[]}, self.pollId, onMessage, self.stopWatching.bind(self));
  };
  var IsSyncing = function(requestManager, callback) {
    this.requestManager = requestManager;
    this.pollId = "syncPoll_" + count++;
    this.callbacks = [];
    this.addCallback(callback);
    this.lastSyncState = false;
    pollSyncing(this);
    return this;
  };
  IsSyncing.prototype.addCallback = function(callback) {
    if (callback) {
      this.callbacks.push(callback);
    }
    return this;
  };
  IsSyncing.prototype.stopWatching = function() {
    this.requestManager.stopPolling(this.pollId);
    this.callbacks = [];
  };
  module.exports = IsSyncing;
}, {"../utils/utils":20, "./formatters":30}], 49:[function(require, module, exports) {
  var Iban = require("./iban");
  var exchangeAbi = require("../contracts/SmartExchange.json");
  var transfer = function(yoc, from, to, value, callback) {
    var iban = new Iban(to);
    if (!iban.isValid()) {
      throw new Error("invalid iban address");
    }
    if (iban.isDirect()) {
      return transferToAddress(yoc, from, iban.address(), value, callback);
    }
    if (!callback) {
      var address = yoc.icapNamereg().addr(iban.institution());
      return deposit(yoc, from, address, value, iban.client());
    }
    yoc.icapNamereg().addr(iban.institution(), function(err, address) {
      return deposit(yoc, from, address, value, iban.client(), callback);
    });
  };
  var transferToAddress = function(yoc, from, to, value, callback) {
    return yoc.sendTransaction({address:to, from:from, value:value}, callback);
  };
  var deposit = function(yoc, from, to, value, client, callback) {
    var abi = exchangeAbi;
    return yoc.contract(abi).at(to).deposit(client, {from:from, value:value}, callback);
  };
  module.exports = transfer;
}, {"../contracts/SmartExchange.json":3, "./iban":33}], 50:[function(require, module, exports) {
}, {}], 51:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var BlockCipher = C_lib.BlockCipher;
      var C_algo = C.algo;
      var SBOX = [];
      var INV_SBOX = [];
      var SUB_MIX_0 = [];
      var SUB_MIX_1 = [];
      var SUB_MIX_2 = [];
      var SUB_MIX_3 = [];
      var INV_SUB_MIX_0 = [];
      var INV_SUB_MIX_1 = [];
      var INV_SUB_MIX_2 = [];
      var INV_SUB_MIX_3 = [];
      (function() {
        var d = [];
        for (var i = 0; i < 256; i++) {
          if (i < 128) {
            d[i] = i << 1;
          } else {
            d[i] = i << 1 ^ 283;
          }
        }
        var x = 0;
        var xi = 0;
        for (var i = 0; i < 256; i++) {
          var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
          sx = sx >>> 8 ^ sx & 255 ^ 99;
          SBOX[x] = sx;
          INV_SBOX[sx] = x;
          var x2 = d[x];
          var x4 = d[x2];
          var x8 = d[x4];
          var t = d[sx] * 257 ^ sx * 16843008;
          SUB_MIX_0[x] = t << 24 | t >>> 8;
          SUB_MIX_1[x] = t << 16 | t >>> 16;
          SUB_MIX_2[x] = t << 8 | t >>> 24;
          SUB_MIX_3[x] = t;
          var t = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
          INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
          INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
          INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
          INV_SUB_MIX_3[sx] = t;
          if (!x) {
            x = xi = 1;
          } else {
            x = x2 ^ d[d[d[x8 ^ x2]]];
            xi ^= d[d[xi]];
          }
        }
      })();
      var RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
      var AES = C_algo.AES = BlockCipher.extend({_doReset:function() {
        if (this._nRounds && this._keyPriorReset === this._key) {
          return;
        }
        var key = this._keyPriorReset = this._key;
        var keyWords = key.words;
        var keySize = key.sigBytes / 4;
        var nRounds = this._nRounds = keySize + 6;
        var ksRows = (nRounds + 1) * 4;
        var keySchedule = this._keySchedule = [];
        for (var ksRow = 0; ksRow < ksRows; ksRow++) {
          if (ksRow < keySize) {
            keySchedule[ksRow] = keyWords[ksRow];
          } else {
            var t = keySchedule[ksRow - 1];
            if (!(ksRow % keySize)) {
              t = t << 8 | t >>> 24;
              t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
              t ^= RCON[ksRow / keySize | 0] << 24;
            } else {
              if (keySize > 6 && ksRow % keySize == 4) {
                t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
              }
            }
            keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
          }
        }
        var invKeySchedule = this._invKeySchedule = [];
        for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
          var ksRow = ksRows - invKsRow;
          if (invKsRow % 4) {
            var t = keySchedule[ksRow];
          } else {
            var t = keySchedule[ksRow - 4];
          }
          if (invKsRow < 4 || ksRow <= 4) {
            invKeySchedule[invKsRow] = t;
          } else {
            invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 255]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 255]] ^ INV_SUB_MIX_3[SBOX[t & 255]];
          }
        }
      }, encryptBlock:function(M, offset) {
        this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
      }, decryptBlock:function(M, offset) {
        var t = M[offset + 1];
        M[offset + 1] = M[offset + 3];
        M[offset + 3] = t;
        this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
        var t = M[offset + 1];
        M[offset + 1] = M[offset + 3];
        M[offset + 3] = t;
      }, _doCryptBlock:function(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
        var nRounds = this._nRounds;
        var s0 = M[offset] ^ keySchedule[0];
        var s1 = M[offset + 1] ^ keySchedule[1];
        var s2 = M[offset + 2] ^ keySchedule[2];
        var s3 = M[offset + 3] ^ keySchedule[3];
        var ksRow = 4;
        for (var round = 1; round < nRounds; round++) {
          var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 255] ^ SUB_MIX_2[s2 >>> 8 & 255] ^ SUB_MIX_3[s3 & 255] ^ keySchedule[ksRow++];
          var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 255] ^ SUB_MIX_2[s3 >>> 8 & 255] ^ SUB_MIX_3[s0 & 255] ^ keySchedule[ksRow++];
          var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 255] ^ SUB_MIX_2[s0 >>> 8 & 255] ^ SUB_MIX_3[s1 & 255] ^ keySchedule[ksRow++];
          var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 255] ^ SUB_MIX_2[s1 >>> 8 & 255] ^ SUB_MIX_3[s2 & 255] ^ keySchedule[ksRow++];
          s0 = t0;
          s1 = t1;
          s2 = t2;
          s3 = t3;
        }
        var t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 255] << 16 | SBOX[s2 >>> 8 & 255] << 8 | SBOX[s3 & 255]) ^ keySchedule[ksRow++];
        var t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 255] << 16 | SBOX[s3 >>> 8 & 255] << 8 | SBOX[s0 & 255]) ^ keySchedule[ksRow++];
        var t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 255] << 16 | SBOX[s0 >>> 8 & 255] << 8 | SBOX[s1 & 255]) ^ keySchedule[ksRow++];
        var t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 255] << 16 | SBOX[s1 >>> 8 & 255] << 8 | SBOX[s2 & 255]) ^ keySchedule[ksRow++];
        M[offset] = t0;
        M[offset + 1] = t1;
        M[offset + 2] = t2;
        M[offset + 3] = t3;
      }, keySize:256 / 32});
      C.AES = BlockCipher._createHelper(AES);
    })();
    return CryptoJS.AES;
  });
}, {"./cipher-core":52, "./core":53, "./enc-base64":54, "./evpkdf":56, "./md5":61}], 52:[function(require, module, exports) {
  (function(root, factory) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    CryptoJS.lib.Cipher || function(undefined) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var WordArray = C_lib.WordArray;
      var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
      var C_enc = C.enc;
      var Utf8 = C_enc.Utf8;
      var Base64 = C_enc.Base64;
      var C_algo = C.algo;
      var EvpKDF = C_algo.EvpKDF;
      var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({cfg:Base.extend(), createEncryptor:function(key, cfg) {
        return this.create(this._ENC_XFORM_MODE, key, cfg);
      }, createDecryptor:function(key, cfg) {
        return this.create(this._DEC_XFORM_MODE, key, cfg);
      }, init:function(xformMode, key, cfg) {
        this.cfg = this.cfg.extend(cfg);
        this._xformMode = xformMode;
        this._key = key;
        this.reset();
      }, reset:function() {
        BufferedBlockAlgorithm.reset.call(this);
        this._doReset();
      }, process:function(dataUpdate) {
        this._append(dataUpdate);
        return this._process();
      }, finalize:function(dataUpdate) {
        if (dataUpdate) {
          this._append(dataUpdate);
        }
        var finalProcessedData = this._doFinalize();
        return finalProcessedData;
      }, keySize:128 / 32, ivSize:128 / 32, _ENC_XFORM_MODE:1, _DEC_XFORM_MODE:2, _createHelper:function() {
        function selectCipherStrategy(key) {
          if (typeof key == "string") {
            return PasswordBasedCipher;
          } else {
            return SerializableCipher;
          }
        }
        return function(cipher) {
          return {encrypt:function(message, key, cfg) {
            return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
          }, decrypt:function(ciphertext, key, cfg) {
            return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
          }};
        };
      }()});
      var StreamCipher = C_lib.StreamCipher = Cipher.extend({_doFinalize:function() {
        var finalProcessedBlocks = this._process(!!"flush");
        return finalProcessedBlocks;
      }, blockSize:1});
      var C_mode = C.mode = {};
      var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({createEncryptor:function(cipher, iv) {
        return this.Encryptor.create(cipher, iv);
      }, createDecryptor:function(cipher, iv) {
        return this.Decryptor.create(cipher, iv);
      }, init:function(cipher, iv) {
        this._cipher = cipher;
        this._iv = iv;
      }});
      var CBC = C_mode.CBC = function() {
        var CBC = BlockCipherMode.extend();
        CBC.Encryptor = CBC.extend({processBlock:function(words, offset) {
          var cipher = this._cipher;
          var blockSize = cipher.blockSize;
          xorBlock.call(this, words, offset, blockSize);
          cipher.encryptBlock(words, offset);
          this._prevBlock = words.slice(offset, offset + blockSize);
        }});
        CBC.Decryptor = CBC.extend({processBlock:function(words, offset) {
          var cipher = this._cipher;
          var blockSize = cipher.blockSize;
          var thisBlock = words.slice(offset, offset + blockSize);
          cipher.decryptBlock(words, offset);
          xorBlock.call(this, words, offset, blockSize);
          this._prevBlock = thisBlock;
        }});
        function xorBlock(words, offset, blockSize) {
          var iv = this._iv;
          if (iv) {
            var block = iv;
            this._iv = undefined;
          } else {
            var block = this._prevBlock;
          }
          for (var i = 0; i < blockSize; i++) {
            words[offset + i] ^= block[i];
          }
        }
        return CBC;
      }();
      var C_pad = C.pad = {};
      var Pkcs7 = C_pad.Pkcs7 = {pad:function(data, blockSize) {
        var blockSizeBytes = blockSize * 4;
        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
        var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
        var paddingWords = [];
        for (var i = 0; i < nPaddingBytes; i += 4) {
          paddingWords.push(paddingWord);
        }
        var padding = WordArray.create(paddingWords, nPaddingBytes);
        data.concat(padding);
      }, unpad:function(data) {
        var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
        data.sigBytes -= nPaddingBytes;
      }};
      var BlockCipher = C_lib.BlockCipher = Cipher.extend({cfg:Cipher.cfg.extend({mode:CBC, padding:Pkcs7}), reset:function() {
        Cipher.reset.call(this);
        var cfg = this.cfg;
        var iv = cfg.iv;
        var mode = cfg.mode;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          var modeCreator = mode.createEncryptor;
        } else {
          var modeCreator = mode.createDecryptor;
          this._minBufferSize = 1;
        }
        this._mode = modeCreator.call(mode, this, iv && iv.words);
      }, _doProcessBlock:function(words, offset) {
        this._mode.processBlock(words, offset);
      }, _doFinalize:function() {
        var padding = this.cfg.padding;
        if (this._xformMode == this._ENC_XFORM_MODE) {
          padding.pad(this._data, this.blockSize);
          var finalProcessedBlocks = this._process(!!"flush");
        } else {
          var finalProcessedBlocks = this._process(!!"flush");
          padding.unpad(finalProcessedBlocks);
        }
        return finalProcessedBlocks;
      }, blockSize:128 / 32});
      var CipherParams = C_lib.CipherParams = Base.extend({init:function(cipherParams) {
        this.mixIn(cipherParams);
      }, toString:function(formatter) {
        return (formatter || this.formatter).stringify(this);
      }});
      var C_format = C.format = {};
      var OpenSSLFormatter = C_format.OpenSSL = {stringify:function(cipherParams) {
        var ciphertext = cipherParams.ciphertext;
        var salt = cipherParams.salt;
        if (salt) {
          var wordArray = WordArray.create([1398893684, 1701076831]).concat(salt).concat(ciphertext);
        } else {
          var wordArray = ciphertext;
        }
        return wordArray.toString(Base64);
      }, parse:function(openSSLStr) {
        var ciphertext = Base64.parse(openSSLStr);
        var ciphertextWords = ciphertext.words;
        if (ciphertextWords[0] == 1398893684 && ciphertextWords[1] == 1701076831) {
          var salt = WordArray.create(ciphertextWords.slice(2, 4));
          ciphertextWords.splice(0, 4);
          ciphertext.sigBytes -= 16;
        }
        return CipherParams.create({ciphertext:ciphertext, salt:salt});
      }};
      var SerializableCipher = C_lib.SerializableCipher = Base.extend({cfg:Base.extend({format:OpenSSLFormatter}), encrypt:function(cipher, message, key, cfg) {
        cfg = this.cfg.extend(cfg);
        var encryptor = cipher.createEncryptor(key, cfg);
        var ciphertext = encryptor.finalize(message);
        var cipherCfg = encryptor.cfg;
        return CipherParams.create({ciphertext:ciphertext, key:key, iv:cipherCfg.iv, algorithm:cipher, mode:cipherCfg.mode, padding:cipherCfg.padding, blockSize:cipher.blockSize, formatter:cfg.format});
      }, decrypt:function(cipher, ciphertext, key, cfg) {
        cfg = this.cfg.extend(cfg);
        ciphertext = this._parse(ciphertext, cfg.format);
        var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
        return plaintext;
      }, _parse:function(ciphertext, format) {
        if (typeof ciphertext == "string") {
          return format.parse(ciphertext, this);
        } else {
          return ciphertext;
        }
      }});
      var C_kdf = C.kdf = {};
      var OpenSSLKdf = C_kdf.OpenSSL = {execute:function(password, keySize, ivSize, salt) {
        if (!salt) {
          salt = WordArray.random(64 / 8);
        }
        var key = EvpKDF.create({keySize:keySize + ivSize}).compute(password, salt);
        var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
        key.sigBytes = keySize * 4;
        return CipherParams.create({key:key, iv:iv, salt:salt});
      }};
      var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({cfg:SerializableCipher.cfg.extend({kdf:OpenSSLKdf}), encrypt:function(cipher, message, password, cfg) {
        cfg = this.cfg.extend(cfg);
        var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);
        cfg.iv = derivedParams.iv;
        var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
        ciphertext.mixIn(derivedParams);
        return ciphertext;
      }, decrypt:function(cipher, ciphertext, password, cfg) {
        cfg = this.cfg.extend(cfg);
        ciphertext = this._parse(ciphertext, cfg.format);
        var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);
        cfg.iv = derivedParams.iv;
        var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
        return plaintext;
      }});
    }();
  });
}, {"./core":53}], 53:[function(require, module, exports) {
  (function(root, factory) {
    if (typeof exports === "object") {
      module.exports = exports = factory();
    } else {
      if (typeof define === "function" && define.amd) {
        define([], factory);
      } else {
        root.CryptoJS = factory();
      }
    }
  })(this, function() {
    var CryptoJS = CryptoJS || function(Math, undefined) {
      var create = Object.create || function() {
        function F() {
        }
        return function(obj) {
          var subtype;
          F.prototype = obj;
          subtype = new F;
          F.prototype = null;
          return subtype;
        };
      }();
      var C = {};
      var C_lib = C.lib = {};
      var Base = C_lib.Base = function() {
        return {extend:function(overrides) {
          var subtype = create(this);
          if (overrides) {
            subtype.mixIn(overrides);
          }
          if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
            subtype.init = function() {
              subtype.$super.init.apply(this, arguments);
            };
          }
          subtype.init.prototype = subtype;
          subtype.$super = this;
          return subtype;
        }, create:function() {
          var instance = this.extend();
          instance.init.apply(instance, arguments);
          return instance;
        }, init:function() {
        }, mixIn:function(properties) {
          for (var propertyName in properties) {
            if (properties.hasOwnProperty(propertyName)) {
              this[propertyName] = properties[propertyName];
            }
          }
          if (properties.hasOwnProperty("toString")) {
            this.toString = properties.toString;
          }
        }, clone:function() {
          return this.init.prototype.extend(this);
        }};
      }();
      var WordArray = C_lib.WordArray = Base.extend({init:function(words, sigBytes) {
        words = this.words = words || [];
        if (sigBytes != undefined) {
          this.sigBytes = sigBytes;
        } else {
          this.sigBytes = words.length * 4;
        }
      }, toString:function(encoder) {
        return (encoder || Hex).stringify(this);
      }, concat:function(wordArray) {
        var thisWords = this.words;
        var thatWords = wordArray.words;
        var thisSigBytes = this.sigBytes;
        var thatSigBytes = wordArray.sigBytes;
        this.clamp();
        if (thisSigBytes % 4) {
          for (var i = 0; i < thatSigBytes; i++) {
            var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
            thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
          }
        } else {
          for (var i = 0; i < thatSigBytes; i += 4) {
            thisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];
          }
        }
        this.sigBytes += thatSigBytes;
        return this;
      }, clamp:function() {
        var words = this.words;
        var sigBytes = this.sigBytes;
        words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
        words.length = Math.ceil(sigBytes / 4);
      }, clone:function() {
        var clone = Base.clone.call(this);
        clone.words = this.words.slice(0);
        return clone;
      }, random:function(nBytes) {
        var words = [];
        var r = function(m_w) {
          var m_w = m_w;
          var m_z = 987654321;
          var mask = 4294967295;
          return function() {
            m_z = 36969 * (m_z & 65535) + (m_z >> 16) & mask;
            m_w = 18E3 * (m_w & 65535) + (m_w >> 16) & mask;
            var result = (m_z << 16) + m_w & mask;
            result /= 4294967296;
            result += 0.5;
            return result * (Math.random() > .5 ? 1 : -1);
          };
        };
        for (var i = 0, rcache; i < nBytes; i += 4) {
          var _r = r((rcache || Math.random()) * 4294967296);
          rcache = _r() * 987654071;
          words.push(_r() * 4294967296 | 0);
        }
        return new WordArray.init(words, nBytes);
      }});
      var C_enc = C.enc = {};
      var Hex = C_enc.Hex = {stringify:function(wordArray) {
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var hexChars = [];
        for (var i = 0; i < sigBytes; i++) {
          var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
          hexChars.push((bite >>> 4).toString(16));
          hexChars.push((bite & 15).toString(16));
        }
        return hexChars.join("");
      }, parse:function(hexStr) {
        var hexStrLength = hexStr.length;
        var words = [];
        for (var i = 0; i < hexStrLength; i += 2) {
          words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
        }
        return new WordArray.init(words, hexStrLength / 2);
      }};
      var Latin1 = C_enc.Latin1 = {stringify:function(wordArray) {
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var latin1Chars = [];
        for (var i = 0; i < sigBytes; i++) {
          var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
          latin1Chars.push(String.fromCharCode(bite));
        }
        return latin1Chars.join("");
      }, parse:function(latin1Str) {
        var latin1StrLength = latin1Str.length;
        var words = [];
        for (var i = 0; i < latin1StrLength; i++) {
          words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
        }
        return new WordArray.init(words, latin1StrLength);
      }};
      var Utf8 = C_enc.Utf8 = {stringify:function(wordArray) {
        try {
          return decodeURIComponent(escape(Latin1.stringify(wordArray)));
        } catch (e) {
          throw new Error("Malformed UTF-8 data");
        }
      }, parse:function(utf8Str) {
        return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
      }};
      var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({reset:function() {
        this._data = new WordArray.init;
        this._nDataBytes = 0;
      }, _append:function(data) {
        if (typeof data == "string") {
          data = Utf8.parse(data);
        }
        this._data.concat(data);
        this._nDataBytes += data.sigBytes;
      }, _process:function(doFlush) {
        var data = this._data;
        var dataWords = data.words;
        var dataSigBytes = data.sigBytes;
        var blockSize = this.blockSize;
        var blockSizeBytes = blockSize * 4;
        var nBlocksReady = dataSigBytes / blockSizeBytes;
        if (doFlush) {
          nBlocksReady = Math.ceil(nBlocksReady);
        } else {
          nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
        }
        var nWordsReady = nBlocksReady * blockSize;
        var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
        if (nWordsReady) {
          for (var offset = 0; offset < nWordsReady; offset += blockSize) {
            this._doProcessBlock(dataWords, offset);
          }
          var processedWords = dataWords.splice(0, nWordsReady);
          data.sigBytes -= nBytesReady;
        }
        return new WordArray.init(processedWords, nBytesReady);
      }, clone:function() {
        var clone = Base.clone.call(this);
        clone._data = this._data.clone();
        return clone;
      }, _minBufferSize:0});
      var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({cfg:Base.extend(), init:function(cfg) {
        this.cfg = this.cfg.extend(cfg);
        this.reset();
      }, reset:function() {
        BufferedBlockAlgorithm.reset.call(this);
        this._doReset();
      }, update:function(messageUpdate) {
        this._append(messageUpdate);
        this._process();
        return this;
      }, finalize:function(messageUpdate) {
        if (messageUpdate) {
          this._append(messageUpdate);
        }
        var hash = this._doFinalize();
        return hash;
      }, blockSize:512 / 32, _createHelper:function(hasher) {
        return function(message, cfg) {
          return (new hasher.init(cfg)).finalize(message);
        };
      }, _createHmacHelper:function(hasher) {
        return function(message, key) {
          return (new C_algo.HMAC.init(hasher, key)).finalize(message);
        };
      }});
      var C_algo = C.algo = {};
      return C;
    }(Math);
    return CryptoJS;
  });
}, {}], 54:[function(require, module, exports) {
  (function(root, factory) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var C_enc = C.enc;
      var Base64 = C_enc.Base64 = {stringify:function(wordArray) {
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var map = this._map;
        wordArray.clamp();
        var base64Chars = [];
        for (var i = 0; i < sigBytes; i += 3) {
          var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
          var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
          var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
          var triplet = byte1 << 16 | byte2 << 8 | byte3;
          for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
            base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
          }
        }
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          while (base64Chars.length % 4) {
            base64Chars.push(paddingChar);
          }
        }
        return base64Chars.join("");
      }, parse:function(base64Str) {
        var base64StrLength = base64Str.length;
        var map = this._map;
        var reverseMap = this._reverseMap;
        if (!reverseMap) {
          reverseMap = this._reverseMap = [];
          for (var j = 0; j < map.length; j++) {
            reverseMap[map.charCodeAt(j)] = j;
          }
        }
        var paddingChar = map.charAt(64);
        if (paddingChar) {
          var paddingIndex = base64Str.indexOf(paddingChar);
          if (paddingIndex !== -1) {
            base64StrLength = paddingIndex;
          }
        }
        return parseLoop(base64Str, base64StrLength, reverseMap);
      }, _map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="};
      function parseLoop(base64Str, base64StrLength, reverseMap) {
        var words = [];
        var nBytes = 0;
        for (var i = 0; i < base64StrLength; i++) {
          if (i % 4) {
            var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
            var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
            words[nBytes >>> 2] |= (bits1 | bits2) << 24 - nBytes % 4 * 8;
            nBytes++;
          }
        }
        return WordArray.create(words, nBytes);
      }
    })();
    return CryptoJS.enc.Base64;
  });
}, {"./core":53}], 55:[function(require, module, exports) {
  (function(root, factory) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var C_enc = C.enc;
      var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {stringify:function(wordArray) {
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var utf16Chars = [];
        for (var i = 0; i < sigBytes; i += 2) {
          var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
          utf16Chars.push(String.fromCharCode(codePoint));
        }
        return utf16Chars.join("");
      }, parse:function(utf16Str) {
        var utf16StrLength = utf16Str.length;
        var words = [];
        for (var i = 0; i < utf16StrLength; i++) {
          words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
        }
        return WordArray.create(words, utf16StrLength * 2);
      }};
      C_enc.Utf16LE = {stringify:function(wordArray) {
        var words = wordArray.words;
        var sigBytes = wordArray.sigBytes;
        var utf16Chars = [];
        for (var i = 0; i < sigBytes; i += 2) {
          var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
          utf16Chars.push(String.fromCharCode(codePoint));
        }
        return utf16Chars.join("");
      }, parse:function(utf16Str) {
        var utf16StrLength = utf16Str.length;
        var words = [];
        for (var i = 0; i < utf16StrLength; i++) {
          words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
        }
        return WordArray.create(words, utf16StrLength * 2);
      }};
      function swapEndian(word) {
        return word << 8 & 4278255360 | word >>> 8 & 16711935;
      }
    })();
    return CryptoJS.enc.Utf16;
  });
}, {"./core":53}], 56:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./sha1"), require("./hmac"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./sha1", "./hmac"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var WordArray = C_lib.WordArray;
      var C_algo = C.algo;
      var MD5 = C_algo.MD5;
      var EvpKDF = C_algo.EvpKDF = Base.extend({cfg:Base.extend({keySize:128 / 32, hasher:MD5, iterations:1}), init:function(cfg) {
        this.cfg = this.cfg.extend(cfg);
      }, compute:function(password, salt) {
        var cfg = this.cfg;
        var hasher = cfg.hasher.create();
        var derivedKey = WordArray.create();
        var derivedKeyWords = derivedKey.words;
        var keySize = cfg.keySize;
        var iterations = cfg.iterations;
        while (derivedKeyWords.length < keySize) {
          if (block) {
            hasher.update(block);
          }
          var block = hasher.update(password).finalize(salt);
          hasher.reset();
          for (var i = 1; i < iterations; i++) {
            block = hasher.finalize(block);
            hasher.reset();
          }
          derivedKey.concat(block);
        }
        derivedKey.sigBytes = keySize * 4;
        return derivedKey;
      }});
      C.EvpKDF = function(password, salt, cfg) {
        return EvpKDF.create(cfg).compute(password, salt);
      };
    })();
    return CryptoJS.EvpKDF;
  });
}, {"./core":53, "./hmac":58, "./sha1":77}], 57:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function(undefined) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var CipherParams = C_lib.CipherParams;
      var C_enc = C.enc;
      var Hex = C_enc.Hex;
      var C_format = C.format;
      var HexFormatter = C_format.Hex = {stringify:function(cipherParams) {
        return cipherParams.ciphertext.toString(Hex);
      }, parse:function(input) {
        var ciphertext = Hex.parse(input);
        return CipherParams.create({ciphertext:ciphertext});
      }};
    })();
    return CryptoJS.format.Hex;
  });
}, {"./cipher-core":52, "./core":53}], 58:[function(require, module, exports) {
  (function(root, factory) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var C_enc = C.enc;
      var Utf8 = C_enc.Utf8;
      var C_algo = C.algo;
      var HMAC = C_algo.HMAC = Base.extend({init:function(hasher, key) {
        hasher = this._hasher = new hasher.init;
        if (typeof key == "string") {
          key = Utf8.parse(key);
        }
        var hasherBlockSize = hasher.blockSize;
        var hasherBlockSizeBytes = hasherBlockSize * 4;
        if (key.sigBytes > hasherBlockSizeBytes) {
          key = hasher.finalize(key);
        }
        key.clamp();
        var oKey = this._oKey = key.clone();
        var iKey = this._iKey = key.clone();
        var oKeyWords = oKey.words;
        var iKeyWords = iKey.words;
        for (var i = 0; i < hasherBlockSize; i++) {
          oKeyWords[i] ^= 1549556828;
          iKeyWords[i] ^= 909522486;
        }
        oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
        this.reset();
      }, reset:function() {
        var hasher = this._hasher;
        hasher.reset();
        hasher.update(this._iKey);
      }, update:function(messageUpdate) {
        this._hasher.update(messageUpdate);
        return this;
      }, finalize:function(messageUpdate) {
        var hasher = this._hasher;
        var innerHash = hasher.finalize(messageUpdate);
        hasher.reset();
        var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
        return hmac;
      }});
    })();
  });
}, {"./core":53}], 59:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./x64-core"), require("./lib-typedarrays"), require("./enc-utf16"), require("./enc-base64"), require("./md5"), require("./sha1"), require("./sha256"), require("./sha224"), require("./sha512"), require("./sha384"), require("./sha3"), require("./ripemd160"), require("./hmac"), require("./pbkdf2"), require("./evpkdf"), require("./cipher-core"), require("./mode-cfb"), require("./mode-ctr"), require("./mode-ctr-gladman"), require("./mode-ofb"), 
      require("./mode-ecb"), require("./pad-ansix923"), require("./pad-iso10126"), require("./pad-iso97971"), require("./pad-zeropadding"), require("./pad-nopadding"), require("./format-hex"), require("./aes"), require("./tripledes"), require("./rc4"), require("./rabbit"), require("./rabbit-legacy"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy"], factory);
      } else {
        root.CryptoJS = factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    return CryptoJS;
  });
}, {"./aes":51, "./cipher-core":52, "./core":53, "./enc-base64":54, "./enc-utf16":55, "./evpkdf":56, "./format-hex":57, "./hmac":58, "./lib-typedarrays":60, "./md5":61, "./mode-cfb":62, "./mode-ctr":64, "./mode-ctr-gladman":63, "./mode-ecb":65, "./mode-ofb":66, "./pad-ansix923":67, "./pad-iso10126":68, "./pad-iso97971":69, "./pad-nopadding":70, "./pad-zeropadding":71, "./pbkdf2":72, "./rabbit":74, "./rabbit-legacy":73, "./rc4":75, "./ripemd160":76, "./sha1":77, "./sha224":78, "./sha256":79, "./sha3":80, 
"./sha384":81, "./sha512":82, "./tripledes":83, "./x64-core":84}], 60:[function(require, module, exports) {
  (function(root, factory) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function() {
      if (typeof ArrayBuffer != "function") {
        return;
      }
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var superInit = WordArray.init;
      var subInit = WordArray.init = function(typedArray) {
        if (typedArray instanceof ArrayBuffer) {
          typedArray = new Uint8Array(typedArray);
        }
        if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
          typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
        }
        if (typedArray instanceof Uint8Array) {
          var typedArrayByteLength = typedArray.byteLength;
          var words = [];
          for (var i = 0; i < typedArrayByteLength; i++) {
            words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
          }
          superInit.call(this, words, typedArrayByteLength);
        } else {
          superInit.apply(this, arguments);
        }
      };
      subInit.prototype = WordArray;
    })();
    return CryptoJS.lib.WordArray;
  });
}, {"./core":53}], 61:[function(require, module, exports) {
  (function(root, factory) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function(Math) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var Hasher = C_lib.Hasher;
      var C_algo = C.algo;
      var T = [];
      (function() {
        for (var i = 0; i < 64; i++) {
          T[i] = Math.abs(Math.sin(i + 1)) * 4294967296 | 0;
        }
      })();
      var MD5 = C_algo.MD5 = Hasher.extend({_doReset:function() {
        this._hash = new WordArray.init([1732584193, 4023233417, 2562383102, 271733878]);
      }, _doProcessBlock:function(M, offset) {
        for (var i = 0; i < 16; i++) {
          var offset_i = offset + i;
          var M_offset_i = M[offset_i];
          M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
        }
        var H = this._hash.words;
        var M_offset_0 = M[offset + 0];
        var M_offset_1 = M[offset + 1];
        var M_offset_2 = M[offset + 2];
        var M_offset_3 = M[offset + 3];
        var M_offset_4 = M[offset + 4];
        var M_offset_5 = M[offset + 5];
        var M_offset_6 = M[offset + 6];
        var M_offset_7 = M[offset + 7];
        var M_offset_8 = M[offset + 8];
        var M_offset_9 = M[offset + 9];
        var M_offset_10 = M[offset + 10];
        var M_offset_11 = M[offset + 11];
        var M_offset_12 = M[offset + 12];
        var M_offset_13 = M[offset + 13];
        var M_offset_14 = M[offset + 14];
        var M_offset_15 = M[offset + 15];
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        a = FF(a, b, c, d, M_offset_0, 7, T[0]);
        d = FF(d, a, b, c, M_offset_1, 12, T[1]);
        c = FF(c, d, a, b, M_offset_2, 17, T[2]);
        b = FF(b, c, d, a, M_offset_3, 22, T[3]);
        a = FF(a, b, c, d, M_offset_4, 7, T[4]);
        d = FF(d, a, b, c, M_offset_5, 12, T[5]);
        c = FF(c, d, a, b, M_offset_6, 17, T[6]);
        b = FF(b, c, d, a, M_offset_7, 22, T[7]);
        a = FF(a, b, c, d, M_offset_8, 7, T[8]);
        d = FF(d, a, b, c, M_offset_9, 12, T[9]);
        c = FF(c, d, a, b, M_offset_10, 17, T[10]);
        b = FF(b, c, d, a, M_offset_11, 22, T[11]);
        a = FF(a, b, c, d, M_offset_12, 7, T[12]);
        d = FF(d, a, b, c, M_offset_13, 12, T[13]);
        c = FF(c, d, a, b, M_offset_14, 17, T[14]);
        b = FF(b, c, d, a, M_offset_15, 22, T[15]);
        a = GG(a, b, c, d, M_offset_1, 5, T[16]);
        d = GG(d, a, b, c, M_offset_6, 9, T[17]);
        c = GG(c, d, a, b, M_offset_11, 14, T[18]);
        b = GG(b, c, d, a, M_offset_0, 20, T[19]);
        a = GG(a, b, c, d, M_offset_5, 5, T[20]);
        d = GG(d, a, b, c, M_offset_10, 9, T[21]);
        c = GG(c, d, a, b, M_offset_15, 14, T[22]);
        b = GG(b, c, d, a, M_offset_4, 20, T[23]);
        a = GG(a, b, c, d, M_offset_9, 5, T[24]);
        d = GG(d, a, b, c, M_offset_14, 9, T[25]);
        c = GG(c, d, a, b, M_offset_3, 14, T[26]);
        b = GG(b, c, d, a, M_offset_8, 20, T[27]);
        a = GG(a, b, c, d, M_offset_13, 5, T[28]);
        d = GG(d, a, b, c, M_offset_2, 9, T[29]);
        c = GG(c, d, a, b, M_offset_7, 14, T[30]);
        b = GG(b, c, d, a, M_offset_12, 20, T[31]);
        a = HH(a, b, c, d, M_offset_5, 4, T[32]);
        d = HH(d, a, b, c, M_offset_8, 11, T[33]);
        c = HH(c, d, a, b, M_offset_11, 16, T[34]);
        b = HH(b, c, d, a, M_offset_14, 23, T[35]);
        a = HH(a, b, c, d, M_offset_1, 4, T[36]);
        d = HH(d, a, b, c, M_offset_4, 11, T[37]);
        c = HH(c, d, a, b, M_offset_7, 16, T[38]);
        b = HH(b, c, d, a, M_offset_10, 23, T[39]);
        a = HH(a, b, c, d, M_offset_13, 4, T[40]);
        d = HH(d, a, b, c, M_offset_0, 11, T[41]);
        c = HH(c, d, a, b, M_offset_3, 16, T[42]);
        b = HH(b, c, d, a, M_offset_6, 23, T[43]);
        a = HH(a, b, c, d, M_offset_9, 4, T[44]);
        d = HH(d, a, b, c, M_offset_12, 11, T[45]);
        c = HH(c, d, a, b, M_offset_15, 16, T[46]);
        b = HH(b, c, d, a, M_offset_2, 23, T[47]);
        a = II(a, b, c, d, M_offset_0, 6, T[48]);
        d = II(d, a, b, c, M_offset_7, 10, T[49]);
        c = II(c, d, a, b, M_offset_14, 15, T[50]);
        b = II(b, c, d, a, M_offset_5, 21, T[51]);
        a = II(a, b, c, d, M_offset_12, 6, T[52]);
        d = II(d, a, b, c, M_offset_3, 10, T[53]);
        c = II(c, d, a, b, M_offset_10, 15, T[54]);
        b = II(b, c, d, a, M_offset_1, 21, T[55]);
        a = II(a, b, c, d, M_offset_8, 6, T[56]);
        d = II(d, a, b, c, M_offset_15, 10, T[57]);
        c = II(c, d, a, b, M_offset_6, 15, T[58]);
        b = II(b, c, d, a, M_offset_13, 21, T[59]);
        a = II(a, b, c, d, M_offset_4, 6, T[60]);
        d = II(d, a, b, c, M_offset_11, 10, T[61]);
        c = II(c, d, a, b, M_offset_2, 15, T[62]);
        b = II(b, c, d, a, M_offset_9, 21, T[63]);
        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
      }, _doFinalize:function() {
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;
        dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
        var nBitsTotalH = Math.floor(nBitsTotal / 4294967296);
        var nBitsTotalL = nBitsTotal;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
        data.sigBytes = (dataWords.length + 1) * 4;
        this._process();
        var hash = this._hash;
        var H = hash.words;
        for (var i = 0; i < 4; i++) {
          var H_i = H[i];
          H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
        }
        return hash;
      }, clone:function() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }});
      function FF(a, b, c, d, x, s, t) {
        var n = a + (b & c | ~b & d) + x + t;
        return (n << s | n >>> 32 - s) + b;
      }
      function GG(a, b, c, d, x, s, t) {
        var n = a + (b & d | c & ~d) + x + t;
        return (n << s | n >>> 32 - s) + b;
      }
      function HH(a, b, c, d, x, s, t) {
        var n = a + (b ^ c ^ d) + x + t;
        return (n << s | n >>> 32 - s) + b;
      }
      function II(a, b, c, d, x, s, t) {
        var n = a + (c ^ (b | ~d)) + x + t;
        return (n << s | n >>> 32 - s) + b;
      }
      C.MD5 = Hasher._createHelper(MD5);
      C.HmacMD5 = Hasher._createHmacHelper(MD5);
    })(Math);
    return CryptoJS.MD5;
  });
}, {"./core":53}], 62:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    CryptoJS.mode.CFB = function() {
      var CFB = CryptoJS.lib.BlockCipherMode.extend();
      CFB.Encryptor = CFB.extend({processBlock:function(words, offset) {
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
        this._prevBlock = words.slice(offset, offset + blockSize);
      }});
      CFB.Decryptor = CFB.extend({processBlock:function(words, offset) {
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var thisBlock = words.slice(offset, offset + blockSize);
        generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
        this._prevBlock = thisBlock;
      }});
      function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
        var iv = this._iv;
        if (iv) {
          var keystream = iv.slice(0);
          this._iv = undefined;
        } else {
          var keystream = this._prevBlock;
        }
        cipher.encryptBlock(keystream, 0);
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      }
      return CFB;
    }();
    return CryptoJS.mode.CFB;
  });
}, {"./cipher-core":52, "./core":53}], 63:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    CryptoJS.mode.CTRGladman = function() {
      var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();
      function incWord(word) {
        if ((word >> 24 & 255) === 255) {
          var b1 = word >> 16 & 255;
          var b2 = word >> 8 & 255;
          var b3 = word & 255;
          if (b1 === 255) {
            b1 = 0;
            if (b2 === 255) {
              b2 = 0;
              if (b3 === 255) {
                b3 = 0;
              } else {
                ++b3;
              }
            } else {
              ++b2;
            }
          } else {
            ++b1;
          }
          word = 0;
          word += b1 << 16;
          word += b2 << 8;
          word += b3;
        } else {
          word += 1 << 24;
        }
        return word;
      }
      function incCounter(counter) {
        if ((counter[0] = incWord(counter[0])) === 0) {
          counter[1] = incWord(counter[1]);
        }
        return counter;
      }
      var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({processBlock:function(words, offset) {
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var counter = this._counter;
        if (iv) {
          counter = this._counter = iv.slice(0);
          this._iv = undefined;
        }
        incCounter(counter);
        var keystream = counter.slice(0);
        cipher.encryptBlock(keystream, 0);
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      }});
      CTRGladman.Decryptor = Encryptor;
      return CTRGladman;
    }();
    return CryptoJS.mode.CTRGladman;
  });
}, {"./cipher-core":52, "./core":53}], 64:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    CryptoJS.mode.CTR = function() {
      var CTR = CryptoJS.lib.BlockCipherMode.extend();
      var Encryptor = CTR.Encryptor = CTR.extend({processBlock:function(words, offset) {
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var counter = this._counter;
        if (iv) {
          counter = this._counter = iv.slice(0);
          this._iv = undefined;
        }
        var keystream = counter.slice(0);
        cipher.encryptBlock(keystream, 0);
        counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      }});
      CTR.Decryptor = Encryptor;
      return CTR;
    }();
    return CryptoJS.mode.CTR;
  });
}, {"./cipher-core":52, "./core":53}], 65:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    CryptoJS.mode.ECB = function() {
      var ECB = CryptoJS.lib.BlockCipherMode.extend();
      ECB.Encryptor = ECB.extend({processBlock:function(words, offset) {
        this._cipher.encryptBlock(words, offset);
      }});
      ECB.Decryptor = ECB.extend({processBlock:function(words, offset) {
        this._cipher.decryptBlock(words, offset);
      }});
      return ECB;
    }();
    return CryptoJS.mode.ECB;
  });
}, {"./cipher-core":52, "./core":53}], 66:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    CryptoJS.mode.OFB = function() {
      var OFB = CryptoJS.lib.BlockCipherMode.extend();
      var Encryptor = OFB.Encryptor = OFB.extend({processBlock:function(words, offset) {
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var iv = this._iv;
        var keystream = this._keystream;
        if (iv) {
          keystream = this._keystream = iv.slice(0);
          this._iv = undefined;
        }
        cipher.encryptBlock(keystream, 0);
        for (var i = 0; i < blockSize; i++) {
          words[offset + i] ^= keystream[i];
        }
      }});
      OFB.Decryptor = Encryptor;
      return OFB;
    }();
    return CryptoJS.mode.OFB;
  });
}, {"./cipher-core":52, "./core":53}], 67:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    CryptoJS.pad.AnsiX923 = {pad:function(data, blockSize) {
      var dataSigBytes = data.sigBytes;
      var blockSizeBytes = blockSize * 4;
      var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
      var lastBytePos = dataSigBytes + nPaddingBytes - 1;
      data.clamp();
      data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
      data.sigBytes += nPaddingBytes;
    }, unpad:function(data) {
      var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
      data.sigBytes -= nPaddingBytes;
    }};
    return CryptoJS.pad.Ansix923;
  });
}, {"./cipher-core":52, "./core":53}], 68:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    CryptoJS.pad.Iso10126 = {pad:function(data, blockSize) {
      var blockSizeBytes = blockSize * 4;
      var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
      data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
    }, unpad:function(data) {
      var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
      data.sigBytes -= nPaddingBytes;
    }};
    return CryptoJS.pad.Iso10126;
  });
}, {"./cipher-core":52, "./core":53}], 69:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    CryptoJS.pad.Iso97971 = {pad:function(data, blockSize) {
      data.concat(CryptoJS.lib.WordArray.create([2147483648], 1));
      CryptoJS.pad.ZeroPadding.pad(data, blockSize);
    }, unpad:function(data) {
      CryptoJS.pad.ZeroPadding.unpad(data);
      data.sigBytes--;
    }};
    return CryptoJS.pad.Iso97971;
  });
}, {"./cipher-core":52, "./core":53}], 70:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    CryptoJS.pad.NoPadding = {pad:function() {
    }, unpad:function() {
    }};
    return CryptoJS.pad.NoPadding;
  });
}, {"./cipher-core":52, "./core":53}], 71:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    CryptoJS.pad.ZeroPadding = {pad:function(data, blockSize) {
      var blockSizeBytes = blockSize * 4;
      data.clamp();
      data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
    }, unpad:function(data) {
      var dataWords = data.words;
      var i = data.sigBytes - 1;
      while (!(dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 255)) {
        i--;
      }
      data.sigBytes = i + 1;
    }};
    return CryptoJS.pad.ZeroPadding;
  });
}, {"./cipher-core":52, "./core":53}], 72:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./sha1"), require("./hmac"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./sha1", "./hmac"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var WordArray = C_lib.WordArray;
      var C_algo = C.algo;
      var SHA1 = C_algo.SHA1;
      var HMAC = C_algo.HMAC;
      var PBKDF2 = C_algo.PBKDF2 = Base.extend({cfg:Base.extend({keySize:128 / 32, hasher:SHA1, iterations:1}), init:function(cfg) {
        this.cfg = this.cfg.extend(cfg);
      }, compute:function(password, salt) {
        var cfg = this.cfg;
        var hmac = HMAC.create(cfg.hasher, password);
        var derivedKey = WordArray.create();
        var blockIndex = WordArray.create([1]);
        var derivedKeyWords = derivedKey.words;
        var blockIndexWords = blockIndex.words;
        var keySize = cfg.keySize;
        var iterations = cfg.iterations;
        while (derivedKeyWords.length < keySize) {
          var block = hmac.update(salt).finalize(blockIndex);
          hmac.reset();
          var blockWords = block.words;
          var blockWordsLength = blockWords.length;
          var intermediate = block;
          for (var i = 1; i < iterations; i++) {
            intermediate = hmac.finalize(intermediate);
            hmac.reset();
            var intermediateWords = intermediate.words;
            for (var j = 0; j < blockWordsLength; j++) {
              blockWords[j] ^= intermediateWords[j];
            }
          }
          derivedKey.concat(block);
          blockIndexWords[0]++;
        }
        derivedKey.sigBytes = keySize * 4;
        return derivedKey;
      }});
      C.PBKDF2 = function(password, salt, cfg) {
        return PBKDF2.create(cfg).compute(password, salt);
      };
    })();
    return CryptoJS.PBKDF2;
  });
}, {"./core":53, "./hmac":58, "./sha1":77}], 73:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var StreamCipher = C_lib.StreamCipher;
      var C_algo = C.algo;
      var S = [];
      var C_ = [];
      var G = [];
      var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({_doReset:function() {
        var K = this._key.words;
        var iv = this.cfg.iv;
        var X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16];
        var C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 4294901760 | K[1] & 65535, K[3] << 16 | K[3] >>> 16, K[1] & 4294901760 | K[2] & 65535, K[0] << 16 | K[0] >>> 16, K[2] & 4294901760 | K[3] & 65535, K[1] << 16 | K[1] >>> 16, K[3] & 4294901760 | K[0] & 65535];
        this._b = 0;
        for (var i = 0; i < 4; i++) {
          nextState.call(this);
        }
        for (var i = 0; i < 8; i++) {
          C[i] ^= X[i + 4 & 7];
        }
        if (iv) {
          var IV = iv.words;
          var IV_0 = IV[0];
          var IV_1 = IV[1];
          var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
          var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
          var i1 = i0 >>> 16 | i2 & 4294901760;
          var i3 = i2 << 16 | i0 & 65535;
          C[0] ^= i0;
          C[1] ^= i1;
          C[2] ^= i2;
          C[3] ^= i3;
          C[4] ^= i0;
          C[5] ^= i1;
          C[6] ^= i2;
          C[7] ^= i3;
          for (var i = 0; i < 4; i++) {
            nextState.call(this);
          }
        }
      }, _doProcessBlock:function(M, offset) {
        var X = this._X;
        nextState.call(this);
        S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
        S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
        S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
        S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
        for (var i = 0; i < 4; i++) {
          S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
          M[offset + i] ^= S[i];
        }
      }, blockSize:128 / 32, ivSize:64 / 32});
      function nextState() {
        var X = this._X;
        var C = this._C;
        for (var i = 0; i < 8; i++) {
          C_[i] = C[i];
        }
        C[0] = C[0] + 1295307597 + this._b | 0;
        C[1] = C[1] + 3545052371 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
        C[2] = C[2] + 886263092 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
        C[3] = C[3] + 1295307597 + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
        C[4] = C[4] + 3545052371 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
        C[5] = C[5] + 886263092 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
        C[6] = C[6] + 1295307597 + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
        C[7] = C[7] + 3545052371 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
        this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
        for (var i = 0; i < 8; i++) {
          var gx = X[i] + C[i];
          var ga = gx & 65535;
          var gb = gx >>> 16;
          var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
          var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
          G[i] = gh ^ gl;
        }
        X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
        X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
        X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
        X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
        X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
        X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
        X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
        X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
      }
      C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
    })();
    return CryptoJS.RabbitLegacy;
  });
}, {"./cipher-core":52, "./core":53, "./enc-base64":54, "./evpkdf":56, "./md5":61}], 74:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var StreamCipher = C_lib.StreamCipher;
      var C_algo = C.algo;
      var S = [];
      var C_ = [];
      var G = [];
      var Rabbit = C_algo.Rabbit = StreamCipher.extend({_doReset:function() {
        var K = this._key.words;
        var iv = this.cfg.iv;
        for (var i = 0; i < 4; i++) {
          K[i] = (K[i] << 8 | K[i] >>> 24) & 16711935 | (K[i] << 24 | K[i] >>> 8) & 4278255360;
        }
        var X = this._X = [K[0], K[3] << 16 | K[2] >>> 16, K[1], K[0] << 16 | K[3] >>> 16, K[2], K[1] << 16 | K[0] >>> 16, K[3], K[2] << 16 | K[1] >>> 16];
        var C = this._C = [K[2] << 16 | K[2] >>> 16, K[0] & 4294901760 | K[1] & 65535, K[3] << 16 | K[3] >>> 16, K[1] & 4294901760 | K[2] & 65535, K[0] << 16 | K[0] >>> 16, K[2] & 4294901760 | K[3] & 65535, K[1] << 16 | K[1] >>> 16, K[3] & 4294901760 | K[0] & 65535];
        this._b = 0;
        for (var i = 0; i < 4; i++) {
          nextState.call(this);
        }
        for (var i = 0; i < 8; i++) {
          C[i] ^= X[i + 4 & 7];
        }
        if (iv) {
          var IV = iv.words;
          var IV_0 = IV[0];
          var IV_1 = IV[1];
          var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
          var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
          var i1 = i0 >>> 16 | i2 & 4294901760;
          var i3 = i2 << 16 | i0 & 65535;
          C[0] ^= i0;
          C[1] ^= i1;
          C[2] ^= i2;
          C[3] ^= i3;
          C[4] ^= i0;
          C[5] ^= i1;
          C[6] ^= i2;
          C[7] ^= i3;
          for (var i = 0; i < 4; i++) {
            nextState.call(this);
          }
        }
      }, _doProcessBlock:function(M, offset) {
        var X = this._X;
        nextState.call(this);
        S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
        S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
        S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
        S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
        for (var i = 0; i < 4; i++) {
          S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
          M[offset + i] ^= S[i];
        }
      }, blockSize:128 / 32, ivSize:64 / 32});
      function nextState() {
        var X = this._X;
        var C = this._C;
        for (var i = 0; i < 8; i++) {
          C_[i] = C[i];
        }
        C[0] = C[0] + 1295307597 + this._b | 0;
        C[1] = C[1] + 3545052371 + (C[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
        C[2] = C[2] + 886263092 + (C[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
        C[3] = C[3] + 1295307597 + (C[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
        C[4] = C[4] + 3545052371 + (C[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
        C[5] = C[5] + 886263092 + (C[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
        C[6] = C[6] + 1295307597 + (C[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
        C[7] = C[7] + 3545052371 + (C[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
        this._b = C[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
        for (var i = 0; i < 8; i++) {
          var gx = X[i] + C[i];
          var ga = gx & 65535;
          var gb = gx >>> 16;
          var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
          var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
          G[i] = gh ^ gl;
        }
        X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
        X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
        X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
        X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
        X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
        X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
        X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
        X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
      }
      C.Rabbit = StreamCipher._createHelper(Rabbit);
    })();
    return CryptoJS.Rabbit;
  });
}, {"./cipher-core":52, "./core":53, "./enc-base64":54, "./evpkdf":56, "./md5":61}], 75:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var StreamCipher = C_lib.StreamCipher;
      var C_algo = C.algo;
      var RC4 = C_algo.RC4 = StreamCipher.extend({_doReset:function() {
        var key = this._key;
        var keyWords = key.words;
        var keySigBytes = key.sigBytes;
        var S = this._S = [];
        for (var i = 0; i < 256; i++) {
          S[i] = i;
        }
        for (var i = 0, j = 0; i < 256; i++) {
          var keyByteIndex = i % keySigBytes;
          var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 255;
          j = (j + S[i] + keyByte) % 256;
          var t = S[i];
          S[i] = S[j];
          S[j] = t;
        }
        this._i = this._j = 0;
      }, _doProcessBlock:function(M, offset) {
        M[offset] ^= generateKeystreamWord.call(this);
      }, keySize:256 / 32, ivSize:0});
      function generateKeystreamWord() {
        var S = this._S;
        var i = this._i;
        var j = this._j;
        var keystreamWord = 0;
        for (var n = 0; n < 4; n++) {
          i = (i + 1) % 256;
          j = (j + S[i]) % 256;
          var t = S[i];
          S[i] = S[j];
          S[j] = t;
          keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
        }
        this._i = i;
        this._j = j;
        return keystreamWord;
      }
      C.RC4 = StreamCipher._createHelper(RC4);
      var RC4Drop = C_algo.RC4Drop = RC4.extend({cfg:RC4.cfg.extend({drop:192}), _doReset:function() {
        RC4._doReset.call(this);
        for (var i = this.cfg.drop; i > 0; i--) {
          generateKeystreamWord.call(this);
        }
      }});
      C.RC4Drop = StreamCipher._createHelper(RC4Drop);
    })();
    return CryptoJS.RC4;
  });
}, {"./cipher-core":52, "./core":53, "./enc-base64":54, "./evpkdf":56, "./md5":61}], 76:[function(require, module, exports) {
  (function(root, factory) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function(Math) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var Hasher = C_lib.Hasher;
      var C_algo = C.algo;
      var _zl = WordArray.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
      var _zr = WordArray.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
      var _sl = WordArray.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
      var _sr = WordArray.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
      var _hl = WordArray.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
      var _hr = WordArray.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
      var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({_doReset:function() {
        this._hash = WordArray.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      }, _doProcessBlock:function(M, offset) {
        for (var i = 0; i < 16; i++) {
          var offset_i = offset + i;
          var M_offset_i = M[offset_i];
          M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
        }
        var H = this._hash.words;
        var hl = _hl.words;
        var hr = _hr.words;
        var zl = _zl.words;
        var zr = _zr.words;
        var sl = _sl.words;
        var sr = _sr.words;
        var al, bl, cl, dl, el;
        var ar, br, cr, dr, er;
        ar = al = H[0];
        br = bl = H[1];
        cr = cl = H[2];
        dr = dl = H[3];
        er = el = H[4];
        var t;
        for (var i = 0; i < 80; i += 1) {
          t = al + M[offset + zl[i]] | 0;
          if (i < 16) {
            t += f1(bl, cl, dl) + hl[0];
          } else {
            if (i < 32) {
              t += f2(bl, cl, dl) + hl[1];
            } else {
              if (i < 48) {
                t += f3(bl, cl, dl) + hl[2];
              } else {
                if (i < 64) {
                  t += f4(bl, cl, dl) + hl[3];
                } else {
                  t += f5(bl, cl, dl) + hl[4];
                }
              }
            }
          }
          t = t | 0;
          t = rotl(t, sl[i]);
          t = t + el | 0;
          al = el;
          el = dl;
          dl = rotl(cl, 10);
          cl = bl;
          bl = t;
          t = ar + M[offset + zr[i]] | 0;
          if (i < 16) {
            t += f5(br, cr, dr) + hr[0];
          } else {
            if (i < 32) {
              t += f4(br, cr, dr) + hr[1];
            } else {
              if (i < 48) {
                t += f3(br, cr, dr) + hr[2];
              } else {
                if (i < 64) {
                  t += f2(br, cr, dr) + hr[3];
                } else {
                  t += f1(br, cr, dr) + hr[4];
                }
              }
            }
          }
          t = t | 0;
          t = rotl(t, sr[i]);
          t = t + er | 0;
          ar = er;
          er = dr;
          dr = rotl(cr, 10);
          cr = br;
          br = t;
        }
        t = H[1] + cl + dr | 0;
        H[1] = H[2] + dl + er | 0;
        H[2] = H[3] + el + ar | 0;
        H[3] = H[4] + al + br | 0;
        H[4] = H[0] + bl + cr | 0;
        H[0] = t;
      }, _doFinalize:function() {
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;
        dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 16711935 | (nBitsTotal << 24 | nBitsTotal >>> 8) & 4278255360;
        data.sigBytes = (dataWords.length + 1) * 4;
        this._process();
        var hash = this._hash;
        var H = hash.words;
        for (var i = 0; i < 5; i++) {
          var H_i = H[i];
          H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
        }
        return hash;
      }, clone:function() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }});
      function f1(x, y, z) {
        return x ^ y ^ z;
      }
      function f2(x, y, z) {
        return x & y | ~x & z;
      }
      function f3(x, y, z) {
        return (x | ~y) ^ z;
      }
      function f4(x, y, z) {
        return x & z | y & ~z;
      }
      function f5(x, y, z) {
        return x ^ (y | ~z);
      }
      function rotl(x, n) {
        return x << n | x >>> 32 - n;
      }
      C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
      C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
    })(Math);
    return CryptoJS.RIPEMD160;
  });
}, {"./core":53}], 77:[function(require, module, exports) {
  (function(root, factory) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var Hasher = C_lib.Hasher;
      var C_algo = C.algo;
      var W = [];
      var SHA1 = C_algo.SHA1 = Hasher.extend({_doReset:function() {
        this._hash = new WordArray.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      }, _doProcessBlock:function(M, offset) {
        var H = this._hash.words;
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];
        for (var i = 0; i < 80; i++) {
          if (i < 16) {
            W[i] = M[offset + i] | 0;
          } else {
            var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = n << 1 | n >>> 31;
          }
          var t = (a << 5 | a >>> 27) + e + W[i];
          if (i < 20) {
            t += (b & c | ~b & d) + 1518500249;
          } else {
            if (i < 40) {
              t += (b ^ c ^ d) + 1859775393;
            } else {
              if (i < 60) {
                t += (b & c | b & d | c & d) - 1894007588;
              } else {
                t += (b ^ c ^ d) - 899497514;
              }
            }
          }
          e = d;
          d = c;
          c = b << 30 | b >>> 2;
          b = a;
          a = t;
        }
        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
        H[4] = H[4] + e | 0;
      }, _doFinalize:function() {
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;
        dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
        data.sigBytes = dataWords.length * 4;
        this._process();
        return this._hash;
      }, clone:function() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }});
      C.SHA1 = Hasher._createHelper(SHA1);
      C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
    })();
    return CryptoJS.SHA1;
  });
}, {"./core":53}], 78:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./sha256"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./sha256"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var C_algo = C.algo;
      var SHA256 = C_algo.SHA256;
      var SHA224 = C_algo.SHA224 = SHA256.extend({_doReset:function() {
        this._hash = new WordArray.init([3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]);
      }, _doFinalize:function() {
        var hash = SHA256._doFinalize.call(this);
        hash.sigBytes -= 4;
        return hash;
      }});
      C.SHA224 = SHA256._createHelper(SHA224);
      C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
    })();
    return CryptoJS.SHA224;
  });
}, {"./core":53, "./sha256":79}], 79:[function(require, module, exports) {
  (function(root, factory) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function(Math) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var Hasher = C_lib.Hasher;
      var C_algo = C.algo;
      var H = [];
      var K = [];
      (function() {
        function isPrime(n) {
          var sqrtN = Math.sqrt(n);
          for (var factor = 2; factor <= sqrtN; factor++) {
            if (!(n % factor)) {
              return false;
            }
          }
          return true;
        }
        function getFractionalBits(n) {
          return (n - (n | 0)) * 4294967296 | 0;
        }
        var n = 2;
        var nPrime = 0;
        while (nPrime < 64) {
          if (isPrime(n)) {
            if (nPrime < 8) {
              H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
            }
            K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));
            nPrime++;
          }
          n++;
        }
      })();
      var W = [];
      var SHA256 = C_algo.SHA256 = Hasher.extend({_doReset:function() {
        this._hash = new WordArray.init(H.slice(0));
      }, _doProcessBlock:function(M, offset) {
        var H = this._hash.words;
        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];
        var f = H[5];
        var g = H[6];
        var h = H[7];
        for (var i = 0; i < 64; i++) {
          if (i < 16) {
            W[i] = M[offset + i] | 0;
          } else {
            var gamma0x = W[i - 15];
            var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
            var gamma1x = W[i - 2];
            var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
            W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
          }
          var ch = e & f ^ ~e & g;
          var maj = a & b ^ a & c ^ b & c;
          var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
          var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
          var t1 = h + sigma1 + ch + K[i] + W[i];
          var t2 = sigma0 + maj;
          h = g;
          g = f;
          f = e;
          e = d + t1 | 0;
          d = c;
          c = b;
          b = a;
          a = t1 + t2 | 0;
        }
        H[0] = H[0] + a | 0;
        H[1] = H[1] + b | 0;
        H[2] = H[2] + c | 0;
        H[3] = H[3] + d | 0;
        H[4] = H[4] + e | 0;
        H[5] = H[5] + f | 0;
        H[6] = H[6] + g | 0;
        H[7] = H[7] + h | 0;
      }, _doFinalize:function() {
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;
        dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
        dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
        data.sigBytes = dataWords.length * 4;
        this._process();
        return this._hash;
      }, clone:function() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }});
      C.SHA256 = Hasher._createHelper(SHA256);
      C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
    })(Math);
    return CryptoJS.SHA256;
  });
}, {"./core":53}], 80:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./x64-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function(Math) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var Hasher = C_lib.Hasher;
      var C_x64 = C.x64;
      var X64Word = C_x64.Word;
      var C_algo = C.algo;
      var RHO_OFFSETS = [];
      var PI_INDEXES = [];
      var ROUND_CONSTANTS = [];
      (function() {
        var x = 1, y = 0;
        for (var t = 0; t < 24; t++) {
          RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
          var newX = y % 5;
          var newY = (2 * x + 3 * y) % 5;
          x = newX;
          y = newY;
        }
        for (var x = 0; x < 5; x++) {
          for (var y = 0; y < 5; y++) {
            PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
          }
        }
        var LFSR = 1;
        for (var i = 0; i < 24; i++) {
          var roundConstantMsw = 0;
          var roundConstantLsw = 0;
          for (var j = 0; j < 7; j++) {
            if (LFSR & 1) {
              var bitPosition = (1 << j) - 1;
              if (bitPosition < 32) {
                roundConstantLsw ^= 1 << bitPosition;
              } else {
                roundConstantMsw ^= 1 << bitPosition - 32;
              }
            }
            if (LFSR & 128) {
              LFSR = LFSR << 1 ^ 113;
            } else {
              LFSR <<= 1;
            }
          }
          ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
        }
      })();
      var T = [];
      (function() {
        for (var i = 0; i < 25; i++) {
          T[i] = X64Word.create();
        }
      })();
      var SHA3 = C_algo.SHA3 = Hasher.extend({cfg:Hasher.cfg.extend({outputLength:512}), _doReset:function() {
        var state = this._state = [];
        for (var i = 0; i < 25; i++) {
          state[i] = new X64Word.init;
        }
        this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
      }, _doProcessBlock:function(M, offset) {
        var state = this._state;
        var nBlockSizeLanes = this.blockSize / 2;
        for (var i = 0; i < nBlockSizeLanes; i++) {
          var M2i = M[offset + 2 * i];
          var M2i1 = M[offset + 2 * i + 1];
          M2i = (M2i << 8 | M2i >>> 24) & 16711935 | (M2i << 24 | M2i >>> 8) & 4278255360;
          M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 16711935 | (M2i1 << 24 | M2i1 >>> 8) & 4278255360;
          var lane = state[i];
          lane.high ^= M2i1;
          lane.low ^= M2i;
        }
        for (var round = 0; round < 24; round++) {
          for (var x = 0; x < 5; x++) {
            var tMsw = 0, tLsw = 0;
            for (var y = 0; y < 5; y++) {
              var lane = state[x + 5 * y];
              tMsw ^= lane.high;
              tLsw ^= lane.low;
            }
            var Tx = T[x];
            Tx.high = tMsw;
            Tx.low = tLsw;
          }
          for (var x = 0; x < 5; x++) {
            var Tx4 = T[(x + 4) % 5];
            var Tx1 = T[(x + 1) % 5];
            var Tx1Msw = Tx1.high;
            var Tx1Lsw = Tx1.low;
            var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
            var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
            for (var y = 0; y < 5; y++) {
              var lane = state[x + 5 * y];
              lane.high ^= tMsw;
              lane.low ^= tLsw;
            }
          }
          for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
            var lane = state[laneIndex];
            var laneMsw = lane.high;
            var laneLsw = lane.low;
            var rhoOffset = RHO_OFFSETS[laneIndex];
            if (rhoOffset < 32) {
              var tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
              var tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
            } else {
              var tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
              var tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
            }
            var TPiLane = T[PI_INDEXES[laneIndex]];
            TPiLane.high = tMsw;
            TPiLane.low = tLsw;
          }
          var T0 = T[0];
          var state0 = state[0];
          T0.high = state0.high;
          T0.low = state0.low;
          for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 5; y++) {
              var laneIndex = x + 5 * y;
              var lane = state[laneIndex];
              var TLane = T[laneIndex];
              var Tx1Lane = T[(x + 1) % 5 + 5 * y];
              var Tx2Lane = T[(x + 2) % 5 + 5 * y];
              lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
              lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
            }
          }
          var lane = state[0];
          var roundConstant = ROUND_CONSTANTS[round];
          lane.high ^= roundConstant.high;
          lane.low ^= roundConstant.low;
        }
      }, _doFinalize:function() {
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;
        var blockSizeBits = this.blockSize * 32;
        dataWords[nBitsLeft >>> 5] |= 1 << 24 - nBitsLeft % 32;
        dataWords[(Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 128;
        data.sigBytes = dataWords.length * 4;
        this._process();
        var state = this._state;
        var outputLengthBytes = this.cfg.outputLength / 8;
        var outputLengthLanes = outputLengthBytes / 8;
        var hashWords = [];
        for (var i = 0; i < outputLengthLanes; i++) {
          var lane = state[i];
          var laneMsw = lane.high;
          var laneLsw = lane.low;
          laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 16711935 | (laneMsw << 24 | laneMsw >>> 8) & 4278255360;
          laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 16711935 | (laneLsw << 24 | laneLsw >>> 8) & 4278255360;
          hashWords.push(laneLsw);
          hashWords.push(laneMsw);
        }
        return new WordArray.init(hashWords, outputLengthBytes);
      }, clone:function() {
        var clone = Hasher.clone.call(this);
        var state = clone._state = this._state.slice(0);
        for (var i = 0; i < 25; i++) {
          state[i] = state[i].clone();
        }
        return clone;
      }});
      C.SHA3 = Hasher._createHelper(SHA3);
      C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
    })(Math);
    return CryptoJS.SHA3;
  });
}, {"./core":53, "./x64-core":84}], 81:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./x64-core"), require("./sha512"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core", "./sha512"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_x64 = C.x64;
      var X64Word = C_x64.Word;
      var X64WordArray = C_x64.WordArray;
      var C_algo = C.algo;
      var SHA512 = C_algo.SHA512;
      var SHA384 = C_algo.SHA384 = SHA512.extend({_doReset:function() {
        this._hash = new X64WordArray.init([new X64Word.init(3418070365, 3238371032), new X64Word.init(1654270250, 914150663), new X64Word.init(2438529370, 812702999), new X64Word.init(355462360, 4144912697), new X64Word.init(1731405415, 4290775857), new X64Word.init(2394180231, 1750603025), new X64Word.init(3675008525, 1694076839), new X64Word.init(1203062813, 3204075428)]);
      }, _doFinalize:function() {
        var hash = SHA512._doFinalize.call(this);
        hash.sigBytes -= 16;
        return hash;
      }});
      C.SHA384 = SHA512._createHelper(SHA384);
      C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
    })();
    return CryptoJS.SHA384;
  });
}, {"./core":53, "./sha512":82, "./x64-core":84}], 82:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./x64-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Hasher = C_lib.Hasher;
      var C_x64 = C.x64;
      var X64Word = C_x64.Word;
      var X64WordArray = C_x64.WordArray;
      var C_algo = C.algo;
      function X64Word_create() {
        return X64Word.create.apply(X64Word, arguments);
      }
      var K = [X64Word_create(1116352408, 3609767458), X64Word_create(1899447441, 602891725), X64Word_create(3049323471, 3964484399), X64Word_create(3921009573, 2173295548), X64Word_create(961987163, 4081628472), X64Word_create(1508970993, 3053834265), X64Word_create(2453635748, 2937671579), X64Word_create(2870763221, 3664609560), X64Word_create(3624381080, 2734883394), X64Word_create(310598401, 1164996542), X64Word_create(607225278, 1323610764), X64Word_create(1426881987, 3590304994), X64Word_create(1925078388, 
      4068182383), X64Word_create(2162078206, 991336113), X64Word_create(2614888103, 633803317), X64Word_create(3248222580, 3479774868), X64Word_create(3835390401, 2666613458), X64Word_create(4022224774, 944711139), X64Word_create(264347078, 2341262773), X64Word_create(604807628, 2007800933), X64Word_create(770255983, 1495990901), X64Word_create(1249150122, 1856431235), X64Word_create(1555081692, 3175218132), X64Word_create(1996064986, 2198950837), X64Word_create(2554220882, 3999719339), X64Word_create(2821834349, 
      766784016), X64Word_create(2952996808, 2566594879), X64Word_create(3210313671, 3203337956), X64Word_create(3336571891, 1034457026), X64Word_create(3584528711, 2466948901), X64Word_create(113926993, 3758326383), X64Word_create(338241895, 168717936), X64Word_create(666307205, 1188179964), X64Word_create(773529912, 1546045734), X64Word_create(1294757372, 1522805485), X64Word_create(1396182291, 2643833823), X64Word_create(1695183700, 2343527390), X64Word_create(1986661051, 1014477480), X64Word_create(2177026350, 
      1206759142), X64Word_create(2456956037, 344077627), X64Word_create(2730485921, 1290863460), X64Word_create(2820302411, 3158454273), X64Word_create(3259730800, 3505952657), X64Word_create(3345764771, 106217008), X64Word_create(3516065817, 3606008344), X64Word_create(3600352804, 1432725776), X64Word_create(4094571909, 1467031594), X64Word_create(275423344, 851169720), X64Word_create(430227734, 3100823752), X64Word_create(506948616, 1363258195), X64Word_create(659060556, 3750685593), X64Word_create(883997877, 
      3785050280), X64Word_create(958139571, 3318307427), X64Word_create(1322822218, 3812723403), X64Word_create(1537002063, 2003034995), X64Word_create(1747873779, 3602036899), X64Word_create(1955562222, 1575990012), X64Word_create(2024104815, 1125592928), X64Word_create(2227730452, 2716904306), X64Word_create(2361852424, 442776044), X64Word_create(2428436474, 593698344), X64Word_create(2756734187, 3733110249), X64Word_create(3204031479, 2999351573), X64Word_create(3329325298, 3815920427), X64Word_create(3391569614, 
      3928383900), X64Word_create(3515267271, 566280711), X64Word_create(3940187606, 3454069534), X64Word_create(4118630271, 4000239992), X64Word_create(116418474, 1914138554), X64Word_create(174292421, 2731055270), X64Word_create(289380356, 3203993006), X64Word_create(460393269, 320620315), X64Word_create(685471733, 587496836), X64Word_create(852142971, 1086792851), X64Word_create(1017036298, 365543100), X64Word_create(1126000580, 2618297676), X64Word_create(1288033470, 3409855158), X64Word_create(1501505948, 
      4234509866), X64Word_create(1607167915, 987167468), X64Word_create(1816402316, 1246189591)];
      var W = [];
      (function() {
        for (var i = 0; i < 80; i++) {
          W[i] = X64Word_create();
        }
      })();
      var SHA512 = C_algo.SHA512 = Hasher.extend({_doReset:function() {
        this._hash = new X64WordArray.init([new X64Word.init(1779033703, 4089235720), new X64Word.init(3144134277, 2227873595), new X64Word.init(1013904242, 4271175723), new X64Word.init(2773480762, 1595750129), new X64Word.init(1359893119, 2917565137), new X64Word.init(2600822924, 725511199), new X64Word.init(528734635, 4215389547), new X64Word.init(1541459225, 327033209)]);
      }, _doProcessBlock:function(M, offset) {
        var H = this._hash.words;
        var H0 = H[0];
        var H1 = H[1];
        var H2 = H[2];
        var H3 = H[3];
        var H4 = H[4];
        var H5 = H[5];
        var H6 = H[6];
        var H7 = H[7];
        var H0h = H0.high;
        var H0l = H0.low;
        var H1h = H1.high;
        var H1l = H1.low;
        var H2h = H2.high;
        var H2l = H2.low;
        var H3h = H3.high;
        var H3l = H3.low;
        var H4h = H4.high;
        var H4l = H4.low;
        var H5h = H5.high;
        var H5l = H5.low;
        var H6h = H6.high;
        var H6l = H6.low;
        var H7h = H7.high;
        var H7l = H7.low;
        var ah = H0h;
        var al = H0l;
        var bh = H1h;
        var bl = H1l;
        var ch = H2h;
        var cl = H2l;
        var dh = H3h;
        var dl = H3l;
        var eh = H4h;
        var el = H4l;
        var fh = H5h;
        var fl = H5l;
        var gh = H6h;
        var gl = H6l;
        var hh = H7h;
        var hl = H7l;
        for (var i = 0; i < 80; i++) {
          var Wi = W[i];
          if (i < 16) {
            var Wih = Wi.high = M[offset + i * 2] | 0;
            var Wil = Wi.low = M[offset + i * 2 + 1] | 0;
          } else {
            var gamma0x = W[i - 15];
            var gamma0xh = gamma0x.high;
            var gamma0xl = gamma0x.low;
            var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
            var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
            var gamma1x = W[i - 2];
            var gamma1xh = gamma1x.high;
            var gamma1xl = gamma1x.low;
            var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
            var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
            var Wi7 = W[i - 7];
            var Wi7h = Wi7.high;
            var Wi7l = Wi7.low;
            var Wi16 = W[i - 16];
            var Wi16h = Wi16.high;
            var Wi16l = Wi16.low;
            var Wil = gamma0l + Wi7l;
            var Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
            var Wil = Wil + gamma1l;
            var Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
            var Wil = Wil + Wi16l;
            var Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
            Wi.high = Wih;
            Wi.low = Wil;
          }
          var chh = eh & fh ^ ~eh & gh;
          var chl = el & fl ^ ~el & gl;
          var majh = ah & bh ^ ah & ch ^ bh & ch;
          var majl = al & bl ^ al & cl ^ bl & cl;
          var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
          var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
          var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
          var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
          var Ki = K[i];
          var Kih = Ki.high;
          var Kil = Ki.low;
          var t1l = hl + sigma1l;
          var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
          var t1l = t1l + chl;
          var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
          var t1l = t1l + Kil;
          var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
          var t1l = t1l + Wil;
          var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
          var t2l = sigma0l + majl;
          var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
          hh = gh;
          hl = gl;
          gh = fh;
          gl = fl;
          fh = eh;
          fl = el;
          el = dl + t1l | 0;
          eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
          dh = ch;
          dl = cl;
          ch = bh;
          cl = bl;
          bh = ah;
          bl = al;
          al = t1l + t2l | 0;
          ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
        }
        H0l = H0.low = H0l + al;
        H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
        H1l = H1.low = H1l + bl;
        H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
        H2l = H2.low = H2l + cl;
        H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
        H3l = H3.low = H3l + dl;
        H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
        H4l = H4.low = H4l + el;
        H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
        H5l = H5.low = H5l + fl;
        H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
        H6l = H6.low = H6l + gl;
        H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
        H7l = H7.low = H7l + hl;
        H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
      }, _doFinalize:function() {
        var data = this._data;
        var dataWords = data.words;
        var nBitsTotal = this._nDataBytes * 8;
        var nBitsLeft = data.sigBytes * 8;
        dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
        dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 4294967296);
        dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
        data.sigBytes = dataWords.length * 4;
        this._process();
        var hash = this._hash.toX32();
        return hash;
      }, clone:function() {
        var clone = Hasher.clone.call(this);
        clone._hash = this._hash.clone();
        return clone;
      }, blockSize:1024 / 32});
      C.SHA512 = Hasher._createHelper(SHA512);
      C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
    })();
    return CryptoJS.SHA512;
  });
}, {"./core":53, "./x64-core":84}], 83:[function(require, module, exports) {
  (function(root, factory, undef) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"), require("./enc-base64"), require("./md5"), require("./evpkdf"), require("./cipher-core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function() {
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var BlockCipher = C_lib.BlockCipher;
      var C_algo = C.algo;
      var PC1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4];
      var PC2 = [14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32];
      var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
      var SBOX_P = [{0:8421888, 268435456:32768, 536870912:8421378, 805306368:2, 1073741824:512, 1342177280:8421890, 1610612736:8389122, 1879048192:8388608, 2147483648:514, 2415919104:8389120, 2684354560:33280, 2952790016:8421376, 3221225472:32770, 3489660928:8388610, 3758096384:0, 4026531840:33282, 134217728:0, 402653184:8421890, 671088640:33282, 939524096:32768, 1207959552:8421888, 1476395008:512, 1744830464:8421378, 2013265920:2, 2281701376:8389120, 2550136832:33280, 2818572288:8421376, 3087007744:8389122, 
      3355443200:8388610, 3623878656:32770, 3892314112:514, 4160749568:8388608, 1:32768, 268435457:2, 536870913:8421888, 805306369:8388608, 1073741825:8421378, 1342177281:33280, 1610612737:512, 1879048193:8389122, 2147483649:8421890, 2415919105:8421376, 2684354561:8388610, 2952790017:33282, 3221225473:514, 3489660929:8389120, 3758096385:32770, 4026531841:0, 134217729:8421890, 402653185:8421376, 671088641:8388608, 939524097:512, 1207959553:32768, 1476395009:8388610, 1744830465:2, 2013265921:33282, 
      2281701377:32770, 2550136833:8389122, 2818572289:514, 3087007745:8421888, 3355443201:8389120, 3623878657:0, 3892314113:33280, 4160749569:8421378}, {0:1074282512, 16777216:16384, 33554432:524288, 50331648:1074266128, 67108864:1073741840, 83886080:1074282496, 100663296:1073758208, 117440512:16, 134217728:540672, 150994944:1073758224, 167772160:1073741824, 184549376:540688, 201326592:524304, 218103808:0, 234881024:16400, 251658240:1074266112, 8388608:1073758208, 25165824:540688, 41943040:16, 58720256:1073758224, 
      75497472:1074282512, 92274688:1073741824, 109051904:524288, 125829120:1074266128, 142606336:524304, 159383552:0, 176160768:16384, 192937984:1074266112, 209715200:1073741840, 226492416:540672, 243269632:1074282496, 260046848:16400, 268435456:0, 285212672:1074266128, 301989888:1073758224, 318767104:1074282496, 335544320:1074266112, 352321536:16, 369098752:540688, 385875968:16384, 402653184:16400, 419430400:524288, 436207616:524304, 452984832:1073741840, 469762048:540672, 486539264:1073758208, 
      503316480:1073741824, 520093696:1074282512, 276824064:540688, 293601280:524288, 310378496:1074266112, 327155712:16384, 343932928:1073758208, 360710144:1074282512, 377487360:16, 394264576:1073741824, 411041792:1074282496, 427819008:1073741840, 444596224:1073758224, 461373440:524304, 478150656:0, 494927872:16400, 511705088:1074266128, 528482304:540672}, {0:260, 1048576:0, 2097152:67109120, 3145728:65796, 4194304:65540, 5242880:67108868, 6291456:67174660, 7340032:67174400, 8388608:67108864, 9437184:67174656, 
      10485760:65792, 11534336:67174404, 12582912:67109124, 13631488:65536, 14680064:4, 15728640:256, 524288:67174656, 1572864:67174404, 2621440:0, 3670016:67109120, 4718592:67108868, 5767168:65536, 6815744:65540, 7864320:260, 8912896:4, 9961472:256, 11010048:67174400, 12058624:65796, 13107200:65792, 14155776:67109124, 15204352:67174660, 16252928:67108864, 16777216:67174656, 17825792:65540, 18874368:65536, 19922944:67109120, 20971520:256, 22020096:67174660, 23068672:67108868, 24117248:0, 25165824:67109124, 
      26214400:67108864, 27262976:4, 28311552:65792, 29360128:67174400, 30408704:260, 31457280:65796, 32505856:67174404, 17301504:67108864, 18350080:260, 19398656:67174656, 20447232:0, 21495808:65540, 22544384:67109120, 23592960:256, 24641536:67174404, 25690112:65536, 26738688:67174660, 27787264:65796, 28835840:67108868, 29884416:67109124, 30932992:67174400, 31981568:4, 33030144:65792}, {0:2151682048, 65536:2147487808, 131072:4198464, 196608:2151677952, 262144:0, 327680:4198400, 393216:2147483712, 
      458752:4194368, 524288:2147483648, 589824:4194304, 655360:64, 720896:2147487744, 786432:2151678016, 851968:4160, 917504:4096, 983040:2151682112, 32768:2147487808, 98304:64, 163840:2151678016, 229376:2147487744, 294912:4198400, 360448:2151682112, 425984:0, 491520:2151677952, 557056:4096, 622592:2151682048, 688128:4194304, 753664:4160, 819200:2147483648, 884736:4194368, 950272:4198464, 1015808:2147483712, 1048576:4194368, 1114112:4198400, 1179648:2147483712, 1245184:0, 1310720:4160, 1376256:2151678016, 
      1441792:2151682048, 1507328:2147487808, 1572864:2151682112, 1638400:2147483648, 1703936:2151677952, 1769472:4198464, 1835008:2147487744, 1900544:4194304, 1966080:64, 2031616:4096, 1081344:2151677952, 1146880:2151682112, 1212416:0, 1277952:4198400, 1343488:4194368, 1409024:2147483648, 1474560:2147487808, 1540096:64, 1605632:2147483712, 1671168:4096, 1736704:2147487744, 1802240:2151678016, 1867776:4160, 1933312:2151682048, 1998848:4194304, 2064384:4198464}, {0:128, 4096:17039360, 8192:262144, 
      12288:536870912, 16384:537133184, 20480:16777344, 24576:553648256, 28672:262272, 32768:16777216, 36864:537133056, 40960:536871040, 45056:553910400, 49152:553910272, 53248:0, 57344:17039488, 61440:553648128, 2048:17039488, 6144:553648256, 10240:128, 14336:17039360, 18432:262144, 22528:537133184, 26624:553910272, 30720:536870912, 34816:537133056, 38912:0, 43008:553910400, 47104:16777344, 51200:536871040, 55296:553648128, 59392:16777216, 63488:262272, 65536:262144, 69632:128, 73728:536870912, 
      77824:553648256, 81920:16777344, 86016:553910272, 90112:537133184, 94208:16777216, 98304:553910400, 102400:553648128, 106496:17039360, 110592:537133056, 114688:262272, 118784:536871040, 122880:0, 126976:17039488, 67584:553648256, 71680:16777216, 75776:17039360, 79872:537133184, 83968:536870912, 88064:17039488, 92160:128, 96256:553910272, 100352:262272, 104448:553910400, 108544:0, 112640:553648128, 116736:16777344, 120832:262144, 124928:537133056, 129024:536871040}, {0:268435464, 256:8192, 512:270532608, 
      768:270540808, 1024:268443648, 1280:2097152, 1536:2097160, 1792:268435456, 2048:0, 2304:268443656, 2560:2105344, 2816:8, 3072:270532616, 3328:2105352, 3584:8200, 3840:270540800, 128:270532608, 384:270540808, 640:8, 896:2097152, 1152:2105352, 1408:268435464, 1664:268443648, 1920:8200, 2176:2097160, 2432:8192, 2688:268443656, 2944:270532616, 3200:0, 3456:270540800, 3712:2105344, 3968:268435456, 4096:268443648, 4352:270532616, 4608:270540808, 4864:8200, 5120:2097152, 5376:268435456, 5632:268435464, 
      5888:2105344, 6144:2105352, 6400:0, 6656:8, 6912:270532608, 7168:8192, 7424:268443656, 7680:270540800, 7936:2097160, 4224:8, 4480:2105344, 4736:2097152, 4992:268435464, 5248:268443648, 5504:8200, 5760:270540808, 6016:270532608, 6272:270540800, 6528:270532616, 6784:8192, 7040:2105352, 7296:2097160, 7552:0, 7808:268435456, 8064:268443656}, {0:1048576, 16:33555457, 32:1024, 48:1049601, 64:34604033, 80:0, 96:1, 112:34603009, 128:33555456, 144:1048577, 160:33554433, 176:34604032, 192:34603008, 208:1025, 
      224:1049600, 240:33554432, 8:34603009, 24:0, 40:33555457, 56:34604032, 72:1048576, 88:33554433, 104:33554432, 120:1025, 136:1049601, 152:33555456, 168:34603008, 184:1048577, 200:1024, 216:34604033, 232:1, 248:1049600, 256:33554432, 272:1048576, 288:33555457, 304:34603009, 320:1048577, 336:33555456, 352:34604032, 368:1049601, 384:1025, 400:34604033, 416:1049600, 432:1, 448:0, 464:34603008, 480:33554433, 496:1024, 264:1049600, 280:33555457, 296:34603009, 312:1, 328:33554432, 344:1048576, 360:1025, 
      376:34604032, 392:33554433, 408:34603008, 424:0, 440:34604033, 456:1049601, 472:1024, 488:33555456, 504:1048577}, {0:134219808, 1:131072, 2:134217728, 3:32, 4:131104, 5:134350880, 6:134350848, 7:2048, 8:134348800, 9:134219776, 10:133120, 11:134348832, 12:2080, 13:0, 14:134217760, 15:133152, 2147483648:2048, 2147483649:134350880, 2147483650:134219808, 2147483651:134217728, 2147483652:134348800, 2147483653:133120, 2147483654:133152, 2147483655:32, 2147483656:134217760, 2147483657:2080, 2147483658:131104, 
      2147483659:134350848, 2147483660:0, 2147483661:134348832, 2147483662:134219776, 2147483663:131072, 16:133152, 17:134350848, 18:32, 19:2048, 20:134219776, 21:134217760, 22:134348832, 23:131072, 24:0, 25:131104, 26:134348800, 27:134219808, 28:134350880, 29:133120, 30:2080, 31:134217728, 2147483664:131072, 2147483665:2048, 2147483666:134348832, 2147483667:133152, 2147483668:32, 2147483669:134348800, 2147483670:134217728, 2147483671:134219808, 2147483672:134350880, 2147483673:134217760, 2147483674:134219776, 
      2147483675:0, 2147483676:133120, 2147483677:2080, 2147483678:131104, 2147483679:134350848}];
      var SBOX_MASK = [4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504, 2147483679];
      var DES = C_algo.DES = BlockCipher.extend({_doReset:function() {
        var key = this._key;
        var keyWords = key.words;
        var keyBits = [];
        for (var i = 0; i < 56; i++) {
          var keyBitPos = PC1[i] - 1;
          keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
        }
        var subKeys = this._subKeys = [];
        for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
          var subKey = subKeys[nSubKey] = [];
          var bitShift = BIT_SHIFTS[nSubKey];
          for (var i = 0; i < 24; i++) {
            subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;
            subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
          }
          subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
          for (var i = 1; i < 7; i++) {
            subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
          }
          subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
        }
        var invSubKeys = this._invSubKeys = [];
        for (var i = 0; i < 16; i++) {
          invSubKeys[i] = subKeys[15 - i];
        }
      }, encryptBlock:function(M, offset) {
        this._doCryptBlock(M, offset, this._subKeys);
      }, decryptBlock:function(M, offset) {
        this._doCryptBlock(M, offset, this._invSubKeys);
      }, _doCryptBlock:function(M, offset, subKeys) {
        this._lBlock = M[offset];
        this._rBlock = M[offset + 1];
        exchangeLR.call(this, 4, 252645135);
        exchangeLR.call(this, 16, 65535);
        exchangeRL.call(this, 2, 858993459);
        exchangeRL.call(this, 8, 16711935);
        exchangeLR.call(this, 1, 1431655765);
        for (var round = 0; round < 16; round++) {
          var subKey = subKeys[round];
          var lBlock = this._lBlock;
          var rBlock = this._rBlock;
          var f = 0;
          for (var i = 0; i < 8; i++) {
            f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
          }
          this._lBlock = rBlock;
          this._rBlock = lBlock ^ f;
        }
        var t = this._lBlock;
        this._lBlock = this._rBlock;
        this._rBlock = t;
        exchangeLR.call(this, 1, 1431655765);
        exchangeRL.call(this, 8, 16711935);
        exchangeRL.call(this, 2, 858993459);
        exchangeLR.call(this, 16, 65535);
        exchangeLR.call(this, 4, 252645135);
        M[offset] = this._lBlock;
        M[offset + 1] = this._rBlock;
      }, keySize:64 / 32, ivSize:64 / 32, blockSize:64 / 32});
      function exchangeLR(offset, mask) {
        var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
        this._rBlock ^= t;
        this._lBlock ^= t << offset;
      }
      function exchangeRL(offset, mask) {
        var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
        this._lBlock ^= t;
        this._rBlock ^= t << offset;
      }
      C.DES = BlockCipher._createHelper(DES);
      var TripleDES = C_algo.TripleDES = BlockCipher.extend({_doReset:function() {
        var key = this._key;
        var keyWords = key.words;
        this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
        this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
        this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
      }, encryptBlock:function(M, offset) {
        this._des1.encryptBlock(M, offset);
        this._des2.decryptBlock(M, offset);
        this._des3.encryptBlock(M, offset);
      }, decryptBlock:function(M, offset) {
        this._des3.decryptBlock(M, offset);
        this._des2.encryptBlock(M, offset);
        this._des1.decryptBlock(M, offset);
      }, keySize:192 / 32, ivSize:64 / 32, blockSize:64 / 32});
      C.TripleDES = BlockCipher._createHelper(TripleDES);
    })();
    return CryptoJS.TripleDES;
  });
}, {"./cipher-core":52, "./core":53, "./enc-base64":54, "./evpkdf":56, "./md5":61}], 84:[function(require, module, exports) {
  (function(root, factory) {
    if (typeof exports === "object") {
      module.exports = exports = factory(require("./core"));
    } else {
      if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    }
  })(this, function(CryptoJS) {
    (function(undefined) {
      var C = CryptoJS;
      var C_lib = C.lib;
      var Base = C_lib.Base;
      var X32WordArray = C_lib.WordArray;
      var C_x64 = C.x64 = {};
      var X64Word = C_x64.Word = Base.extend({init:function(high, low) {
        this.high = high;
        this.low = low;
      }});
      var X64WordArray = C_x64.WordArray = Base.extend({init:function(words, sigBytes) {
        words = this.words = words || [];
        if (sigBytes != undefined) {
          this.sigBytes = sigBytes;
        } else {
          this.sigBytes = words.length * 8;
        }
      }, toX32:function() {
        var x64Words = this.words;
        var x64WordsLength = x64Words.length;
        var x32Words = [];
        for (var i = 0; i < x64WordsLength; i++) {
          var x64Word = x64Words[i];
          x32Words.push(x64Word.high);
          x32Words.push(x64Word.low);
        }
        return X32WordArray.create(x32Words, this.sigBytes);
      }, clone:function() {
        var clone = Base.clone.call(this);
        var words = clone.words = this.words.slice(0);
        var wordsLength = words.length;
        for (var i = 0; i < wordsLength; i++) {
          words[i] = words[i].clone();
        }
        return clone;
      }});
    })();
    return CryptoJS;
  });
}, {"./core":53}], 85:[function(require, module, exports) {
  (function(root) {
    var freeExports = typeof exports == "object" && exports;
    var freeModule = typeof module == "object" && module && module.exports == freeExports && module;
    var freeGlobal = typeof global == "object" && global;
    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
      root = freeGlobal;
    }
    var stringFromCharCode = String.fromCharCode;
    function ucs2decode(string) {
      var output = [];
      var counter = 0;
      var length = string.length;
      var value;
      var extra;
      while (counter < length) {
        value = string.charCodeAt(counter++);
        if (value >= 55296 && value <= 56319 && counter < length) {
          extra = string.charCodeAt(counter++);
          if ((extra & 64512) == 56320) {
            output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
          } else {
            output.push(value);
            counter--;
          }
        } else {
          output.push(value);
        }
      }
      return output;
    }
    function ucs2encode(array) {
      var length = array.length;
      var index = -1;
      var value;
      var output = "";
      while (++index < length) {
        value = array[index];
        if (value > 65535) {
          value -= 65536;
          output += stringFromCharCode(value >>> 10 & 1023 | 55296);
          value = 56320 | value & 1023;
        }
        output += stringFromCharCode(value);
      }
      return output;
    }
    function checkScalarValue(codePoint) {
      if (codePoint >= 55296 && codePoint <= 57343) {
        throw Error("Lone surrogate U+" + codePoint.toString(16).toUpperCase() + " is not a scalar value");
      }
    }
    function createByte(codePoint, shift) {
      return stringFromCharCode(codePoint >> shift & 63 | 128);
    }
    function encodeCodePoint(codePoint) {
      if ((codePoint & 4294967168) == 0) {
        return stringFromCharCode(codePoint);
      }
      var symbol = "";
      if ((codePoint & 4294965248) == 0) {
        symbol = stringFromCharCode(codePoint >> 6 & 31 | 192);
      } else {
        if ((codePoint & 4294901760) == 0) {
          checkScalarValue(codePoint);
          symbol = stringFromCharCode(codePoint >> 12 & 15 | 224);
          symbol += createByte(codePoint, 6);
        } else {
          if ((codePoint & 4292870144) == 0) {
            symbol = stringFromCharCode(codePoint >> 18 & 7 | 240);
            symbol += createByte(codePoint, 12);
            symbol += createByte(codePoint, 6);
          }
        }
      }
      symbol += stringFromCharCode(codePoint & 63 | 128);
      return symbol;
    }
    function utf8encode(string) {
      var codePoints = ucs2decode(string);
      var length = codePoints.length;
      var index = -1;
      var codePoint;
      var byteString = "";
      while (++index < length) {
        codePoint = codePoints[index];
        byteString += encodeCodePoint(codePoint);
      }
      return byteString;
    }
    function readContinuationByte() {
      if (byteIndex >= byteCount) {
        throw Error("Invalid byte index");
      }
      var continuationByte = byteArray[byteIndex] & 255;
      byteIndex++;
      if ((continuationByte & 192) == 128) {
        return continuationByte & 63;
      }
      throw Error("Invalid continuation byte");
    }
    function decodeSymbol() {
      var byte1;
      var byte2;
      var byte3;
      var byte4;
      var codePoint;
      if (byteIndex > byteCount) {
        throw Error("Invalid byte index");
      }
      if (byteIndex == byteCount) {
        return false;
      }
      byte1 = byteArray[byteIndex] & 255;
      byteIndex++;
      if ((byte1 & 128) == 0) {
        return byte1;
      }
      if ((byte1 & 224) == 192) {
        byte2 = readContinuationByte();
        codePoint = (byte1 & 31) << 6 | byte2;
        if (codePoint >= 128) {
          return codePoint;
        } else {
          throw Error("Invalid continuation byte");
        }
      }
      if ((byte1 & 240) == 224) {
        byte2 = readContinuationByte();
        byte3 = readContinuationByte();
        codePoint = (byte1 & 15) << 12 | byte2 << 6 | byte3;
        if (codePoint >= 2048) {
          checkScalarValue(codePoint);
          return codePoint;
        } else {
          throw Error("Invalid continuation byte");
        }
      }
      if ((byte1 & 248) == 240) {
        byte2 = readContinuationByte();
        byte3 = readContinuationByte();
        byte4 = readContinuationByte();
        codePoint = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
        if (codePoint >= 65536 && codePoint <= 1114111) {
          return codePoint;
        }
      }
      throw Error("Invalid UTF-8 detected");
    }
    var byteArray;
    var byteCount;
    var byteIndex;
    function utf8decode(byteString) {
      byteArray = ucs2decode(byteString);
      byteCount = byteArray.length;
      byteIndex = 0;
      var codePoints = [];
      var tmp;
      while ((tmp = decodeSymbol()) !== false) {
        codePoints.push(tmp);
      }
      return ucs2encode(codePoints);
    }
    var utf8 = {"version":"2.1.2", "encode":utf8encode, "decode":utf8decode};
    if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
      define(function() {
        return utf8;
      });
    } else {
      if (freeExports && !freeExports.nodeType) {
        if (freeModule) {
          freeModule.exports = utf8;
        } else {
          var object = {};
          var hasOwnProperty = object.hasOwnProperty;
          for (var key in utf8) {
            hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
          }
        }
      } else {
        root.utf8 = utf8;
      }
    }
  })(this);
}, {}], 86:[function(require, module, exports) {
  module.exports = XMLHttpRequest;
}, {}], "bignumber.js":[function(require, module, exports) {
  module.exports = BigNumber;
}, {}], "web3":[function(require, module, exports) {
  var Web3 = require("./lib/web3");
  if (typeof window !== "undefined" && typeof window.Web3 === "undefined") {
    window.Web3 = Web3;
  }
  module.exports = Web3;
}, {"./lib/web3":22}]}, {}, ["web3"]);