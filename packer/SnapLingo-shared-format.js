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
  var protoOf = kotlin_kotlin.$_$.z4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.n4;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var Unit_instance = kotlin_kotlin.$_$.c;
  var Long = kotlin_kotlin.$_$.p6;
  var equalsLong = kotlin_kotlin.$_$.n3;
  var THROW_CCE = kotlin_kotlin.$_$.q6;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var initMetadataForObject = kotlin_kotlin.$_$.r4;
  var VOID = kotlin_kotlin.$_$.a;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var objectCreate = kotlin_kotlin.$_$.y4;
  var getStringHashCode = kotlin_kotlin.$_$.k4;
  var initMetadataForClass = kotlin_kotlin.$_$.m4;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var getBooleanHashCode = kotlin_kotlin.$_$.i4;
  var charCodeAt = kotlin_kotlin.$_$.c4;
  var toString = kotlin_kotlin.$_$.d1;
  var listOf = kotlin_kotlin.$_$.o2;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.p;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var MapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n;
  var joinToString = kotlin_kotlin.$_$.i2;
  var contentEquals = kotlin_kotlin.$_$.t1;
  var contentHashCode = kotlin_kotlin.$_$.u1;
  var toString_0 = kotlin_kotlin.$_$.b5;
  var charSequenceLength = kotlin_kotlin.$_$.e4;
  var encodeToByteArray = kotlin_kotlin.$_$.n5;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a1;
  var startsWith = kotlin_kotlin.$_$.b6;
  var charSequenceGet = kotlin_kotlin.$_$.d4;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.c1;
  var charArrayOf = kotlin_kotlin.$_$.a4;
  var split = kotlin_kotlin.$_$.z5;
  var compare = kotlin_kotlin.$_$.k3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v;
  var shiftRightUnsigned = kotlin_kotlin.$_$.u3;
  var convertToByte = kotlin_kotlin.$_$.l3;
  var getValue = kotlin_kotlin.$_$.f2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r1;
  var mapCapacity = kotlin_kotlin.$_$.p2;
  var coerceAtLeast = kotlin_kotlin.$_$.d5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.o;
  var fromInt = kotlin_kotlin.$_$.o3;
  var add = kotlin_kotlin.$_$.h3;
  var Exception = kotlin_kotlin.$_$.n6;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s;
  var captureStack = kotlin_kotlin.$_$.z3;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.e1;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.f1;
  var shiftLeft = kotlin_kotlin.$_$.t3;
  var bitwiseAnd = kotlin_kotlin.$_$.i3;
  var bitwiseOr = kotlin_kotlin.$_$.j3;
  var equals = kotlin_kotlin.$_$.h4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r;
  var ulongCompare = kotlin_kotlin.$_$.c7;
  var ulongRemainder = kotlin_kotlin.$_$.e7;
  var convertToInt = kotlin_kotlin.$_$.m3;
  var ulongDivide = kotlin_kotlin.$_$.d7;
  var numberToChar = kotlin_kotlin.$_$.x4;
  var ULong__toString_impl_f9au7k = kotlin_kotlin.$_$.g1;
  var padStart = kotlin_kotlin.$_$.x5;
  var copyToArray = kotlin_kotlin.$_$.y1;
  var isCharSequence = kotlin_kotlin.$_$.t4;
  var trim = kotlin_kotlin.$_$.i6;
  var defineProp = kotlin_kotlin.$_$.g4;
  var LinkedHashMapSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.w6;
  var emptyMap = kotlin_kotlin.$_$.b2;
  var hashCode = kotlin_kotlin.$_$.l4;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var emptyList = kotlin_kotlin.$_$.a2;
  var multiply = kotlin_kotlin.$_$.q3;
  var arrayCopy = kotlin_kotlin.$_$.o1;
  var rotateRight = kotlin_kotlin.$_$.z6;
  var toByte = kotlin_kotlin.$_$.a5;
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
  initMetadataForObject(PartOfSpeech, 'PartOfSpeech');
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
  protoOf(Companion).dl = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.tntstudios.snaplingo.format.BackupHeader', this, 4);
    tmp0_serialDesc.ej('schemaVersion', true);
    tmp0_serialDesc.ej('createdAtEpochMs', true);
    tmp0_serialDesc.ej('appVersion', true);
    tmp0_serialDesc.ej('wordCount', true);
    this.el_1 = tmp0_serialDesc;
  }
  protoOf($serializer).fl = function (encoder, value) {
    var tmp0_desc = this.el_1;
    var tmp1_output = encoder.we(tmp0_desc);
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !(value.gl_1 === 1)) {
      tmp1_output.rf(tmp0_desc, 0, value.gl_1);
    }
    if (tmp1_output.ag(tmp0_desc, 1) ? true : !equalsLong(value.hl_1, new Long(0, 0))) {
      tmp1_output.sf(tmp0_desc, 1, value.hl_1);
    }
    if (tmp1_output.ag(tmp0_desc, 2) ? true : !(value.il_1 === '')) {
      tmp1_output.tf(tmp0_desc, 2, value.il_1);
    }
    if (tmp1_output.ag(tmp0_desc, 3) ? true : !(value.jl_1 === 0)) {
      tmp1_output.rf(tmp0_desc, 3, value.jl_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer).nd = function (encoder, value) {
    return this.fl(encoder, value instanceof BackupHeader ? value : THROW_CCE());
  };
  protoOf($serializer).od = function (decoder) {
    var tmp0_desc = this.el_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = new Long(0, 0);
    var tmp6_local2 = null;
    var tmp7_local3 = 0;
    var tmp8_input = decoder.we(tmp0_desc);
    if (tmp8_input.gf()) {
      tmp4_local0 = tmp8_input.ze(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.af(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.bf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ze(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.ze(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.af(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.bf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ze(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.xe(tmp0_desc);
    return BackupHeader_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer).md = function () {
    return this.el_1;
  };
  protoOf($serializer).gj = function () {
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance().el_1);
    }
    if (0 === (seen0 & 1))
      $this.gl_1 = 1;
    else
      $this.gl_1 = schemaVersion;
    if (0 === (seen0 & 2))
      $this.hl_1 = new Long(0, 0);
    else
      $this.hl_1 = createdAtEpochMs;
    if (0 === (seen0 & 4))
      $this.il_1 = '';
    else
      $this.il_1 = appVersion;
    if (0 === (seen0 & 8))
      $this.jl_1 = 0;
    else
      $this.jl_1 = wordCount;
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
    this.gl_1 = schemaVersion;
    this.hl_1 = createdAtEpochMs;
    this.il_1 = appVersion;
    this.jl_1 = wordCount;
  }
  protoOf(BackupHeader).toString = function () {
    return 'BackupHeader(schemaVersion=' + this.gl_1 + ', createdAtEpochMs=' + this.hl_1.toString() + ', appVersion=' + this.il_1 + ', wordCount=' + this.jl_1 + ')';
  };
  protoOf(BackupHeader).hashCode = function () {
    var result = this.gl_1;
    result = imul(result, 31) + this.hl_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.il_1) | 0;
    result = imul(result, 31) + this.jl_1 | 0;
    return result;
  };
  protoOf(BackupHeader).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BackupHeader))
      return false;
    if (!(this.gl_1 === other.gl_1))
      return false;
    if (!equalsLong(this.hl_1, other.hl_1))
      return false;
    if (!(this.il_1 === other.il_1))
      return false;
    if (!(this.jl_1 === other.jl_1))
      return false;
    return true;
  };
  function Companion_0() {
  }
  protoOf(Companion_0).dl = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.tntstudios.snaplingo.format.BackupSettings', this, 5);
    tmp0_serialDesc.ej('targetLanguage', true);
    tmp0_serialDesc.ej('knownLanguage', true);
    tmp0_serialDesc.ej('cameraFlashMode', true);
    tmp0_serialDesc.ej('uiSoundsEnabled', true);
    tmp0_serialDesc.ej('hapticsEnabled', true);
    this.kl_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).ll = function (encoder, value) {
    var tmp0_desc = this.kl_1;
    var tmp1_output = encoder.we(tmp0_desc);
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !(value.ml_1 == null)) {
      tmp1_output.wf(tmp0_desc, 0, StringSerializer_getInstance(), value.ml_1);
    }
    if (tmp1_output.ag(tmp0_desc, 1) ? true : !(value.nl_1 == null)) {
      tmp1_output.wf(tmp0_desc, 1, StringSerializer_getInstance(), value.nl_1);
    }
    if (tmp1_output.ag(tmp0_desc, 2) ? true : !(value.ol_1 == null)) {
      tmp1_output.wf(tmp0_desc, 2, StringSerializer_getInstance(), value.ol_1);
    }
    if (tmp1_output.ag(tmp0_desc, 3) ? true : !(value.pl_1 == null)) {
      tmp1_output.wf(tmp0_desc, 3, BooleanSerializer_getInstance(), value.pl_1);
    }
    if (tmp1_output.ag(tmp0_desc, 4) ? true : !(value.ql_1 == null)) {
      tmp1_output.wf(tmp0_desc, 4, BooleanSerializer_getInstance(), value.ql_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_0).nd = function (encoder, value) {
    return this.ll(encoder, value instanceof BackupSettings ? value : THROW_CCE());
  };
  protoOf($serializer_0).od = function (decoder) {
    var tmp0_desc = this.kl_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.we(tmp0_desc);
    if (tmp9_input.gf()) {
      tmp4_local0 = tmp9_input.ef(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.ef(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.ef(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.ef(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.ef(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.ef(tmp0_desc, 0, StringSerializer_getInstance(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.ef(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.ef(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.ef(tmp0_desc, 3, BooleanSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.ef(tmp0_desc, 4, BooleanSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.xe(tmp0_desc);
    return BackupSettings_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  protoOf($serializer_0).md = function () {
    return this.kl_1;
  };
  protoOf($serializer_0).gj = function () {
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().kl_1);
    }
    if (0 === (seen0 & 1))
      $this.ml_1 = null;
    else
      $this.ml_1 = targetLanguage;
    if (0 === (seen0 & 2))
      $this.nl_1 = null;
    else
      $this.nl_1 = knownLanguage;
    if (0 === (seen0 & 4))
      $this.ol_1 = null;
    else
      $this.ol_1 = cameraFlashMode;
    if (0 === (seen0 & 8))
      $this.pl_1 = null;
    else
      $this.pl_1 = uiSoundsEnabled;
    if (0 === (seen0 & 16))
      $this.ql_1 = null;
    else
      $this.ql_1 = hapticsEnabled;
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
    this.ml_1 = targetLanguage;
    this.nl_1 = knownLanguage;
    this.ol_1 = cameraFlashMode;
    this.pl_1 = uiSoundsEnabled;
    this.ql_1 = hapticsEnabled;
  }
  protoOf(BackupSettings).toString = function () {
    return 'BackupSettings(targetLanguage=' + this.ml_1 + ', knownLanguage=' + this.nl_1 + ', cameraFlashMode=' + this.ol_1 + ', uiSoundsEnabled=' + this.pl_1 + ', hapticsEnabled=' + this.ql_1 + ')';
  };
  protoOf(BackupSettings).hashCode = function () {
    var result = this.ml_1 == null ? 0 : getStringHashCode(this.ml_1);
    result = imul(result, 31) + (this.nl_1 == null ? 0 : getStringHashCode(this.nl_1)) | 0;
    result = imul(result, 31) + (this.ol_1 == null ? 0 : getStringHashCode(this.ol_1)) | 0;
    result = imul(result, 31) + (this.pl_1 == null ? 0 : getBooleanHashCode(this.pl_1)) | 0;
    result = imul(result, 31) + (this.ql_1 == null ? 0 : getBooleanHashCode(this.ql_1)) | 0;
    return result;
  };
  protoOf(BackupSettings).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BackupSettings))
      return false;
    if (!(this.ml_1 == other.ml_1))
      return false;
    if (!(this.nl_1 == other.nl_1))
      return false;
    if (!(this.ol_1 == other.ol_1))
      return false;
    if (!(this.pl_1 == other.pl_1))
      return false;
    if (!(this.ql_1 == other.ql_1))
      return false;
    return true;
  };
  function BackupPackage$sha256Hex$lambda(b) {
    var v = b & 255;
    return toString(charCodeAt('0123456789abcdef', v >>> 4 | 0)) + toString(charCodeAt('0123456789abcdef', v & 15));
  }
  function BackupPackage() {
    BackupPackage_instance = this;
    this.rl_1 = '.vlbackup';
    this.sl_1 = '.slbackup';
    this.tl_1 = listOf(['.vlbackup', '.slbackup']);
    this.ul_1 = 'backup.json';
    this.vl_1 = 'manifest.json';
    this.wl_1 = 'doodles.json';
    this.xl_1 = 'settings.json';
    this.yl_1 = 'words/';
    this.zl_1 = '.jpg';
    this.am_1 = '.png';
    this.bm_1 = listOf(['manifest.json', 'doodles.json', 'settings.json', 'backup.json']);
    this.cm_1 = Regex_init_$Create$('^word-[0-9]{1,17}-[a-z0-9]{4}$');
    this.dm_1 = MapSerializer(serializer(StringCompanionObject_instance), serializer(StringCompanionObject_instance));
    this.em_1 = '0123456789abcdef';
  }
  protoOf(BackupPackage).fm = function (id) {
    return 'words/' + id + '.png';
  };
  protoOf(BackupPackage).gm = function (bytes) {
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
    this.hm_1 = maxEntries;
    this.im_1 = maxNameBytes;
    this.jm_1 = maxEntryBytes;
    this.km_1 = maxTotalBytes;
  }
  protoOf(Limits).toString = function () {
    return 'Limits(maxEntries=' + this.hm_1 + ', maxNameBytes=' + this.im_1 + ', maxEntryBytes=' + this.jm_1.toString() + ', maxTotalBytes=' + this.km_1.toString() + ')';
  };
  protoOf(Limits).hashCode = function () {
    var result = this.hm_1;
    result = imul(result, 31) + this.im_1 | 0;
    result = imul(result, 31) + this.jm_1.hashCode() | 0;
    result = imul(result, 31) + this.km_1.hashCode() | 0;
    return result;
  };
  protoOf(Limits).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Limits))
      return false;
    if (!(this.hm_1 === other.hm_1))
      return false;
    if (!(this.im_1 === other.im_1))
      return false;
    if (!equalsLong(this.jm_1, other.jm_1))
      return false;
    if (!equalsLong(this.km_1, other.km_1))
      return false;
    return true;
  };
  function Entry(name, content) {
    this.lm_1 = name;
    this.mm_1 = content;
  }
  protoOf(Entry).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof Entry) {
      tmp_0 = other.lm_1 === this.lm_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = contentEquals(other.mm_1, this.mm_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Entry).hashCode = function () {
    return imul(getStringHashCode(this.lm_1), 31) + contentHashCode(this.mm_1) | 0;
  };
  protoOf(Entry).toString = function () {
    return 'Entry(name=' + this.lm_1 + ', content=' + toString_0(this.mm_1) + ')';
  };
  function validateName($this, name, limits) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(name) === 0)
      throw new ContainerFormatException('Empty entry name.');
    if (encodeToByteArray(name).length > limits.im_1) {
      throw new ContainerFormatException('Entry name exceeds ' + limits.im_1 + ' UTF-8 bytes.');
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
      return getValue($byName, name).mm_1;
    };
  }
  function BinaryContainer() {
    BinaryContainer_instance = this;
    this.nm_1 = 'SLBK1';
    this.om_1 = 10000;
    this.pm_1 = 512;
    this.qm_1 = new Long(26214400, 0);
    this.rm_1 = new Long(524288000, 0);
    this.sm_1 = 32;
    this.tm_1 = 5;
  }
  protoOf(BinaryContainer).um = function (magic, entries, limits, sink) {
    // Inline function 'kotlin.collections.associateBy' call
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(entries, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = entries.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var tmp$ret$2 = element.lm_1;
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
      var tmp$ret$5 = item.lm_1;
      destination_0.e(tmp$ret$5);
    }
    var tmp = destination_0;
    this.vm(magic, tmp, limits, BinaryContainer$encode$lambda(byName), sink);
  };
  protoOf(BinaryContainer).wm = function (magic, entries, limits, sink, $super) {
    limits = limits === VOID ? new Limits() : limits;
    var tmp;
    if ($super === VOID) {
      this.um(magic, entries, limits, sink);
      tmp = Unit_instance;
    } else {
      tmp = $super.um.call(this, magic, entries, limits, sink);
    }
    return tmp;
  };
  protoOf(BinaryContainer).vm = function (magic, names, limits, contentOf, sink) {
    // Inline function 'kotlin.require' call
    if (!(magic.length === 5)) {
      var message = 'Magic must be 5 ASCII chars.';
      throw IllegalArgumentException_init_$Create$(toString_0(message));
    }
    if (names.k() > limits.hm_1) {
      throw new ContainerFormatException('Too many entries: ' + names.k() + ' > ' + limits.hm_1 + '.');
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
      if (compare(fromInt(content.length), limits.jm_1) > 0) {
        throw new ContainerFormatException("Entry '" + name_0 + "' exceeds " + limits.jm_1.toString() + ' bytes.');
      }
      total = add(total, fromInt(content.length));
      if (compare(total, limits.km_1) > 0) {
        throw new ContainerFormatException('Package exceeds ' + limits.km_1.toString() + ' bytes.');
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
    this.xm_1 = _ULong___init__impl__c78o9k(new Long(1410065408, 2));
    this.ym_1 = _ULong___init__impl__c78o9k(new Long(1679616, 0));
    this.zm_1 = '0123456789abcdefghijklmnopqrstuvwxyz';
  }
  protoOf(CardId).an = function (key, salt) {
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
  protoOf(CardId).bn = function (deckId) {
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
  function PartOfSpeech() {
    PartOfSpeech_instance = this;
    this.cn_1 = listOf(['noun', 'proper noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'postposition', 'conjunction', 'article', 'determiner', 'particle', 'interjection', 'numeral', 'phrase', 'expression', 'other']);
  }
  protoOf(PartOfSpeech).dn = function () {
    return this.cn_1;
  };
  protoOf(PartOfSpeech).knownValues = function () {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.cn_1;
    return copyToArray(this_0);
  };
  protoOf(PartOfSpeech).normalize = function (raw) {
    var tmp;
    if (raw == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.text.trim' call
      tmp = toString_0(trim(isCharSequence(raw) ? raw : THROW_CCE()));
    }
    var tmp1_safe_receiver = tmp;
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = tmp1_safe_receiver.toLowerCase();
    }
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = tmp_0;
    var value = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    return value === 'number' ? 'numeral' : value;
  };
  protoOf(PartOfSpeech).isKnown = function (raw) {
    return this.cn_1.k1(this.normalize(raw));
  };
  protoOf(PartOfSpeech).group = function (raw) {
    switch (this.normalize(raw)) {
      case 'noun':
      case 'verb':
      case 'adjective':
      case 'phrase':
        return this.normalize(raw);
      default:
        return 'other';
    }
  };
  var PartOfSpeech_instance;
  function PartOfSpeech_getInstance() {
    if (PartOfSpeech_instance == null)
      new PartOfSpeech();
    return PartOfSpeech_instance;
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
    tmp.en_1 = [null, null, null, null, null, null, null, tmp_1, null, null, lazy(tmp_2, WordSnapEntry$Companion$$childSerializers$_anonymous__u4ivsk_0)];
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
    tmp0_serialDesc.ej('id', false);
    tmp0_serialDesc.ej('word', false);
    tmp0_serialDesc.ej('language', false);
    tmp0_serialDesc.ej('createdAtEpochMs', false);
    tmp0_serialDesc.ej('isFavorite', true);
    tmp0_serialDesc.ej('hasImage', true);
    tmp0_serialDesc.ej('hasCutout', true);
    tmp0_serialDesc.ej('translations', true);
    tmp0_serialDesc.ej('glossLanguage', true);
    tmp0_serialDesc.ej('glossVerified', true);
    tmp0_serialDesc.ej('translationMeta', true);
    this.fn_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).gn = function (encoder, value) {
    var tmp0_desc = this.fn_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_1().en_1;
    tmp1_output.tf(tmp0_desc, 0, value.hn_1);
    tmp1_output.uf(tmp0_desc, 1, $serializer_getInstance_2(), value.in_1);
    tmp1_output.tf(tmp0_desc, 2, value.jn_1);
    tmp1_output.sf(tmp0_desc, 3, value.kn_1);
    if (tmp1_output.ag(tmp0_desc, 4) ? true : !(value.ln_1 === false)) {
      tmp1_output.qf(tmp0_desc, 4, value.ln_1);
    }
    if (tmp1_output.ag(tmp0_desc, 5) ? true : !(value.mn_1 === false)) {
      tmp1_output.qf(tmp0_desc, 5, value.mn_1);
    }
    if (tmp1_output.ag(tmp0_desc, 6) ? true : !(value.nn_1 === false)) {
      tmp1_output.qf(tmp0_desc, 6, value.nn_1);
    }
    if (tmp1_output.ag(tmp0_desc, 7) ? true : !equals(value.on_1, emptyMap())) {
      tmp1_output.uf(tmp0_desc, 7, tmp2_cached[7].p1(), value.on_1);
    }
    if (tmp1_output.ag(tmp0_desc, 8) ? true : !(value.pn_1 == null)) {
      tmp1_output.wf(tmp0_desc, 8, StringSerializer_getInstance(), value.pn_1);
    }
    if (tmp1_output.ag(tmp0_desc, 9) ? true : !(value.qn_1 === false)) {
      tmp1_output.qf(tmp0_desc, 9, value.qn_1);
    }
    if (tmp1_output.ag(tmp0_desc, 10) ? true : !equals(value.rn_1, emptyMap())) {
      tmp1_output.uf(tmp0_desc, 10, tmp2_cached[10].p1(), value.rn_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_1).nd = function (encoder, value) {
    return this.gn(encoder, value instanceof WordSnapEntry ? value : THROW_CCE());
  };
  protoOf($serializer_1).od = function (decoder) {
    var tmp0_desc = this.fn_1;
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
    var tmp15_input = decoder.we(tmp0_desc);
    var tmp16_cached = Companion_getInstance_1().en_1;
    if (tmp15_input.gf()) {
      tmp4_local0 = tmp15_input.bf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.cf(tmp0_desc, 1, $serializer_getInstance_2(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.bf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.af(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.ye(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.ye(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.ye(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.cf(tmp0_desc, 7, tmp16_cached[7].p1(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.ef(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.ye(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.cf(tmp0_desc, 10, tmp16_cached[10].p1(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.bf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.cf(tmp0_desc, 1, $serializer_getInstance_2(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.bf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.af(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.ye(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.ye(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.ye(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.cf(tmp0_desc, 7, tmp16_cached[7].p1(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.ef(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.ye(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.cf(tmp0_desc, 10, tmp16_cached[10].p1(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp15_input.xe(tmp0_desc);
    return WordSnapEntry_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  };
  protoOf($serializer_1).md = function () {
    return this.fn_1;
  };
  protoOf($serializer_1).gj = function () {
    var tmp0_cached = Companion_getInstance_1().en_1;
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_1().fn_1);
    }
    $this.hn_1 = id;
    $this.in_1 = word;
    $this.jn_1 = language;
    $this.kn_1 = createdAtEpochMs;
    if (0 === (seen0 & 16))
      $this.ln_1 = false;
    else
      $this.ln_1 = isFavorite;
    if (0 === (seen0 & 32))
      $this.mn_1 = false;
    else
      $this.mn_1 = hasImage;
    if (0 === (seen0 & 64))
      $this.nn_1 = false;
    else
      $this.nn_1 = hasCutout;
    if (0 === (seen0 & 128))
      $this.on_1 = emptyMap();
    else
      $this.on_1 = translations;
    if (0 === (seen0 & 256))
      $this.pn_1 = null;
    else
      $this.pn_1 = glossLanguage;
    if (0 === (seen0 & 512))
      $this.qn_1 = false;
    else
      $this.qn_1 = glossVerified;
    if (0 === (seen0 & 1024))
      $this.rn_1 = emptyMap();
    else
      $this.rn_1 = translationMeta;
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
    this.hn_1 = id;
    this.in_1 = word;
    this.jn_1 = language;
    this.kn_1 = createdAtEpochMs;
    this.ln_1 = isFavorite;
    this.mn_1 = hasImage;
    this.nn_1 = hasCutout;
    this.on_1 = translations;
    this.pn_1 = glossLanguage;
    this.qn_1 = glossVerified;
    this.rn_1 = translationMeta;
  }
  protoOf(WordSnapEntry).toString = function () {
    return 'WordSnapEntry(id=' + this.hn_1 + ', word=' + this.in_1.toString() + ', language=' + this.jn_1 + ', createdAtEpochMs=' + this.kn_1.toString() + ', isFavorite=' + this.ln_1 + ', hasImage=' + this.mn_1 + ', hasCutout=' + this.nn_1 + ', translations=' + toString_0(this.on_1) + ', glossLanguage=' + this.pn_1 + ', glossVerified=' + this.qn_1 + ', translationMeta=' + toString_0(this.rn_1) + ')';
  };
  protoOf(WordSnapEntry).hashCode = function () {
    var result = getStringHashCode(this.hn_1);
    result = imul(result, 31) + this.in_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.jn_1) | 0;
    result = imul(result, 31) + this.kn_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.ln_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.mn_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.nn_1) | 0;
    result = imul(result, 31) + hashCode(this.on_1) | 0;
    result = imul(result, 31) + (this.pn_1 == null ? 0 : getStringHashCode(this.pn_1)) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.qn_1) | 0;
    result = imul(result, 31) + hashCode(this.rn_1) | 0;
    return result;
  };
  protoOf(WordSnapEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WordSnapEntry))
      return false;
    if (!(this.hn_1 === other.hn_1))
      return false;
    if (!this.in_1.equals(other.in_1))
      return false;
    if (!(this.jn_1 === other.jn_1))
      return false;
    if (!equalsLong(this.kn_1, other.kn_1))
      return false;
    if (!(this.ln_1 === other.ln_1))
      return false;
    if (!(this.mn_1 === other.mn_1))
      return false;
    if (!(this.nn_1 === other.nn_1))
      return false;
    if (!equals(this.on_1, other.on_1))
      return false;
    if (!(this.pn_1 == other.pn_1))
      return false;
    if (!(this.qn_1 === other.qn_1))
      return false;
    if (!equals(this.rn_1, other.rn_1))
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
    tmp.sn_1 = [null, null, null, null, tmp_1, null, null, null, null, null, lazy(tmp_2, WordEntry$Companion$$childSerializers$_anonymous__sa94bi_0)];
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
    tmp0_serialDesc.ej('text', false);
    tmp0_serialDesc.ej('translation', false);
    tmp0_serialDesc.ej('phonetic', false);
    tmp0_serialDesc.ej('partOfSpeech', true);
    tmp0_serialDesc.ej('examples', true);
    tmp0_serialDesc.ej('article', true);
    tmp0_serialDesc.ej('gender', true);
    tmp0_serialDesc.ej('plural', true);
    tmp0_serialDesc.ej('romanization', true);
    tmp0_serialDesc.ej('classifier', true);
    tmp0_serialDesc.ej('components', true);
    this.tn_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).un = function (encoder, value) {
    var tmp0_desc = this.tn_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_2().sn_1;
    tmp1_output.tf(tmp0_desc, 0, value.vn_1);
    tmp1_output.tf(tmp0_desc, 1, value.wn_1);
    tmp1_output.tf(tmp0_desc, 2, value.xn_1);
    if (tmp1_output.ag(tmp0_desc, 3) ? true : !(value.yn_1 == null)) {
      tmp1_output.wf(tmp0_desc, 3, StringSerializer_getInstance(), value.yn_1);
    }
    if (tmp1_output.ag(tmp0_desc, 4) ? true : !equals(value.zn_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 4, tmp2_cached[4].p1(), value.zn_1);
    }
    if (tmp1_output.ag(tmp0_desc, 5) ? true : !(value.ao_1 == null)) {
      tmp1_output.wf(tmp0_desc, 5, StringSerializer_getInstance(), value.ao_1);
    }
    if (tmp1_output.ag(tmp0_desc, 6) ? true : !(value.bo_1 == null)) {
      tmp1_output.wf(tmp0_desc, 6, StringSerializer_getInstance(), value.bo_1);
    }
    if (tmp1_output.ag(tmp0_desc, 7) ? true : !(value.co_1 == null)) {
      tmp1_output.wf(tmp0_desc, 7, StringSerializer_getInstance(), value.co_1);
    }
    if (tmp1_output.ag(tmp0_desc, 8) ? true : !(value.do_1 == null)) {
      tmp1_output.wf(tmp0_desc, 8, StringSerializer_getInstance(), value.do_1);
    }
    if (tmp1_output.ag(tmp0_desc, 9) ? true : !(value.eo_1 == null)) {
      tmp1_output.wf(tmp0_desc, 9, StringSerializer_getInstance(), value.eo_1);
    }
    if (tmp1_output.ag(tmp0_desc, 10) ? true : !equals(value.fo_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 10, tmp2_cached[10].p1(), value.fo_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_2).nd = function (encoder, value) {
    return this.un(encoder, value instanceof WordEntry ? value : THROW_CCE());
  };
  protoOf($serializer_2).od = function (decoder) {
    var tmp0_desc = this.tn_1;
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
    var tmp15_input = decoder.we(tmp0_desc);
    var tmp16_cached = Companion_getInstance_2().sn_1;
    if (tmp15_input.gf()) {
      tmp4_local0 = tmp15_input.bf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.bf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.bf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.ef(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.cf(tmp0_desc, 4, tmp16_cached[4].p1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.ef(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.ef(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.ef(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.ef(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.ef(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.cf(tmp0_desc, 10, tmp16_cached[10].p1(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.bf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.bf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.bf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.ef(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.cf(tmp0_desc, 4, tmp16_cached[4].p1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.ef(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.ef(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.ef(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.ef(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.ef(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.cf(tmp0_desc, 10, tmp16_cached[10].p1(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp15_input.xe(tmp0_desc);
    return WordEntry_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  };
  protoOf($serializer_2).md = function () {
    return this.tn_1;
  };
  protoOf($serializer_2).gj = function () {
    var tmp0_cached = Companion_getInstance_2().sn_1;
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_2().tn_1);
    }
    $this.vn_1 = text;
    $this.wn_1 = translation;
    $this.xn_1 = phonetic;
    if (0 === (seen0 & 8))
      $this.yn_1 = null;
    else
      $this.yn_1 = partOfSpeech;
    if (0 === (seen0 & 16))
      $this.zn_1 = emptyList();
    else
      $this.zn_1 = examples;
    if (0 === (seen0 & 32))
      $this.ao_1 = null;
    else
      $this.ao_1 = article;
    if (0 === (seen0 & 64))
      $this.bo_1 = null;
    else
      $this.bo_1 = gender;
    if (0 === (seen0 & 128))
      $this.co_1 = null;
    else
      $this.co_1 = plural;
    if (0 === (seen0 & 256))
      $this.do_1 = null;
    else
      $this.do_1 = romanization;
    if (0 === (seen0 & 512))
      $this.eo_1 = null;
    else
      $this.eo_1 = classifier;
    if (0 === (seen0 & 1024))
      $this.fo_1 = emptyList();
    else
      $this.fo_1 = components;
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
    this.vn_1 = text;
    this.wn_1 = translation;
    this.xn_1 = phonetic;
    this.yn_1 = partOfSpeech;
    this.zn_1 = examples;
    this.ao_1 = article;
    this.bo_1 = gender;
    this.co_1 = plural;
    this.do_1 = romanization;
    this.eo_1 = classifier;
    this.fo_1 = components;
  }
  protoOf(WordEntry).toString = function () {
    return 'WordEntry(text=' + this.vn_1 + ', translation=' + this.wn_1 + ', phonetic=' + this.xn_1 + ', partOfSpeech=' + this.yn_1 + ', examples=' + toString_0(this.zn_1) + ', article=' + this.ao_1 + ', gender=' + this.bo_1 + ', plural=' + this.co_1 + ', romanization=' + this.do_1 + ', classifier=' + this.eo_1 + ', components=' + toString_0(this.fo_1) + ')';
  };
  protoOf(WordEntry).hashCode = function () {
    var result = getStringHashCode(this.vn_1);
    result = imul(result, 31) + getStringHashCode(this.wn_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.xn_1) | 0;
    result = imul(result, 31) + (this.yn_1 == null ? 0 : getStringHashCode(this.yn_1)) | 0;
    result = imul(result, 31) + hashCode(this.zn_1) | 0;
    result = imul(result, 31) + (this.ao_1 == null ? 0 : getStringHashCode(this.ao_1)) | 0;
    result = imul(result, 31) + (this.bo_1 == null ? 0 : getStringHashCode(this.bo_1)) | 0;
    result = imul(result, 31) + (this.co_1 == null ? 0 : getStringHashCode(this.co_1)) | 0;
    result = imul(result, 31) + (this.do_1 == null ? 0 : getStringHashCode(this.do_1)) | 0;
    result = imul(result, 31) + (this.eo_1 == null ? 0 : getStringHashCode(this.eo_1)) | 0;
    result = imul(result, 31) + hashCode(this.fo_1) | 0;
    return result;
  };
  protoOf(WordEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WordEntry))
      return false;
    if (!(this.vn_1 === other.vn_1))
      return false;
    if (!(this.wn_1 === other.wn_1))
      return false;
    if (!(this.xn_1 === other.xn_1))
      return false;
    if (!(this.yn_1 == other.yn_1))
      return false;
    if (!equals(this.zn_1, other.zn_1))
      return false;
    if (!(this.ao_1 == other.ao_1))
      return false;
    if (!(this.bo_1 == other.bo_1))
      return false;
    if (!(this.co_1 == other.co_1))
      return false;
    if (!(this.do_1 == other.do_1))
      return false;
    if (!(this.eo_1 == other.eo_1))
      return false;
    if (!equals(this.fo_1, other.fo_1))
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
    tmp.go_1 = [null, null, lazy(tmp_0, WordExampleEntry$Companion$$childSerializers$_anonymous__ixk3l4)];
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
    tmp0_serialDesc.ej('source', false);
    tmp0_serialDesc.ej('target', false);
    tmp0_serialDesc.ej('tokens', true);
    this.ho_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).io = function (encoder, value) {
    var tmp0_desc = this.ho_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().go_1;
    tmp1_output.tf(tmp0_desc, 0, value.jo_1);
    tmp1_output.tf(tmp0_desc, 1, value.ko_1);
    if (tmp1_output.ag(tmp0_desc, 2) ? true : !equals(value.lo_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 2, tmp2_cached[2].p1(), value.lo_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_3).nd = function (encoder, value) {
    return this.io(encoder, value instanceof WordExampleEntry ? value : THROW_CCE());
  };
  protoOf($serializer_3).od = function (decoder) {
    var tmp0_desc = this.ho_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.we(tmp0_desc);
    var tmp8_cached = Companion_getInstance_3().go_1;
    if (tmp7_input.gf()) {
      tmp4_local0 = tmp7_input.bf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.bf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.cf(tmp0_desc, 2, tmp8_cached[2].p1(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.bf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.bf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.cf(tmp0_desc, 2, tmp8_cached[2].p1(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.xe(tmp0_desc);
    return WordExampleEntry_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_3).md = function () {
    return this.ho_1;
  };
  protoOf($serializer_3).gj = function () {
    var tmp0_cached = Companion_getInstance_3().go_1;
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_3().ho_1);
    }
    $this.jo_1 = source;
    $this.ko_1 = target;
    if (0 === (seen0 & 4))
      $this.lo_1 = emptyList();
    else
      $this.lo_1 = tokens;
    return $this;
  }
  function WordExampleEntry_init_$Create$(seen0, source, target, tokens, serializationConstructorMarker) {
    return WordExampleEntry_init_$Init$(seen0, source, target, tokens, serializationConstructorMarker, objectCreate(protoOf(WordExampleEntry)));
  }
  function WordExampleEntry(source, target, tokens) {
    Companion_getInstance_3();
    tokens = tokens === VOID ? emptyList() : tokens;
    this.jo_1 = source;
    this.ko_1 = target;
    this.lo_1 = tokens;
  }
  protoOf(WordExampleEntry).toString = function () {
    return 'WordExampleEntry(source=' + this.jo_1 + ', target=' + this.ko_1 + ', tokens=' + toString_0(this.lo_1) + ')';
  };
  protoOf(WordExampleEntry).hashCode = function () {
    var result = getStringHashCode(this.jo_1);
    result = imul(result, 31) + getStringHashCode(this.ko_1) | 0;
    result = imul(result, 31) + hashCode(this.lo_1) | 0;
    return result;
  };
  protoOf(WordExampleEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WordExampleEntry))
      return false;
    if (!(this.jo_1 === other.jo_1))
      return false;
    if (!(this.ko_1 === other.ko_1))
      return false;
    if (!equals(this.lo_1, other.lo_1))
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
    tmp.mo_1 = [null, null, null, null, tmp_1, null, lazy(tmp_2, WordExampleTokenEntry$Companion$$childSerializers$_anonymous__ibkw9d_0), null, null, null, null];
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
    tmp0_serialDesc.ej('text', false);
    tmp0_serialDesc.ej('start', false);
    tmp0_serialDesc.ej('end', false);
    tmp0_serialDesc.ej('lemma', true);
    tmp0_serialDesc.ej('meanings', true);
    tmp0_serialDesc.ej('partOfSpeech', true);
    tmp0_serialDesc.ej('grammarCodes', true);
    tmp0_serialDesc.ej('article', true);
    tmp0_serialDesc.ej('gender', true);
    tmp0_serialDesc.ej('plural', true);
    tmp0_serialDesc.ej('romanization', true);
    this.no_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).oo = function (encoder, value) {
    var tmp0_desc = this.no_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().mo_1;
    tmp1_output.tf(tmp0_desc, 0, value.po_1);
    tmp1_output.rf(tmp0_desc, 1, value.qo_1);
    tmp1_output.rf(tmp0_desc, 2, value.ro_1);
    if (tmp1_output.ag(tmp0_desc, 3) ? true : !(value.so_1 == null)) {
      tmp1_output.wf(tmp0_desc, 3, StringSerializer_getInstance(), value.so_1);
    }
    if (tmp1_output.ag(tmp0_desc, 4) ? true : !equals(value.to_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 4, tmp2_cached[4].p1(), value.to_1);
    }
    if (tmp1_output.ag(tmp0_desc, 5) ? true : !(value.uo_1 == null)) {
      tmp1_output.wf(tmp0_desc, 5, StringSerializer_getInstance(), value.uo_1);
    }
    if (tmp1_output.ag(tmp0_desc, 6) ? true : !equals(value.vo_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 6, tmp2_cached[6].p1(), value.vo_1);
    }
    if (tmp1_output.ag(tmp0_desc, 7) ? true : !(value.wo_1 == null)) {
      tmp1_output.wf(tmp0_desc, 7, StringSerializer_getInstance(), value.wo_1);
    }
    if (tmp1_output.ag(tmp0_desc, 8) ? true : !(value.xo_1 == null)) {
      tmp1_output.wf(tmp0_desc, 8, StringSerializer_getInstance(), value.xo_1);
    }
    if (tmp1_output.ag(tmp0_desc, 9) ? true : !(value.yo_1 == null)) {
      tmp1_output.wf(tmp0_desc, 9, StringSerializer_getInstance(), value.yo_1);
    }
    if (tmp1_output.ag(tmp0_desc, 10) ? true : !(value.zo_1 == null)) {
      tmp1_output.wf(tmp0_desc, 10, StringSerializer_getInstance(), value.zo_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_4).nd = function (encoder, value) {
    return this.oo(encoder, value instanceof WordExampleTokenEntry ? value : THROW_CCE());
  };
  protoOf($serializer_4).od = function (decoder) {
    var tmp0_desc = this.no_1;
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
    var tmp15_input = decoder.we(tmp0_desc);
    var tmp16_cached = Companion_getInstance_4().mo_1;
    if (tmp15_input.gf()) {
      tmp4_local0 = tmp15_input.bf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.ze(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.ze(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.ef(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.cf(tmp0_desc, 4, tmp16_cached[4].p1(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.ef(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.cf(tmp0_desc, 6, tmp16_cached[6].p1(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.ef(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.ef(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.ef(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.ef(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp15_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp15_input.bf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp15_input.ze(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp15_input.ze(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.ef(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.cf(tmp0_desc, 4, tmp16_cached[4].p1(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.ef(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.cf(tmp0_desc, 6, tmp16_cached[6].p1(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.ef(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.ef(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.ef(tmp0_desc, 9, StringSerializer_getInstance(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.ef(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp15_input.xe(tmp0_desc);
    return WordExampleTokenEntry_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  };
  protoOf($serializer_4).md = function () {
    return this.no_1;
  };
  protoOf($serializer_4).gj = function () {
    var tmp0_cached = Companion_getInstance_4().mo_1;
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_4().no_1);
    }
    $this.po_1 = text;
    $this.qo_1 = start;
    $this.ro_1 = end;
    if (0 === (seen0 & 8))
      $this.so_1 = null;
    else
      $this.so_1 = lemma;
    if (0 === (seen0 & 16))
      $this.to_1 = emptyList();
    else
      $this.to_1 = meanings;
    if (0 === (seen0 & 32))
      $this.uo_1 = null;
    else
      $this.uo_1 = partOfSpeech;
    if (0 === (seen0 & 64))
      $this.vo_1 = emptyList();
    else
      $this.vo_1 = grammarCodes;
    if (0 === (seen0 & 128))
      $this.wo_1 = null;
    else
      $this.wo_1 = article;
    if (0 === (seen0 & 256))
      $this.xo_1 = null;
    else
      $this.xo_1 = gender;
    if (0 === (seen0 & 512))
      $this.yo_1 = null;
    else
      $this.yo_1 = plural;
    if (0 === (seen0 & 1024))
      $this.zo_1 = null;
    else
      $this.zo_1 = romanization;
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
    this.po_1 = text;
    this.qo_1 = start;
    this.ro_1 = end;
    this.so_1 = lemma;
    this.to_1 = meanings;
    this.uo_1 = partOfSpeech;
    this.vo_1 = grammarCodes;
    this.wo_1 = article;
    this.xo_1 = gender;
    this.yo_1 = plural;
    this.zo_1 = romanization;
  }
  protoOf(WordExampleTokenEntry).toString = function () {
    return 'WordExampleTokenEntry(text=' + this.po_1 + ', start=' + this.qo_1 + ', end=' + this.ro_1 + ', lemma=' + this.so_1 + ', meanings=' + toString_0(this.to_1) + ', partOfSpeech=' + this.uo_1 + ', grammarCodes=' + toString_0(this.vo_1) + ', article=' + this.wo_1 + ', gender=' + this.xo_1 + ', plural=' + this.yo_1 + ', romanization=' + this.zo_1 + ')';
  };
  protoOf(WordExampleTokenEntry).hashCode = function () {
    var result = getStringHashCode(this.po_1);
    result = imul(result, 31) + this.qo_1 | 0;
    result = imul(result, 31) + this.ro_1 | 0;
    result = imul(result, 31) + (this.so_1 == null ? 0 : getStringHashCode(this.so_1)) | 0;
    result = imul(result, 31) + hashCode(this.to_1) | 0;
    result = imul(result, 31) + (this.uo_1 == null ? 0 : getStringHashCode(this.uo_1)) | 0;
    result = imul(result, 31) + hashCode(this.vo_1) | 0;
    result = imul(result, 31) + (this.wo_1 == null ? 0 : getStringHashCode(this.wo_1)) | 0;
    result = imul(result, 31) + (this.xo_1 == null ? 0 : getStringHashCode(this.xo_1)) | 0;
    result = imul(result, 31) + (this.yo_1 == null ? 0 : getStringHashCode(this.yo_1)) | 0;
    result = imul(result, 31) + (this.zo_1 == null ? 0 : getStringHashCode(this.zo_1)) | 0;
    return result;
  };
  protoOf(WordExampleTokenEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WordExampleTokenEntry))
      return false;
    if (!(this.po_1 === other.po_1))
      return false;
    if (!(this.qo_1 === other.qo_1))
      return false;
    if (!(this.ro_1 === other.ro_1))
      return false;
    if (!(this.so_1 == other.so_1))
      return false;
    if (!equals(this.to_1, other.to_1))
      return false;
    if (!(this.uo_1 == other.uo_1))
      return false;
    if (!equals(this.vo_1, other.vo_1))
      return false;
    if (!(this.wo_1 == other.wo_1))
      return false;
    if (!(this.xo_1 == other.xo_1))
      return false;
    if (!(this.yo_1 == other.yo_1))
      return false;
    if (!(this.zo_1 == other.zo_1))
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
    tmp0_serialDesc.ej('source', false);
    tmp0_serialDesc.ej('translatedAtEpochMs', false);
    tmp0_serialDesc.ej('contractVersion', false);
    this.ap_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).bp = function (encoder, value) {
    var tmp0_desc = this.ap_1;
    var tmp1_output = encoder.we(tmp0_desc);
    tmp1_output.tf(tmp0_desc, 0, value.cp_1);
    tmp1_output.sf(tmp0_desc, 1, value.dp_1);
    tmp1_output.rf(tmp0_desc, 2, value.ep_1);
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_5).nd = function (encoder, value) {
    return this.bp(encoder, value instanceof TranslationMetaEntry ? value : THROW_CCE());
  };
  protoOf($serializer_5).od = function (decoder) {
    var tmp0_desc = this.ap_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = new Long(0, 0);
    var tmp6_local2 = 0;
    var tmp7_input = decoder.we(tmp0_desc);
    if (tmp7_input.gf()) {
      tmp4_local0 = tmp7_input.bf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.af(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.ze(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.bf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.af(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.ze(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.xe(tmp0_desc);
    return TranslationMetaEntry_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_5).md = function () {
    return this.ap_1;
  };
  protoOf($serializer_5).gj = function () {
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_5().ap_1);
    }
    $this.cp_1 = source;
    $this.dp_1 = translatedAtEpochMs;
    $this.ep_1 = contractVersion;
    return $this;
  }
  function TranslationMetaEntry_init_$Create$(seen0, source, translatedAtEpochMs, contractVersion, serializationConstructorMarker) {
    return TranslationMetaEntry_init_$Init$(seen0, source, translatedAtEpochMs, contractVersion, serializationConstructorMarker, objectCreate(protoOf(TranslationMetaEntry)));
  }
  function TranslationMetaEntry(source, translatedAtEpochMs, contractVersion) {
    this.cp_1 = source;
    this.dp_1 = translatedAtEpochMs;
    this.ep_1 = contractVersion;
  }
  protoOf(TranslationMetaEntry).toString = function () {
    return 'TranslationMetaEntry(source=' + this.cp_1 + ', translatedAtEpochMs=' + this.dp_1.toString() + ', contractVersion=' + this.ep_1 + ')';
  };
  protoOf(TranslationMetaEntry).hashCode = function () {
    var result = getStringHashCode(this.cp_1);
    result = imul(result, 31) + this.dp_1.hashCode() | 0;
    result = imul(result, 31) + this.ep_1 | 0;
    return result;
  };
  protoOf(TranslationMetaEntry).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TranslationMetaEntry))
      return false;
    if (!(this.cp_1 === other.cp_1))
      return false;
    if (!equalsLong(this.dp_1, other.dp_1))
      return false;
    if (!(this.ep_1 === other.ep_1))
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
    tmp.fp_1 = [null, lazy(tmp_0, WordbookManifest$Companion$$childSerializers$_anonymous__qwr2u0)];
  }
  protoOf(Companion_6).dl = function () {
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
    tmp0_serialDesc.ej('version', true);
    tmp0_serialDesc.ej('words', true);
    this.gp_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).hp = function (encoder, value) {
    var tmp0_desc = this.gp_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().fp_1;
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !(value.ip_1 === 1)) {
      tmp1_output.rf(tmp0_desc, 0, value.ip_1);
    }
    if (tmp1_output.ag(tmp0_desc, 1) ? true : !equals(value.jp_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 1, tmp2_cached[1].p1(), value.jp_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_6).nd = function (encoder, value) {
    return this.hp(encoder, value instanceof WordbookManifest ? value : THROW_CCE());
  };
  protoOf($serializer_6).od = function (decoder) {
    var tmp0_desc = this.gp_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.we(tmp0_desc);
    var tmp7_cached = Companion_getInstance_6().fp_1;
    if (tmp6_input.gf()) {
      tmp4_local0 = tmp6_input.ze(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.cf(tmp0_desc, 1, tmp7_cached[1].p1(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.ze(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.cf(tmp0_desc, 1, tmp7_cached[1].p1(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.xe(tmp0_desc);
    return WordbookManifest_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_6).md = function () {
    return this.gp_1;
  };
  protoOf($serializer_6).gj = function () {
    var tmp0_cached = Companion_getInstance_6().fp_1;
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().gp_1);
    }
    if (0 === (seen0 & 1))
      $this.ip_1 = 1;
    else
      $this.ip_1 = version;
    if (0 === (seen0 & 2))
      $this.jp_1 = emptyList();
    else
      $this.jp_1 = words;
    return $this;
  }
  function WordbookManifest_init_$Create$(seen0, version, words, serializationConstructorMarker) {
    return WordbookManifest_init_$Init$(seen0, version, words, serializationConstructorMarker, objectCreate(protoOf(WordbookManifest)));
  }
  function WordbookManifest(version, words) {
    Companion_getInstance_6();
    version = version === VOID ? 1 : version;
    words = words === VOID ? emptyList() : words;
    this.ip_1 = version;
    this.jp_1 = words;
  }
  protoOf(WordbookManifest).toString = function () {
    return 'WordbookManifest(version=' + this.ip_1 + ', words=' + toString_0(this.jp_1) + ')';
  };
  protoOf(WordbookManifest).hashCode = function () {
    var result = this.ip_1;
    result = imul(result, 31) + hashCode(this.jp_1) | 0;
    return result;
  };
  protoOf(WordbookManifest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof WordbookManifest))
      return false;
    if (!(this.ip_1 === other.ip_1))
      return false;
    if (!equals(this.jp_1, other.jp_1))
      return false;
    return true;
  };
  function sha256(bytes) {
    return Sha256_getInstance().lp(bytes);
  }
  function Sha256() {
    Sha256_instance = this;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp.kp_1 = new Int32Array([1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998]);
  }
  protoOf(Sha256).lp = function (message) {
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
          var t1 = (((hh + s1_0 | 0) + ch | 0) + this.kp_1[i_2] | 0) + w[i_2] | 0;
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
  protoOf($serializer).hj = typeParametersSerializers;
  protoOf($serializer_0).hj = typeParametersSerializers;
  protoOf($serializer_1).hj = typeParametersSerializers;
  protoOf($serializer_2).hj = typeParametersSerializers;
  protoOf($serializer_3).hj = typeParametersSerializers;
  protoOf($serializer_4).hj = typeParametersSerializers;
  protoOf($serializer_5).hj = typeParametersSerializers;
  protoOf($serializer_6).hj = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_5 = new Companion_5();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var com = _.com || (_.com = {});
    var tntstudios = com.tntstudios || (com.tntstudios = {});
    var snaplingo = tntstudios.snaplingo || (tntstudios.snaplingo = {});
    var format = snaplingo.format || (snaplingo.format = {});
    defineProp(format, 'PartOfSpeech', PartOfSpeech_getInstance, VOID, true);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
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
  _.$_$.o = PartOfSpeech_getInstance;
  _.$_$.p = Companion_getInstance_6;
  //endregion
  return _;
}));

//# sourceMappingURL=SnapLingo-shared-format.js.map
