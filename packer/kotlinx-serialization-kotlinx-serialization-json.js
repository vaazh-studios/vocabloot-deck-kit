(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-json'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-json'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-json'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-json'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var EmptySerializersModule = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m1;
  var protoOf = kotlin_kotlin.$_$.u4;
  var initMetadataForObject = kotlin_kotlin.$_$.n4;
  var VOID = kotlin_kotlin.$_$.a;
  var Unit_instance = kotlin_kotlin.$_$.c;
  var initMetadataForClass = kotlin_kotlin.$_$.i4;
  var toString = kotlin_kotlin.$_$.w4;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v;
  var charSequenceLength = kotlin_kotlin.$_$.b4;
  var charSequenceGet = kotlin_kotlin.$_$.a4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a1;
  var equals = kotlin_kotlin.$_$.d4;
  var toString_0 = kotlin_kotlin.$_$.r6;
  var Enum = kotlin_kotlin.$_$.d6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r;
  var hashCode = kotlin_kotlin.$_$.h4;
  var joinToString = kotlin_kotlin.$_$.i2;
  var THROW_CCE = kotlin_kotlin.$_$.h6;
  var KtMap = kotlin_kotlin.$_$.l1;
  var getKClassFromExpression = kotlin_kotlin.$_$.d5;
  var getBooleanHashCode = kotlin_kotlin.$_$.e4;
  var getStringHashCode = kotlin_kotlin.$_$.g4;
  var KtList = kotlin_kotlin.$_$.k1;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var fromInt = kotlin_kotlin.$_$.l3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var captureStack = kotlin_kotlin.$_$.w3;
  var charSequenceSubSequence = kotlin_kotlin.$_$.c4;
  var coerceAtLeast = kotlin_kotlin.$_$.y4;
  var coerceAtMost = kotlin_kotlin.$_$.z4;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var Collection = kotlin_kotlin.$_$.i1;
  var isInterface = kotlin_kotlin.$_$.p4;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var singleOrNull = kotlin_kotlin.$_$.u2;
  var emptyMap = kotlin_kotlin.$_$.a2;
  var getValue = kotlin_kotlin.$_$.e2;
  var copyOf = kotlin_kotlin.$_$.v1;
  var copyOf_0 = kotlin_kotlin.$_$.w1;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.b6;
  var invoke = kotlin_kotlin.$_$.m6;
  var CoroutineImpl = kotlin_kotlin.$_$.b3;
  var DeepRecursiveScope = kotlin_kotlin.$_$.c6;
  var Unit = kotlin_kotlin.$_$.j6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.a3;
  var initMetadataForLambda = kotlin_kotlin.$_$.m4;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.k4;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var getKClass = kotlin_kotlin.$_$.e5;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var ensureNotNull = kotlin_kotlin.$_$.l6;
  var substringBefore = kotlin_kotlin.$_$.v5;
  var removeSuffix = kotlin_kotlin.$_$.q5;
  var substringAfter = kotlin_kotlin.$_$.u5;
  var contains = kotlin_kotlin.$_$.h5;
  var plus = kotlin_kotlin.$_$.p6;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var convertToInt = kotlin_kotlin.$_$.j3;
  var equalsLong = kotlin_kotlin.$_$.k3;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var objectCreate = kotlin_kotlin.$_$.t4;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.o6;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.c1;
  var numberToChar = kotlin_kotlin.$_$.s4;
  var charCodeAt = kotlin_kotlin.$_$.z3;
  var equals_0 = kotlin_kotlin.$_$.j5;
  var toString_1 = kotlin_kotlin.$_$.d1;
  var toByte = kotlin_kotlin.$_$.v4;
  var startsWith = kotlin_kotlin.$_$.s5;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var IllegalArgumentException = kotlin_kotlin.$_$.f6;
  var numberRangeToNumber = kotlin_kotlin.$_$.r4;
  var ClosedRange = kotlin_kotlin.$_$.x4;
  var contains_0 = kotlin_kotlin.$_$.a5;
  var emptySet = kotlin_kotlin.$_$.b2;
  var plus_0 = kotlin_kotlin.$_$.r2;
  var toInt = kotlin_kotlin.$_$.z5;
  var toList = kotlin_kotlin.$_$.w2;
  var enumEntries = kotlin_kotlin.$_$.c3;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var toNumber = kotlin_kotlin.$_$.t3;
  var last = kotlin_kotlin.$_$.m2;
  var removeLast = kotlin_kotlin.$_$.t2;
  var lastIndexOf = kotlin_kotlin.$_$.o5;
  var Long = kotlin_kotlin.$_$.g6;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.b1;
  var multiply = kotlin_kotlin.$_$.n3;
  var add = kotlin_kotlin.$_$.e3;
  var subtract = kotlin_kotlin.$_$.s3;
  var compare = kotlin_kotlin.$_$.h3;
  var numberToLong = kotlin_kotlin.$_$.p3;
  var negate = kotlin_kotlin.$_$.o3;
  var charArray = kotlin_kotlin.$_$.y3;
  var indexOf = kotlin_kotlin.$_$.k5;
  var indexOf_0 = kotlin_kotlin.$_$.l5;
  var substring = kotlin_kotlin.$_$.w5;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.q;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.h;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Json, 'Json');
  initMetadataForObject(Default, 'Default', VOID, Json);
  initMetadataForClass(JsonBuilder, 'JsonBuilder');
  initMetadataForClass(JsonImpl, 'JsonImpl', VOID, Json);
  initMetadataForClass(JsonClassDiscriminator, 'JsonClassDiscriminator');
  initMetadataForClass(JsonIgnoreUnknownKeys, 'JsonIgnoreUnknownKeys');
  initMetadataForClass(JsonNames, 'JsonNames');
  initMetadataForClass(JsonConfiguration, 'JsonConfiguration');
  initMetadataForClass(ClassDiscriminatorMode, 'ClassDiscriminatorMode', VOID, Enum);
  initMetadataForCompanion(Companion);
  initMetadataForClass(JsonElement, 'JsonElement');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(JsonObject, 'JsonObject', VOID, JsonElement, [KtMap]);
  initMetadataForClass(JsonPrimitive, 'JsonPrimitive', VOID, JsonElement);
  initMetadataForObject(JsonNull, 'JsonNull', VOID, JsonPrimitive);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(JsonLiteral, 'JsonLiteral', VOID, JsonPrimitive);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(JsonArray, 'JsonArray', VOID, JsonElement, [KtList]);
  initMetadataForClass(Composer, 'Composer');
  initMetadataForClass(ComposerWithPrettyPrint, 'ComposerWithPrettyPrint', VOID, Composer);
  initMetadataForClass(JsonElementMarker, 'JsonElementMarker');
  initMetadataForClass(JsonException, 'JsonException', VOID, SerializationException);
  initMetadataForClass(JsonEncodingException, 'JsonEncodingException', VOID, JsonException);
  initMetadataForClass(JsonDecodingException, 'JsonDecodingException', VOID, JsonException);
  initMetadataForObject(Tombstone, 'Tombstone');
  initMetadataForClass(JsonPath, 'JsonPath', JsonPath);
  initMetadataForClass(JsonSerializersModuleValidator, 'JsonSerializersModuleValidator', VOID, VOID, [SerializersModuleCollector]);
  initMetadataForLambda(JsonTreeReader$readDeepRecursive$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForCoroutine($readObjectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(JsonTreeReader, 'JsonTreeReader', VOID, VOID, VOID, [1]);
  initMetadataForClass(Key, 'Key', Key);
  initMetadataForClass(DescriptorSchemaCache, 'DescriptorSchemaCache', DescriptorSchemaCache);
  initMetadataForClass(DiscriminatorHolder, 'DiscriminatorHolder');
  initMetadataForClass(StreamingJsonDecoder, 'StreamingJsonDecoder', VOID, AbstractDecoder, [Decoder, CompositeDecoder]);
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [CompositeEncoder, Encoder]);
  initMetadataForClass(AbstractJsonTreeDecoder, 'AbstractJsonTreeDecoder', VOID, NamedValueDecoder, [Decoder, CompositeDecoder]);
  initMetadataForClass(JsonTreeDecoder, 'JsonTreeDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeListDecoder, 'JsonTreeListDecoder', VOID, AbstractJsonTreeDecoder);
  initMetadataForClass(JsonTreeMapDecoder, 'JsonTreeMapDecoder', VOID, JsonTreeDecoder);
  initMetadataForClass(WriteMode, 'WriteMode', VOID, Enum);
  initMetadataForClass(AbstractJsonLexer, 'AbstractJsonLexer');
  initMetadataForObject(CharMappings, 'CharMappings');
  initMetadataForClass(StringJsonLexer, 'StringJsonLexer', VOID, AbstractJsonLexer);
  initMetadataForClass(StringJsonLexerWithComments, 'StringJsonLexerWithComments', VOID, StringJsonLexer);
  initMetadataForClass(JsonToStringWriter, 'JsonToStringWriter', JsonToStringWriter);
  //endregion
  function Default() {
    Default_instance = this;
    Json.call(this, new JsonConfiguration(), EmptySerializersModule());
  }
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Json(configuration, serializersModule) {
    Default_getInstance();
    this.hp_1 = configuration;
    this.ip_1 = serializersModule;
    this.jp_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).af = function () {
    return this.ip_1;
  };
  protoOf(Json).kp = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.np();
    }
  };
  protoOf(Json).lp = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.hd(), null);
    var result = input.qe(deserializer);
    lexer.aq();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.tq();
    return new JsonImpl(conf, builder.sq_1);
  }
  function JsonBuilder(json) {
    this.bq_1 = json.hp_1.uq_1;
    this.cq_1 = json.hp_1.zq_1;
    this.dq_1 = json.hp_1.vq_1;
    this.eq_1 = json.hp_1.wq_1;
    this.fq_1 = json.hp_1.yq_1;
    this.gq_1 = json.hp_1.ar_1;
    this.hq_1 = json.hp_1.br_1;
    this.iq_1 = json.hp_1.dr_1;
    this.jq_1 = json.hp_1.kr_1;
    this.kq_1 = json.hp_1.fr_1;
    this.lq_1 = json.hp_1.gr_1;
    this.mq_1 = json.hp_1.hr_1;
    this.nq_1 = json.hp_1.ir_1;
    this.oq_1 = json.hp_1.jr_1;
    this.pq_1 = json.hp_1.er_1;
    this.qq_1 = json.hp_1.xq_1;
    this.rq_1 = json.hp_1.cr_1;
    this.sq_1 = json.af();
  }
  protoOf(JsonBuilder).tq = function () {
    if (this.rq_1) {
      // Inline function 'kotlin.require' call
      if (!(this.iq_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.jq_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.fq_1) {
      // Inline function 'kotlin.require' call
      if (!(this.gq_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.gq_1 === '    ')) {
      var tmp0 = this.gq_1;
      var tmp$ret$6;
      $l$block: {
        // Inline function 'kotlin.text.all' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element === _Char___init__impl__6a9atx(32) || element === _Char___init__impl__6a9atx(9) || element === _Char___init__impl__6a9atx(13) || element === _Char___init__impl__6a9atx(10))) {
            tmp$ret$6 = false;
            break $l$block;
          }
        }
        tmp$ret$6 = true;
      }
      var allWhitespaces = tmp$ret$6;
      // Inline function 'kotlin.require' call
      if (!allWhitespaces) {
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.gq_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.bq_1, this.dq_1, this.eq_1, this.qq_1, this.fq_1, this.cq_1, this.gq_1, this.hq_1, this.rq_1, this.iq_1, this.pq_1, this.kq_1, this.lq_1, this.mq_1, this.nq_1, this.oq_1, this.jq_1);
  };
  function validateConfiguration($this) {
    if (equals($this.af(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.hp_1);
    $this.af().jk(collector);
  }
  function JsonImpl(configuration, module_0) {
    Json.call(this, configuration, module_0);
    validateConfiguration(this);
  }
  function JsonClassDiscriminator() {
  }
  function JsonIgnoreUnknownKeys() {
  }
  function JsonNames() {
  }
  function JsonConfiguration(encodeDefaults, ignoreUnknownKeys, isLenient, allowStructuredMapKeys, prettyPrint, explicitNulls, prettyPrintIndent, coerceInputValues, useArrayPolymorphism, classDiscriminator, allowSpecialFloatingPointValues, useAlternativeNames, namingStrategy, decodeEnumsCaseInsensitive, allowTrailingComma, allowComments, classDiscriminatorMode) {
    encodeDefaults = encodeDefaults === VOID ? false : encodeDefaults;
    ignoreUnknownKeys = ignoreUnknownKeys === VOID ? false : ignoreUnknownKeys;
    isLenient = isLenient === VOID ? false : isLenient;
    allowStructuredMapKeys = allowStructuredMapKeys === VOID ? false : allowStructuredMapKeys;
    prettyPrint = prettyPrint === VOID ? false : prettyPrint;
    explicitNulls = explicitNulls === VOID ? true : explicitNulls;
    prettyPrintIndent = prettyPrintIndent === VOID ? '    ' : prettyPrintIndent;
    coerceInputValues = coerceInputValues === VOID ? false : coerceInputValues;
    useArrayPolymorphism = useArrayPolymorphism === VOID ? false : useArrayPolymorphism;
    classDiscriminator = classDiscriminator === VOID ? 'type' : classDiscriminator;
    allowSpecialFloatingPointValues = allowSpecialFloatingPointValues === VOID ? false : allowSpecialFloatingPointValues;
    useAlternativeNames = useAlternativeNames === VOID ? true : useAlternativeNames;
    namingStrategy = namingStrategy === VOID ? null : namingStrategy;
    decodeEnumsCaseInsensitive = decodeEnumsCaseInsensitive === VOID ? false : decodeEnumsCaseInsensitive;
    allowTrailingComma = allowTrailingComma === VOID ? false : allowTrailingComma;
    allowComments = allowComments === VOID ? false : allowComments;
    classDiscriminatorMode = classDiscriminatorMode === VOID ? ClassDiscriminatorMode_POLYMORPHIC_getInstance() : classDiscriminatorMode;
    this.uq_1 = encodeDefaults;
    this.vq_1 = ignoreUnknownKeys;
    this.wq_1 = isLenient;
    this.xq_1 = allowStructuredMapKeys;
    this.yq_1 = prettyPrint;
    this.zq_1 = explicitNulls;
    this.ar_1 = prettyPrintIndent;
    this.br_1 = coerceInputValues;
    this.cr_1 = useArrayPolymorphism;
    this.dr_1 = classDiscriminator;
    this.er_1 = allowSpecialFloatingPointValues;
    this.fr_1 = useAlternativeNames;
    this.gr_1 = namingStrategy;
    this.hr_1 = decodeEnumsCaseInsensitive;
    this.ir_1 = allowTrailingComma;
    this.jr_1 = allowComments;
    this.kr_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.uq_1 + ', ignoreUnknownKeys=' + this.vq_1 + ', isLenient=' + this.wq_1 + ', ' + ('allowStructuredMapKeys=' + this.xq_1 + ', prettyPrint=' + this.yq_1 + ', explicitNulls=' + this.zq_1 + ', ') + ("prettyPrintIndent='" + this.ar_1 + "', coerceInputValues=" + this.br_1 + ', useArrayPolymorphism=' + this.cr_1 + ', ') + ("classDiscriminator='" + this.dr_1 + "', allowSpecialFloatingPointValues=" + this.er_1 + ', ') + ('useAlternativeNames=' + this.fr_1 + ', namingStrategy=' + toString_0(this.gr_1) + ', decodeEnumsCaseInsensitive=' + this.hr_1 + ', ') + ('allowTrailingComma=' + this.ir_1 + ', allowComments=' + this.jr_1 + ', classDiscriminatorMode=' + this.kr_1.toString() + ')');
  };
  var ClassDiscriminatorMode_NONE_instance;
  var ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance;
  var ClassDiscriminatorMode_POLYMORPHIC_instance;
  var ClassDiscriminatorMode_entriesInitialized;
  function ClassDiscriminatorMode_initEntries() {
    if (ClassDiscriminatorMode_entriesInitialized)
      return Unit_instance;
    ClassDiscriminatorMode_entriesInitialized = true;
    ClassDiscriminatorMode_NONE_instance = new ClassDiscriminatorMode('NONE', 0);
    ClassDiscriminatorMode_ALL_JSON_OBJECTS_instance = new ClassDiscriminatorMode('ALL_JSON_OBJECTS', 1);
    ClassDiscriminatorMode_POLYMORPHIC_instance = new ClassDiscriminatorMode('POLYMORPHIC', 2);
  }
  function ClassDiscriminatorMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClassDiscriminatorMode_NONE_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_NONE_instance;
  }
  function ClassDiscriminatorMode_POLYMORPHIC_getInstance() {
    ClassDiscriminatorMode_initEntries();
    return ClassDiscriminatorMode_POLYMORPHIC_instance;
  }
  var jsonUnquotedLiteralDescriptor;
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function JsonElement() {
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function JsonObject$toString$lambda(_destruct__k2r9zo) {
    // Inline function 'kotlin.collections.component1' call
    var k = _destruct__k2r9zo.o1();
    // Inline function 'kotlin.collections.component2' call
    var v = _destruct__k2r9zo.p1();
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    printQuoted(this_0, k);
    this_0.k6(_Char___init__impl__6a9atx(58));
    this_0.i6(v);
    return this_0.toString();
  }
  function JsonObject(content) {
    JsonElement.call(this);
    this.lr_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.lr_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.lr_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.lr_1.v1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).l = function () {
    return this.lr_1.l();
  };
  protoOf(JsonObject).mr = function (key) {
    return this.lr_1.q1(key);
  };
  protoOf(JsonObject).q1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.mr((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).nr = function (key) {
    return this.lr_1.s1(key);
  };
  protoOf(JsonObject).s1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.nr((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).k = function () {
    return this.lr_1.k();
  };
  protoOf(JsonObject).t1 = function () {
    return this.lr_1.t1();
  };
  protoOf(JsonObject).u1 = function () {
    return this.lr_1.u1();
  };
  protoOf(JsonObject).v1 = function () {
    return this.lr_1.v1();
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.or_1 = 'null';
  }
  protoOf(JsonNull).pr = function () {
    return this.or_1;
  };
  var JsonNull_instance;
  function JsonNull_getInstance() {
    if (JsonNull_instance == null)
      new JsonNull();
    return JsonNull_instance;
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function JsonPrimitive() {
    JsonElement.call(this);
  }
  protoOf(JsonPrimitive).toString = function () {
    return this.pr();
  };
  function JsonPrimitive_0(value) {
    _init_properties_JsonElement_kt__7cbdc2();
    if (value == null)
      return JsonNull_getInstance();
    return new JsonLiteral(value, true);
  }
  function JsonLiteral(body, isString, coerceToInlineType) {
    coerceToInlineType = coerceToInlineType === VOID ? null : coerceToInlineType;
    JsonPrimitive.call(this);
    this.qr_1 = isString;
    this.rr_1 = coerceToInlineType;
    this.sr_1 = toString(body);
    if (!(this.rr_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.rr_1.xd()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).pr = function () {
    return this.sr_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.qr_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.sr_1);
      tmp = this_0.toString();
    } else {
      tmp = this.sr_1;
    }
    return tmp;
  };
  protoOf(JsonLiteral).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof JsonLiteral))
      THROW_CCE();
    if (!(this.qr_1 === other.qr_1))
      return false;
    if (!(this.sr_1 === other.sr_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.qr_1);
    result = imul(31, result) + getStringHashCode(this.sr_1) | 0;
    return result;
  };
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function JsonArray(content) {
    JsonElement.call(this);
    this.tr_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.tr_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.tr_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.tr_1, ',', '[', ']');
  };
  protoOf(JsonArray).l = function () {
    return this.tr_1.l();
  };
  protoOf(JsonArray).g = function () {
    return this.tr_1.g();
  };
  protoOf(JsonArray).j = function (index) {
    return this.tr_1.j(index);
  };
  protoOf(JsonArray).ur = function (element) {
    return this.tr_1.l1(element);
  };
  protoOf(JsonArray).l1 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.ur(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).m1 = function (fromIndex, toIndex) {
    return this.tr_1.m1(fromIndex, toIndex);
  };
  protoOf(JsonArray).k = function () {
    return this.tr_1.k();
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.pr());
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return (new StringJsonLexer(_this__u8e3s4.pr())).vr();
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.pr();
    }
    return tmp;
  }
  function get_jsonPrimitive(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof JsonPrimitive ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      error(_this__u8e3s4, 'JsonPrimitive');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function error(_this__u8e3s4, element) {
    _init_properties_JsonElement_kt__7cbdc2();
    throw IllegalArgumentException_init_$Create$('Element ' + toString(getKClassFromExpression(_this__u8e3s4)) + ' is not a ' + element);
  }
  var properties_initialized_JsonElement_kt_abxy8s;
  function _init_properties_JsonElement_kt__7cbdc2() {
    if (!properties_initialized_JsonElement_kt_abxy8s) {
      properties_initialized_JsonElement_kt_abxy8s = true;
      jsonUnquotedLiteralDescriptor = InlinePrimitiveDescriptor('kotlinx.serialization.json.JsonUnquotedLiteral', serializer(StringCompanionObject_instance));
    }
  }
  function Composer(writer) {
    this.wr_1 = writer;
    this.xr_1 = true;
  }
  protoOf(Composer).yr = function () {
    this.xr_1 = true;
  };
  protoOf(Composer).zr = function () {
    return Unit_instance;
  };
  protoOf(Composer).as = function () {
    this.xr_1 = false;
  };
  protoOf(Composer).bs = function () {
    this.xr_1 = false;
  };
  protoOf(Composer).cs = function () {
    return Unit_instance;
  };
  protoOf(Composer).ds = function (v) {
    return this.wr_1.es(v);
  };
  protoOf(Composer).fs = function (v) {
    return this.wr_1.gs(v);
  };
  protoOf(Composer).hs = function (v) {
    return this.wr_1.is(fromInt(v));
  };
  protoOf(Composer).js = function (v) {
    return this.wr_1.is(v);
  };
  protoOf(Composer).ks = function (v) {
    return this.wr_1.gs(v.toString());
  };
  protoOf(Composer).ls = function (value) {
    return this.wr_1.ms(value);
  };
  function Composer_0(sb, json) {
    return json.hp_1.yq_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.ps_1 = json;
    this.qs_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).yr = function () {
    this.xr_1 = true;
    this.qs_1 = this.qs_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).zr = function () {
    this.qs_1 = this.qs_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).as = function () {
    this.xr_1 = false;
    this.fs('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.qs_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.fs(this.ps_1.hp_1.ar_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).bs = function () {
    if (this.xr_1)
      this.xr_1 = false;
    else {
      this.as();
    }
  };
  protoOf(ComposerWithPrettyPrint).cs = function () {
    this.ds(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.ss_1 = (!descriptor.ee(index) && descriptor.de(index).pd());
    return $this.ss_1;
  }
  function JsonElementMarker$readIfAbsent$ref(p0) {
    var l = function (_this__u8e3s4, p0_0) {
      var tmp0 = p0;
      return readIfAbsent(tmp0, _this__u8e3s4, p0_0);
    };
    l.callableName = 'readIfAbsent';
    return l;
  }
  function JsonElementMarker(descriptor) {
    var tmp = this;
    tmp.rs_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.ss_1 = false;
  }
  protoOf(JsonElementMarker).ts = function (index) {
    this.rs_1.xh(index);
  };
  protoOf(JsonElementMarker).us = function () {
    return this.rs_1.yh();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.vs('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.wp_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.vd() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.wd().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
  }
  function JsonDecodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonDecodingException);
  }
  function JsonDecodingException_0(offset, message, input) {
    return JsonDecodingException_1(offset, message + '\nJSON input: ' + toString(minify(input, offset)));
  }
  function JsonDecodingException_1(offset, message) {
    return new JsonDecodingException(offset >= 0 ? 'Unexpected JSON token at offset ' + offset + ': ' + message : message);
  }
  function minify(_this__u8e3s4, offset) {
    offset = offset === VOID ? -1 : offset;
    if (charSequenceLength(_this__u8e3s4) < 200)
      return _this__u8e3s4;
    if (offset === -1) {
      var start = charSequenceLength(_this__u8e3s4) - 60 | 0;
      if (start <= 0)
        return _this__u8e3s4;
      // Inline function 'kotlin.text.substring' call
      var endIndex = charSequenceLength(_this__u8e3s4);
      return '.....' + toString(charSequenceSubSequence(_this__u8e3s4, start, endIndex));
    }
    var start_0 = offset - 30 | 0;
    var end = offset + 30 | 0;
    var prefix = start_0 <= 0 ? '' : '.....';
    var suffix = end >= charSequenceLength(_this__u8e3s4) ? '' : '.....';
    var tmp2 = coerceAtLeast(start_0, 0);
    // Inline function 'kotlin.text.substring' call
    var endIndex_0 = coerceAtMost(end, charSequenceLength(_this__u8e3s4));
    return prefix + toString(charSequenceSubSequence(_this__u8e3s4, tmp2, endIndex_0)) + suffix;
  }
  function JsonException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, JsonException);
  }
  function get_JsonDeserializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonDeserializationNamesKey;
  }
  var JsonDeserializationNamesKey;
  function get_JsonSerializationNamesKey() {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return JsonSerializationNamesKey;
  }
  var JsonSerializationNamesKey;
  function ignoreUnknownKeys(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp;
    if (json.hp_1.vq_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.zd();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.l();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tmp0.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          if (element instanceof JsonIgnoreUnknownKeys) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function getJsonNameIndex(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    if (decodeCaseInsensitive(json, _this__u8e3s4)) {
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = name.toLowerCase();
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, tmp$ret$0);
    }
    var strategy = namingStrategy(_this__u8e3s4, json);
    if (!(strategy == null))
      return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
    var index = _this__u8e3s4.be(name);
    if (!(index === -3))
      return index;
    if (!json.hp_1.fr_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.ae(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.wd(), CLASS_getInstance()) ? json.hp_1.gr_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.xs(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.hp_1.hr_1 && equals(descriptor.wd(), ENUM_getInstance());
  }
  function getJsonNameIndexSlowPath(_this__u8e3s4, json, name) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp0_elvis_lhs = deserializationNamesMap(json, _this__u8e3s4).s1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  }
  function serializationNamesIndices(_this__u8e3s4, json, strategy) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(json);
    var tmp_0 = get_JsonSerializationNamesKey();
    return tmp.xs(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.yd();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.ce(i);
        // Inline function 'kotlin.collections.filterIsInstanceTo' call
        var destination = ArrayList_init_$Create$();
        var _iterator__ex2g4s = tmp0.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          if (element instanceof JsonNames) {
            destination.e(element);
          }
        }
        var tmp0_safe_receiver = singleOrNull(destination);
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ys_1;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.collections.forEach' call
          var inductionVariable_0 = 0;
          var last_0 = tmp1_safe_receiver.length;
          while (inductionVariable_0 < last_0) {
            var element_0 = tmp1_safe_receiver[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp;
            if (useLowercaseEnums) {
              // Inline function 'kotlin.text.lowercase' call
              // Inline function 'kotlin.js.asDynamic' call
              tmp = element_0.toLowerCase();
            } else {
              tmp = element_0;
            }
            buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, tmp, i);
          }
        }
        var tmp_0;
        if (useLowercaseEnums) {
          // Inline function 'kotlin.text.lowercase' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = _this__u8e3s4.ae(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.zs(_this__u8e3s4, i, _this__u8e3s4.ae(i));
        } else {
          tmp_0 = null;
        }
        var nameToPut = tmp_0;
        if (nameToPut == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          buildDeserializationNamesMap$putOrThrow(builder, _this__u8e3s4, nameToPut, i);
        }
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (builder.l()) {
      tmp_1 = emptyMap();
    } else {
      tmp_1 = builder;
    }
    return tmp_1;
  }
  function deserializationNamesMap$lambda($descriptor, $this_deserializationNamesMap) {
    return function () {
      return buildDeserializationNamesMap($descriptor, $this_deserializationNamesMap);
    };
  }
  function serializationNamesIndices$lambda($this_serializationNamesIndices, $strategy) {
    return function () {
      var tmp = 0;
      var tmp_0 = $this_serializationNamesIndices.yd();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.ae(tmp_2);
        tmp_1[tmp_2] = $strategy.zs($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.wd(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).q1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.ae(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.ae(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
    }
    // Inline function 'kotlin.collections.set' call
    _this__u8e3s4.w1(name, index);
  }
  var properties_initialized_JsonNamesMap_kt_ljpf42;
  function _init_properties_JsonNamesMap_kt__cbbp0k() {
    if (!properties_initialized_JsonNamesMap_kt_ljpf42) {
      properties_initialized_JsonNamesMap_kt_ljpf42 = true;
      JsonDeserializationNamesKey = new Key();
      JsonSerializationNamesKey = new Key();
    }
  }
  function Tombstone() {
  }
  var Tombstone_instance;
  function Tombstone_getInstance() {
    return Tombstone_instance;
  }
  function resize($this) {
    var newSize = imul($this.ct_1, 2);
    $this.at_1 = copyOf($this.at_1, newSize);
    $this.bt_1 = copyOf_0($this.bt_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.at_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.bt_1 = tmp_2;
    this.ct_1 = -1;
  }
  protoOf(JsonPath).dt = function (sd) {
    this.ct_1 = this.ct_1 + 1 | 0;
    var depth = this.ct_1;
    if (depth === this.at_1.length) {
      resize(this);
    }
    this.at_1[depth] = sd;
  };
  protoOf(JsonPath).et = function (index) {
    this.bt_1[this.ct_1] = index;
  };
  protoOf(JsonPath).ft = function (key) {
    var tmp;
    if (!(this.bt_1[this.ct_1] === -2)) {
      this.ct_1 = this.ct_1 + 1 | 0;
      tmp = this.ct_1 === this.at_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.at_1[this.ct_1] = key;
    this.bt_1[this.ct_1] = -2;
  };
  protoOf(JsonPath).gt = function () {
    if (this.bt_1[this.ct_1] === -2) {
      this.at_1[this.ct_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).ht = function () {
    var depth = this.ct_1;
    if (this.bt_1[depth] === -2) {
      this.bt_1[depth] = -1;
      this.ct_1 = this.ct_1 - 1 | 0;
    }
    if (!(this.ct_1 === -1)) {
      this.ct_1 = this.ct_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).it = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.j6('$');
    // Inline function 'kotlin.repeat' call
    var times = this.ct_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.at_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.wd(), LIST_getInstance())) {
            if (!(this.bt_1[index] === -1)) {
              this_0.j6('[');
              this_0.h9(this.bt_1[index]);
              this_0.j6(']');
            }
          } else {
            var idx = this.bt_1[index];
            if (idx >= 0) {
              this_0.j6('.');
              this_0.j6(element.ae(idx));
            }
          }
        } else {
          if (!(element === Tombstone_instance)) {
            this_0.j6('[');
            this_0.j6("'");
            this_0.i6(element);
            this_0.j6("'");
            this_0.j6(']');
          }
        }
      }
       while (inductionVariable < times);
    return this_0.toString();
  };
  protoOf(JsonPath).toString = function () {
    return this.it();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.wd();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.b8() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.kt_1)
      return Unit_instance;
    if (!$this.lt_1)
      return Unit_instance;
    var tmp_0;
    var tmp_1;
    if (equals(kind, LIST_getInstance()) || equals(kind, MAP_getInstance())) {
      tmp_1 = true;
    } else {
      tmp_1 = kind instanceof PrimitiveKind;
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = kind instanceof ENUM;
    }
    if (tmp_0) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.b8() + ' of kind ' + kind.toString() + ' cannot be serialized polymorphically with class discriminator.');
    }
  }
  function checkDiscriminatorCollisions($this, descriptor, actualClass) {
    var inductionVariable = 0;
    var last = descriptor.yd();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.ae(i);
        if (name === $this.jt_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function JsonSerializersModuleValidator(configuration) {
    this.jt_1 = configuration.dr_1;
    this.kt_1 = configuration.cr_1;
    this.lt_1 = !configuration.kr_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).sk = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).vk = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.hd();
    checkKind(this, descriptor, actualClass);
    if (!this.kt_1 && this.lt_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(JsonSerializersModuleValidator).wk = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).xk = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().k();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.qf(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.vt_1.zt(6);
    if ($this.vt_1.bu() === 4) {
      $this.vt_1.au('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.vt_1.cu()) {
      var key = $this.wt_1 ? $this.vt_1.eu() : $this.vt_1.du();
      $this.vt_1.zt(5);
      var element = $this.fu();
      // Inline function 'kotlin.collections.set' call
      result.w1(key, element);
      lastToken = $this.vt_1.gu();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.vt_1.au('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.vt_1.zt(7);
    } else if (lastToken === 4) {
      if (!$this.xt_1) {
        invalidTrailingComma($this.vt_1);
      }
      $this.vt_1.zt(7);
    }
    return new JsonObject(result);
  }
  function readObject_0($this, $receiver, $completion) {
    var tmp = new $readObjectCOROUTINE$($this, $receiver, $completion);
    tmp.e7_1 = Unit_instance;
    tmp.f7_1 = null;
    return tmp.k7();
  }
  function readArray($this) {
    var lastToken = $this.vt_1.gu();
    if ($this.vt_1.bu() === 4) {
      $this.vt_1.au('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.vt_1.cu()) {
      var element = $this.fu();
      result.e(element);
      lastToken = $this.vt_1.gu();
      if (!(lastToken === 4)) {
        var tmp0 = $this.vt_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.wp_1;
        if (!condition) {
          var tmp$ret$2 = 'Expected end of the array or comma';
          tmp0.au(tmp$ret$2, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.vt_1.zt(9);
    } else if (lastToken === 4) {
      if (!$this.xt_1) {
        invalidTrailingComma($this.vt_1, 'array');
      }
      $this.vt_1.zt(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.wt_1 || !isString) {
      tmp = $this.vt_1.eu();
    } else {
      tmp = $this.vt_1.du();
    }
    var string = tmp;
    if (!isString && string === 'null')
      return JsonNull_getInstance();
    return new JsonLiteral(string, isString);
  }
  function readDeepRecursive($this) {
    return invoke(new DeepRecursiveFunction(JsonTreeReader$readDeepRecursive$slambda_0($this, null)), Unit_instance);
  }
  function JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation) {
    this.dv_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).hv = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.iv($this$DeepRecursiveFunction, it, $completion);
    tmp.e7_1 = Unit_instance;
    tmp.f7_1 = null;
    return tmp.k7();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).q7 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.hv(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).k7 = function () {
    var suspendResult = this.e7_1;
    $sm: do
      try {
        var tmp = this.c7_1;
        switch (tmp) {
          case 0:
            this.d7_1 = 3;
            var tmp0_subject = this.dv_1.vt_1.bu();
            if (tmp0_subject === 1) {
              this.gv_1 = readValue(this.dv_1, true);
              this.c7_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.gv_1 = readValue(this.dv_1, false);
                this.c7_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.c7_1 = 1;
                  suspendResult = readObject_0(this.dv_1, this.ev_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    this.gv_1 = readArray(this.dv_1);
                    this.c7_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.dv_1.vt_1.au("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.gv_1 = suspendResult;
            this.c7_1 = 2;
            continue $sm;
          case 2:
            return this.gv_1;
          case 3:
            throw this.f7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.d7_1 === 3) {
          throw e;
        } else {
          this.c7_1 = this.d7_1;
          this.f7_1 = e;
        }
      }
     while (true);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).iv = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.dv_1, completion);
    i.ev_1 = $this$DeepRecursiveFunction;
    i.fv_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.hv($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.pu_1 = _this__u8e3s4;
    this.qu_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).k7 = function () {
    var suspendResult = this.e7_1;
    $sm: do
      try {
        var tmp = this.c7_1;
        switch (tmp) {
          case 0:
            this.d7_1 = 5;
            this.su_1 = this.pu_1;
            this.tu_1 = this.su_1.vt_1.zt(6);
            if (this.su_1.vt_1.bu() === 4) {
              this.su_1.vt_1.au('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.ru_1 = LinkedHashMap_init_$Create$();
            this.c7_1 = 1;
            continue $sm;
          case 1:
            if (!this.su_1.vt_1.cu()) {
              this.c7_1 = 4;
              continue $sm;
            }

            this.uu_1 = this.su_1.wt_1 ? this.su_1.vt_1.eu() : this.su_1.vt_1.du();
            this.su_1.vt_1.zt(5);
            this.c7_1 = 2;
            suspendResult = this.qu_1.qc(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.ru_1;
            var key = this.uu_1;
            tmp0.w1(key, element);
            this.tu_1 = this.su_1.vt_1.gu();
            var tmp0_subject = this.tu_1;
            if (tmp0_subject === 4) {
              this.c7_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.c7_1 = 4;
                continue $sm;
              } else {
                this.su_1.vt_1.au('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.c7_1 = 1;
            continue $sm;
          case 4:
            if (this.tu_1 === 6) {
              this.su_1.vt_1.zt(7);
            } else if (this.tu_1 === 4) {
              if (!this.su_1.xt_1) {
                invalidTrailingComma(this.su_1.vt_1);
              }
              this.su_1.vt_1.zt(7);
            }

            return new JsonObject(this.ru_1);
          case 5:
            throw this.f7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.d7_1 === 5) {
          throw e;
        } else {
          this.c7_1 = this.d7_1;
          this.f7_1 = e;
        }
      }
     while (true);
  };
  function JsonTreeReader(configuration, lexer) {
    this.vt_1 = lexer;
    this.wt_1 = configuration.wq_1;
    this.xt_1 = configuration.ir_1;
    this.yt_1 = 0;
  }
  protoOf(JsonTreeReader).fu = function () {
    var token = this.vt_1.bu();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.yt_1 = this.yt_1 + 1 | 0;
      if (this.yt_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.yt_1 = this.yt_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.vt_1.au('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.zd().g();
    while (_iterator__ex2g4s.h()) {
      var annotation = _iterator__ex2g4s.i();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.jv_1;
    }
    return json.hp_1.dr_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.hd()).k1(classDiscriminator)) {
      var baseName = serializer.hd().vd();
      var actualName = actualSerializer.hd().vd();
      // Inline function 'kotlin.error' call
      var message = "Sealed class '" + actualName + "' cannot be serialized as base class '" + baseName + "' because" + (" it has property name that conflicts with JSON class discriminator '" + classDiscriminator + "'. ") + 'You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function checkKind_0(kind) {
    if (kind instanceof ENUM) {
      // Inline function 'kotlin.error' call
      var message = "Enums cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    if (kind instanceof PrimitiveKind) {
      // Inline function 'kotlin.error' call
      var message_0 = "Primitives cannot be serialized polymorphically with 'type' parameter. You can use 'JsonBuilder.useArrayPolymorphism' instead";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    if (kind instanceof PolymorphicKind) {
      // Inline function 'kotlin.error' call
      var message_1 = 'Actual serializer for polymorphic cannot be polymorphic itself';
      throw IllegalStateException_init_$Create$(toString(message_1));
    }
  }
  function access$validateIfSealed$tPolymorphicKt(serializer, actualSerializer, classDiscriminator) {
    return validateIfSealed(serializer, actualSerializer, classDiscriminator);
  }
  function Key() {
  }
  function DescriptorSchemaCache() {
    this.ws_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).kv = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.ws_1;
    var value_0 = this_0.s1(descriptor);
    var tmp;
    if (value_0 == null) {
      var answer = createMapForCache(2);
      this_0.w1(descriptor, answer);
      tmp = answer;
    } else {
      tmp = value_0;
    }
    var tmp0 = tmp;
    var tmp2 = key instanceof Key ? key : THROW_CCE();
    // Inline function 'kotlin.collections.set' call
    var value_1 = !(value == null) ? value : THROW_CCE();
    tmp0.w1(tmp2, value_1);
  };
  protoOf(DescriptorSchemaCache).xs = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.lv(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.kv(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).lv = function (descriptor, key) {
    var tmp0_safe_receiver = this.ws_1.s1(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = tmp0_safe_receiver.s1(key instanceof Key ? key : THROW_CCE());
    }
    var tmp_0 = tmp;
    return !(tmp_0 == null) ? tmp_0 : null;
  };
  function DiscriminatorHolder(discriminatorToSkip) {
    this.mv_1 = discriminatorToSkip;
  }
  function trySkip($this, $receiver, unknownKey) {
    if ($receiver == null)
      return false;
    if ($receiver.mv_1 === unknownKey) {
      $receiver.mv_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.cf(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.qp_1.bu() === 4) {
      $this.qp_1.au('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.sp_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.sp_1 === -1)) {
        hasComma = $this.qp_1.ov();
      }
    } else {
      $this.qp_1.nv(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.qp_1.cu()) {
      if (decodingKey) {
        if ($this.sp_1 === -1) {
          var tmp0 = $this.qp_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.wp_1;
          if (!condition) {
            var tmp$ret$1 = 'Unexpected leading comma';
            tmp0.au(tmp$ret$1, position);
          }
        } else {
          var tmp0_0 = $this.qp_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.wp_1;
          if (!condition_0) {
            var tmp$ret$3 = 'Expected comma after the key-value pair';
            tmp0_0.au(tmp$ret$3, position_0);
          }
        }
      }
      $this.sp_1 = $this.sp_1 + 1 | 0;
      tmp = $this.sp_1;
    } else {
      if (hasComma && !$this.op_1.hp_1.ir_1) {
        invalidTrailingComma($this.qp_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.op_1;
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.ee(index);
      var elementDescriptor = descriptor.de(index);
      var tmp;
      if (isOptional && !elementDescriptor.pd()) {
        tmp = $this.qp_1.pv(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.wd(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.pd()) {
          tmp_0 = $this.qp_1.pv(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.qp_1.qv($this.up_1.wq_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.hp_1.zq_1 && elementDescriptor.pd();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.qp_1.du();
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.qp_1.ov();
    while ($this.qp_1.cu()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.qp_1.nv(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.op_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.up_1.br_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.qp_1.ov();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.vp_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.ts(index);
          }
          return index;
        }
        tmp = tmp_0;
      } else {
        tmp = true;
      }
      var isUnknown = tmp;
      if (isUnknown) {
        hasComma = handleUnknown($this, descriptor, key);
      }
    }
    if (hasComma && !$this.op_1.hp_1.ir_1) {
      invalidTrailingComma($this.qp_1);
    }
    var tmp1_safe_receiver = $this.vp_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.us();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.op_1) || trySkip($this, $this.tp_1, key)) {
      $this.qp_1.sv($this.up_1.wq_1);
    } else {
      $this.qp_1.xp_1.ht();
      $this.qp_1.rv(key);
    }
    return $this.qp_1.ov();
  }
  function decodeListIndex($this) {
    var hasComma = $this.qp_1.ov();
    var tmp;
    if ($this.qp_1.cu()) {
      if (!($this.sp_1 === -1) && !hasComma) {
        $this.qp_1.au('Expected end of the array or comma');
      }
      $this.sp_1 = $this.sp_1 + 1 | 0;
      tmp = $this.sp_1;
    } else {
      if (hasComma && !$this.op_1.hp_1.ir_1) {
        invalidTrailingComma($this.qp_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.up_1.wq_1) {
      tmp = $this.qp_1.uv();
    } else {
      tmp = $this.qp_1.tv();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.op_1 = json;
    this.pp_1 = mode;
    this.qp_1 = lexer;
    this.rp_1 = this.op_1.af();
    this.sp_1 = -1;
    this.tp_1 = discriminatorHolder;
    this.up_1 = this.op_1.hp_1;
    this.vp_1 = this.up_1.zq_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).vv = function () {
    return this.op_1;
  };
  protoOf(StreamingJsonDecoder).af = function () {
    return this.rp_1;
  };
  protoOf(StreamingJsonDecoder).wv = function () {
    return (new JsonTreeReader(this.op_1.hp_1, this.qp_1)).fu();
  };
  protoOf(StreamingJsonDecoder).qe = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.op_1.hp_1.cr_1;
      }
      if (tmp) {
        return deserializer.jd(this);
      }
      var discriminator = classDiscriminator(deserializer.hd(), this.op_1);
      var tmp0_elvis_lhs = this.qp_1.xv(discriminator, this.up_1.wq_1);
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        var tmp2 = isInterface(deserializer, DeserializationStrategy) ? deserializer : THROW_CCE();
        var tmp$ret$0;
        $l$block: {
          // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
          var tmp_1;
          if (!(tmp2 instanceof AbstractPolymorphicSerializer)) {
            tmp_1 = true;
          } else {
            tmp_1 = this.vv().hp_1.cr_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.jd(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.hd(), this.vv());
          var tmp0 = this.wv();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.hd().vd();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).b8();
            var tmp_3 = getKClassFromExpression(tmp0).b8();
            var tmp$ret$2 = this.qp_1.xp_1.it();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$2, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.nr(discriminator_0);
          var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
          var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
          var tmp_4;
          try {
            tmp_4 = findPolymorphicSerializer(tmp2, this, type);
          } catch ($p) {
            var tmp_5;
            if ($p instanceof SerializationException) {
              var it = $p;
              throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
            } else {
              throw $p;
            }
          }
          var tmp_6 = tmp_4;
          var actualSerializer = isInterface(tmp_6, DeserializationStrategy) ? tmp_6 : THROW_CCE();
          tmp$ret$0 = readPolymorphicJson(this.vv(), discriminator_0, jsonTree, actualSerializer);
        }
        return tmp$ret$0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var type_0 = tmp_0;
      var tmp_7;
      try {
        tmp_7 = findPolymorphicSerializer(deserializer, this, type_0);
      } catch ($p) {
        var tmp_8;
        if ($p instanceof SerializationException) {
          var it_0 = $p;
          var message = removeSuffix(substringBefore(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10)), '.');
          var hint = substringAfter(ensureNotNull(it_0.message), _Char___init__impl__6a9atx(10), '');
          this.qp_1.au(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.tp_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.jd(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.od_1, plus(e.message, ' at path: ') + this.qp_1.xp_1.it(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).re = function (descriptor) {
    var newMode = switchMode(this.op_1, descriptor);
    this.qp_1.xp_1.dt(descriptor);
    this.qp_1.nv(newMode.aw_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.y1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.op_1, newMode, this.qp_1, descriptor, this.tp_1);
        break;
      default:
        var tmp_0;
        if (this.pp_1.equals(newMode) && this.op_1.hp_1.zq_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.op_1, newMode, this.qp_1, descriptor, this.tp_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).se = function (descriptor) {
    if (descriptor.yd() === 0 && ignoreUnknownKeys(descriptor, this.op_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.qp_1.ov() && !this.op_1.hp_1.ir_1) {
      invalidTrailingComma(this.qp_1, '');
    }
    this.qp_1.nv(this.pp_1.bw_1);
    this.qp_1.xp_1.ht();
  };
  protoOf(StreamingJsonDecoder).je = function () {
    var tmp;
    var tmp0_safe_receiver = this.vp_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ss_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.qp_1.cw();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).ke = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).xe = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.pp_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.qp_1.xp_1.gt();
    }
    var value = protoOf(AbstractDecoder).xe.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.qp_1.xp_1.ft(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).cf = function (descriptor) {
    var index;
    switch (this.pp_1.y1_1) {
      case 0:
        index = decodeObjectIndex(this, descriptor);
        break;
      case 2:
        index = decodeMapIndex(this);
        break;
      default:
        index = decodeListIndex(this);
        break;
    }
    if (!this.pp_1.equals(WriteMode_MAP_getInstance())) {
      this.qp_1.xp_1.et(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).le = function () {
    return this.qp_1.dw();
  };
  protoOf(StreamingJsonDecoder).me = function () {
    var value = this.qp_1.ew();
    if (!equalsLong(value, fromInt(convertToInt(value)))) {
      this.qp_1.au("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).ne = function () {
    return this.qp_1.ew();
  };
  protoOf(StreamingJsonDecoder).oe = function () {
    var tmp;
    if (this.up_1.wq_1) {
      tmp = this.qp_1.uv();
    } else {
      tmp = this.qp_1.du();
    }
    return tmp;
  };
  function StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, $this) {
    StreamingJsonEncoder.call($this, Composer_0(output, json), json, mode, modeReuseCache);
    return $this;
  }
  function StreamingJsonEncoder_init_$Create$(output, json, mode, modeReuseCache) {
    return StreamingJsonEncoder_init_$Init$(output, json, mode, modeReuseCache, objectCreate(protoOf(StreamingJsonEncoder)));
  }
  function encodeTypeInfo($this, discriminator, serialName) {
    $this.mt_1.as();
    $this.kf(discriminator);
    $this.mt_1.ds(_Char___init__impl__6a9atx(58));
    $this.mt_1.cs();
    $this.kf(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.mt_1 = composer;
    this.nt_1 = json;
    this.ot_1 = mode;
    this.pt_1 = modeReuseCache;
    this.qt_1 = this.nt_1.af();
    this.rt_1 = this.nt_1.hp_1;
    this.st_1 = false;
    this.tt_1 = null;
    this.ut_1 = null;
    var i = this.ot_1.y1_1;
    if (!(this.pt_1 == null)) {
      if (!(this.pt_1[i] === null) || !(this.pt_1[i] === this)) {
        this.pt_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).vv = function () {
    return this.nt_1;
  };
  protoOf(StreamingJsonEncoder).af = function () {
    return this.qt_1;
  };
  protoOf(StreamingJsonEncoder).vf = function (descriptor, index) {
    return this.rt_1.uq_1;
  };
  protoOf(StreamingJsonEncoder).qf = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.vv().hp_1.cr_1) {
        serializer.id(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.vv().hp_1.kr_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.vv().hp_1.kr_1.y1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.hd().wd();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.hd(), this.vv()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.hd()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
          checkKind_0(actual.hd().wd());
        }
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        var serialName = actualSerializer.hd().vd();
        this.tt_1 = baseClassDiscriminator;
        this.ut_1 = serialName;
      }
      actualSerializer.id(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).re = function (descriptor) {
    var newMode = switchMode(this.nt_1, descriptor);
    if (!(newMode.aw_1 === _Char___init__impl__6a9atx(0))) {
      this.mt_1.ds(newMode.aw_1);
      this.mt_1.yr();
    }
    var discriminator = this.tt_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.ut_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.vd() : tmp0_elvis_lhs);
      this.tt_1 = null;
      this.ut_1 = null;
    }
    if (this.ot_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.pt_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.y1_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.mt_1, this.nt_1, newMode, this.pt_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).se = function (descriptor) {
    if (!(this.ot_1.bw_1 === _Char___init__impl__6a9atx(0))) {
      this.mt_1.zr();
      this.mt_1.bs();
      this.mt_1.ds(this.ot_1.bw_1);
    }
  };
  protoOf(StreamingJsonEncoder).ef = function (descriptor, index) {
    switch (this.ot_1.y1_1) {
      case 1:
        if (!this.mt_1.xr_1) {
          this.mt_1.ds(_Char___init__impl__6a9atx(44));
        }

        this.mt_1.as();
        break;
      case 2:
        if (!this.mt_1.xr_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.mt_1.ds(_Char___init__impl__6a9atx(44));
            this.mt_1.as();
            tmp_0 = true;
          } else {
            this.mt_1.ds(_Char___init__impl__6a9atx(58));
            this.mt_1.cs();
            tmp_0 = false;
          }
          tmp.st_1 = tmp_0;
        } else {
          this.st_1 = true;
          this.mt_1.as();
        }

        break;
      case 3:
        if (index === 0)
          this.st_1 = true;
        if (index === 1) {
          this.mt_1.ds(_Char___init__impl__6a9atx(44));
          this.mt_1.cs();
          this.st_1 = false;
        }

        break;
      default:
        if (!this.mt_1.xr_1) {
          this.mt_1.ds(_Char___init__impl__6a9atx(44));
        }

        this.mt_1.as();
        this.kf(getJsonElementName(descriptor, this.nt_1, index));
        this.mt_1.ds(_Char___init__impl__6a9atx(58));
        this.mt_1.cs();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).rf = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.rt_1.zq_1) {
      protoOf(AbstractEncoder).rf.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).gf = function () {
    this.mt_1.fs('null');
  };
  protoOf(StreamingJsonEncoder).hf = function (value) {
    if (this.st_1) {
      this.kf(value.toString());
    } else {
      this.mt_1.ks(value);
    }
  };
  protoOf(StreamingJsonEncoder).if = function (value) {
    if (this.st_1) {
      this.kf(value.toString());
    } else {
      this.mt_1.hs(value);
    }
  };
  protoOf(StreamingJsonEncoder).jf = function (value) {
    if (this.st_1) {
      this.kf(value.toString());
    } else {
      this.mt_1.js(value);
    }
  };
  protoOf(StreamingJsonEncoder).kf = function (value) {
    return this.mt_1.ls(value);
  };
  function get_ESCAPE_STRINGS() {
    _init_properties_StringOps_kt__fcy1db();
    return ESCAPE_STRINGS;
  }
  var ESCAPE_STRINGS;
  var ESCAPE_MARKERS;
  function toHexChar(i) {
    _init_properties_StringOps_kt__fcy1db();
    var d = i & 15;
    var tmp;
    if (d < 10) {
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      tmp = numberToChar(d + tmp$ret$0 | 0);
    } else {
      var tmp_0 = d - 10 | 0;
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = numberToChar(tmp_0 + tmp$ret$1 | 0);
    }
    return tmp;
  }
  function printQuoted(_this__u8e3s4, value) {
    _init_properties_StringOps_kt__fcy1db();
    _this__u8e3s4.k6(_Char___init__impl__6a9atx(34));
    var lastPos = 0;
    var inductionVariable = 0;
    var last = charSequenceLength(value) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.code' call
        var this_0 = charCodeAt(value, i);
        var c = Char__toInt_impl_vasixd(this_0);
        if (c < get_ESCAPE_STRINGS().length && !(get_ESCAPE_STRINGS()[c] == null)) {
          _this__u8e3s4.e9(value, lastPos, i);
          _this__u8e3s4.j6(get_ESCAPE_STRINGS()[c]);
          lastPos = i + 1 | 0;
        }
      }
       while (inductionVariable <= last);
    if (!(lastPos === 0))
      _this__u8e3s4.e9(value, lastPos, value.length);
    else
      _this__u8e3s4.j6(value);
    _this__u8e3s4.k6(_Char___init__impl__6a9atx(34));
  }
  function toBooleanStrictOrNull(_this__u8e3s4) {
    _init_properties_StringOps_kt__fcy1db();
    return equals_0(_this__u8e3s4, 'true', true) ? true : equals_0(_this__u8e3s4, 'false', true) ? false : null;
  }
  var properties_initialized_StringOps_kt_wzaea7;
  function _init_properties_StringOps_kt__fcy1db() {
    if (!properties_initialized_StringOps_kt_wzaea7) {
      properties_initialized_StringOps_kt_wzaea7 = true;
      // Inline function 'kotlin.arrayOfNulls' call
      // Inline function 'kotlin.apply' call
      var this_0 = Array(93);
      var inductionVariable = 0;
      if (inductionVariable <= 31)
        do {
          var c = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var c1 = toHexChar(c >> 12);
          var c2 = toHexChar(c >> 8);
          var c3 = toHexChar(c >> 4);
          var c4 = toHexChar(c);
          this_0[c] = '\\u' + toString_1(c1) + toString_1(c2) + toString_1(c3) + toString_1(c4);
        }
         while (inductionVariable <= 31);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(34);
      this_0[Char__toInt_impl_vasixd(this_1)] = '\\"';
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(92);
      this_0[Char__toInt_impl_vasixd(this_2)] = '\\\\';
      // Inline function 'kotlin.code' call
      var this_3 = _Char___init__impl__6a9atx(9);
      this_0[Char__toInt_impl_vasixd(this_3)] = '\\t';
      // Inline function 'kotlin.code' call
      var this_4 = _Char___init__impl__6a9atx(8);
      this_0[Char__toInt_impl_vasixd(this_4)] = '\\b';
      // Inline function 'kotlin.code' call
      var this_5 = _Char___init__impl__6a9atx(10);
      this_0[Char__toInt_impl_vasixd(this_5)] = '\\n';
      // Inline function 'kotlin.code' call
      var this_6 = _Char___init__impl__6a9atx(13);
      this_0[Char__toInt_impl_vasixd(this_6)] = '\\r';
      this_0[12] = '\\f';
      ESCAPE_STRINGS = this_0;
      // Inline function 'kotlin.apply' call
      var this_7 = new Int8Array(93);
      var inductionVariable_0 = 0;
      if (inductionVariable_0 <= 31)
        do {
          var c_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          this_7[c_0] = 1;
        }
         while (inductionVariable_0 <= 31);
      // Inline function 'kotlin.code' call
      var this_8 = _Char___init__impl__6a9atx(34);
      var tmp = Char__toInt_impl_vasixd(this_8);
      // Inline function 'kotlin.code' call
      var this_9 = _Char___init__impl__6a9atx(34);
      var tmp$ret$3 = Char__toInt_impl_vasixd(this_9);
      this_7[tmp] = toByte(tmp$ret$3);
      // Inline function 'kotlin.code' call
      var this_10 = _Char___init__impl__6a9atx(92);
      var tmp_0 = Char__toInt_impl_vasixd(this_10);
      // Inline function 'kotlin.code' call
      var this_11 = _Char___init__impl__6a9atx(92);
      var tmp$ret$5 = Char__toInt_impl_vasixd(this_11);
      this_7[tmp_0] = toByte(tmp$ret$5);
      // Inline function 'kotlin.code' call
      var this_12 = _Char___init__impl__6a9atx(9);
      var tmp_1 = Char__toInt_impl_vasixd(this_12);
      // Inline function 'kotlin.code' call
      var this_13 = _Char___init__impl__6a9atx(116);
      var tmp$ret$7 = Char__toInt_impl_vasixd(this_13);
      this_7[tmp_1] = toByte(tmp$ret$7);
      // Inline function 'kotlin.code' call
      var this_14 = _Char___init__impl__6a9atx(8);
      var tmp_2 = Char__toInt_impl_vasixd(this_14);
      // Inline function 'kotlin.code' call
      var this_15 = _Char___init__impl__6a9atx(98);
      var tmp$ret$9 = Char__toInt_impl_vasixd(this_15);
      this_7[tmp_2] = toByte(tmp$ret$9);
      // Inline function 'kotlin.code' call
      var this_16 = _Char___init__impl__6a9atx(10);
      var tmp_3 = Char__toInt_impl_vasixd(this_16);
      // Inline function 'kotlin.code' call
      var this_17 = _Char___init__impl__6a9atx(110);
      var tmp$ret$11 = Char__toInt_impl_vasixd(this_17);
      this_7[tmp_3] = toByte(tmp$ret$11);
      // Inline function 'kotlin.code' call
      var this_18 = _Char___init__impl__6a9atx(13);
      var tmp_4 = Char__toInt_impl_vasixd(this_18);
      // Inline function 'kotlin.code' call
      var this_19 = _Char___init__impl__6a9atx(114);
      var tmp$ret$13 = Char__toInt_impl_vasixd(this_19);
      this_7[tmp_4] = toByte(tmp$ret$13);
      // Inline function 'kotlin.code' call
      var this_20 = _Char___init__impl__6a9atx(102);
      var tmp$ret$14 = Char__toInt_impl_vasixd(this_20);
      this_7[12] = toByte(tmp$ret$14);
      ESCAPE_MARKERS = this_7;
    }
  }
  function unparsedPrimitive($this, literal, primitive, tag) {
    var type = startsWith(primitive, 'i') ? 'an ' + primitive : 'a ' + primitive;
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.lw(tag), toString($this.mw()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.hw_1 = json;
    this.iw_1 = value;
    this.jw_1 = polymorphicDiscriminator;
    this.kw_1 = this.vv().hp_1;
  }
  protoOf(AbstractJsonTreeDecoder).vv = function () {
    return this.hw_1;
  };
  protoOf(AbstractJsonTreeDecoder).p1 = function () {
    return this.iw_1;
  };
  protoOf(AbstractJsonTreeDecoder).af = function () {
    return this.vv().af();
  };
  protoOf(AbstractJsonTreeDecoder).mw = function () {
    var tmp0_safe_receiver = this.xj();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.nw(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.p1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).lw = function (currentTag) {
    return this.zj() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).wv = function () {
    return this.mw();
  };
  protoOf(AbstractJsonTreeDecoder).qe = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.vv().hp_1.cr_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.jd(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.hd(), this.vv());
      var tmp0 = this.wv();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.hd().vd();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).b8();
        var tmp_1 = getKClassFromExpression(tmp0).b8();
        var tmp$ret$2 = this.zj();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$2, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.nr(discriminator);
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : get_jsonPrimitive(tmp0_safe_receiver);
      var type = tmp1_safe_receiver == null ? null : get_contentOrNull(tmp1_safe_receiver);
      var tmp_2;
      try {
        tmp_2 = findPolymorphicSerializer(deserializer, this, type);
      } catch ($p) {
        var tmp_3;
        if ($p instanceof SerializationException) {
          var it = $p;
          throw JsonDecodingException_0(-1, ensureNotNull(it.message), jsonTree.toString());
        } else {
          throw $p;
        }
      }
      var tmp_4 = tmp_2;
      var actualSerializer = isInterface(tmp_4, DeserializationStrategy) ? tmp_4 : THROW_CCE();
      tmp$ret$0 = readPolymorphicJson(this.vv(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).yj = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).re = function (descriptor) {
    var currentObject = this.mw();
    var tmp0_subject = descriptor.wd();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.vv();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.vd();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).b8();
        var tmp_3 = getKClassFromExpression(currentObject).b8();
        var tmp$ret$2 = this.zj();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$2, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.vv();
        var keyDescriptor = carrierDescriptor(descriptor.de(0), this_0.af());
        var keyKind = keyDescriptor.wd();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.vv();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.vd();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).b8();
            var tmp_8 = getKClassFromExpression(currentObject).b8();
            var tmp$ret$7 = this.zj();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$7, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.hp_1.xq_1) {
            var tmp_9 = this.vv();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.vd();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).b8();
              var tmp_11 = getKClassFromExpression(currentObject).b8();
              var tmp$ret$11 = this.zj();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$11, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.vv();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.vd();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).b8();
          var tmp_14 = getKClassFromExpression(currentObject).b8();
          var tmp$ret$14 = this.zj();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$14, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.jw_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).se = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).je = function () {
    var tmp = this.mw();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).ow = function (tag) {
    return !(this.nw(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).bk = function (tag) {
    return this.ow((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).pw = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.nw(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).b8();
        var tmp_0 = getKClassFromExpression(value).b8();
        var tmp$ret$3 = this.lw(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'boolean' + ' at element: ' + tmp$ret$3, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = get_booleanOrNull(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'boolean', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).ck = function (tag) {
    return this.pw((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).qw = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.nw(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).b8();
        var tmp_0 = getKClassFromExpression(value).b8();
        var tmp$ret$3 = this.lw(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'int' + ' at element: ' + tmp$ret$3, toString(value));
      }
      var literal = value;
      try {
        var result = parseLongImpl(literal);
        var tmp_1;
        // Inline function 'kotlin.ranges.contains' call
        var this_0 = numberRangeToNumber(-2147483648, 2147483647);
        if (contains_0(isInterface(this_0, ClosedRange) ? this_0 : THROW_CCE(), result)) {
          tmp_1 = convertToInt(result);
        } else {
          tmp_1 = null;
        }
        var tmp0_elvis_lhs = tmp_1;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_2;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'int', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).dk = function (tag) {
    return this.qw((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).rw = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.nw(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).b8();
        var tmp_0 = getKClassFromExpression(value).b8();
        var tmp$ret$3 = this.lw(tag);
        throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'long' + ' at element: ' + tmp$ret$3, toString(value));
      }
      var literal = value;
      try {
        var tmp0_elvis_lhs = parseLongImpl(literal);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        tmp$ret$0 = tmp_1;
        break $l$block;
      } catch ($p) {
        if ($p instanceof IllegalArgumentException) {
          var e = $p;
          unparsedPrimitive(this, literal, 'long', tag);
        } else {
          throw $p;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).ek = function (tag) {
    return this.rw((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).sw = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.nw(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).b8();
      var tmp_0 = getKClassFromExpression(value).b8();
      var tmp$ret$2 = this.lw(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$2, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.lw(tag), toString(this.mw()));
    if (!value_0.qr_1 && !this.vv().hp_1.wq_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.lw(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.mw()));
    }
    return value_0.sr_1;
  };
  protoOf(AbstractJsonTreeDecoder).fk = function (tag) {
    return this.sw((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  function setForceNull($this, descriptor, index) {
    $this.cx_1 = (!$this.vv().hp_1.zq_1 && !descriptor.ee(index) && descriptor.de(index).pd());
    return $this.cx_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.zw_1 = value;
    this.ax_1 = polyDescriptor;
    this.bx_1 = 0;
    this.cx_1 = false;
  }
  protoOf(JsonTreeDecoder).p1 = function () {
    return this.zw_1;
  };
  protoOf(JsonTreeDecoder).cf = function (descriptor) {
    $l$loop: while (this.bx_1 < descriptor.yd()) {
      var _unary__edvuaz = this.bx_1;
      this.bx_1 = _unary__edvuaz + 1 | 0;
      var name = this.sj(descriptor, _unary__edvuaz);
      var index = this.bx_1 - 1 | 0;
      this.cx_1 = false;
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      var this_0 = this.p1();
      if ((isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).q1(name)) {
        tmp = true;
      } else {
        tmp = setForceNull(this, descriptor, index);
      }
      if (tmp) {
        if (!this.kw_1.br_1)
          return index;
        var tmp0 = this.vv();
        var tmp$ret$2;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.ee(index);
          var elementDescriptor = descriptor.de(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.pd()) {
            var tmp_1 = this.dx(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.wd(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.pd()) {
              var tmp_3 = this.dx(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$2 = false;
              break $l$block_2;
            }
            var tmp_4 = this.dx(name);
            var tmp0_safe_receiver = tmp_4 instanceof JsonPrimitive ? tmp_4 : null;
            var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : get_contentOrNull(tmp0_safe_receiver);
            var tmp_5;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$2 = false;
              break $l$block_2;
            } else {
              tmp_5 = tmp0_elvis_lhs;
            }
            var enumValue = tmp_5;
            var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
            var coerceToNull = !tmp0.hp_1.zq_1 && elementDescriptor.pd();
            if (enumIndex === -3 && (isOptional || coerceToNull)) {
              if (setForceNull(this, descriptor, index))
                return index;
              tmp$ret$2 = true;
              break $l$block_2;
            }
          }
          tmp$ret$2 = false;
        }
        if (tmp$ret$2)
          continue $l$loop;
        return index;
      }
    }
    return -1;
  };
  protoOf(JsonTreeDecoder).je = function () {
    return !this.cx_1 && protoOf(AbstractJsonTreeDecoder).je.call(this);
  };
  protoOf(JsonTreeDecoder).tj = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.vv());
    var baseName = descriptor.ae(index);
    if (strategy == null) {
      if (!this.kw_1.fr_1)
        return baseName;
      if (this.p1().t1().k1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.vv(), descriptor);
    // Inline function 'kotlin.collections.find' call
    var tmp0 = this.p1().t1();
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = tmp0.g();
      while (_iterator__ex2g4s.h()) {
        var element = _iterator__ex2g4s.i();
        if (deserializationNamesMap_0.s1(element) === index) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var fallbackName = strategy == null ? null : strategy.zs(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).nw = function (tag) {
    return getValue(this.p1(), tag);
  };
  protoOf(JsonTreeDecoder).dx = function (tag) {
    return this.p1().nr(tag);
  };
  protoOf(JsonTreeDecoder).re = function (descriptor) {
    if (descriptor === this.ax_1) {
      var tmp = this.vv();
      var tmp2 = this.mw();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.ax_1.vd();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).b8();
        var tmp_1 = getKClassFromExpression(tmp2).b8();
        var tmp$ret$2 = this.zj();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$2, toString(tmp2));
      }
      return new JsonTreeDecoder(tmp, tmp2, this.jw_1, this.ax_1);
    }
    return protoOf(AbstractJsonTreeDecoder).re.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).se = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.vv())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.wd();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.vv());
    var tmp_1;
    if (strategy == null && !this.kw_1.fr_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.vv(), descriptor).t1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.vv()).lv(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.p1().t1().g();
    while (_iterator__ex2g4s.h()) {
      var key = _iterator__ex2g4s.i();
      if (!names.k1(key) && !(key === this.jw_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.zj() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.p1().toString()))));
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.kx_1 = value;
    this.lx_1 = this.kx_1.k();
    this.mx_1 = -1;
  }
  protoOf(JsonTreeListDecoder).p1 = function () {
    return this.kx_1;
  };
  protoOf(JsonTreeListDecoder).tj = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).nw = function (tag) {
    return this.kx_1.j(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).cf = function (descriptor) {
    while (this.mx_1 < (this.lx_1 - 1 | 0)) {
      this.mx_1 = this.mx_1 + 1 | 0;
      return this.mx_1;
    }
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.xx_1 = value;
    this.yx_1 = toList(this.xx_1.t1());
    this.zx_1 = imul(this.yx_1.k(), 2);
    this.ay_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).p1 = function () {
    return this.xx_1;
  };
  protoOf(JsonTreeMapDecoder).tj = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.yx_1.j(i);
  };
  protoOf(JsonTreeMapDecoder).cf = function (descriptor) {
    while (this.ay_1 < (this.zx_1 - 1 | 0)) {
      this.ay_1 = this.ay_1 + 1 | 0;
      return this.ay_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).nw = function (tag) {
    return (this.ay_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.xx_1, tag);
  };
  protoOf(JsonTreeMapDecoder).se = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.hd())).qe(deserializer);
  }
  var WriteMode_OBJ_instance;
  var WriteMode_LIST_instance;
  var WriteMode_MAP_instance;
  var WriteMode_POLY_OBJ_instance;
  function values() {
    return [WriteMode_OBJ_getInstance(), WriteMode_LIST_getInstance(), WriteMode_MAP_getInstance(), WriteMode_POLY_OBJ_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var WriteMode_entriesInitialized;
  function WriteMode_initEntries() {
    if (WriteMode_entriesInitialized)
      return Unit_instance;
    WriteMode_entriesInitialized = true;
    WriteMode_OBJ_instance = new WriteMode('OBJ', 0, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_LIST_instance = new WriteMode('LIST', 1, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
    WriteMode_MAP_instance = new WriteMode('MAP', 2, _Char___init__impl__6a9atx(123), _Char___init__impl__6a9atx(125));
    WriteMode_POLY_OBJ_instance = new WriteMode('POLY_OBJ', 3, _Char___init__impl__6a9atx(91), _Char___init__impl__6a9atx(93));
  }
  var $ENTRIES;
  function WriteMode(name, ordinal, begin, end) {
    Enum.call(this, name, ordinal);
    this.aw_1 = begin;
    this.bw_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.wd();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.de(0), _this__u8e3s4.af());
          var keyKind = keyDescriptor.wd();
          var tmp_0;
          var tmp_1;
          if (keyKind instanceof PrimitiveKind) {
            tmp_1 = true;
          } else {
            tmp_1 = equals(keyKind, ENUM_getInstance());
          }
          if (tmp_1) {
            tmp_0 = WriteMode_MAP_getInstance();
          } else {
            if (_this__u8e3s4.hp_1.xq_1) {
              tmp_0 = WriteMode_LIST_getInstance();
            } else {
              throw InvalidKeyKindException(keyDescriptor);
            }
          }
          tmp = tmp_0;
        } else {
          tmp = WriteMode_OBJ_getInstance();
        }
      }
    }
    return tmp;
  }
  function carrierDescriptor(_this__u8e3s4, module_0) {
    var tmp;
    if (equals(_this__u8e3s4.wd(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.xd()) {
      tmp = carrierDescriptor(_this__u8e3s4.de(0), module_0);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function WriteMode_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_OBJ_instance;
  }
  function WriteMode_LIST_getInstance() {
    WriteMode_initEntries();
    return WriteMode_LIST_instance;
  }
  function WriteMode_MAP_getInstance() {
    WriteMode_initEntries();
    return WriteMode_MAP_instance;
  }
  function WriteMode_POLY_OBJ_getInstance() {
    WriteMode_initEntries();
    return WriteMode_POLY_OBJ_instance;
  }
  function appendEscape($this, lastPosition, current) {
    $this.by(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.by(lastPosition, currentPosition);
    var result = $this.zp_1.toString();
    $this.zp_1.j9(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.yp_1);
    $this.yp_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.cy(), $this.wp_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.dy(currentPosition);
    if (currentPosition === -1) {
      $this.au('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.cy();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.cy(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.au("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.zp_1.k6(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.wp_1 = startPos;
      $this.ey();
      if (($this.wp_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.au('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.wp_1);
    }
    $this.zp_1.k6(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
    return startPos + 4 | 0;
  }
  function fromHexChar($this, source, currentPosition) {
    var character = charSequenceGet(source, currentPosition);
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= character ? character <= _Char___init__impl__6a9atx(57) : false) {
      // Inline function 'kotlin.code' call
      var tmp_0 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(48);
      tmp = tmp_0 - Char__toInt_impl_vasixd(this_0) | 0;
    } else if (_Char___init__impl__6a9atx(97) <= character ? character <= _Char___init__impl__6a9atx(102) : false) {
      // Inline function 'kotlin.code' call
      var tmp_1 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_1 = _Char___init__impl__6a9atx(97);
      tmp = (tmp_1 - Char__toInt_impl_vasixd(this_1) | 0) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= character ? character <= _Char___init__impl__6a9atx(70) : false) {
      // Inline function 'kotlin.code' call
      var tmp_2 = Char__toInt_impl_vasixd(character);
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(65);
      tmp = (tmp_2 - Char__toInt_impl_vasixd(this_2) | 0) + 10 | 0;
    } else {
      $this.au("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.dy(start);
    if (current >= charSequenceLength($this.cy()) || current === -1) {
      $this.au('EOF');
    }
    var tmp = $this.cy();
    var _unary__edvuaz = current;
    current = _unary__edvuaz + 1 | 0;
    // Inline function 'kotlin.code' call
    var this_0 = charSequenceGet(tmp, _unary__edvuaz);
    var tmp0_subject = Char__toInt_impl_vasixd(this_0) | 32;
    var tmp_0;
    // Inline function 'kotlin.code' call
    var this_1 = _Char___init__impl__6a9atx(116);
    if (tmp0_subject === Char__toInt_impl_vasixd(this_1)) {
      consumeBooleanLiteral($this, 'rue', current);
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.code' call
      var this_2 = _Char___init__impl__6a9atx(102);
      if (tmp0_subject === Char__toInt_impl_vasixd(this_2)) {
        consumeBooleanLiteral($this, 'alse', current);
        tmp_0 = false;
      } else {
        $this.au("Expected valid boolean literal prefix, but had '" + $this.eu() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.cy()) - current | 0) < literalSuffix.length) {
      $this.au('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.cy(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.au("Expected valid boolean literal prefix, but had '" + $this.eu() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.wp_1 = current + literalSuffix.length | 0;
  }
  function consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive) {
    var tmp;
    switch (isExponentPositive) {
      case false:
        // Inline function 'kotlin.math.pow' call

        var x = -toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x);
        break;
      case true:
        // Inline function 'kotlin.math.pow' call

        var x_0 = toNumber(exponentAccumulator);
        tmp = Math.pow(10.0, x_0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function AbstractJsonLexer() {
    this.wp_1 = 0;
    this.xp_1 = new JsonPath();
    this.yp_1 = null;
    this.zp_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).ey = function () {
  };
  protoOf(AbstractJsonLexer).ov = function () {
    var current = this.fy();
    var source = this.cy();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.wp_1 = this.wp_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).gy = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).aq = function () {
    var nextToken = this.gu();
    if (!(nextToken === 10)) {
      this.au('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.cy(), this.wp_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).zt = function (expected) {
    var token = this.gu();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.wp_1 - 1 | 0 : this.wp_1;
      var s = this.wp_1 === charSequenceLength(this.cy()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.cy(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.au(tmp$ret$1, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).hy = function (expected) {
    if (this.wp_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.wp_1;
        try {
          this.wp_1 = this.wp_1 - 1 | 0;
          tmp$ret$0 = this.eu();
          break $l$block;
        }finally {
          this.wp_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.vs("Expected string literal but 'null' literal was found", this.wp_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.wp_1 - 1 | 0 : this.wp_1;
    var s = this.wp_1 === charSequenceLength(this.cy()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.cy(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.au(tmp$ret$3, position);
  };
  protoOf(AbstractJsonLexer).bu = function () {
    var source = this.cy();
    var cpos = this.wp_1;
    $l$loop_0: while (true) {
      cpos = this.dy(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.wp_1 = cpos;
      return charToTokenClass(ch);
    }
    this.wp_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).pv = function (doConsume) {
    var current = this.fy();
    current = this.dy(current);
    var len = charSequenceLength(this.cy()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.cy(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.cy(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.wp_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).cw = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.pv(doConsume) : $super.pv.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).qv = function (isLenient) {
    var token = this.bu();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.eu();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.du();
    }
    var string = tmp;
    this.yp_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).iy = function () {
    this.yp_1 = null;
  };
  protoOf(AbstractJsonLexer).jy = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.cy();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).du = function () {
    if (!(this.yp_1 == null)) {
      return takePeeked(this);
    }
    return this.tv();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.dy(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.au('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.by(lastPosition, currentPosition);
          currentPosition = this.dy(currentPosition);
          if (currentPosition === -1) {
            this.au('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.jy(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.wp_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).uv = function () {
    var result = this.eu();
    if (result === 'null' && wasUnquotedString(this)) {
      this.au("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).eu = function () {
    if (!(this.yp_1 == null)) {
      return takePeeked(this);
    }
    var current = this.fy();
    if (current >= charSequenceLength(this.cy()) || current === -1) {
      this.au('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.cy(), current));
    if (token === 1) {
      return this.du();
    }
    if (!(token === 0)) {
      this.au('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.cy(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.cy(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.cy())) {
        usedAppend = true;
        this.by(this.wp_1, current);
        var eof = this.dy(current);
        if (eof === -1) {
          this.wp_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.jy(this.wp_1, current);
    } else {
      tmp = decodedString(this, this.wp_1, current);
    }
    var result = tmp;
    this.wp_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).by = function (fromIndex, toIndex) {
    this.zp_1.e9(this.cy(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).sv = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.bu();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.eu();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.bu();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.eu();
        else
          this.tv();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.e(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.wp_1, 'found ] instead of } at path: ' + this.xp_1.toString(), this.cy());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.wp_1, 'found } instead of ] at path: ' + this.xp_1.toString(), this.cy());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.au('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.gu();
      if (tokenStack.k() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.cy()) + "', currentPosition=" + this.wp_1 + ')';
  };
  protoOf(AbstractJsonLexer).rv = function (key) {
    var processed = this.jy(0, this.wp_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw new JsonDecodingException("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.xp_1.it() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.cy(), lastIndexOf_0))));
  };
  protoOf(AbstractJsonLexer).vs = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.xp_1.it() + hintMessage, this.cy());
  };
  protoOf(AbstractJsonLexer).au = function (message, position, hint, $super) {
    position = position === VOID ? this.wp_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.vs(message, position, hint) : $super.vs.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).ew = function () {
    var current = this.fy();
    current = this.dy(current);
    if (current >= charSequenceLength(this.cy()) || current === -1) {
      this.au('EOF');
    }
    var tmp;
    if (charSequenceGet(this.cy(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.cy())) {
        this.au('EOF');
      }
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var accumulator = new Long(0, 0);
    var exponentAccumulator = new Long(0, 0);
    var isNegative = false;
    var isExponentPositive = false;
    var hasExponent = false;
    var start = current;
    $l$loop_4: while (!(current === charSequenceLength(this.cy()))) {
      var ch = charSequenceGet(this.cy(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.au('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.au("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.au("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.au("Unexpected symbol '-' in numeric literal");
        }
        isNegative = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      var token = charToTokenClass(ch);
      if (!(token === 0))
        break $l$loop_4;
      current = current + 1 | 0;
      var digit = Char__minus_impl_a2frrh(ch, _Char___init__impl__6a9atx(48));
      if (!(0 <= digit ? digit <= 9 : false)) {
        this.au("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
      }
      if (hasExponent) {
        // Inline function 'kotlin.Long.times' call
        var this_0 = exponentAccumulator;
        // Inline function 'kotlin.Long.plus' call
        var this_1 = multiply(this_0, fromInt(10));
        exponentAccumulator = add(this_1, fromInt(digit));
        continue $l$loop_4;
      }
      // Inline function 'kotlin.Long.times' call
      var this_2 = accumulator;
      // Inline function 'kotlin.Long.minus' call
      var this_3 = multiply(this_2, fromInt(10));
      accumulator = subtract(this_3, fromInt(digit));
      if (compare(accumulator, new Long(0, 0)) > 0) {
        this.au('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.au('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.au('EOF');
      }
      if (!(charSequenceGet(this.cy(), current) === _Char___init__impl__6a9atx(34))) {
        this.au('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.wp_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(new Long(-1, 2147483647)) || doubleAccumulator < toNumber(new Long(0, -2147483648))) {
        this.au('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.au("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!equalsLong(accumulator, new Long(0, -2147483648))) {
      tmp_0 = negate(accumulator);
    } else {
      this.au('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).vr = function () {
    var result = this.ew();
    var next = this.gu();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.wp_1 - 1 | 0 : this.wp_1;
      var s = this.wp_1 === charSequenceLength(this.cy()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.cy(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.au(tmp$ret$1, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).dw = function () {
    var current = this.fy();
    if (current === charSequenceLength(this.cy())) {
      this.au('EOF');
    }
    var tmp;
    if (charSequenceGet(this.cy(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.wp_1 === charSequenceLength(this.cy())) {
        this.au('EOF');
      }
      if (!(charSequenceGet(this.cy(), this.wp_1) === _Char___init__impl__6a9atx(34))) {
        this.au('Expected closing quotation mark');
      }
      this.wp_1 = this.wp_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().ly_1;
      // Inline function 'kotlin.code' call
      tmp = tmp_0[Char__toInt_impl_vasixd(c)];
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function tokenDescription(token) {
    return token === 1 ? "quotation mark '\"'" : token === 2 ? "string escape sequence '\\'" : token === 4 ? "comma ','" : token === 5 ? "colon ':'" : token === 6 ? "start of the object '{'" : token === 7 ? "end of the object '}'" : token === 8 ? "start of the array '['" : token === 9 ? "end of the array ']'" : token === 10 ? 'end of the input' : token === 127 ? 'invalid token' : 'valid token';
  }
  function escapeToChar(c) {
    return c < 117 ? CharMappings_getInstance().ky_1[c] : _Char___init__impl__6a9atx(0);
  }
  function initEscape($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2ESC($this, i, _Char___init__impl__6a9atx(117));
      }
       while (inductionVariable <= 31);
    initC2ESC($this, 8, _Char___init__impl__6a9atx(98));
    initC2ESC($this, 9, _Char___init__impl__6a9atx(116));
    initC2ESC($this, 10, _Char___init__impl__6a9atx(110));
    initC2ESC($this, 12, _Char___init__impl__6a9atx(102));
    initC2ESC($this, 13, _Char___init__impl__6a9atx(114));
    initC2ESC_0($this, _Char___init__impl__6a9atx(47), _Char___init__impl__6a9atx(47));
    initC2ESC_0($this, _Char___init__impl__6a9atx(34), _Char___init__impl__6a9atx(34));
    initC2ESC_0($this, _Char___init__impl__6a9atx(92), _Char___init__impl__6a9atx(92));
  }
  function initCharToToken($this) {
    var inductionVariable = 0;
    if (inductionVariable <= 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        initC2TC($this, i, 127);
      }
       while (inductionVariable <= 32);
    initC2TC($this, 9, 3);
    initC2TC($this, 10, 3);
    initC2TC($this, 13, 3);
    initC2TC($this, 32, 3);
    initC2TC_0($this, _Char___init__impl__6a9atx(44), 4);
    initC2TC_0($this, _Char___init__impl__6a9atx(58), 5);
    initC2TC_0($this, _Char___init__impl__6a9atx(123), 6);
    initC2TC_0($this, _Char___init__impl__6a9atx(125), 7);
    initC2TC_0($this, _Char___init__impl__6a9atx(91), 8);
    initC2TC_0($this, _Char___init__impl__6a9atx(93), 9);
    initC2TC_0($this, _Char___init__impl__6a9atx(34), 1);
    initC2TC_0($this, _Char___init__impl__6a9atx(92), 2);
  }
  function initC2ESC($this, c, esc) {
    if (!(esc === _Char___init__impl__6a9atx(117))) {
      // Inline function 'kotlin.code' call
      var tmp$ret$0 = Char__toInt_impl_vasixd(esc);
      $this.ky_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.ly_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.ky_1 = charArray(117);
    this.ly_1 = new Int8Array(126);
    initEscape(this);
    initCharToToken(this);
  }
  var CharMappings_instance;
  function CharMappings_getInstance() {
    if (CharMappings_instance == null)
      new CharMappings();
    return CharMappings_instance;
  }
  function StringJsonLexerWithComments(source) {
    StringJsonLexer.call(this, source);
  }
  protoOf(StringJsonLexerWithComments).gu = function () {
    var source = this.cy();
    var cpos = this.fy();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.wp_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).cu = function () {
    var current = this.fy();
    if (current >= this.cy().length || current === -1)
      return false;
    return this.gy(charCodeAt(this.cy(), current));
  };
  protoOf(StringJsonLexerWithComments).nv = function (expected) {
    var source = this.cy();
    var current = this.fy();
    if (current >= source.length || current === -1) {
      this.wp_1 = -1;
      this.hy(expected);
    }
    var c = charCodeAt(source, current);
    this.wp_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.hy(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).bu = function () {
    var source = this.cy();
    var cpos = this.fy();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.wp_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).fy = function () {
    var current = this.wp_1;
    if (current === -1)
      return current;
    var source = this.cy();
    $l$loop_1: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop_1;
      }
      if (c === _Char___init__impl__6a9atx(47) && (current + 1 | 0) < source.length) {
        var tmp0_subject = charCodeAt(source, current + 1 | 0);
        if (tmp0_subject === _Char___init__impl__6a9atx(47)) {
          current = indexOf_0(source, _Char___init__impl__6a9atx(10), current + 2 | 0);
          if (current === -1) {
            current = source.length;
          } else {
            current = current + 1 | 0;
          }
          continue $l$loop_1;
        } else if (tmp0_subject === _Char___init__impl__6a9atx(42)) {
          current = indexOf(source, '*/', current + 2 | 0);
          if (current === -1) {
            this.wp_1 = source.length;
            this.au('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.wp_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.vy_1 = source;
  }
  protoOf(StringJsonLexer).cy = function () {
    return this.vy_1;
  };
  protoOf(StringJsonLexer).dy = function (position) {
    return position < this.cy().length ? position : -1;
  };
  protoOf(StringJsonLexer).gu = function () {
    var source = this.cy();
    var cpos = this.wp_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.wp_1 = cpos;
      return charToTokenClass(c);
    }
    this.wp_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).cu = function () {
    var current = this.wp_1;
    if (current === -1)
      return false;
    var source = this.cy();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.wp_1 = current;
      return this.gy(c);
    }
    this.wp_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).fy = function () {
    var current = this.wp_1;
    if (current === -1)
      return current;
    var source = this.cy();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.wp_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).nv = function (expected) {
    if (this.wp_1 === -1) {
      this.hy(expected);
    }
    var source = this.cy();
    var cpos = this.wp_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.wp_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.hy(expected);
    }
    this.wp_1 = -1;
    this.hy(expected);
  };
  protoOf(StringJsonLexer).tv = function () {
    this.nv(_Char___init__impl__6a9atx(34));
    var current = this.wp_1;
    var closingQuote = indexOf_0(this.cy(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.eu();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.wp_1 - 1 | 0 : this.wp_1;
      var s = this.wp_1 === charSequenceLength(this.cy()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.cy(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.au(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.cy(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.cy(), this.wp_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.wp_1 = closingQuote + 1 | 0;
    return substring(this.cy(), current, closingQuote);
  };
  protoOf(StringJsonLexer).xv = function (keyToMatch, isLenient) {
    var positionSnapshot = this.wp_1;
    try {
      if (!(this.gu() === 6))
        return null;
      var firstKey = this.qv(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.iy();
      if (!(this.gu() === 5))
        return null;
      return this.qv(isLenient);
    }finally {
      this.wp_1 = positionSnapshot;
      this.iy();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.hp_1.jr_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.jp_1;
  }
  function JsonToStringWriter() {
    this.mp_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).is = function (value) {
    this.mp_1.i9(value);
  };
  protoOf(JsonToStringWriter).es = function (char) {
    this.mp_1.k6(char);
  };
  protoOf(JsonToStringWriter).gs = function (text) {
    this.mp_1.j6(text);
  };
  protoOf(JsonToStringWriter).ms = function (text) {
    printQuoted(this.mp_1, text);
  };
  protoOf(JsonToStringWriter).np = function () {
    this.mp_1.k9();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.mp_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(JsonSerializersModuleValidator).uk = contextual;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Tombstone_instance = new Tombstone();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Json_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-json.js.map
