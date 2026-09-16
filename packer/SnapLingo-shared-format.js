(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-serialization-kotlinx-serialization-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'SnapLingo-shared-format'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'SnapLingo-shared-format'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'SnapLingo-shared-format'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'SnapLingo-shared-format'.");
    }
    globalThis['SnapLingo-shared-format'] = factory(typeof globalThis['SnapLingo-shared-format'] === 'undefined' ? {} : globalThis['SnapLingo-shared-format'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-serialization-kotlinx-serialization-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.u4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j4;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var Unit_instance = kotlin_kotlin.$_$.c;
  var Long = kotlin_kotlin.$_$.g6;
  var equalsLong = kotlin_kotlin.$_$.k3;
  var THROW_CCE = kotlin_kotlin.$_$.h6;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var initMetadataForObject = kotlin_kotlin.$_$.n4;
  var VOID = kotlin_kotlin.$_$.a;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var objectCreate = kotlin_kotlin.$_$.t4;
  var getStringHashCode = kotlin_kotlin.$_$.g4;
  var initMetadataForClass = kotlin_kotlin.$_$.i4;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var getBooleanHashCode = kotlin_kotlin.$_$.e4;
  var charCodeAt = kotlin_kotlin.$_$.z3;
  var toString = kotlin_kotlin.$_$.d1;
  var listOf = kotlin_kotlin.$_$.n2;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.p;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var joinToString = kotlin_kotlin.$_$.h2;
  var contentEquals = kotlin_kotlin.$_$.s1;
  var contentHashCode = kotlin_kotlin.$_$.t1;
  var toString_0 = kotlin_kotlin.$_$.w4;
  var charSequenceLength = kotlin_kotlin.$_$.b4;
  var encodeToByteArray = kotlin_kotlin.$_$.i5;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a1;
  var startsWith = kotlin_kotlin.$_$.t5;
  var charSequenceGet = kotlin_kotlin.$_$.a4;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.c1;
  var charArrayOf = kotlin_kotlin.$_$.x3;
  var split = kotlin_kotlin.$_$.r5;
  var compare = kotlin_kotlin.$_$.h3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v;
  var shiftRightUnsigned = kotlin_kotlin.$_$.r3;
  var convertToByte = kotlin_kotlin.$_$.i3;
  var getValue = kotlin_kotlin.$_$.e2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.q1;
  var mapCapacity = kotlin_kotlin.$_$.o2;
  var coerceAtLeast = kotlin_kotlin.$_$.y4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var fromInt = kotlin_kotlin.$_$.l3;
  var add = kotlin_kotlin.$_$.e3;
  var Exception = kotlin_kotlin.$_$.e6;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s;
  var captureStack = kotlin_kotlin.$_$.w3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.e1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.f1;
  var shiftLeft = kotlin_kotlin.$_$.q3;
  var bitwiseAnd = kotlin_kotlin.$_$.f3;
  var bitwiseOr = kotlin_kotlin.$_$.g3;
  var equals = kotlin_kotlin.$_$.d4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r;
  var ulongCompare = kotlin_kotlin.$_$.t6;
  var ulongRemainder = kotlin_kotlin.$_$.v6;
  var convertToInt = kotlin_kotlin.$_$.j3;
  var ulongDivide = kotlin_kotlin.$_$.u6;
  var numberToChar = kotlin_kotlin.$_$.s4;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.g1;
  var padStart = kotlin_kotlin.$_$.p5;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.n6;
  var emptyMap = kotlin_kotlin.$_$.a2;
  var hashCode = kotlin_kotlin.$_$.h4;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var emptyList = kotlin_kotlin.$_$.z1;
  var multiply = kotlin_kotlin.$_$.n3;
  var arrayCopy = kotlin_kotlin.$_$.n1;
  var rotateRight = kotlin_kotlin.$_$.q6;
  var toByte = kotlin_kotlin.$_$.v4;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BackupHeader, 'BackupHeader', BackupHeader, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(BackupSettings, 'BackupSettings', BackupSettings, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForObject(BackupPackage, 'BackupPackage');
  initMetadataForClass(Limits, 'Limits', Limits);
  initMetadataForClass(Entry, 'Entry');
  initMetadataForObject(BinaryContainer, 'BinaryContainer');
  initMetadataForClass(ContainerFormatException, 'ContainerFormatException', VOID, Exception);
  initMetadataForObject(CardId, 'CardId');
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(WordSnapEntry, 'WordSnapEntry', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(WordEntry, 'WordEntry', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(WordExampleEntry, 'WordExampleEntry', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(WordExampleTokenEntry, 'WordExampleTokenEntry', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TranslationMetaEntry, 'TranslationMetaEntry', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(WordbookManifest, 'WordbookManifest', WordbookManifest, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForObject(Sha256, 'Sha256');
  //endregion
  function Companion() {
  }
  protoOf(Companion).yk = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.tntstudios.snaplingo.format.BackupHeader', this, 4);
    tmp0_serialDesc.zi('schemaVersion', true);
    tmp0_serialDesc.zi('createdAtEpochMs', true);
    tmp0_serialDesc.zi('appVersion', true);
    tmp0_serialDesc.zi('wordCount', true);
    this.zk_1 = tmp0_serialDesc;
  }
  protoOf($serializer).al = function (encoder, value) {
    var tmp0_desc = this.zk_1;
    var tmp1_output = encoder.re(tmp0_desc);
    if (tmp1_output.vf(tmp0_desc, 0) ? true : !(value.bl_1 === 1)) {
      tmp1_output.mf(tmp0_desc, 0, value.bl_1);
    }
    if (tmp1_output.vf(tmp0_desc, 1) ? true : !equalsLong(value.cl_1, new Long(0, 0))) {
      tmp1_output.nf(tmp0_desc, 1, value.cl_1);
    }
    if (tmp1_output.vf(tmp0_desc, 2) ? true : !(value.dl_1 === '')) {
      tmp1_output.of(tmp0_desc, 2, value.dl_1);
    }
    if (tmp1_output.vf(tmp0_desc, 3) ? true : !(value.el_1 === 0)) {
      tmp1_output.mf(tmp0_desc, 3, value.el_1);
    }
    tmp1_output.se(tmp0_desc);
  };
  protoOf($serializer).id = function (encoder, value) {
    return this.al(encoder, value instanceof BackupHeader ? value : THROW_CCE());
  };
  protoOf($serializer).jd = function (decoder) {
    var tmp0_desc = this.zk_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = new Long(0, 0);
    var tmp6_local2 = null;
    var tmp7_local3 = 0;
    var tmp8_input = decoder.re(tmp0_desc);
    if (tmp8_input.bf()) {
      tmp4_local0 = tmp8_input.ue(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ve(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.we(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ue(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.cf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ue(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ve(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.we(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ue(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.se(tmp0_desc);
    return BackupHeader_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer).hd = function () {
    return this.zk_1;
  };
  protoOf($serializer).bj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), LongSerializer_getInstance(), StringSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function BackupHeader_init_$Init$(seen0, schemaVersion, createdAtEpochMs, appVersion, wordCount, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance().zk_1);
    }
    if (0 === (seen0 & 1))
      $this.bl_1 = 1;
    else
      $this.bl_1 = schemaVersion;
    if (0 === (seen0 & 2))
      $this.cl_1 = new Long(0, 0);
    else
      $this.cl_1 = createdAtEpochMs;
    if (0 === (seen0 & 4))
      $this.dl_1 = '';
    else
      $this.dl_1 = appVersion;
    if (0 === (seen0 & 8))
      $this.el_1 = 0;
    else
      $this.el_1 = wordCount;
    return $this;
  }
  function BackupHeader_init_$Create$(seen0, schemaVersion, createdAtEpochMs, appVersion, wordCount, serializationConstructorMarker) {
    return BackupHeader_init_$Init$(seen0, schemaVersion, createdAtEpochMs, appVersion, wordCount, serializationConstructorMarker, objectCreate(protoOf(BackupHeader)));
  }
  function BackupHeader(schemaVersion, createdAtEpochMs, appVersion, wordCount) {
    schemaVersion = schemaVersion === VOID ? 1 : schemaVersion;
    createdAtEpochMs = createdAtEpochMs === VOID ? new Long(0, 0) : createdAtEpochMs;
    appVersion = appVersion === VOID ? '' : appVersion;
    wordCount = wordCount === VOID ? 0 : wordCount;
    this.bl_1 = schemaVersion;
    this.cl_1 = createdAtEpochMs;
    this.dl_1 = appVersion;
    this.el_1 = wordCount;
  }
  protoOf(BackupHeader).toString = function () {
    return 'BackupHeader(schemaVersion=' + this.bl_1 + ', createdAtEpochMs=' + this.cl_1.toString() + ', appVersion=' + this.dl_1 + ', wordCount=' + this.el_1 + ')';
  };
  protoOf(BackupHeader).hashCode = function () {
    var result = this.bl_1;
    result = imul(result, 31) + this.cl_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.dl_1) | 0;
    result = imul(result, 31) + this.el_1 | 0;
    return result;
  };
  protoOf(BackupHeader).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BackupHeader))
      return false;
    if (!(this.bl_1 === other.bl_1))
      return false;
    if (!equalsLong(this.cl_1, other.cl_1))
      return false;
    if (!(this.dl_1 === other.dl_1))
      return false;
    if (!(this.el_1 === other.el_1))
      return false;
    return true;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).yk = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.tntstudios.snaplingo.format.BackupSettings', this, 5);
    tmp0_serialDesc.zi('targetLanguage', true);
    tmp0_serialDesc.zi('knownLanguage', true);
    tmp0_serialDesc.zi('cameraFlashMode', true);
    tmp0_serialDesc.zi('uiSoundsEnabled', true);
    tmp0_serialDesc.zi('hapticsEnabled', true);
    this.fl_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).gl = function (encoder, value) {
    var tmp0_desc = this.fl_1;
    var tmp1_output = encoder.re(tmp0_desc);
    if (tmp1_output.vf(tmp0_desc, 0) ? true : !(value.hl_1 == null)) {
      tmp1_output.rf(tmp0_desc, 0, StringSerializer_getInstance(), value.hl_1);
    }
    if (tmp1_output.vf(tmp0_desc, 1) ? true : !(value.il_1 == null)) {
      tmp1_output.rf(tmp0_desc, 1, StringSerializer_getInstance(), value.il_1);
    }
    if (tmp1_output.vf(tmp0_desc, 2) ? true : !(value.jl_1 == null)) {
      tmp1_output.rf(tmp0_desc, 2, StringSerializer_getInstance(), value.jl_1);
    }
    if (tmp1_output.vf(tmp0_desc, 3) ? true : !(value.kl_1 == null)) {
      tmp1_output.rf(tmp0_desc, 3, BooleanSerializer_getInstance(), value.kl_1);
    }
    if (tmp1_output.vf(tmp0_desc, 4) ? true : !(value.ll_1 == null)) {
      tmp1_output.rf(tmp0_desc, 4, BooleanSerializer_getInstance(), value.ll_1);
    }
    tmp1_output.se(tmp0_desc);
  };
  protoOf($serializer_0).id = function (encoder, value) {
    return this.gl(encoder, value instanceof BackupSettings ? value : THROW_CCE());
  };
  protoOf($serializer_0).jd = function (decoder) {
    var tmp0_desc = this.fl_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.re(tmp0_desc);
    if (tmp9_input.bf()) {
      tmp4_local0 = tmp9_input.ze(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ze(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ze(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.ze(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.ze(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.cf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ze(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ze(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ze(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.ze(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.ze(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.se(tmp0_desc);
    return BackupSettings_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_0).hd = function () {
    return this.fl_1;
  };
  protoOf($serializer_0).bj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance()), get_nullable(BooleanSerializer_getInstance())];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function BackupSettings_init_$Init$(seen0, targetLanguage, knownLanguage, cameraFlashMode, uiSoundsEnabled, hapticsEnabled, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().fl_1);
    }
    if (0 === (seen0 & 1))
      $this.hl_1 = null;
    else
      $this.hl_1 = targetLanguage;
    if (0 === (seen0 & 2))
      $this.il_1 = null;
    else
      $this.il_1 = knownLanguage;
    if (0 === (seen0 & 4))
      $this.jl_1 = null;
    else
      $this.jl_1 = cameraFlashMode;
    if (0 === (seen0 & 8))
      $this.kl_1 = null;
    else
      $this.kl_1 = uiSoundsEnabled;
    if (0 === (seen0 & 16))
      $this.ll_1 = null;
    else
      $this.ll_1 = hapticsEnabled;
    return $this;
  }
  function BackupSettings_init_$Create$(seen0, targetLanguage, knownLanguage, cameraFlashMode, uiSoundsEnabled, hapticsEnabled, serializationConstructorMarker) {
    return BackupSettings_init_$Init$(seen0, targetLanguage, knownLanguage, cameraFlashMode, uiSoundsEnabled, hapticsEnabled, serializationConstructorMarker, objectCreate(protoOf(BackupSettings)));
  }
  function BackupSettings(targetLanguage, knownLanguage, cameraFlashMode, uiSoundsEnabled, hapticsEnabled) {
    targetLanguage = targetLanguage === VOID ? null : targetLanguage;
    knownLanguage = knownLanguage === VOID ? null : knownLanguage;
    cameraFlashMode = cameraFlashMode === VOID ? null : cameraFlashMode;
    uiSoundsEnabled = uiSoundsEnabled === VOID ? null : uiSoundsEnabled;
    hapticsEnabled = hapticsEnabled === VOID ? null : hapticsEnabled;
    this.hl_1 = targetLanguage;
    this.il_1 = knownLanguage;
    this.jl_1 = cameraFlashMode;
    this.kl_1 = uiSoundsEnabled;
    this.ll_1 = hapticsEnabled;
  }
  protoOf(BackupSettings).toString = function () {
    return 'BackupSettings(targetLanguage=' + this.hl_1 + ', knownLanguage=' + this.il_1 + ', cameraFlashMode=' + this.jl_1 + ', uiSoundsEnabled=' + this.kl_1 + ', hapticsEnabled=' + this.ll_1 + ')';
  };
  protoOf(BackupSettings).hashCode = function () {
    var result = this.hl_1 == null ? 0 : getStringHashCode(this.hl_1);
    result = imul(result, 31) + (this.il_1 == null ? 0 : getStringHashCode(this.il_1)) | 0;
    result = imul(result, 31) + (this.jl_1 == null ? 0 : getStringHashCode(this.jl_1)) | 0;
    result = imul(result, 31) + (this.kl_1 == null ? 0 : getBooleanHashCode(this.kl_1)) | 0;
    result = imul(result, 31) + (this.ll_1 == null ? 0 : getBooleanHashCode(this.ll_1)) | 0;
    return result;
  };
  protoOf(BackupSettings).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BackupSettings))
      return false;
    if (!(this.hl_1 == other.hl_1))
      return false;
    if (!(this.il_1 == other.il_1))
      return false;
    if (!(this.jl_1 == other.jl_1))
      return false;
    if (!(this.kl_1 == other.kl_1))
      return false;
    if (!(this.ll_1 == other.ll_1))
      return false;
    return true;
  };
  function BackupPackage$sha256Hex$lambda(b) {
    var v = b & 255;
    return toString(charCodeAt('0123456789abcdef', v >>> 4 | 0)) + toString(charCodeAt('0123456789abcdef', v & 15));
  }
  function BackupPackage() {
    BackupPackage_instance = this;
    this.ml_1 = '.vlbackup';
    this.nl_1 = '.slbackup';
    this.ol_1 = listOf(['.vlbackup', '.slbackup']);
    this.pl_1 = 'backup.json';
    this.ql_1 = 'manifest.json';
    this.rl_1 = 'doodles.json';
    this.sl_1 = 'settings.json';
    this.tl_1 = 'words/';
    this.ul_1 = '.jpg';
    this.vl_1 = '.png';
    this.wl_1 = listOf(['manifest.json', 'doodles.json', 'settings.json', 'backup.json']);
    this.xl_1 = Regex_init_$Create$('^word-[0-9]{1,17}-[a-z0-9]{4}$');
    this.yl_1 = MapSerializer(serializer(StringCompanionObject_instance), serializer(StringCompanionObject_instance));
    this.zl_1 = '0123456789abcdef';
  }
  protoOf(BackupPackage).am = function (id) {
    return 'words/' + id + '.png';
  };
  protoOf(BackupPackage).bm = function (bytes) {
    var tmp = sha256(bytes);
    return joinToString(tmp, '', VOID, VOID, VOID, VOID, BackupPackage$sha256Hex$lambda);
  };
  var BackupPackage_instance;
  function BackupPackage_getInstance() {
    if (BackupPackage_instance == null)
      new BackupPackage();
    return BackupPackage_instance;
  }
  function Limits(maxEntries, maxNameBytes, maxEntryBytes, maxTotalBytes) {
    maxEntries = maxEntries === VOID ? 10000 : maxEntries;
    maxNameBytes = maxNameBytes === VOID ? 512 : maxNameBytes;
    maxEntryBytes = maxEntryBytes === VOID ? new Long(26214400, 0) : maxEntryBytes;
    maxTotalBytes = maxTotalBytes === VOID ? new Long(524288000, 0) : maxTotalBytes;
    this.cm_1 = maxEntries;
    this.dm_1 = maxNameBytes;
    this.em_1 = maxEntryBytes;
    this.fm_1 = maxTotalBytes;
  }
  protoOf(Limits).toString = function () {
    return 'Limits(maxEntries=' + this.cm_1 + ', maxNameBytes=' + this.dm_1 + ', maxEntryBytes=' + this.em_1.toString() + ', maxTotalBytes=' + this.fm_1.toString() + ')';
  };
  protoOf(Limits).hashCode = function () {
    var result = this.cm_1;
    result = imul(result, 31) + this.dm_1 | 0;
    result = imul(result, 31) + this.em_1.hashCode() | 0;
    result = imul(result, 31) + this.fm_1.hashCode() | 0;
    return result;
  };
  protoOf(Limits).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Limits))
      return false;
    if (!(this.cm_1 === other.cm_1))
      return false;
    if (!(this.dm_1 === other.dm_1))
      return false;
    if (!equalsLong(this.em_1, other.em_1))
      return false;
    if (!equalsLong(this.fm_1, other.fm_1))
      return false;
    return true;
  };
  function Entry(name, content) {
    this.gm_1 = name;
    this.hm_1 = content;
  }
  protoOf(Entry).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof Entry) {
      tmp_0 = other.gm_1 === this.gm_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = contentEquals(other.hm_1, this.hm_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Entry).hashCode = function () {
    return imul(getStringHashCode(this.gm_1), 31) + contentHashCode(this.hm_1) | 0;
  };
  protoOf(Entry).toString = function () {
    return 'Entry(name=' + this.gm_1 + ', content=' + toString_0(this.hm_1) + ')';
  };
  function validateName($this, name, limits) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(name) === 0)
      throw new ContainerFormatException('Empty entry name.');
    if (encodeToByteArray(name).length > limits.dm_1) {
      throw new ContainerFormatException('Entry name exceeds ' + limits.dm_1 + ' UTF-8 bytes.');
    }
    if (startsWith(name, _Char___init__impl__6a9atx(47)))
      throw new ContainerFormatException("Entry name has a leading slash: '" + name + "'.");
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.text.any' call
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(name)) {
        var element = charSequenceGet(name, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        var tmp;
        var tmp_0;
        if (element === _Char___init__impl__6a9atx(92)) {
          tmp_0 = true;
        } else {
          // Inline function 'kotlin.code' call
          tmp_0 = Char__toInt_impl_vasixd(element) < 32;
        }
        if (tmp_0) {
          tmp = true;
        } else {
          // Inline function 'kotlin.code' call
          tmp = Char__toInt_impl_vasixd(element) === 127;
        }
        if (tmp) {
          tmp$ret$1 = true;
          break $l$block;
        }
      }
      tmp$ret$1 = false;
    }
    if (tmp$ret$1) {
      throw new ContainerFormatException('Entry name contains illegal characters.');
    }
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = split(name, charArrayOf([_Char___init__impl__6a9atx(47)])).g();
    while (_iterator__ex2g4s.h()) {
      var element_0 = _iterator__ex2g4s.i();
      var tmp_1;
      var tmp_2;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(element_0) === 0) {
        tmp_2 = true;
      } else {
        tmp_2 = element_0 === '.';
      }
      if (tmp_2) {
        tmp_1 = true;
      } else {
        tmp_1 = element_0 === '..';
      }
      if (tmp_1) {
        throw new ContainerFormatException("Entry name has an unsafe path component: '" + name + "'.");
      }
    }
  }
  function uInt32($this, value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(compare(new Long(0, 0), value) <= 0 ? compare(value, new Long(-1, 0)) <= 0 : false)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.byteArrayOf' call
    return new Int8Array([convertToByte(shiftRightUnsigned(value, 24)), convertToByte(shiftRightUnsigned(value, 16)), convertToByte(shiftRightUnsigned(value, 8)), convertToByte(value)]);
  }
  function uInt64($this, value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.require' call
    if (!(compare(value, new Long(0, 0)) >= 0)) {
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    // Inline function 'kotlin.byteArrayOf' call
    return new Int8Array([convertToByte(shiftRightUnsigned(value, 56)), convertToByte(shiftRightUnsigned(value, 48)), convertToByte(shiftRightUnsigned(value, 40)), convertToByte(shiftRightUnsigned(value, 32)), convertToByte(shiftRightUnsigned(value, 24)), convertToByte(shiftRightUnsigned(value, 16)), convertToByte(shiftRightUnsigned(value, 8)), convertToByte(value)]);
  }
  function BinaryContainer$encode$lambda($byName) {
    return function (name) {
      return getValue($byName, name).hm_1;
    };
  }
  function BinaryContainer() {
    BinaryContainer_instance = this;
    this.im_1 = 'SLBK1';
    this.jm_1 = 10000;
    this.km_1 = 512;
    this.lm_1 = new Long(26214400, 0);
    this.mm_1 = new Long(524288000, 0);
    this.nm_1 = 32;
    this.om_1 = 5;
  }
  protoOf(BinaryContainer).pm = function (magic, entries, limits, sink) {
    // Inline function 'kotlin.collections.associateBy' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(entries, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = entries.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var tmp$ret$2 = element.gm_1;
      destination.w1(tmp$ret$2, element);
    }
    var byName = destination;
    if (!(byName.k() === entries.k())) {
      throw new ContainerFormatException('Duplicate entry name.');
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(entries, 10));
    var _iterator__ex2g4s_0 = entries.g();
    while (_iterator__ex2g4s_0.h()) {
      var item = _iterator__ex2g4s_0.i();
      var tmp$ret$5 = item.gm_1;
      destination_0.e(tmp$ret$5);
    }
    var tmp = destination_0;
    this.qm(magic, tmp, limits, BinaryContainer$encode$lambda(byName), sink);
  };
  protoOf(BinaryContainer).rm = function (magic, entries, limits, sink, $super) {
    limits = limits === VOID ? new Limits() : limits;
    var tmp;
    if ($super === VOID) {
      this.pm(magic, entries, limits, sink);
      tmp = Unit_instance;
    } else {
      tmp = $super.pm.call(this, magic, entries, limits, sink);
    }
    return tmp;
  };
  protoOf(BinaryContainer).qm = function (magic, names, limits, contentOf, sink) {
    // Inline function 'kotlin.require' call
    if (!(magic.length === 5)) {
      var message = 'Magic must be 5 ASCII chars.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    if (names.k() > limits.cm_1) {
      throw new ContainerFormatException('Too many entries: ' + names.k() + ' > ' + limits.cm_1 + '.');
    }
    // Inline function 'kotlin.collections.mutableSetOf' call
    var seen = LinkedHashSet_init_$Create$();
    var _iterator__ex2g4s = names.g();
    while (_iterator__ex2g4s.h()) {
      var name = _iterator__ex2g4s.i();
      validateName(this, name, limits);
      if (!seen.e(name)) {
        throw new ContainerFormatException("Duplicate entry name: '" + name + "'.");
      }
    }
    sink(encodeToByteArray(magic));
    sink(uInt32(this, fromInt(names.k())));
    var total = new Long(0, 0);
    var _iterator__ex2g4s_0 = names.g();
    while (_iterator__ex2g4s_0.h()) {
      var name_0 = _iterator__ex2g4s_0.i();
      var content = contentOf(name_0);
      if (compare(fromInt(content.length), limits.em_1) > 0) {
        throw new ContainerFormatException("Entry '" + name_0 + "' exceeds " + limits.em_1.toString() + ' bytes.');
      }
      total = add(total, fromInt(content.length));
      if (compare(total, limits.fm_1) > 0) {
        throw new ContainerFormatException('Package exceeds ' + limits.fm_1.toString() + ' bytes.');
      }
      var nameBytes = encodeToByteArray(name_0);
      sink(uInt32(this, fromInt(nameBytes.length)));
      sink(nameBytes);
      sink(uInt64(this, fromInt(content.length)));
      sink(sha256(content));
      sink(content);
    }
  };
  var BinaryContainer_instance;
  function BinaryContainer_getInstance() {
    if (BinaryContainer_instance == null)
      new BinaryContainer();
    return BinaryContainer_instance;
  }
  function ContainerFormatException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, ContainerFormatException);
  }
  function unsigned64($this, bytes, offset) {
    var value = _ULong___init__impl__c78o9k(new Long(0, 0));
    var inductionVariable = 0;
    if (inductionVariable < 8)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.ULong.shl' call
        var this_0 = value;
        var tmp0 = _ULong___init__impl__c78o9k(shiftLeft(_ULong___get_data__impl__fggpzb(this_0), 8));
        // Inline function 'kotlin.toULong' call
        var this_1 = bytes[offset + i | 0];
        var tmp0_0 = _ULong___init__impl__c78o9k(fromInt(this_1));
        // Inline function 'kotlin.ULong.and' call
        var other = _ULong___init__impl__c78o9k(new Long(255, 0));
        // Inline function 'kotlin.ULong.or' call
        var other_0 = _ULong___init__impl__c78o9k(bitwiseAnd(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other)));
        value = _ULong___init__impl__c78o9k(bitwiseOr(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other_0)));
      }
       while (inductionVariable < 8);
    return value;
  }
  function base36($this, value) {
    if (equals(value, _ULong___init__impl__c78o9k(new Long(0, 0))))
      return '0';
    var v = value;
    var out = StringBuilder_init_$Create$();
    $l$loop: while (true) {
      var tmp0 = v;
      // Inline function 'kotlin.ULong.compareTo' call
      var other = _ULong___init__impl__c78o9k(new Long(0, 0));
      if (!(ulongCompare(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)) > 0)) {
        break $l$loop;
      }
      var tmp0_0 = v;
      // Inline function 'kotlin.ULong.rem' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(36, 0));
      // Inline function 'kotlin.ULong.toInt' call
      var this_0 = ulongRemainder(tmp0_0, other_0);
      var tmp$ret$2 = convertToInt(_ULong___get_data__impl__fggpzb(this_0));
      out.k6(charCodeAt('0123456789abcdefghijklmnopqrstuvwxyz', tmp$ret$2));
      var tmp0_1 = v;
      // Inline function 'kotlin.ULong.div' call
      var other_1 = _ULong___init__impl__c78o9k(new Long(36, 0));
      v = ulongDivide(tmp0_1, other_1);
    }
    return out.g9().toString();
  }
  function CardId() {
    CardId_instance = this;
    this.sm_1 = _ULong___init__impl__c78o9k(new Long(1410065408, 2));
    this.tm_1 = _ULong___init__impl__c78o9k(new Long(1679616, 0));
    this.um_1 = '0123456789abcdefghijklmnopqrstuvwxyz';
  }
  protoOf(CardId).vm = function (key, salt) {
    // Inline function 'kotlin.Char' call
    var tmp;
    // Inline function 'kotlin.code' call
    var this_0 = _Char___init__impl__6a9atx(0);
    if (0 < Char__toInt_impl_vasixd(this_0)) {
      tmp = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(65535);
      tmp = 0 > Char__toInt_impl_vasixd(this_1);
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Invalid Char code: ' + 0);
    }
    var tmp$ret$0 = numberToChar(0);
    var input = encodeToByteArray(key + toString(tmp$ret$0) + salt.toString());
    var hash = sha256(input);
    var a = unsigned64(this, hash, 0);
    var b = unsigned64(this, hash, 8);
    // Inline function 'kotlin.ULong.rem' call
    var other = _ULong___init__impl__c78o9k(new Long(1410065408, 2));
    var tmp$ret$3 = ulongRemainder(a, other);
    var digits = '1' + padStart(ULong__toString_impl_f9au7k(tmp$ret$3), 10, _Char___init__impl__6a9atx(48));
    // Inline function 'kotlin.ULong.rem' call
    var other_0 = _ULong___init__impl__c78o9k(new Long(1679616, 0));
    var tmp$ret$4 = ulongRemainder(b, other_0);
    var suffix = padStart(base36(this, tmp$ret$4), 4, _Char___init__impl__6a9atx(48));
    return 'word-' + digits + '-' + suffix;
  };
  protoOf(CardId).wm = function (deckId) {
    var hash = sha256(encodeToByteArray(deckId));
    var value = 0;
    var inductionVariable = 0;
    if (inductionVariable < 4)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        value = value << 8 | hash[i] & 255;
      }
       while (inductionVariable < 4);
    return value & 2147483647;
  };
  var CardId_instance;
  function CardId_getInstance() {
    if (CardId_instance == null)
      new CardId();
    return CardId_instance;
  }
  function WordSnapEntry$Companion$$childSerializers$_anonymous__u4ivsk() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_2());
  }
  function WordSnapEntry$Companion$$childSerializers$_anonymous__u4ivsk_0() {
    return new LinkedHashMapSerializer(StringSerializer_getInstance(), $serializer_getInstance_5());
  }
  function Companion_1() {
    Companion_instance_1 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, WordSnapEntry$Companion$$childSerializers$_anonymous__u4ivsk);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.xm_1 = [null, null, null, null, null, null, null, tmp_1, null, null, lazy(tmp_2, WordSnapEntry$Companion$$childSerializers$_anonymous__u4ivsk_0)];
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.tntstudios.snaplingo.format.WordSnapEntry', this, 11);
    tmp0_serialDesc.zi('id', false);
    tmp0_serialDesc.zi('word', false);
    tmp0_serialDesc.zi('language', false);
    tmp0_serialDesc.zi('createdAtEpochMs', false);
    tmp0_serialDesc.zi('isFavorite', true);
    tmp0_serialDesc.zi('hasImage', true);
    tmp0_serialDesc.zi('hasCutout', true);
    tmp0_serialDesc.zi('translations', true);
    tmp0_serialDesc.zi('glossLanguage', true);
    tmp0_serialDesc.zi('glossVerified', true);
    tmp0_serialDesc.zi('translationMeta', true);
    this.ym_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).zm = function (encoder, value) {
    var tmp0_desc = this.ym_1;
    var tmp1_output = encoder.re(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().xm_1;
    tmp1_output.of(tmp0_desc, 0, value.an_1);
    tmp1_output.pf(tmp0_desc, 1, $serializer_getInstance_2(), value.bn_1);
    tmp1_output.of(tmp0_desc, 2, value.cn_1);
    tmp1_output.nf(tmp0_desc, 3, value.dn_1);
    if (tmp1_output.vf(tmp0_desc, 4) ? true : !(value.en_1 === false)) {
      tmp1_output.lf(tmp0_desc, 4, value.en_1);
    }
    if (tmp1_output.vf(tmp0_desc, 5) ? true : !(value.fn_1 === false)) {
      tmp1_output.lf(tmp0_desc, 5, value.fn_1);
    }
    if (tmp1_output.vf(tmp0_desc, 6) ? true : !(value.gn_1 === false)) {
      tmp1_output.lf(tmp0_desc, 6, value.gn_1);
    }
    if (tmp1_output.vf(tmp0_desc, 7) ? true : !equals(value.hn_1, emptyMap())) {
      tmp1_output.pf(tmp0_desc, 7, tmp2_cached[7].p1(), value.hn_1);
    }
    if (tmp1_output.vf(tmp0_desc, 8) ? true : !(value.in_1 == null)) {
      tmp1_output.rf(tmp0_desc, 8, StringSerializer_getInstance(), value.in_1);
    }
    if (tmp1_output.vf(tmp0_desc, 9) ? true : !(value.jn_1 === false)) {
      tmp1_output.lf(tmp0_desc, 9, value.jn_1);
    }
    if (tmp1_output.vf(tmp0_desc, 10) ? true : !equals(value.kn_1, emptyMap())) {
      tmp1_output.pf(tmp0_desc, 10, tmp2_cached[10].p1(), value.kn_1);
    }
    tmp1_output.se(tmp0_desc);
  };
  protoOf($serializer_1).id = function (encoder, value) {
    return this.zm(encoder, value instanceof WordSnapEntry ? value : THROW_CCE());
  };
  protoOf($serializer_1).jd = function (decoder) {
    var tmp0_desc = this.ym_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = new Long(0, 0);
    var tmp8_local4 = false;
    var tmp9_local5 = false;
    var tmp10_local6 = false;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = false;
    var tmp14_local10 = null;
    var tmp15_input = decoder.re(tmp0_desc);
    var tmp16_cached = Companion_getInstance_1().xm_1;
    if (tmp15_input.bf()) {
      tmp4_local0 = tmp15_input.we(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.xe(tmp0_desc, 1, $serializer_getInstance_2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.we(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.ve(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.te(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.te(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.te(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.xe(tmp0_desc, 7, tmp16_cached[7].p1(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.ze(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.te(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.xe(tmp0_desc, 10, tmp16_cached[10].p1(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.cf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.we(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.xe(tmp0_desc, 1, $serializer_getInstance_2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.we(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.ve(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.te(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.te(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.te(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.xe(tmp0_desc, 7, tmp16_cached[7].p1(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.ze(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.te(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.xe(tmp0_desc, 10, tmp16_cached[10].p1(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp15_input.se(tmp0_desc);
    return WordSnapEntry_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  };
  protoOf($serializer_1).hd = function () {
    return this.ym_1;
  };
  protoOf($serializer_1).bj = function () {
    var tmp0_cached = Companion_getInstance_1().xm_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), $serializer_getInstance_2(), StringSerializer_getInstance(), LongSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[7].p1(), get_nullable(StringSerializer_getInstance()), BooleanSerializer_getInstance(), tmp0_cached[10].p1()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function WordSnapEntry_init_$Init$(seen0, id, word, language, createdAtEpochMs, isFavorite, hasImage, hasCutout, translations, glossLanguage, glossVerified, translationMeta, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_1().ym_1);
    }
    $this.an_1 = id;
    $this.bn_1 = word;
    $this.cn_1 = language;
    $this.dn_1 = createdAtEpochMs;
    if (0 === (seen0 & 16))
      $this.en_1 = false;
    else
      $this.en_1 = isFavorite;
    if (0 === (seen0 & 32))
      $this.fn_1 = false;
    else
      $this.fn_1 = hasImage;
    if (0 === (seen0 & 64))
      $this.gn_1 = false;
    else
      $this.gn_1 = hasCutout;
    if (0 === (seen0 & 128))
      $this.hn_1 = emptyMap();
    else
      $this.hn_1 = translations;
    if (0 === (seen0 & 256))
      $this.in_1 = null;
    else
      $this.in_1 = glossLanguage;
    if (0 === (seen0 & 512))
      $this.jn_1 = false;
    else
      $this.jn_1 = glossVerified;
    if (0 === (seen0 & 1024))
      $this.kn_1 = emptyMap();
    else
      $this.kn_1 = translationMeta;
    return $this;
  }
  function WordSnapEntry_init_$Create$(seen0, id, word, language, createdAtEpochMs, isFavorite, hasImage, hasCutout, translations, glossLanguage, glossVerified, translationMeta, serializationConstructorMarker) {
    return WordSnapEntry_init_$Init$(seen0, id, word, language, createdAtEpochMs, isFavorite, hasImage, hasCutout, translations, glossLanguage, glossVerified, translationMeta, serializationConstructorMarker, objectCreate(protoOf(WordSnapEntry)));
  }
  function WordSnapEntry(id, word, language, createdAtEpochMs, isFavorite, hasImage, hasCutout, translations, glossLanguage, glossVerified, translationMeta) {
    Companion_getInstance_1();
    isFavorite = isFavorite === VOID ? false : isFavorite;
    hasImage = hasImage === VOID ? false : hasImage;
    hasCutout = hasCutout === VOID ? false : hasCutout;
    translations = translations === VOID ? emptyMap() : translations;
    glossLanguage = glossLanguage === VOID ? null : glossLanguage;
    glossVerified = glossVerified === VOID ? false : glossVerified;
    translationMeta = translationMeta === VOID ? emptyMap() : translationMeta;
    this.an_1 = id;
    this.bn_1 = word;
    this.cn_1 = language;
    this.dn_1 = createdAtEpochMs;
    this.en_1 = isFavorite;
    this.fn_1 = hasImage;
    this.gn_1 = hasCutout;
    this.hn_1 = translations;
    this.in_1 = glossLanguage;
    this.jn_1 = glossVerified;
    this.kn_1 = translationMeta;
  }
  protoOf(WordSnapEntry).toString = function () {
    return 'WordSnapEntry(id=' + this.an_1 + ', word=' + this.bn_1.toString() + ', language=' + this.cn_1 + ', createdAtEpochMs=' + this.dn_1.toString() + ', isFavorite=' + this.en_1 + ', hasImage=' + this.fn_1 + ', hasCutout=' + this.gn_1 + ', translations=' + toString_0(this.hn_1) + ', glossLanguage=' + this.in_1 + ', glossVerified=' + this.jn_1 + ', translationMeta=' + toString_0(this.kn_1) + ')';
  };
  protoOf(WordSnapEntry).hashCode = function () {
    var result = getStringHashCode(this.an_1);
    result = imul(result, 31) + this.bn_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.cn_1) | 0;
    result = imul(result, 31) + this.dn_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.en_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.fn_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.gn_1) | 0;
    result = imul(result, 31) + hashCode(this.hn_1) | 0;
    result = imul(result, 31) + (this.in_1 == null ? 0 : getStringHashCode(this.in_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.jn_1) | 0;
    result = imul(result, 31) + hashCode(this.kn_1) | 0;
    return result;
  };
  protoOf(WordSnapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WordSnapEntry))
      return false;
    if (!(this.an_1 === other.an_1))
      return false;
    if (!this.bn_1.equals(other.bn_1))
      return false;
    if (!(this.cn_1 === other.cn_1))
      return false;
    if (!equalsLong(this.dn_1, other.dn_1))
      return false;
    if (!(this.en_1 === other.en_1))
      return false;
    if (!(this.fn_1 === other.fn_1))
      return false;
    if (!(this.gn_1 === other.gn_1))
      return false;
    if (!equals(this.hn_1, other.hn_1))
      return false;
    if (!(this.in_1 == other.in_1))
      return false;
    if (!(this.jn_1 === other.jn_1))
      return false;
    if (!equals(this.kn_1, other.kn_1))
      return false;
    return true;
  };
  function WordEntry$Companion$$childSerializers$_anonymous__sa94bi() {
    return new ArrayListSerializer($serializer_getInstance_3());
  }
  function WordEntry$Companion$$childSerializers$_anonymous__sa94bi_0() {
    return new ArrayListSerializer($serializer_getInstance_2());
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, WordEntry$Companion$$childSerializers$_anonymous__sa94bi);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ln_1 = [null, null, null, null, tmp_1, null, null, null, null, null, lazy(tmp_2, WordEntry$Companion$$childSerializers$_anonymous__sa94bi_0)];
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.tntstudios.snaplingo.format.WordEntry', this, 11);
    tmp0_serialDesc.zi('text', false);
    tmp0_serialDesc.zi('translation', false);
    tmp0_serialDesc.zi('phonetic', false);
    tmp0_serialDesc.zi('partOfSpeech', true);
    tmp0_serialDesc.zi('examples', true);
    tmp0_serialDesc.zi('article', true);
    tmp0_serialDesc.zi('gender', true);
    tmp0_serialDesc.zi('plural', true);
    tmp0_serialDesc.zi('romanization', true);
    tmp0_serialDesc.zi('classifier', true);
    tmp0_serialDesc.zi('components', true);
    this.mn_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).nn = function (encoder, value) {
    var tmp0_desc = this.mn_1;
    var tmp1_output = encoder.re(tmp0_desc);
    var tmp2_cached = Companion_getInstance_2().ln_1;
    tmp1_output.of(tmp0_desc, 0, value.on_1);
    tmp1_output.of(tmp0_desc, 1, value.pn_1);
    tmp1_output.of(tmp0_desc, 2, value.qn_1);
    if (tmp1_output.vf(tmp0_desc, 3) ? true : !(value.rn_1 == null)) {
      tmp1_output.rf(tmp0_desc, 3, StringSerializer_getInstance(), value.rn_1);
    }
    if (tmp1_output.vf(tmp0_desc, 4) ? true : !equals(value.sn_1, emptyList())) {
      tmp1_output.pf(tmp0_desc, 4, tmp2_cached[4].p1(), value.sn_1);
    }
    if (tmp1_output.vf(tmp0_desc, 5) ? true : !(value.tn_1 == null)) {
      tmp1_output.rf(tmp0_desc, 5, StringSerializer_getInstance(), value.tn_1);
    }
    if (tmp1_output.vf(tmp0_desc, 6) ? true : !(value.un_1 == null)) {
      tmp1_output.rf(tmp0_desc, 6, StringSerializer_getInstance(), value.un_1);
    }
    if (tmp1_output.vf(tmp0_desc, 7) ? true : !(value.vn_1 == null)) {
      tmp1_output.rf(tmp0_desc, 7, StringSerializer_getInstance(), value.vn_1);
    }
    if (tmp1_output.vf(tmp0_desc, 8) ? true : !(value.wn_1 == null)) {
      tmp1_output.rf(tmp0_desc, 8, StringSerializer_getInstance(), value.wn_1);
    }
    if (tmp1_output.vf(tmp0_desc, 9) ? true : !(value.xn_1 == null)) {
      tmp1_output.rf(tmp0_desc, 9, StringSerializer_getInstance(), value.xn_1);
    }
    if (tmp1_output.vf(tmp0_desc, 10) ? true : !equals(value.yn_1, emptyList())) {
      tmp1_output.pf(tmp0_desc, 10, tmp2_cached[10].p1(), value.yn_1);
    }
    tmp1_output.se(tmp0_desc);
  };
  protoOf($serializer_2).id = function (encoder, value) {
    return this.nn(encoder, value instanceof WordEntry ? value : THROW_CCE());
  };
  protoOf($serializer_2).jd = function (decoder) {
    var tmp0_desc = this.mn_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_input = decoder.re(tmp0_desc);
    var tmp16_cached = Companion_getInstance_2().ln_1;
    if (tmp15_input.bf()) {
      tmp4_local0 = tmp15_input.we(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.we(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.we(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.ze(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.xe(tmp0_desc, 4, tmp16_cached[4].p1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.ze(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.ze(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.ze(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.ze(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.ze(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.xe(tmp0_desc, 10, tmp16_cached[10].p1(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.cf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.we(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.we(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.we(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.ze(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.xe(tmp0_desc, 4, tmp16_cached[4].p1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.ze(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.ze(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.ze(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.ze(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.ze(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.xe(tmp0_desc, 10, tmp16_cached[10].p1(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp15_input.se(tmp0_desc);
    return WordEntry_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  };
  protoOf($serializer_2).hd = function () {
    return this.mn_1;
  };
  protoOf($serializer_2).bj = function () {
    var tmp0_cached = Companion_getInstance_2().ln_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[4].p1(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), tmp0_cached[10].p1()];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function WordEntry_init_$Init$(seen0, text, translation, phonetic, partOfSpeech, examples, article, gender, plural, romanization, classifier, components, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_2().mn_1);
    }
    $this.on_1 = text;
    $this.pn_1 = translation;
    $this.qn_1 = phonetic;
    if (0 === (seen0 & 8))
      $this.rn_1 = null;
    else
      $this.rn_1 = partOfSpeech;
    if (0 === (seen0 & 16))
      $this.sn_1 = emptyList();
    else
      $this.sn_1 = examples;
    if (0 === (seen0 & 32))
      $this.tn_1 = null;
    else
      $this.tn_1 = article;
    if (0 === (seen0 & 64))
      $this.un_1 = null;
    else
      $this.un_1 = gender;
    if (0 === (seen0 & 128))
      $this.vn_1 = null;
    else
      $this.vn_1 = plural;
    if (0 === (seen0 & 256))
      $this.wn_1 = null;
    else
      $this.wn_1 = romanization;
    if (0 === (seen0 & 512))
      $this.xn_1 = null;
    else
      $this.xn_1 = classifier;
    if (0 === (seen0 & 1024))
      $this.yn_1 = emptyList();
    else
      $this.yn_1 = components;
    return $this;
  }
  function WordEntry_init_$Create$(seen0, text, translation, phonetic, partOfSpeech, examples, article, gender, plural, romanization, classifier, components, serializationConstructorMarker) {
    return WordEntry_init_$Init$(seen0, text, translation, phonetic, partOfSpeech, examples, article, gender, plural, romanization, classifier, components, serializationConstructorMarker, objectCreate(protoOf(WordEntry)));
  }
  function WordEntry(text, translation, phonetic, partOfSpeech, examples, article, gender, plural, romanization, classifier, components) {
    Companion_getInstance_2();
    partOfSpeech = partOfSpeech === VOID ? null : partOfSpeech;
    examples = examples === VOID ? emptyList() : examples;
    article = article === VOID ? null : article;
    gender = gender === VOID ? null : gender;
    plural = plural === VOID ? null : plural;
    romanization = romanization === VOID ? null : romanization;
    classifier = classifier === VOID ? null : classifier;
    components = components === VOID ? emptyList() : components;
    this.on_1 = text;
    this.pn_1 = translation;
    this.qn_1 = phonetic;
    this.rn_1 = partOfSpeech;
    this.sn_1 = examples;
    this.tn_1 = article;
    this.un_1 = gender;
    this.vn_1 = plural;
    this.wn_1 = romanization;
    this.xn_1 = classifier;
    this.yn_1 = components;
  }
  protoOf(WordEntry).toString = function () {
    return 'WordEntry(text=' + this.on_1 + ', translation=' + this.pn_1 + ', phonetic=' + this.qn_1 + ', partOfSpeech=' + this.rn_1 + ', examples=' + toString_0(this.sn_1) + ', article=' + this.tn_1 + ', gender=' + this.un_1 + ', plural=' + this.vn_1 + ', romanization=' + this.wn_1 + ', classifier=' + this.xn_1 + ', components=' + toString_0(this.yn_1) + ')';
  };
  protoOf(WordEntry).hashCode = function () {
    var result = getStringHashCode(this.on_1);
    result = imul(result, 31) + getStringHashCode(this.pn_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.qn_1) | 0;
    result = imul(result, 31) + (this.rn_1 == null ? 0 : getStringHashCode(this.rn_1)) | 0;
    result = imul(result, 31) + hashCode(this.sn_1) | 0;
    result = imul(result, 31) + (this.tn_1 == null ? 0 : getStringHashCode(this.tn_1)) | 0;
    result = imul(result, 31) + (this.un_1 == null ? 0 : getStringHashCode(this.un_1)) | 0;
    result = imul(result, 31) + (this.vn_1 == null ? 0 : getStringHashCode(this.vn_1)) | 0;
    result = imul(result, 31) + (this.wn_1 == null ? 0 : getStringHashCode(this.wn_1)) | 0;
    result = imul(result, 31) + (this.xn_1 == null ? 0 : getStringHashCode(this.xn_1)) | 0;
    result = imul(result, 31) + hashCode(this.yn_1) | 0;
    return result;
  };
  protoOf(WordEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WordEntry))
      return false;
    if (!(this.on_1 === other.on_1))
      return false;
    if (!(this.pn_1 === other.pn_1))
      return false;
    if (!(this.qn_1 === other.qn_1))
      return false;
    if (!(this.rn_1 == other.rn_1))
      return false;
    if (!equals(this.sn_1, other.sn_1))
      return false;
    if (!(this.tn_1 == other.tn_1))
      return false;
    if (!(this.un_1 == other.un_1))
      return false;
    if (!(this.vn_1 == other.vn_1))
      return false;
    if (!(this.wn_1 == other.wn_1))
      return false;
    if (!(this.xn_1 == other.xn_1))
      return false;
    if (!equals(this.yn_1, other.yn_1))
      return false;
    return true;
  };
  function WordExampleEntry$Companion$$childSerializers$_anonymous__ixk3l4() {
    return new ArrayListSerializer($serializer_getInstance_4());
  }
  function Companion_3() {
    Companion_instance_3 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.zn_1 = [null, null, lazy(tmp_0, WordExampleEntry$Companion$$childSerializers$_anonymous__ixk3l4)];
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.tntstudios.snaplingo.format.WordExampleEntry', this, 3);
    tmp0_serialDesc.zi('source', false);
    tmp0_serialDesc.zi('target', false);
    tmp0_serialDesc.zi('tokens', true);
    this.ao_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).bo = function (encoder, value) {
    var tmp0_desc = this.ao_1;
    var tmp1_output = encoder.re(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().zn_1;
    tmp1_output.of(tmp0_desc, 0, value.co_1);
    tmp1_output.of(tmp0_desc, 1, value.do_1);
    if (tmp1_output.vf(tmp0_desc, 2) ? true : !equals(value.eo_1, emptyList())) {
      tmp1_output.pf(tmp0_desc, 2, tmp2_cached[2].p1(), value.eo_1);
    }
    tmp1_output.se(tmp0_desc);
  };
  protoOf($serializer_3).id = function (encoder, value) {
    return this.bo(encoder, value instanceof WordExampleEntry ? value : THROW_CCE());
  };
  protoOf($serializer_3).jd = function (decoder) {
    var tmp0_desc = this.ao_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.re(tmp0_desc);
    var tmp8_cached = Companion_getInstance_3().zn_1;
    if (tmp7_input.bf()) {
      tmp4_local0 = tmp7_input.we(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.we(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.xe(tmp0_desc, 2, tmp8_cached[2].p1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.cf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.we(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.we(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.xe(tmp0_desc, 2, tmp8_cached[2].p1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.se(tmp0_desc);
    return WordExampleEntry_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_3).hd = function () {
    return this.ao_1;
  };
  protoOf($serializer_3).bj = function () {
    var tmp0_cached = Companion_getInstance_3().zn_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].p1()];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function WordExampleEntry_init_$Init$(seen0, source, target, tokens, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().ao_1);
    }
    $this.co_1 = source;
    $this.do_1 = target;
    if (0 === (seen0 & 4))
      $this.eo_1 = emptyList();
    else
      $this.eo_1 = tokens;
    return $this;
  }
  function WordExampleEntry_init_$Create$(seen0, source, target, tokens, serializationConstructorMarker) {
    return WordExampleEntry_init_$Init$(seen0, source, target, tokens, serializationConstructorMarker, objectCreate(protoOf(WordExampleEntry)));
  }
  function WordExampleEntry(source, target, tokens) {
    Companion_getInstance_3();
    tokens = tokens === VOID ? emptyList() : tokens;
    this.co_1 = source;
    this.do_1 = target;
    this.eo_1 = tokens;
  }
  protoOf(WordExampleEntry).toString = function () {
    return 'WordExampleEntry(source=' + this.co_1 + ', target=' + this.do_1 + ', tokens=' + toString_0(this.eo_1) + ')';
  };
  protoOf(WordExampleEntry).hashCode = function () {
    var result = getStringHashCode(this.co_1);
    result = imul(result, 31) + getStringHashCode(this.do_1) | 0;
    result = imul(result, 31) + hashCode(this.eo_1) | 0;
    return result;
  };
  protoOf(WordExampleEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WordExampleEntry))
      return false;
    if (!(this.co_1 === other.co_1))
      return false;
    if (!(this.do_1 === other.do_1))
      return false;
    if (!equals(this.eo_1, other.eo_1))
      return false;
    return true;
  };
  function WordExampleTokenEntry$Companion$$childSerializers$_anonymous__ibkw9d() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function WordExampleTokenEntry$Companion$$childSerializers$_anonymous__ibkw9d_0() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Companion_4() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    var tmp_1 = lazy(tmp_0, WordExampleTokenEntry$Companion$$childSerializers$_anonymous__ibkw9d);
    var tmp_2 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.fo_1 = [null, null, null, null, tmp_1, null, lazy(tmp_2, WordExampleTokenEntry$Companion$$childSerializers$_anonymous__ibkw9d_0), null, null, null, null];
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.tntstudios.snaplingo.format.WordExampleTokenEntry', this, 11);
    tmp0_serialDesc.zi('text', false);
    tmp0_serialDesc.zi('start', false);
    tmp0_serialDesc.zi('end', false);
    tmp0_serialDesc.zi('lemma', true);
    tmp0_serialDesc.zi('meanings', true);
    tmp0_serialDesc.zi('partOfSpeech', true);
    tmp0_serialDesc.zi('grammarCodes', true);
    tmp0_serialDesc.zi('article', true);
    tmp0_serialDesc.zi('gender', true);
    tmp0_serialDesc.zi('plural', true);
    tmp0_serialDesc.zi('romanization', true);
    this.go_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).ho = function (encoder, value) {
    var tmp0_desc = this.go_1;
    var tmp1_output = encoder.re(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().fo_1;
    tmp1_output.of(tmp0_desc, 0, value.io_1);
    tmp1_output.mf(tmp0_desc, 1, value.jo_1);
    tmp1_output.mf(tmp0_desc, 2, value.ko_1);
    if (tmp1_output.vf(tmp0_desc, 3) ? true : !(value.lo_1 == null)) {
      tmp1_output.rf(tmp0_desc, 3, StringSerializer_getInstance(), value.lo_1);
    }
    if (tmp1_output.vf(tmp0_desc, 4) ? true : !equals(value.mo_1, emptyList())) {
      tmp1_output.pf(tmp0_desc, 4, tmp2_cached[4].p1(), value.mo_1);
    }
    if (tmp1_output.vf(tmp0_desc, 5) ? true : !(value.no_1 == null)) {
      tmp1_output.rf(tmp0_desc, 5, StringSerializer_getInstance(), value.no_1);
    }
    if (tmp1_output.vf(tmp0_desc, 6) ? true : !equals(value.oo_1, emptyList())) {
      tmp1_output.pf(tmp0_desc, 6, tmp2_cached[6].p1(), value.oo_1);
    }
    if (tmp1_output.vf(tmp0_desc, 7) ? true : !(value.po_1 == null)) {
      tmp1_output.rf(tmp0_desc, 7, StringSerializer_getInstance(), value.po_1);
    }
    if (tmp1_output.vf(tmp0_desc, 8) ? true : !(value.qo_1 == null)) {
      tmp1_output.rf(tmp0_desc, 8, StringSerializer_getInstance(), value.qo_1);
    }
    if (tmp1_output.vf(tmp0_desc, 9) ? true : !(value.ro_1 == null)) {
      tmp1_output.rf(tmp0_desc, 9, StringSerializer_getInstance(), value.ro_1);
    }
    if (tmp1_output.vf(tmp0_desc, 10) ? true : !(value.so_1 == null)) {
      tmp1_output.rf(tmp0_desc, 10, StringSerializer_getInstance(), value.so_1);
    }
    tmp1_output.se(tmp0_desc);
  };
  protoOf($serializer_4).id = function (encoder, value) {
    return this.ho(encoder, value instanceof WordExampleTokenEntry ? value : THROW_CCE());
  };
  protoOf($serializer_4).jd = function (decoder) {
    var tmp0_desc = this.go_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = null;
    var tmp14_local10 = null;
    var tmp15_input = decoder.re(tmp0_desc);
    var tmp16_cached = Companion_getInstance_4().fo_1;
    if (tmp15_input.bf()) {
      tmp4_local0 = tmp15_input.we(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.ue(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.ue(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.ze(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.xe(tmp0_desc, 4, tmp16_cached[4].p1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.ze(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.xe(tmp0_desc, 6, tmp16_cached[6].p1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.ze(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.ze(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.ze(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.ze(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.cf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.we(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.ue(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.ue(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.ze(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.xe(tmp0_desc, 4, tmp16_cached[4].p1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.ze(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.xe(tmp0_desc, 6, tmp16_cached[6].p1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.ze(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.ze(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.ze(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.ze(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp15_input.se(tmp0_desc);
    return WordExampleTokenEntry_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  };
  protoOf($serializer_4).hd = function () {
    return this.go_1;
  };
  protoOf($serializer_4).bj = function () {
    var tmp0_cached = Companion_getInstance_4().fo_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), tmp0_cached[4].p1(), get_nullable(StringSerializer_getInstance()), tmp0_cached[6].p1(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function WordExampleTokenEntry_init_$Init$(seen0, text, start, end, lemma, meanings, partOfSpeech, grammarCodes, article, gender, plural, romanization, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_4().go_1);
    }
    $this.io_1 = text;
    $this.jo_1 = start;
    $this.ko_1 = end;
    if (0 === (seen0 & 8))
      $this.lo_1 = null;
    else
      $this.lo_1 = lemma;
    if (0 === (seen0 & 16))
      $this.mo_1 = emptyList();
    else
      $this.mo_1 = meanings;
    if (0 === (seen0 & 32))
      $this.no_1 = null;
    else
      $this.no_1 = partOfSpeech;
    if (0 === (seen0 & 64))
      $this.oo_1 = emptyList();
    else
      $this.oo_1 = grammarCodes;
    if (0 === (seen0 & 128))
      $this.po_1 = null;
    else
      $this.po_1 = article;
    if (0 === (seen0 & 256))
      $this.qo_1 = null;
    else
      $this.qo_1 = gender;
    if (0 === (seen0 & 512))
      $this.ro_1 = null;
    else
      $this.ro_1 = plural;
    if (0 === (seen0 & 1024))
      $this.so_1 = null;
    else
      $this.so_1 = romanization;
    return $this;
  }
  function WordExampleTokenEntry_init_$Create$(seen0, text, start, end, lemma, meanings, partOfSpeech, grammarCodes, article, gender, plural, romanization, serializationConstructorMarker) {
    return WordExampleTokenEntry_init_$Init$(seen0, text, start, end, lemma, meanings, partOfSpeech, grammarCodes, article, gender, plural, romanization, serializationConstructorMarker, objectCreate(protoOf(WordExampleTokenEntry)));
  }
  function WordExampleTokenEntry(text, start, end, lemma, meanings, partOfSpeech, grammarCodes, article, gender, plural, romanization) {
    Companion_getInstance_4();
    lemma = lemma === VOID ? null : lemma;
    meanings = meanings === VOID ? emptyList() : meanings;
    partOfSpeech = partOfSpeech === VOID ? null : partOfSpeech;
    grammarCodes = grammarCodes === VOID ? emptyList() : grammarCodes;
    article = article === VOID ? null : article;
    gender = gender === VOID ? null : gender;
    plural = plural === VOID ? null : plural;
    romanization = romanization === VOID ? null : romanization;
    this.io_1 = text;
    this.jo_1 = start;
    this.ko_1 = end;
    this.lo_1 = lemma;
    this.mo_1 = meanings;
    this.no_1 = partOfSpeech;
    this.oo_1 = grammarCodes;
    this.po_1 = article;
    this.qo_1 = gender;
    this.ro_1 = plural;
    this.so_1 = romanization;
  }
  protoOf(WordExampleTokenEntry).toString = function () {
    return 'WordExampleTokenEntry(text=' + this.io_1 + ', start=' + this.jo_1 + ', end=' + this.ko_1 + ', lemma=' + this.lo_1 + ', meanings=' + toString_0(this.mo_1) + ', partOfSpeech=' + this.no_1 + ', grammarCodes=' + toString_0(this.oo_1) + ', article=' + this.po_1 + ', gender=' + this.qo_1 + ', plural=' + this.ro_1 + ', romanization=' + this.so_1 + ')';
  };
  protoOf(WordExampleTokenEntry).hashCode = function () {
    var result = getStringHashCode(this.io_1);
    result = imul(result, 31) + this.jo_1 | 0;
    result = imul(result, 31) + this.ko_1 | 0;
    result = imul(result, 31) + (this.lo_1 == null ? 0 : getStringHashCode(this.lo_1)) | 0;
    result = imul(result, 31) + hashCode(this.mo_1) | 0;
    result = imul(result, 31) + (this.no_1 == null ? 0 : getStringHashCode(this.no_1)) | 0;
    result = imul(result, 31) + hashCode(this.oo_1) | 0;
    result = imul(result, 31) + (this.po_1 == null ? 0 : getStringHashCode(this.po_1)) | 0;
    result = imul(result, 31) + (this.qo_1 == null ? 0 : getStringHashCode(this.qo_1)) | 0;
    result = imul(result, 31) + (this.ro_1 == null ? 0 : getStringHashCode(this.ro_1)) | 0;
    result = imul(result, 31) + (this.so_1 == null ? 0 : getStringHashCode(this.so_1)) | 0;
    return result;
  };
  protoOf(WordExampleTokenEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WordExampleTokenEntry))
      return false;
    if (!(this.io_1 === other.io_1))
      return false;
    if (!(this.jo_1 === other.jo_1))
      return false;
    if (!(this.ko_1 === other.ko_1))
      return false;
    if (!(this.lo_1 == other.lo_1))
      return false;
    if (!equals(this.mo_1, other.mo_1))
      return false;
    if (!(this.no_1 == other.no_1))
      return false;
    if (!equals(this.oo_1, other.oo_1))
      return false;
    if (!(this.po_1 == other.po_1))
      return false;
    if (!(this.qo_1 == other.qo_1))
      return false;
    if (!(this.ro_1 == other.ro_1))
      return false;
    if (!(this.so_1 == other.so_1))
      return false;
    return true;
  };
  function Companion_5() {
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.tntstudios.snaplingo.format.TranslationMetaEntry', this, 3);
    tmp0_serialDesc.zi('source', false);
    tmp0_serialDesc.zi('translatedAtEpochMs', false);
    tmp0_serialDesc.zi('contractVersion', false);
    this.to_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).uo = function (encoder, value) {
    var tmp0_desc = this.to_1;
    var tmp1_output = encoder.re(tmp0_desc);
    tmp1_output.of(tmp0_desc, 0, value.vo_1);
    tmp1_output.nf(tmp0_desc, 1, value.wo_1);
    tmp1_output.mf(tmp0_desc, 2, value.xo_1);
    tmp1_output.se(tmp0_desc);
  };
  protoOf($serializer_5).id = function (encoder, value) {
    return this.uo(encoder, value instanceof TranslationMetaEntry ? value : THROW_CCE());
  };
  protoOf($serializer_5).jd = function (decoder) {
    var tmp0_desc = this.to_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = new Long(0, 0);
    var tmp6_local2 = 0;
    var tmp7_input = decoder.re(tmp0_desc);
    if (tmp7_input.bf()) {
      tmp4_local0 = tmp7_input.we(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ve(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ue(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.cf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.we(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.ve(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ue(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.se(tmp0_desc);
    return TranslationMetaEntry_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_5).hd = function () {
    return this.to_1;
  };
  protoOf($serializer_5).bj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), LongSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function TranslationMetaEntry_init_$Init$(seen0, source, translatedAtEpochMs, contractVersion, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_5().to_1);
    }
    $this.vo_1 = source;
    $this.wo_1 = translatedAtEpochMs;
    $this.xo_1 = contractVersion;
    return $this;
  }
  function TranslationMetaEntry_init_$Create$(seen0, source, translatedAtEpochMs, contractVersion, serializationConstructorMarker) {
    return TranslationMetaEntry_init_$Init$(seen0, source, translatedAtEpochMs, contractVersion, serializationConstructorMarker, objectCreate(protoOf(TranslationMetaEntry)));
  }
  function TranslationMetaEntry(source, translatedAtEpochMs, contractVersion) {
    this.vo_1 = source;
    this.wo_1 = translatedAtEpochMs;
    this.xo_1 = contractVersion;
  }
  protoOf(TranslationMetaEntry).toString = function () {
    return 'TranslationMetaEntry(source=' + this.vo_1 + ', translatedAtEpochMs=' + this.wo_1.toString() + ', contractVersion=' + this.xo_1 + ')';
  };
  protoOf(TranslationMetaEntry).hashCode = function () {
    var result = getStringHashCode(this.vo_1);
    result = imul(result, 31) + this.wo_1.hashCode() | 0;
    result = imul(result, 31) + this.xo_1 | 0;
    return result;
  };
  protoOf(TranslationMetaEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TranslationMetaEntry))
      return false;
    if (!(this.vo_1 === other.vo_1))
      return false;
    if (!equalsLong(this.wo_1, other.wo_1))
      return false;
    if (!(this.xo_1 === other.xo_1))
      return false;
    return true;
  };
  function WordbookManifest$Companion$$childSerializers$_anonymous__qwr2u0() {
    return new ArrayListSerializer($serializer_getInstance_1());
  }
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.yo_1 = [null, lazy(tmp_0, WordbookManifest$Companion$$childSerializers$_anonymous__qwr2u0)];
  }
  protoOf(Companion_6).yk = function () {
    return $serializer_getInstance_6();
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.tntstudios.snaplingo.format.WordbookManifest', this, 2);
    tmp0_serialDesc.zi('version', true);
    tmp0_serialDesc.zi('words', true);
    this.zo_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).ap = function (encoder, value) {
    var tmp0_desc = this.zo_1;
    var tmp1_output = encoder.re(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().yo_1;
    if (tmp1_output.vf(tmp0_desc, 0) ? true : !(value.bp_1 === 1)) {
      tmp1_output.mf(tmp0_desc, 0, value.bp_1);
    }
    if (tmp1_output.vf(tmp0_desc, 1) ? true : !equals(value.cp_1, emptyList())) {
      tmp1_output.pf(tmp0_desc, 1, tmp2_cached[1].p1(), value.cp_1);
    }
    tmp1_output.se(tmp0_desc);
  };
  protoOf($serializer_6).id = function (encoder, value) {
    return this.ap(encoder, value instanceof WordbookManifest ? value : THROW_CCE());
  };
  protoOf($serializer_6).jd = function (decoder) {
    var tmp0_desc = this.zo_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.re(tmp0_desc);
    var tmp7_cached = Companion_getInstance_6().yo_1;
    if (tmp6_input.bf()) {
      tmp4_local0 = tmp6_input.ue(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.xe(tmp0_desc, 1, tmp7_cached[1].p1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.cf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ue(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.xe(tmp0_desc, 1, tmp7_cached[1].p1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.se(tmp0_desc);
    return WordbookManifest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_6).hd = function () {
    return this.zo_1;
  };
  protoOf($serializer_6).bj = function () {
    var tmp0_cached = Companion_getInstance_6().yo_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), tmp0_cached[1].p1()];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function WordbookManifest_init_$Init$(seen0, version, words, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().zo_1);
    }
    if (0 === (seen0 & 1))
      $this.bp_1 = 1;
    else
      $this.bp_1 = version;
    if (0 === (seen0 & 2))
      $this.cp_1 = emptyList();
    else
      $this.cp_1 = words;
    return $this;
  }
  function WordbookManifest_init_$Create$(seen0, version, words, serializationConstructorMarker) {
    return WordbookManifest_init_$Init$(seen0, version, words, serializationConstructorMarker, objectCreate(protoOf(WordbookManifest)));
  }
  function WordbookManifest(version, words) {
    Companion_getInstance_6();
    version = version === VOID ? 1 : version;
    words = words === VOID ? emptyList() : words;
    this.bp_1 = version;
    this.cp_1 = words;
  }
  protoOf(WordbookManifest).toString = function () {
    return 'WordbookManifest(version=' + this.bp_1 + ', words=' + toString_0(this.cp_1) + ')';
  };
  protoOf(WordbookManifest).hashCode = function () {
    var result = this.bp_1;
    result = imul(result, 31) + hashCode(this.cp_1) | 0;
    return result;
  };
  protoOf(WordbookManifest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WordbookManifest))
      return false;
    if (!(this.bp_1 === other.bp_1))
      return false;
    if (!equals(this.cp_1, other.cp_1))
      return false;
    return true;
  };
  function sha256(bytes) {
    return Sha256_getInstance().ep(bytes);
  }
  function Sha256() {
    Sha256_instance = this;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.dp_1 = new Int32Array([1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]);
  }
  protoOf(Sha256).ep = function (message) {
    // Inline function 'kotlin.intArrayOf' call
    var h = new Int32Array([1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225]);
    // Inline function 'kotlin.Long.times' call
    var this_0 = fromInt(message.length);
    var bitLength = multiply(this_0, fromInt(8));
    var padded = new Int8Array(imul(((message.length + 8 | 0) / 64 | 0) + 1 | 0, 64));
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = message.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = message;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, padded, 0, 0, endIndex);
    padded[message.length] = -128;
    var inductionVariable = 0;
    if (inductionVariable < 8)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        padded[(padded.length - 1 | 0) - i | 0] = convertToByte(shiftRightUnsigned(bitLength, imul(8, i)));
      }
       while (inductionVariable < 8);
    var w = new Int32Array(64);
    var offset = 0;
    while (offset < padded.length) {
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < 16)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var j = offset + imul(i_0, 4) | 0;
          w[i_0] = (padded[j] & 255) << 24 | (padded[j + 1 | 0] & 255) << 16 | (padded[j + 2 | 0] & 255) << 8 | padded[j + 3 | 0] & 255;
        }
         while (inductionVariable_0 < 16);
      var inductionVariable_1 = 16;
      if (inductionVariable_1 < 64)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var s0 = rotateRight(w[i_1 - 15 | 0], 7) ^ rotateRight(w[i_1 - 15 | 0], 18) ^ (w[i_1 - 15 | 0] >>> 3 | 0);
          var s1 = rotateRight(w[i_1 - 2 | 0], 17) ^ rotateRight(w[i_1 - 2 | 0], 19) ^ (w[i_1 - 2 | 0] >>> 10 | 0);
          w[i_1] = ((w[i_1 - 16 | 0] + s0 | 0) + w[i_1 - 7 | 0] | 0) + s1 | 0;
        }
         while (inductionVariable_1 < 64);
      var a = h[0];
      var b = h[1];
      var c = h[2];
      var d = h[3];
      var e = h[4];
      var f = h[5];
      var g = h[6];
      var hh = h[7];
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < 64)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var s1_0 = rotateRight(e, 6) ^ rotateRight(e, 11) ^ rotateRight(e, 25);
          var ch = e & f ^ ~e & g;
          var t1 = (((hh + s1_0 | 0) + ch | 0) + this.dp_1[i_2] | 0) + w[i_2] | 0;
          var s0_0 = rotateRight(a, 2) ^ rotateRight(a, 13) ^ rotateRight(a, 22);
          var maj = a & b ^ a & c ^ b & c;
          var t2 = s0_0 + maj | 0;
          hh = g;
          g = f;
          f = e;
          e = d + t1 | 0;
          d = c;
          c = b;
          b = a;
          a = t1 + t2 | 0;
        }
         while (inductionVariable_2 < 64);
      h[0] = h[0] + a | 0;
      h[1] = h[1] + b | 0;
      h[2] = h[2] + c | 0;
      h[3] = h[3] + d | 0;
      h[4] = h[4] + e | 0;
      h[5] = h[5] + f | 0;
      h[6] = h[6] + g | 0;
      h[7] = h[7] + hh | 0;
      offset = offset + 64 | 0;
    }
    var out = new Int8Array(32);
    var inductionVariable_3 = 0;
    if (inductionVariable_3 < 8)
      do {
        var i_3 = inductionVariable_3;
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        out[imul(i_3, 4)] = toByte(h[i_3] >>> 24 | 0);
        out[imul(i_3, 4) + 1 | 0] = toByte(h[i_3] >>> 16 | 0);
        out[imul(i_3, 4) + 2 | 0] = toByte(h[i_3] >>> 8 | 0);
        out[imul(i_3, 4) + 3 | 0] = toByte(h[i_3]);
      }
       while (inductionVariable_3 < 8);
    return out;
  };
  var Sha256_instance;
  function Sha256_getInstance() {
    if (Sha256_instance == null)
      new Sha256();
    return Sha256_instance;
  }
  //region block: post-declaration
  protoOf($serializer).cj = typeParametersSerializers;
  protoOf($serializer_0).cj = typeParametersSerializers;
  protoOf($serializer_1).cj = typeParametersSerializers;
  protoOf($serializer_2).cj = typeParametersSerializers;
  protoOf($serializer_3).cj = typeParametersSerializers;
  protoOf($serializer_4).cj = typeParametersSerializers;
  protoOf($serializer_5).cj = typeParametersSerializers;
  protoOf($serializer_6).cj = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_5 = new Companion_5();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = BackupHeader;
  _.$_$.b = BackupSettings;
  _.$_$.c = Entry;
  _.$_$.d = TranslationMetaEntry;
  _.$_$.e = WordEntry;
  _.$_$.f = WordExampleEntry;
  _.$_$.g = WordExampleTokenEntry;
  _.$_$.h = WordSnapEntry;
  _.$_$.i = WordbookManifest;
  _.$_$.j = Companion_instance;
  _.$_$.k = BackupPackage_getInstance;
  _.$_$.l = Companion_instance_0;
  _.$_$.m = BinaryContainer_getInstance;
  _.$_$.n = CardId_getInstance;
  _.$_$.o = Companion_getInstance_6;
  //endregion
  return _;
}));

//# sourceMappingURL=SnapLingo-shared-format.js.map
