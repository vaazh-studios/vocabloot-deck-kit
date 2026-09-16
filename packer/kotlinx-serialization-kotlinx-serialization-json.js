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
  var protoOf = kotlin_kotlin.$_$.y4;
  var initMetadataForObject = kotlin_kotlin.$_$.q4;
  var VOID = kotlin_kotlin.$_$.a;
  var Unit_instance = kotlin_kotlin.$_$.c;
  var initMetadataForClass = kotlin_kotlin.$_$.l4;
  var toString = kotlin_kotlin.$_$.a5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v;
  var charSequenceLength = kotlin_kotlin.$_$.e4;
  var charSequenceGet = kotlin_kotlin.$_$.d4;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a1;
  var equals = kotlin_kotlin.$_$.g4;
  var toString_0 = kotlin_kotlin.$_$.z6;
  var Enum = kotlin_kotlin.$_$.l6;
  var initMetadataForCompanion = kotlin_kotlin.$_$.m4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.r;
  var hashCode = kotlin_kotlin.$_$.k4;
  var joinToString = kotlin_kotlin.$_$.j2;
  var THROW_CCE = kotlin_kotlin.$_$.p6;
  var KtMap = kotlin_kotlin.$_$.l1;
  var getKClassFromExpression = kotlin_kotlin.$_$.h5;
  var getBooleanHashCode = kotlin_kotlin.$_$.h4;
  var getStringHashCode = kotlin_kotlin.$_$.j4;
  var KtList = kotlin_kotlin.$_$.k1;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p;
  var InlinePrimitiveDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g1;
  var fromInt = kotlin_kotlin.$_$.o3;
  var ElementMarker = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d1;
  var captureStack = kotlin_kotlin.$_$.z3;
  var charSequenceSubSequence = kotlin_kotlin.$_$.f4;
  var coerceAtLeast = kotlin_kotlin.$_$.c5;
  var coerceAtMost = kotlin_kotlin.$_$.d5;
  var SerializationException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var SerializationException_init_$Init$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var Collection = kotlin_kotlin.$_$.i1;
  var isInterface = kotlin_kotlin.$_$.t4;
  var CLASS_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var ENUM_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var singleOrNull = kotlin_kotlin.$_$.v2;
  var emptyMap = kotlin_kotlin.$_$.b2;
  var getValue = kotlin_kotlin.$_$.f2;
  var copyOf = kotlin_kotlin.$_$.w1;
  var copyOf_0 = kotlin_kotlin.$_$.x1;
  var LIST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var SerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s;
  var CONTEXTUAL_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var PolymorphicKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q;
  var PrimitiveKind = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r;
  var MAP_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var ENUM = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t;
  var contextual = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var SerializersModuleCollector = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var DeepRecursiveFunction = kotlin_kotlin.$_$.j6;
  var invoke = kotlin_kotlin.$_$.u6;
  var CoroutineImpl = kotlin_kotlin.$_$.e3;
  var DeepRecursiveScope = kotlin_kotlin.$_$.k6;
  var Unit = kotlin_kotlin.$_$.r6;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.d3;
  var initMetadataForLambda = kotlin_kotlin.$_$.p4;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.n4;
  var SealedClassSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.r1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x;
  var jsonCachedSerialNames = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k1;
  var AbstractDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v;
  var AbstractPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b1;
  var DeserializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.p1;
  var getKClass = kotlin_kotlin.$_$.i5;
  var findPolymorphicSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u1;
  var ensureNotNull = kotlin_kotlin.$_$.t6;
  var substringBefore = kotlin_kotlin.$_$.c6;
  var removeSuffix = kotlin_kotlin.$_$.x5;
  var substringAfter = kotlin_kotlin.$_$.b6;
  var contains = kotlin_kotlin.$_$.l5;
  var plus = kotlin_kotlin.$_$.x6;
  var MissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.q1;
  var convertToInt = kotlin_kotlin.$_$.m3;
  var equalsLong = kotlin_kotlin.$_$.n3;
  var Decoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.z;
  var CompositeDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.x;
  var objectCreate = kotlin_kotlin.$_$.x4;
  var AbstractEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.w;
  var OBJECT_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.w6;
  var findPolymorphicSerializer_0 = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var SerializationStrategy = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.t1;
  var Encoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a1;
  var CompositeEncoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.c1;
  var numberToChar = kotlin_kotlin.$_$.w4;
  var charCodeAt = kotlin_kotlin.$_$.c4;
  var equals_0 = kotlin_kotlin.$_$.n5;
  var toString_1 = kotlin_kotlin.$_$.d1;
  var toByte = kotlin_kotlin.$_$.z4;
  var startsWith = kotlin_kotlin.$_$.z5;
  var NamedValueDecoder = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i1;
  var IllegalArgumentException = kotlin_kotlin.$_$.n6;
  var numberRangeToNumber = kotlin_kotlin.$_$.v4;
  var ClosedRange = kotlin_kotlin.$_$.b5;
  var contains_0 = kotlin_kotlin.$_$.e5;
  var emptySet = kotlin_kotlin.$_$.c2;
  var plus_0 = kotlin_kotlin.$_$.s2;
  var toInt = kotlin_kotlin.$_$.g6;
  var toList = kotlin_kotlin.$_$.y2;
  var enumEntries = kotlin_kotlin.$_$.f3;
  var getContextualDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.u;
  var toNumber = kotlin_kotlin.$_$.w3;
  var last = kotlin_kotlin.$_$.n2;
  var removeLast = kotlin_kotlin.$_$.u2;
  var lastIndexOf = kotlin_kotlin.$_$.v5;
  var Long = kotlin_kotlin.$_$.o6;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.b1;
  var multiply = kotlin_kotlin.$_$.q3;
  var add = kotlin_kotlin.$_$.h3;
  var subtract = kotlin_kotlin.$_$.v3;
  var compare = kotlin_kotlin.$_$.k3;
  var numberToLong = kotlin_kotlin.$_$.s3;
  var negate = kotlin_kotlin.$_$.r3;
  var charArray = kotlin_kotlin.$_$.b4;
  var indexOf = kotlin_kotlin.$_$.p5;
  var indexOf_0 = kotlin_kotlin.$_$.q5;
  var substring = kotlin_kotlin.$_$.d6;
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
  initMetadataForClass(StreamingJsonEncoder, 'StreamingJsonEncoder', VOID, AbstractEncoder, [Encoder, CompositeEncoder]);
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
    this.mp_1 = configuration;
    this.np_1 = serializersModule;
    this.op_1 = new DescriptorSchemaCache();
  }
  protoOf(Json).ff = function () {
    return this.np_1;
  };
  protoOf(Json).pp = function (serializer, value) {
    var result = new JsonToStringWriter();
    try {
      encodeByWriter(this, result, serializer, value);
      return result.toString();
    }finally {
      result.sp();
    }
  };
  protoOf(Json).qp = function (deserializer, string) {
    var lexer = StringJsonLexer_0(this, string);
    var input = new StreamingJsonDecoder(this, WriteMode_OBJ_getInstance(), lexer, deserializer.md(), null);
    var result = input.ve(deserializer);
    lexer.fq();
    return result;
  };
  function Json_0(from, builderAction) {
    from = from === VOID ? Default_getInstance() : from;
    var builder = new JsonBuilder(from);
    builderAction(builder);
    var conf = builder.yq();
    return new JsonImpl(conf, builder.xq_1);
  }
  function JsonBuilder(json) {
    this.gq_1 = json.mp_1.zq_1;
    this.hq_1 = json.mp_1.er_1;
    this.iq_1 = json.mp_1.ar_1;
    this.jq_1 = json.mp_1.br_1;
    this.kq_1 = json.mp_1.dr_1;
    this.lq_1 = json.mp_1.fr_1;
    this.mq_1 = json.mp_1.gr_1;
    this.nq_1 = json.mp_1.ir_1;
    this.oq_1 = json.mp_1.pr_1;
    this.pq_1 = json.mp_1.kr_1;
    this.qq_1 = json.mp_1.lr_1;
    this.rq_1 = json.mp_1.mr_1;
    this.sq_1 = json.mp_1.nr_1;
    this.tq_1 = json.mp_1.or_1;
    this.uq_1 = json.mp_1.jr_1;
    this.vq_1 = json.mp_1.cr_1;
    this.wq_1 = json.mp_1.hr_1;
    this.xq_1 = json.ff();
  }
  protoOf(JsonBuilder).yq = function () {
    if (this.wq_1) {
      // Inline function 'kotlin.require' call
      if (!(this.nq_1 === 'type')) {
        var message = 'Class discriminator should not be specified when array polymorphism is specified';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!this.oq_1.equals(ClassDiscriminatorMode_POLYMORPHIC_getInstance())) {
        var message_0 = 'useArrayPolymorphism option can only be used if classDiscriminatorMode in a default POLYMORPHIC state.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    if (!this.kq_1) {
      // Inline function 'kotlin.require' call
      if (!(this.lq_1 === '    ')) {
        var message_1 = 'Indent should not be specified when default printing mode is used';
        throw IllegalArgumentException_init_$Create$(toString(message_1));
      }
    } else if (!(this.lq_1 === '    ')) {
      var tmp0 = this.lq_1;
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
        var message_2 = 'Only whitespace, tab, newline and carriage return are allowed as pretty print symbols. Had ' + this.lq_1;
        throw IllegalArgumentException_init_$Create$(toString(message_2));
      }
    }
    return new JsonConfiguration(this.gq_1, this.iq_1, this.jq_1, this.vq_1, this.kq_1, this.hq_1, this.lq_1, this.mq_1, this.wq_1, this.nq_1, this.uq_1, this.pq_1, this.qq_1, this.rq_1, this.sq_1, this.tq_1, this.oq_1);
  };
  function validateConfiguration($this) {
    if (equals($this.ff(), EmptySerializersModule()))
      return Unit_instance;
    var collector = new JsonSerializersModuleValidator($this.mp_1);
    $this.ff().ok(collector);
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
    this.zq_1 = encodeDefaults;
    this.ar_1 = ignoreUnknownKeys;
    this.br_1 = isLenient;
    this.cr_1 = allowStructuredMapKeys;
    this.dr_1 = prettyPrint;
    this.er_1 = explicitNulls;
    this.fr_1 = prettyPrintIndent;
    this.gr_1 = coerceInputValues;
    this.hr_1 = useArrayPolymorphism;
    this.ir_1 = classDiscriminator;
    this.jr_1 = allowSpecialFloatingPointValues;
    this.kr_1 = useAlternativeNames;
    this.lr_1 = namingStrategy;
    this.mr_1 = decodeEnumsCaseInsensitive;
    this.nr_1 = allowTrailingComma;
    this.or_1 = allowComments;
    this.pr_1 = classDiscriminatorMode;
  }
  protoOf(JsonConfiguration).toString = function () {
    return 'JsonConfiguration(encodeDefaults=' + this.zq_1 + ', ignoreUnknownKeys=' + this.ar_1 + ', isLenient=' + this.br_1 + ', ' + ('allowStructuredMapKeys=' + this.cr_1 + ', prettyPrint=' + this.dr_1 + ', explicitNulls=' + this.er_1 + ', ') + ("prettyPrintIndent='" + this.fr_1 + "', coerceInputValues=" + this.gr_1 + ', useArrayPolymorphism=' + this.hr_1 + ', ') + ("classDiscriminator='" + this.ir_1 + "', allowSpecialFloatingPointValues=" + this.jr_1 + ', ') + ('useAlternativeNames=' + this.kr_1 + ', namingStrategy=' + toString_0(this.lr_1) + ', decodeEnumsCaseInsensitive=' + this.mr_1 + ', ') + ('allowTrailingComma=' + this.nr_1 + ', allowComments=' + this.or_1 + ', classDiscriminatorMode=' + this.pr_1.toString() + ')');
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
    this.qr_1 = content;
  }
  protoOf(JsonObject).equals = function (other) {
    return equals(this.qr_1, other);
  };
  protoOf(JsonObject).hashCode = function () {
    return hashCode(this.qr_1);
  };
  protoOf(JsonObject).toString = function () {
    var tmp = this.qr_1.v1();
    return joinToString(tmp, ',', '{', '}', VOID, VOID, JsonObject$toString$lambda);
  };
  protoOf(JsonObject).o = function () {
    return this.qr_1.o();
  };
  protoOf(JsonObject).rr = function (key) {
    return this.qr_1.q1(key);
  };
  protoOf(JsonObject).q1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return false;
    return this.rr((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).sr = function (key) {
    return this.qr_1.s1(key);
  };
  protoOf(JsonObject).s1 = function (key) {
    if (!(!(key == null) ? typeof key === 'string' : false))
      return null;
    return this.sr((!(key == null) ? typeof key === 'string' : false) ? key : THROW_CCE());
  };
  protoOf(JsonObject).k = function () {
    return this.qr_1.k();
  };
  protoOf(JsonObject).t1 = function () {
    return this.qr_1.t1();
  };
  protoOf(JsonObject).u1 = function () {
    return this.qr_1.u1();
  };
  protoOf(JsonObject).v1 = function () {
    return this.qr_1.v1();
  };
  function JsonNull() {
    JsonNull_instance = this;
    JsonPrimitive.call(this);
    this.tr_1 = 'null';
  }
  protoOf(JsonNull).ur = function () {
    return this.tr_1;
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
    return this.ur();
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
    this.vr_1 = isString;
    this.wr_1 = coerceToInlineType;
    this.xr_1 = toString(body);
    if (!(this.wr_1 == null)) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.require' call
      if (!this.wr_1.ce()) {
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
  }
  protoOf(JsonLiteral).ur = function () {
    return this.xr_1;
  };
  protoOf(JsonLiteral).toString = function () {
    var tmp;
    if (this.vr_1) {
      // Inline function 'kotlin.text.buildString' call
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$();
      printQuoted(this_0, this.xr_1);
      tmp = this_0.toString();
    } else {
      tmp = this.xr_1;
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
    if (!(this.vr_1 === other.vr_1))
      return false;
    if (!(this.xr_1 === other.xr_1))
      return false;
    return true;
  };
  protoOf(JsonLiteral).hashCode = function () {
    var result = getBooleanHashCode(this.vr_1);
    result = imul(31, result) + getStringHashCode(this.xr_1) | 0;
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
    this.yr_1 = content;
  }
  protoOf(JsonArray).equals = function (other) {
    return equals(this.yr_1, other);
  };
  protoOf(JsonArray).hashCode = function () {
    return hashCode(this.yr_1);
  };
  protoOf(JsonArray).toString = function () {
    return joinToString(this.yr_1, ',', '[', ']');
  };
  protoOf(JsonArray).o = function () {
    return this.yr_1.o();
  };
  protoOf(JsonArray).g = function () {
    return this.yr_1.g();
  };
  protoOf(JsonArray).j = function (index) {
    return this.yr_1.j(index);
  };
  protoOf(JsonArray).zr = function (element) {
    return this.yr_1.l1(element);
  };
  protoOf(JsonArray).l1 = function (element) {
    if (!(element instanceof JsonElement))
      return -1;
    return this.zr(element instanceof JsonElement ? element : THROW_CCE());
  };
  protoOf(JsonArray).m1 = function (fromIndex, toIndex) {
    return this.yr_1.m1(fromIndex, toIndex);
  };
  protoOf(JsonArray).k = function () {
    return this.yr_1.k();
  };
  function get_booleanOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return toBooleanStrictOrNull(_this__u8e3s4.ur());
  }
  function parseLongImpl(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    return (new StringJsonLexer(_this__u8e3s4.ur())).as();
  }
  function get_contentOrNull(_this__u8e3s4) {
    _init_properties_JsonElement_kt__7cbdc2();
    var tmp;
    if (_this__u8e3s4 instanceof JsonNull) {
      tmp = null;
    } else {
      tmp = _this__u8e3s4.ur();
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
    this.bs_1 = writer;
    this.cs_1 = true;
  }
  protoOf(Composer).ds = function () {
    this.cs_1 = true;
  };
  protoOf(Composer).es = function () {
    return Unit_instance;
  };
  protoOf(Composer).fs = function () {
    this.cs_1 = false;
  };
  protoOf(Composer).gs = function () {
    this.cs_1 = false;
  };
  protoOf(Composer).hs = function () {
    return Unit_instance;
  };
  protoOf(Composer).is = function (v) {
    return this.bs_1.js(v);
  };
  protoOf(Composer).ks = function (v) {
    return this.bs_1.ls(v);
  };
  protoOf(Composer).ms = function (v) {
    return this.bs_1.ns(fromInt(v));
  };
  protoOf(Composer).os = function (v) {
    return this.bs_1.ns(v);
  };
  protoOf(Composer).ps = function (v) {
    return this.bs_1.ls(v.toString());
  };
  protoOf(Composer).qs = function (value) {
    return this.bs_1.rs(value);
  };
  function Composer_0(sb, json) {
    return json.mp_1.dr_1 ? new ComposerWithPrettyPrint(sb, json) : new Composer(sb);
  }
  function ComposerWithPrettyPrint(writer, json) {
    Composer.call(this, writer);
    this.us_1 = json;
    this.vs_1 = 0;
  }
  protoOf(ComposerWithPrettyPrint).ds = function () {
    this.cs_1 = true;
    this.vs_1 = this.vs_1 + 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).es = function () {
    this.vs_1 = this.vs_1 - 1 | 0;
  };
  protoOf(ComposerWithPrettyPrint).fs = function () {
    this.cs_1 = false;
    this.ks('\n');
    // Inline function 'kotlin.repeat' call
    var times = this.vs_1;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.ks(this.us_1.mp_1.fr_1);
      }
       while (inductionVariable < times);
  };
  protoOf(ComposerWithPrettyPrint).gs = function () {
    if (this.cs_1)
      this.cs_1 = false;
    else {
      this.fs();
    }
  };
  protoOf(ComposerWithPrettyPrint).hs = function () {
    this.is(_Char___init__impl__6a9atx(32));
  };
  function readIfAbsent($this, descriptor, index) {
    $this.xs_1 = (!descriptor.je(index) && descriptor.ie(index).ud());
    return $this.xs_1;
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
    tmp.ws_1 = new ElementMarker(descriptor, JsonElementMarker$readIfAbsent$ref(this));
    this.xs_1 = false;
  }
  protoOf(JsonElementMarker).ys = function (index) {
    this.ws_1.ci(index);
  };
  protoOf(JsonElementMarker).zs = function () {
    return this.ws_1.di();
  };
  function invalidTrailingComma(_this__u8e3s4, entity) {
    entity = entity === VOID ? 'object' : entity;
    _this__u8e3s4.at('Trailing comma before the end of JSON ' + entity, _this__u8e3s4.bq_1 - 1 | 0, "Trailing commas are non-complaint JSON and not allowed by default. Use 'allowTrailingComma = true' in 'Json {}' builder to support them.");
  }
  function JsonEncodingException(message) {
    JsonException.call(this, message);
    captureStack(this, JsonEncodingException);
  }
  function InvalidKeyKindException(keyDescriptor) {
    return new JsonEncodingException("Value of type '" + keyDescriptor.ae() + "' can't be used in JSON as a key in the map. " + ("It should have either primitive or enum kind, but its kind is '" + keyDescriptor.be().toString() + "'.\n") + "Use 'allowStructuredMapKeys = true' in 'Json {}' builder to convert such maps to [key1, value1, key2, value2,...] arrays.");
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
    if (json.mp_1.ar_1) {
      tmp = true;
    } else {
      var tmp0 = _this__u8e3s4.ee();
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(tmp0, Collection)) {
          tmp_0 = tmp0.o();
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
    var index = _this__u8e3s4.ge(name);
    if (!(index === -3))
      return index;
    if (!json.mp_1.kr_1)
      return index;
    return getJsonNameIndexSlowPath(_this__u8e3s4, json, name);
  }
  function getJsonElementName(_this__u8e3s4, json, index) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var strategy = namingStrategy(_this__u8e3s4, json);
    return strategy == null ? _this__u8e3s4.fe(index) : serializationNamesIndices(_this__u8e3s4, json, strategy)[index];
  }
  function namingStrategy(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return equals(_this__u8e3s4.be(), CLASS_getInstance()) ? json.mp_1.lr_1 : null;
  }
  function deserializationNamesMap(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    var tmp = get_schemaCache(_this__u8e3s4);
    var tmp_0 = get_JsonDeserializationNamesKey();
    return tmp.ct(descriptor, tmp_0, deserializationNamesMap$lambda(descriptor, _this__u8e3s4));
  }
  function decodeCaseInsensitive(_this__u8e3s4, descriptor) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    return _this__u8e3s4.mp_1.mr_1 && equals(descriptor.be(), ENUM_getInstance());
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
    return tmp.ct(_this__u8e3s4, tmp_0, serializationNamesIndices$lambda(_this__u8e3s4, strategy));
  }
  function buildDeserializationNamesMap(_this__u8e3s4, json) {
    _init_properties_JsonNamesMap_kt__cbbp0k();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var builder = LinkedHashMap_init_$Create$();
    var useLowercaseEnums = decodeCaseInsensitive(json, _this__u8e3s4);
    var strategyForClasses = namingStrategy(_this__u8e3s4, json);
    var inductionVariable = 0;
    var last = _this__u8e3s4.de();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIsInstance' call
        var tmp0 = _this__u8e3s4.he(i);
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
        var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.dt_1;
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
          tmp_0 = _this__u8e3s4.fe(i).toLowerCase();
        } else if (!(strategyForClasses == null)) {
          tmp_0 = strategyForClasses.et(_this__u8e3s4, i, _this__u8e3s4.fe(i));
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
    if (builder.o()) {
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
      var tmp_0 = $this_serializationNamesIndices.de();
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_1 = Array(tmp_0);
      while (tmp < tmp_0) {
        var tmp_2 = tmp;
        var baseName = $this_serializationNamesIndices.fe(tmp_2);
        tmp_1[tmp_2] = $strategy.et($this_serializationNamesIndices, tmp_2, baseName);
        tmp = tmp + 1 | 0;
      }
      return tmp_1;
    };
  }
  function buildDeserializationNamesMap$putOrThrow(_this__u8e3s4, $this_buildDeserializationNamesMap, name, index) {
    var entity = equals($this_buildDeserializationNamesMap.be(), ENUM_getInstance()) ? 'enum value' : 'property';
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    if ((isInterface(_this__u8e3s4, KtMap) ? _this__u8e3s4 : THROW_CCE()).q1(name)) {
      throw new JsonException("The suggested name '" + name + "' for " + entity + ' ' + $this_buildDeserializationNamesMap.fe(index) + ' is already one of the names for ' + entity + ' ' + ($this_buildDeserializationNamesMap.fe(getValue(_this__u8e3s4, name)) + ' in ' + toString($this_buildDeserializationNamesMap)));
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
    var newSize = imul($this.ht_1, 2);
    $this.ft_1 = copyOf($this.ft_1, newSize);
    $this.gt_1 = copyOf_0($this.gt_1, newSize);
  }
  function JsonPath() {
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.ft_1 = Array(8);
    var tmp_0 = this;
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(8);
    while (tmp_1 < 8) {
      tmp_2[tmp_1] = -1;
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.gt_1 = tmp_2;
    this.ht_1 = -1;
  }
  protoOf(JsonPath).it = function (sd) {
    this.ht_1 = this.ht_1 + 1 | 0;
    var depth = this.ht_1;
    if (depth === this.ft_1.length) {
      resize(this);
    }
    this.ft_1[depth] = sd;
  };
  protoOf(JsonPath).jt = function (index) {
    this.gt_1[this.ht_1] = index;
  };
  protoOf(JsonPath).kt = function (key) {
    var tmp;
    if (!(this.gt_1[this.ht_1] === -2)) {
      this.ht_1 = this.ht_1 + 1 | 0;
      tmp = this.ht_1 === this.ft_1.length;
    } else {
      tmp = false;
    }
    if (tmp) {
      resize(this);
    }
    this.ft_1[this.ht_1] = key;
    this.gt_1[this.ht_1] = -2;
  };
  protoOf(JsonPath).lt = function () {
    if (this.gt_1[this.ht_1] === -2) {
      this.ft_1[this.ht_1] = Tombstone_instance;
    }
  };
  protoOf(JsonPath).mt = function () {
    var depth = this.ht_1;
    if (this.gt_1[depth] === -2) {
      this.gt_1[depth] = -1;
      this.ht_1 = this.ht_1 - 1 | 0;
    }
    if (!(this.ht_1 === -1)) {
      this.ht_1 = this.ht_1 - 1 | 0;
    }
  };
  protoOf(JsonPath).nt = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.j6('$');
    // Inline function 'kotlin.repeat' call
    var times = this.ht_1 + 1 | 0;
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = this.ft_1[index];
        if (!(element == null) ? isInterface(element, SerialDescriptor) : false) {
          if (equals(element.be(), LIST_getInstance())) {
            if (!(this.gt_1[index] === -1)) {
              this_0.j6('[');
              this_0.h9(this.gt_1[index]);
              this_0.j6(']');
            }
          } else {
            var idx = this.gt_1[index];
            if (idx >= 0) {
              this_0.j6('.');
              this_0.j6(element.fe(idx));
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
    return this.nt();
  };
  function checkKind($this, descriptor, actualClass) {
    var kind = descriptor.be();
    var tmp;
    if (kind instanceof PolymorphicKind) {
      tmp = true;
    } else {
      tmp = equals(kind, CONTEXTUAL_getInstance());
    }
    if (tmp) {
      throw IllegalArgumentException_init_$Create$('Serializer for ' + actualClass.b8() + " can't be registered as a subclass for polymorphic serialization " + ('because its kind ' + kind.toString() + ' is not concrete. To work with multiple hierarchies, register it as a base class.'));
    }
    if ($this.pt_1)
      return Unit_instance;
    if (!$this.qt_1)
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
    var last = descriptor.de();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var name = descriptor.fe(i);
        if (name === $this.ot_1) {
          throw IllegalArgumentException_init_$Create$('Polymorphic serializer for ' + toString(actualClass) + " has property '" + name + "' that conflicts " + 'with JSON class discriminator. You can either change class discriminator in JsonConfiguration, rename property with @SerialName annotation or fall back to array polymorphism');
        }
      }
       while (inductionVariable < last);
  }
  function JsonSerializersModuleValidator(configuration) {
    this.ot_1 = configuration.ir_1;
    this.pt_1 = configuration.hr_1;
    this.qt_1 = !configuration.pr_1.equals(ClassDiscriminatorMode_NONE_getInstance());
  }
  protoOf(JsonSerializersModuleValidator).xk = function (kClass, provider) {
  };
  protoOf(JsonSerializersModuleValidator).al = function (baseClass, actualClass, actualSerializer) {
    var descriptor = actualSerializer.md();
    checkKind(this, descriptor, actualClass);
    if (!this.pt_1 && this.qt_1) {
      checkDiscriminatorCollisions(this, descriptor, actualClass);
    }
  };
  protoOf(JsonSerializersModuleValidator).bl = function (baseClass, defaultSerializerProvider) {
  };
  protoOf(JsonSerializersModuleValidator).cl = function (baseClass, defaultDeserializerProvider) {
  };
  function encodeByWriter(json, writer, serializer, value) {
    var tmp = WriteMode_OBJ_getInstance();
    // Inline function 'kotlin.arrayOfNulls' call
    var size = get_entries().k();
    var tmp$ret$0 = Array(size);
    var encoder = StreamingJsonEncoder_init_$Create$(writer, json, tmp, tmp$ret$0);
    encoder.vf(serializer, value);
  }
  function readObject($this) {
    // Inline function 'kotlinx.serialization.json.internal.JsonTreeReader.readObjectImpl' call
    var lastToken = $this.au_1.eu(6);
    if ($this.au_1.gu() === 4) {
      $this.au_1.fu('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.linkedMapOf' call
    var result = LinkedHashMap_init_$Create$();
    $l$loop: while ($this.au_1.hu()) {
      var key = $this.bu_1 ? $this.au_1.ju() : $this.au_1.iu();
      $this.au_1.eu(5);
      var element = $this.ku();
      // Inline function 'kotlin.collections.set' call
      result.w1(key, element);
      lastToken = $this.au_1.lu();
      var tmp0_subject = lastToken;
      if (tmp0_subject !== 4)
        if (tmp0_subject === 7)
          break $l$loop;
        else {
          $this.au_1.fu('Expected end of the object or comma');
        }
    }
    if (lastToken === 6) {
      $this.au_1.eu(7);
    } else if (lastToken === 4) {
      if (!$this.cu_1) {
        invalidTrailingComma($this.au_1);
      }
      $this.au_1.eu(7);
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
    var lastToken = $this.au_1.lu();
    if ($this.au_1.gu() === 4) {
      $this.au_1.fu('Unexpected leading comma');
    }
    // Inline function 'kotlin.collections.arrayListOf' call
    var result = ArrayList_init_$Create$();
    while ($this.au_1.hu()) {
      var element = $this.ku();
      result.e(element);
      lastToken = $this.au_1.lu();
      if (!(lastToken === 4)) {
        var tmp0 = $this.au_1;
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
        var condition = lastToken === 9;
        var position = tmp0.bq_1;
        if (!condition) {
          var tmp$ret$2 = 'Expected end of the array or comma';
          tmp0.fu(tmp$ret$2, position);
        }
      }
    }
    if (lastToken === 8) {
      $this.au_1.eu(9);
    } else if (lastToken === 4) {
      if (!$this.cu_1) {
        invalidTrailingComma($this.au_1, 'array');
      }
      $this.au_1.eu(9);
    }
    return new JsonArray(result);
  }
  function readValue($this, isString) {
    var tmp;
    if ($this.bu_1 || !isString) {
      tmp = $this.au_1.ju();
    } else {
      tmp = $this.au_1.iu();
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
    this.iv_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JsonTreeReader$readDeepRecursive$slambda).mv = function ($this$DeepRecursiveFunction, it, $completion) {
    var tmp = this.nv($this$DeepRecursiveFunction, it, $completion);
    tmp.e7_1 = Unit_instance;
    tmp.f7_1 = null;
    return tmp.k7();
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).q7 = function (p1, p2, $completion) {
    var tmp = p1 instanceof DeepRecursiveScope ? p1 : THROW_CCE();
    return this.mv(tmp, p2 instanceof Unit ? p2 : THROW_CCE(), $completion);
  };
  protoOf(JsonTreeReader$readDeepRecursive$slambda).k7 = function () {
    var suspendResult = this.e7_1;
    $sm: do
      try {
        var tmp = this.c7_1;
        switch (tmp) {
          case 0:
            this.d7_1 = 3;
            var tmp0_subject = this.iv_1.au_1.gu();
            if (tmp0_subject === 1) {
              this.lv_1 = readValue(this.iv_1, true);
              this.c7_1 = 2;
              continue $sm;
            } else {
              if (tmp0_subject === 0) {
                this.lv_1 = readValue(this.iv_1, false);
                this.c7_1 = 2;
                continue $sm;
              } else {
                if (tmp0_subject === 6) {
                  this.c7_1 = 1;
                  suspendResult = readObject_0(this.iv_1, this.jv_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  if (tmp0_subject === 8) {
                    this.lv_1 = readArray(this.iv_1);
                    this.c7_1 = 2;
                    continue $sm;
                  } else {
                    var tmp_0 = this;
                    this.iv_1.au_1.fu("Can't begin reading element, unexpected token");
                  }
                }
              }
            }

            break;
          case 1:
            this.lv_1 = suspendResult;
            this.c7_1 = 2;
            continue $sm;
          case 2:
            return this.lv_1;
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
  protoOf(JsonTreeReader$readDeepRecursive$slambda).nv = function ($this$DeepRecursiveFunction, it, completion) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this.iv_1, completion);
    i.jv_1 = $this$DeepRecursiveFunction;
    i.kv_1 = it;
    return i;
  };
  function JsonTreeReader$readDeepRecursive$slambda_0(this$0, resultContinuation) {
    var i = new JsonTreeReader$readDeepRecursive$slambda(this$0, resultContinuation);
    var l = function ($this$DeepRecursiveFunction, it, $completion) {
      return i.mv($this$DeepRecursiveFunction, it, $completion);
    };
    l.$arity = 2;
    return l;
  }
  function $readObjectCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.uu_1 = _this__u8e3s4;
    this.vu_1 = _this__u8e3s4_0;
  }
  protoOf($readObjectCOROUTINE$).k7 = function () {
    var suspendResult = this.e7_1;
    $sm: do
      try {
        var tmp = this.c7_1;
        switch (tmp) {
          case 0:
            this.d7_1 = 5;
            this.xu_1 = this.uu_1;
            this.yu_1 = this.xu_1.au_1.eu(6);
            if (this.xu_1.au_1.gu() === 4) {
              this.xu_1.au_1.fu('Unexpected leading comma');
            }

            var tmp_0 = this;
            tmp_0.wu_1 = LinkedHashMap_init_$Create$();
            this.c7_1 = 1;
            continue $sm;
          case 1:
            if (!this.xu_1.au_1.hu()) {
              this.c7_1 = 4;
              continue $sm;
            }

            this.zu_1 = this.xu_1.bu_1 ? this.xu_1.au_1.ju() : this.xu_1.au_1.iu();
            this.xu_1.au_1.eu(5);
            this.c7_1 = 2;
            suspendResult = this.vu_1.vc(Unit_instance, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var element = suspendResult;
            var tmp0 = this.wu_1;
            var key = this.zu_1;
            tmp0.w1(key, element);
            this.yu_1 = this.xu_1.au_1.lu();
            var tmp0_subject = this.yu_1;
            if (tmp0_subject === 4) {
              this.c7_1 = 3;
              continue $sm;
            } else {
              if (tmp0_subject === 7) {
                this.c7_1 = 4;
                continue $sm;
              } else {
                this.xu_1.au_1.fu('Expected end of the object or comma');
              }
            }

            break;
          case 3:
            this.c7_1 = 1;
            continue $sm;
          case 4:
            if (this.yu_1 === 6) {
              this.xu_1.au_1.eu(7);
            } else if (this.yu_1 === 4) {
              if (!this.xu_1.cu_1) {
                invalidTrailingComma(this.xu_1.au_1);
              }
              this.xu_1.au_1.eu(7);
            }

            return new JsonObject(this.wu_1);
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
    this.au_1 = lexer;
    this.bu_1 = configuration.br_1;
    this.cu_1 = configuration.nr_1;
    this.du_1 = 0;
  }
  protoOf(JsonTreeReader).ku = function () {
    var token = this.au_1.gu();
    var tmp;
    if (token === 1) {
      tmp = readValue(this, true);
    } else if (token === 0) {
      tmp = readValue(this, false);
    } else if (token === 6) {
      var tmp_0;
      this.du_1 = this.du_1 + 1 | 0;
      if (this.du_1 === 200) {
        tmp_0 = readDeepRecursive(this);
      } else {
        tmp_0 = readObject(this);
      }
      var result = tmp_0;
      this.du_1 = this.du_1 - 1 | 0;
      tmp = result;
    } else if (token === 8) {
      tmp = readArray(this);
    } else {
      this.au_1.fu('Cannot read Json element because of unexpected ' + tokenDescription(token));
    }
    return tmp;
  };
  function classDiscriminator(_this__u8e3s4, json) {
    var _iterator__ex2g4s = _this__u8e3s4.ee().g();
    while (_iterator__ex2g4s.h()) {
      var annotation = _iterator__ex2g4s.i();
      if (annotation instanceof JsonClassDiscriminator)
        return annotation.ov_1;
    }
    return json.mp_1.ir_1;
  }
  function validateIfSealed(serializer, actualSerializer, classDiscriminator) {
    if (!(serializer instanceof SealedClassSerializer))
      return Unit_instance;
    if (jsonCachedSerialNames(actualSerializer.md()).k1(classDiscriminator)) {
      var baseName = serializer.md().ae();
      var actualName = actualSerializer.md().ae();
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
    this.bt_1 = createMapForCache(16);
  }
  protoOf(DescriptorSchemaCache).pv = function (descriptor, key, value) {
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = this.bt_1;
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
  protoOf(DescriptorSchemaCache).ct = function (descriptor, key, defaultValue) {
    var tmp0_safe_receiver = this.qv(descriptor, key);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      return tmp0_safe_receiver;
    }
    var value = defaultValue();
    this.pv(descriptor, key, value);
    return value;
  };
  protoOf(DescriptorSchemaCache).qv = function (descriptor, key) {
    var tmp0_safe_receiver = this.bt_1.s1(descriptor);
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
    this.rv_1 = discriminatorToSkip;
  }
  function trySkip($this, $receiver, unknownKey) {
    if ($receiver == null)
      return false;
    if ($receiver.rv_1 === unknownKey) {
      $receiver.rv_1 = null;
      return true;
    }
    return false;
  }
  function skipLeftoverElements($this, descriptor) {
    while (!($this.hf(descriptor) === -1)) {
    }
  }
  function checkLeadingComma($this) {
    if ($this.vp_1.gu() === 4) {
      $this.vp_1.fu('Unexpected leading comma');
    }
  }
  function decodeMapIndex($this) {
    var hasComma = false;
    var decodingKey = !(($this.xp_1 % 2 | 0) === 0);
    if (decodingKey) {
      if (!($this.xp_1 === -1)) {
        hasComma = $this.vp_1.tv();
      }
    } else {
      $this.vp_1.sv(_Char___init__impl__6a9atx(58));
    }
    var tmp;
    if ($this.vp_1.hu()) {
      if (decodingKey) {
        if ($this.xp_1 === -1) {
          var tmp0 = $this.vp_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition = !hasComma;
          var position = tmp0.bq_1;
          if (!condition) {
            var tmp$ret$1 = 'Unexpected leading comma';
            tmp0.fu(tmp$ret$1, position);
          }
        } else {
          var tmp0_0 = $this.vp_1;
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.require' call
          var condition_0 = hasComma;
          var position_0 = tmp0_0.bq_1;
          if (!condition_0) {
            var tmp$ret$3 = 'Expected comma after the key-value pair';
            tmp0_0.fu(tmp$ret$3, position_0);
          }
        }
      }
      $this.xp_1 = $this.xp_1 + 1 | 0;
      tmp = $this.xp_1;
    } else {
      if (hasComma && !$this.tp_1.mp_1.nr_1) {
        invalidTrailingComma($this.vp_1);
      }
      tmp = -1;
    }
    return tmp;
  }
  function coerceInputValue($this, descriptor, index) {
    var tmp0 = $this.tp_1;
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
      var isOptional = descriptor.je(index);
      var elementDescriptor = descriptor.ie(index);
      var tmp;
      if (isOptional && !elementDescriptor.ud()) {
        tmp = $this.vp_1.uv(true);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      }
      if (equals(elementDescriptor.be(), ENUM_getInstance())) {
        var tmp_0;
        if (elementDescriptor.ud()) {
          tmp_0 = $this.vp_1.uv(false);
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_2;
        }
        var tmp0_elvis_lhs = $this.vp_1.vv($this.zp_1.br_1);
        var tmp_1;
        if (tmp0_elvis_lhs == null) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
          tmp_1 = tmp0_elvis_lhs;
        }
        var enumValue = tmp_1;
        var enumIndex = getJsonNameIndex(elementDescriptor, tmp0, enumValue);
        var coerceToNull = !tmp0.mp_1.er_1 && elementDescriptor.ud();
        if (enumIndex === -3 && (isOptional || coerceToNull)) {
          $this.vp_1.iu();
          tmp$ret$0 = true;
          break $l$block_2;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  }
  function decodeObjectIndex($this, descriptor) {
    var hasComma = $this.vp_1.tv();
    while ($this.vp_1.hu()) {
      hasComma = false;
      var key = decodeStringKey($this);
      $this.vp_1.sv(_Char___init__impl__6a9atx(58));
      var index = getJsonNameIndex(descriptor, $this.tp_1, key);
      var tmp;
      if (!(index === -3)) {
        var tmp_0;
        if ($this.zp_1.gr_1 && coerceInputValue($this, descriptor, index)) {
          hasComma = $this.vp_1.tv();
          tmp_0 = false;
        } else {
          var tmp0_safe_receiver = $this.aq_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            tmp0_safe_receiver.ys(index);
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
    if (hasComma && !$this.tp_1.mp_1.nr_1) {
      invalidTrailingComma($this.vp_1);
    }
    var tmp1_safe_receiver = $this.aq_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.zs();
    return tmp2_elvis_lhs == null ? -1 : tmp2_elvis_lhs;
  }
  function handleUnknown($this, descriptor, key) {
    if (ignoreUnknownKeys(descriptor, $this.tp_1) || trySkip($this, $this.yp_1, key)) {
      $this.vp_1.xv($this.zp_1.br_1);
    } else {
      $this.vp_1.cq_1.mt();
      $this.vp_1.wv(key);
    }
    return $this.vp_1.tv();
  }
  function decodeListIndex($this) {
    var hasComma = $this.vp_1.tv();
    var tmp;
    if ($this.vp_1.hu()) {
      if (!($this.xp_1 === -1) && !hasComma) {
        $this.vp_1.fu('Expected end of the array or comma');
      }
      $this.xp_1 = $this.xp_1 + 1 | 0;
      tmp = $this.xp_1;
    } else {
      if (hasComma && !$this.tp_1.mp_1.nr_1) {
        invalidTrailingComma($this.vp_1, 'array');
      }
      tmp = -1;
    }
    return tmp;
  }
  function decodeStringKey($this) {
    var tmp;
    if ($this.zp_1.br_1) {
      tmp = $this.vp_1.zv();
    } else {
      tmp = $this.vp_1.yv();
    }
    return tmp;
  }
  function StreamingJsonDecoder(json, mode, lexer, descriptor, discriminatorHolder) {
    AbstractDecoder.call(this);
    this.tp_1 = json;
    this.up_1 = mode;
    this.vp_1 = lexer;
    this.wp_1 = this.tp_1.ff();
    this.xp_1 = -1;
    this.yp_1 = discriminatorHolder;
    this.zp_1 = this.tp_1.mp_1;
    this.aq_1 = this.zp_1.er_1 ? null : new JsonElementMarker(descriptor);
  }
  protoOf(StreamingJsonDecoder).aw = function () {
    return this.tp_1;
  };
  protoOf(StreamingJsonDecoder).ff = function () {
    return this.wp_1;
  };
  protoOf(StreamingJsonDecoder).bw = function () {
    return (new JsonTreeReader(this.tp_1.mp_1, this.vp_1)).ku();
  };
  protoOf(StreamingJsonDecoder).ve = function (deserializer) {
    try {
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.tp_1.mp_1.hr_1;
      }
      if (tmp) {
        return deserializer.od(this);
      }
      var discriminator = classDiscriminator(deserializer.md(), this.tp_1);
      var tmp0_elvis_lhs = this.vp_1.cw(discriminator, this.zp_1.br_1);
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
            tmp_1 = this.aw().mp_1.hr_1;
          }
          if (tmp_1) {
            tmp$ret$0 = tmp2.od(this);
            break $l$block;
          }
          var discriminator_0 = classDiscriminator(tmp2.md(), this.aw());
          var tmp0 = this.bw();
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName = tmp2.md().ae();
          if (!(tmp0 instanceof JsonObject)) {
            var tmp_2 = getKClass(JsonObject).b8();
            var tmp_3 = getKClassFromExpression(tmp0).b8();
            var tmp$ret$2 = this.vp_1.cq_1.nt();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$2, toString(tmp0));
          }
          var jsonTree = tmp0;
          var tmp0_safe_receiver = jsonTree.sr(discriminator_0);
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
          tmp$ret$0 = readPolymorphicJson(this.aw(), discriminator_0, jsonTree, actualSerializer);
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
          this.vp_1.fu(message, VOID, hint);
        } else {
          throw $p;
        }
        tmp_7 = tmp_8;
      }
      var tmp_9 = tmp_7;
      var actualSerializer_0 = isInterface(tmp_9, DeserializationStrategy) ? tmp_9 : THROW_CCE();
      this.yp_1 = new DiscriminatorHolder(discriminator);
      return actualSerializer_0.od(this);
    } catch ($p) {
      if ($p instanceof MissingFieldException) {
        var e = $p;
        if (contains(ensureNotNull(e.message), 'at path'))
          throw e;
        throw new MissingFieldException(e.td_1, plus(e.message, ' at path: ') + this.vp_1.cq_1.nt(), e);
      } else {
        throw $p;
      }
    }
  };
  protoOf(StreamingJsonDecoder).we = function (descriptor) {
    var newMode = switchMode(this.tp_1, descriptor);
    this.vp_1.cq_1.it(descriptor);
    this.vp_1.sv(newMode.fw_1);
    checkLeadingComma(this);
    var tmp;
    switch (newMode.y1_1) {
      case 1:
      case 2:
      case 3:
        tmp = new StreamingJsonDecoder(this.tp_1, newMode, this.vp_1, descriptor, this.yp_1);
        break;
      default:
        var tmp_0;
        if (this.up_1.equals(newMode) && this.tp_1.mp_1.er_1) {
          tmp_0 = this;
        } else {
          tmp_0 = new StreamingJsonDecoder(this.tp_1, newMode, this.vp_1, descriptor, this.yp_1);
        }

        tmp = tmp_0;
        break;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).xe = function (descriptor) {
    if (descriptor.de() === 0 && ignoreUnknownKeys(descriptor, this.tp_1)) {
      skipLeftoverElements(this, descriptor);
    }
    if (this.vp_1.tv() && !this.tp_1.mp_1.nr_1) {
      invalidTrailingComma(this.vp_1, '');
    }
    this.vp_1.sv(this.up_1.gw_1);
    this.vp_1.cq_1.mt();
  };
  protoOf(StreamingJsonDecoder).oe = function () {
    var tmp;
    var tmp0_safe_receiver = this.aq_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xs_1;
    if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
      tmp = !this.vp_1.hw();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(StreamingJsonDecoder).pe = function () {
    return null;
  };
  protoOf(StreamingJsonDecoder).cf = function (descriptor, index, deserializer, previousValue) {
    var isMapKey = this.up_1.equals(WriteMode_MAP_getInstance()) && (index & 1) === 0;
    if (isMapKey) {
      this.vp_1.cq_1.lt();
    }
    var value = protoOf(AbstractDecoder).cf.call(this, descriptor, index, deserializer, previousValue);
    if (isMapKey) {
      this.vp_1.cq_1.kt(value);
    }
    return value;
  };
  protoOf(StreamingJsonDecoder).hf = function (descriptor) {
    var index;
    switch (this.up_1.y1_1) {
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
    if (!this.up_1.equals(WriteMode_MAP_getInstance())) {
      this.vp_1.cq_1.jt(index);
    }
    return index;
  };
  protoOf(StreamingJsonDecoder).qe = function () {
    return this.vp_1.iw();
  };
  protoOf(StreamingJsonDecoder).re = function () {
    var value = this.vp_1.jw();
    if (!equalsLong(value, fromInt(convertToInt(value)))) {
      this.vp_1.fu("Failed to parse int for input '" + value.toString() + "'");
    }
    return convertToInt(value);
  };
  protoOf(StreamingJsonDecoder).se = function () {
    return this.vp_1.jw();
  };
  protoOf(StreamingJsonDecoder).te = function () {
    var tmp;
    if (this.zp_1.br_1) {
      tmp = this.vp_1.zv();
    } else {
      tmp = this.vp_1.iu();
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
    $this.rt_1.fs();
    $this.pf(discriminator);
    $this.rt_1.is(_Char___init__impl__6a9atx(58));
    $this.rt_1.hs();
    $this.pf(serialName);
  }
  function StreamingJsonEncoder(composer, json, mode, modeReuseCache) {
    AbstractEncoder.call(this);
    this.rt_1 = composer;
    this.st_1 = json;
    this.tt_1 = mode;
    this.ut_1 = modeReuseCache;
    this.vt_1 = this.st_1.ff();
    this.wt_1 = this.st_1.mp_1;
    this.xt_1 = false;
    this.yt_1 = null;
    this.zt_1 = null;
    var i = this.tt_1.y1_1;
    if (!(this.ut_1 == null)) {
      if (!(this.ut_1[i] === null) || !(this.ut_1[i] === this)) {
        this.ut_1[i] = this;
      }
    }
  }
  protoOf(StreamingJsonEncoder).aw = function () {
    return this.st_1;
  };
  protoOf(StreamingJsonEncoder).ff = function () {
    return this.vt_1;
  };
  protoOf(StreamingJsonEncoder).ag = function (descriptor, index) {
    return this.wt_1.zq_1;
  };
  protoOf(StreamingJsonEncoder).vf = function (serializer, value) {
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.encodePolymorphically' call
      if (this.aw().mp_1.hr_1) {
        serializer.nd(this, value);
        break $l$block;
      }
      var isPolymorphicSerializer = serializer instanceof AbstractPolymorphicSerializer;
      var tmp;
      if (isPolymorphicSerializer) {
        tmp = !this.aw().mp_1.pr_1.equals(ClassDiscriminatorMode_NONE_getInstance());
      } else {
        var tmp_0;
        switch (this.aw().mp_1.pr_1.y1_1) {
          case 0:
          case 2:
            tmp_0 = false;
            break;
          case 1:
            // Inline function 'kotlin.let' call

            var it = serializer.md().be();
            tmp_0 = equals(it, CLASS_getInstance()) || equals(it, OBJECT_getInstance());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp = tmp_0;
      }
      var needDiscriminator = tmp;
      var baseClassDiscriminator = needDiscriminator ? classDiscriminator(serializer.md(), this.aw()) : null;
      var tmp_1;
      if (isPolymorphicSerializer) {
        var casted = serializer instanceof AbstractPolymorphicSerializer ? serializer : THROW_CCE();
        $l$block_0: {
          // Inline function 'kotlin.requireNotNull' call
          if (value == null) {
            var message = 'Value for serializer ' + toString(serializer.md()) + ' should always be non-null. Please report issue to the kotlinx.serialization tracker.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          } else {
            break $l$block_0;
          }
        }
        var actual = findPolymorphicSerializer_0(casted, this, value);
        if (!(baseClassDiscriminator == null)) {
          access$validateIfSealed$tPolymorphicKt(serializer, actual, baseClassDiscriminator);
          checkKind_0(actual.md().be());
        }
        tmp_1 = isInterface(actual, SerializationStrategy) ? actual : THROW_CCE();
      } else {
        tmp_1 = serializer;
      }
      var actualSerializer = tmp_1;
      if (!(baseClassDiscriminator == null)) {
        var serialName = actualSerializer.md().ae();
        this.yt_1 = baseClassDiscriminator;
        this.zt_1 = serialName;
      }
      actualSerializer.nd(this, value);
    }
  };
  protoOf(StreamingJsonEncoder).we = function (descriptor) {
    var newMode = switchMode(this.st_1, descriptor);
    if (!(newMode.fw_1 === _Char___init__impl__6a9atx(0))) {
      this.rt_1.is(newMode.fw_1);
      this.rt_1.ds();
    }
    var discriminator = this.yt_1;
    if (!(discriminator == null)) {
      var tmp0_elvis_lhs = this.zt_1;
      encodeTypeInfo(this, discriminator, tmp0_elvis_lhs == null ? descriptor.ae() : tmp0_elvis_lhs);
      this.yt_1 = null;
      this.zt_1 = null;
    }
    if (this.tt_1.equals(newMode)) {
      return this;
    }
    var tmp1_safe_receiver = this.ut_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver[newMode.y1_1];
    return tmp2_elvis_lhs == null ? new StreamingJsonEncoder(this.rt_1, this.st_1, newMode, this.ut_1) : tmp2_elvis_lhs;
  };
  protoOf(StreamingJsonEncoder).xe = function (descriptor) {
    if (!(this.tt_1.gw_1 === _Char___init__impl__6a9atx(0))) {
      this.rt_1.es();
      this.rt_1.gs();
      this.rt_1.is(this.tt_1.gw_1);
    }
  };
  protoOf(StreamingJsonEncoder).jf = function (descriptor, index) {
    switch (this.tt_1.y1_1) {
      case 1:
        if (!this.rt_1.cs_1) {
          this.rt_1.is(_Char___init__impl__6a9atx(44));
        }

        this.rt_1.fs();
        break;
      case 2:
        if (!this.rt_1.cs_1) {
          var tmp = this;
          var tmp_0;
          if ((index % 2 | 0) === 0) {
            this.rt_1.is(_Char___init__impl__6a9atx(44));
            this.rt_1.fs();
            tmp_0 = true;
          } else {
            this.rt_1.is(_Char___init__impl__6a9atx(58));
            this.rt_1.hs();
            tmp_0 = false;
          }
          tmp.xt_1 = tmp_0;
        } else {
          this.xt_1 = true;
          this.rt_1.fs();
        }

        break;
      case 3:
        if (index === 0)
          this.xt_1 = true;
        if (index === 1) {
          this.rt_1.is(_Char___init__impl__6a9atx(44));
          this.rt_1.hs();
          this.xt_1 = false;
        }

        break;
      default:
        if (!this.rt_1.cs_1) {
          this.rt_1.is(_Char___init__impl__6a9atx(44));
        }

        this.rt_1.fs();
        this.pf(getJsonElementName(descriptor, this.st_1, index));
        this.rt_1.is(_Char___init__impl__6a9atx(58));
        this.rt_1.hs();
        break;
    }
    return true;
  };
  protoOf(StreamingJsonEncoder).wf = function (descriptor, index, serializer, value) {
    if (!(value == null) || this.wt_1.er_1) {
      protoOf(AbstractEncoder).wf.call(this, descriptor, index, serializer, value);
    }
  };
  protoOf(StreamingJsonEncoder).lf = function () {
    this.rt_1.ks('null');
  };
  protoOf(StreamingJsonEncoder).mf = function (value) {
    if (this.xt_1) {
      this.pf(value.toString());
    } else {
      this.rt_1.ps(value);
    }
  };
  protoOf(StreamingJsonEncoder).nf = function (value) {
    if (this.xt_1) {
      this.pf(value.toString());
    } else {
      this.rt_1.ms(value);
    }
  };
  protoOf(StreamingJsonEncoder).of = function (value) {
    if (this.xt_1) {
      this.pf(value.toString());
    } else {
      this.rt_1.os(value);
    }
  };
  protoOf(StreamingJsonEncoder).pf = function (value) {
    return this.rt_1.qs(value);
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
    throw JsonDecodingException_0(-1, "Failed to parse literal '" + literal.toString() + "' as " + type + ' value at element: ' + $this.qw(tag), toString($this.rw()));
  }
  function AbstractJsonTreeDecoder(json, value, polymorphicDiscriminator) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    NamedValueDecoder.call(this);
    this.mw_1 = json;
    this.nw_1 = value;
    this.ow_1 = polymorphicDiscriminator;
    this.pw_1 = this.aw().mp_1;
  }
  protoOf(AbstractJsonTreeDecoder).aw = function () {
    return this.mw_1;
  };
  protoOf(AbstractJsonTreeDecoder).p1 = function () {
    return this.nw_1;
  };
  protoOf(AbstractJsonTreeDecoder).ff = function () {
    return this.aw().ff();
  };
  protoOf(AbstractJsonTreeDecoder).rw = function () {
    var tmp0_safe_receiver = this.ck();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = this.sw(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? this.p1() : tmp1_elvis_lhs;
  };
  protoOf(AbstractJsonTreeDecoder).qw = function (currentTag) {
    return this.ek() + ('.' + currentTag);
  };
  protoOf(AbstractJsonTreeDecoder).bw = function () {
    return this.rw();
  };
  protoOf(AbstractJsonTreeDecoder).ve = function (deserializer) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.decodeSerializableValuePolymorphic' call
      var tmp;
      if (!(deserializer instanceof AbstractPolymorphicSerializer)) {
        tmp = true;
      } else {
        tmp = this.aw().mp_1.hr_1;
      }
      if (tmp) {
        tmp$ret$0 = deserializer.od(this);
        break $l$block;
      }
      var discriminator = classDiscriminator(deserializer.md(), this.aw());
      var tmp0 = this.bw();
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = deserializer.md().ae();
      if (!(tmp0 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).b8();
        var tmp_1 = getKClassFromExpression(tmp0).b8();
        var tmp$ret$2 = this.ek();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$2, toString(tmp0));
      }
      var jsonTree = tmp0;
      var tmp0_safe_receiver = jsonTree.sr(discriminator);
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
      tmp$ret$0 = readPolymorphicJson(this.aw(), discriminator, jsonTree, actualSerializer);
    }
    return tmp$ret$0;
  };
  protoOf(AbstractJsonTreeDecoder).dk = function (parentName, childName) {
    return childName;
  };
  protoOf(AbstractJsonTreeDecoder).we = function (descriptor) {
    var currentObject = this.rw();
    var tmp0_subject = descriptor.be();
    var tmp;
    var tmp_0;
    if (equals(tmp0_subject, LIST_getInstance())) {
      tmp_0 = true;
    } else {
      tmp_0 = tmp0_subject instanceof PolymorphicKind;
    }
    if (tmp_0) {
      var tmp_1 = this.aw();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = descriptor.ae();
      if (!(currentObject instanceof JsonArray)) {
        var tmp_2 = getKClass(JsonArray).b8();
        var tmp_3 = getKClassFromExpression(currentObject).b8();
        var tmp$ret$2 = this.ek();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_2 + ', but had ' + tmp_3 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$2, toString(currentObject));
      }
      tmp = new JsonTreeListDecoder(tmp_1, currentObject);
    } else {
      if (equals(tmp0_subject, MAP_getInstance())) {
        // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
        var this_0 = this.aw();
        var keyDescriptor = carrierDescriptor(descriptor.ie(0), this_0.ff());
        var keyKind = keyDescriptor.be();
        var tmp_4;
        var tmp_5;
        if (keyKind instanceof PrimitiveKind) {
          tmp_5 = true;
        } else {
          tmp_5 = equals(keyKind, ENUM_getInstance());
        }
        if (tmp_5) {
          var tmp_6 = this.aw();
          // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
          // Inline function 'kotlinx.serialization.json.internal.cast' call
          var serialName_0 = descriptor.ae();
          if (!(currentObject instanceof JsonObject)) {
            var tmp_7 = getKClass(JsonObject).b8();
            var tmp_8 = getKClassFromExpression(currentObject).b8();
            var tmp$ret$7 = this.ek();
            throw JsonDecodingException_0(-1, 'Expected ' + tmp_7 + ', but had ' + tmp_8 + ' as the serialized body of ' + serialName_0 + ' at element: ' + tmp$ret$7, toString(currentObject));
          }
          tmp_4 = new JsonTreeMapDecoder(tmp_6, currentObject);
        } else {
          if (this_0.mp_1.cr_1) {
            var tmp_9 = this.aw();
            // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
            // Inline function 'kotlinx.serialization.json.internal.cast' call
            var serialName_1 = descriptor.ae();
            if (!(currentObject instanceof JsonArray)) {
              var tmp_10 = getKClass(JsonArray).b8();
              var tmp_11 = getKClassFromExpression(currentObject).b8();
              var tmp$ret$11 = this.ek();
              throw JsonDecodingException_0(-1, 'Expected ' + tmp_10 + ', but had ' + tmp_11 + ' as the serialized body of ' + serialName_1 + ' at element: ' + tmp$ret$11, toString(currentObject));
            }
            tmp_4 = new JsonTreeListDecoder(tmp_9, currentObject);
          } else {
            throw InvalidKeyKindException(keyDescriptor);
          }
        }
        tmp = tmp_4;
      } else {
        var tmp_12 = this.aw();
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
        // Inline function 'kotlinx.serialization.json.internal.cast' call
        var serialName_2 = descriptor.ae();
        if (!(currentObject instanceof JsonObject)) {
          var tmp_13 = getKClass(JsonObject).b8();
          var tmp_14 = getKClassFromExpression(currentObject).b8();
          var tmp$ret$14 = this.ek();
          throw JsonDecodingException_0(-1, 'Expected ' + tmp_13 + ', but had ' + tmp_14 + ' as the serialized body of ' + serialName_2 + ' at element: ' + tmp$ret$14, toString(currentObject));
        }
        tmp = new JsonTreeDecoder(tmp_12, currentObject, this.ow_1);
      }
    }
    return tmp;
  };
  protoOf(AbstractJsonTreeDecoder).xe = function (descriptor) {
  };
  protoOf(AbstractJsonTreeDecoder).oe = function () {
    var tmp = this.rw();
    return !(tmp instanceof JsonNull);
  };
  protoOf(AbstractJsonTreeDecoder).tw = function (tag) {
    return !(this.sw(tag) === JsonNull_getInstance());
  };
  protoOf(AbstractJsonTreeDecoder).gk = function (tag) {
    return this.tw((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).uw = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.sw(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).b8();
        var tmp_0 = getKClassFromExpression(value).b8();
        var tmp$ret$3 = this.qw(tag);
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
  protoOf(AbstractJsonTreeDecoder).hk = function (tag) {
    return this.uw((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).vw = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.sw(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).b8();
        var tmp_0 = getKClassFromExpression(value).b8();
        var tmp$ret$3 = this.qw(tag);
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
  protoOf(AbstractJsonTreeDecoder).ik = function (tag) {
    return this.vw((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).ww = function (tag) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.getPrimitiveValue' call
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var value = this.sw(tag);
      if (!(value instanceof JsonPrimitive)) {
        var tmp = getKClass(JsonPrimitive).b8();
        var tmp_0 = getKClassFromExpression(value).b8();
        var tmp$ret$3 = this.qw(tag);
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
  protoOf(AbstractJsonTreeDecoder).jk = function (tag) {
    return this.ww((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  protoOf(AbstractJsonTreeDecoder).xw = function (tag) {
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
    // Inline function 'kotlinx.serialization.json.internal.cast' call
    var value = this.sw(tag);
    if (!(value instanceof JsonPrimitive)) {
      var tmp = getKClass(JsonPrimitive).b8();
      var tmp_0 = getKClassFromExpression(value).b8();
      var tmp$ret$2 = this.qw(tag);
      throw JsonDecodingException_0(-1, 'Expected ' + tmp + ', but had ' + tmp_0 + ' as the serialized body of ' + 'string' + ' at element: ' + tmp$ret$2, toString(value));
    }
    var value_0 = value;
    if (!(value_0 instanceof JsonLiteral))
      throw JsonDecodingException_0(-1, "Expected string value for a non-null key '" + tag + "', got null literal instead at element: " + this.qw(tag), toString(this.rw()));
    if (!value_0.vr_1 && !this.aw().mp_1.br_1) {
      throw JsonDecodingException_0(-1, "String literal for key '" + tag + "' should be quoted at element: " + this.qw(tag) + ".\nUse 'isLenient = true' in 'Json {}' builder to accept non-compliant JSON.", toString(this.rw()));
    }
    return value_0.xr_1;
  };
  protoOf(AbstractJsonTreeDecoder).kk = function (tag) {
    return this.xw((!(tag == null) ? typeof tag === 'string' : false) ? tag : THROW_CCE());
  };
  function setForceNull($this, descriptor, index) {
    $this.hx_1 = (!$this.aw().mp_1.er_1 && !descriptor.je(index) && descriptor.ie(index).ud());
    return $this.hx_1;
  }
  function JsonTreeDecoder(json, value, polymorphicDiscriminator, polyDescriptor) {
    polymorphicDiscriminator = polymorphicDiscriminator === VOID ? null : polymorphicDiscriminator;
    polyDescriptor = polyDescriptor === VOID ? null : polyDescriptor;
    AbstractJsonTreeDecoder.call(this, json, value, polymorphicDiscriminator);
    this.ex_1 = value;
    this.fx_1 = polyDescriptor;
    this.gx_1 = 0;
    this.hx_1 = false;
  }
  protoOf(JsonTreeDecoder).p1 = function () {
    return this.ex_1;
  };
  protoOf(JsonTreeDecoder).hf = function (descriptor) {
    $l$loop: while (this.gx_1 < descriptor.de()) {
      var _unary__edvuaz = this.gx_1;
      this.gx_1 = _unary__edvuaz + 1 | 0;
      var name = this.xj(descriptor, _unary__edvuaz);
      var index = this.gx_1 - 1 | 0;
      this.hx_1 = false;
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
        if (!this.pw_1.gr_1)
          return index;
        var tmp0 = this.aw();
        var tmp$ret$2;
        $l$block_2: {
          // Inline function 'kotlinx.serialization.json.internal.tryCoerceValue' call
          var isOptional = descriptor.je(index);
          var elementDescriptor = descriptor.ie(index);
          var tmp_0;
          if (isOptional && !elementDescriptor.ud()) {
            var tmp_1 = this.ix(name);
            tmp_0 = tmp_1 instanceof JsonNull;
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$2 = true;
            break $l$block_2;
          }
          if (equals(elementDescriptor.be(), ENUM_getInstance())) {
            var tmp_2;
            if (elementDescriptor.ud()) {
              var tmp_3 = this.ix(name);
              tmp_2 = tmp_3 instanceof JsonNull;
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$2 = false;
              break $l$block_2;
            }
            var tmp_4 = this.ix(name);
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
            var coerceToNull = !tmp0.mp_1.er_1 && elementDescriptor.ud();
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
  protoOf(JsonTreeDecoder).oe = function () {
    return !this.hx_1 && protoOf(AbstractJsonTreeDecoder).oe.call(this);
  };
  protoOf(JsonTreeDecoder).yj = function (descriptor, index) {
    var strategy = namingStrategy(descriptor, this.aw());
    var baseName = descriptor.fe(index);
    if (strategy == null) {
      if (!this.pw_1.kr_1)
        return baseName;
      if (this.p1().t1().k1(baseName))
        return baseName;
    }
    var deserializationNamesMap_0 = deserializationNamesMap(this.aw(), descriptor);
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
    var fallbackName = strategy == null ? null : strategy.et(descriptor, index, baseName);
    return fallbackName == null ? baseName : fallbackName;
  };
  protoOf(JsonTreeDecoder).sw = function (tag) {
    return getValue(this.p1(), tag);
  };
  protoOf(JsonTreeDecoder).ix = function (tag) {
    return this.p1().sr(tag);
  };
  protoOf(JsonTreeDecoder).we = function (descriptor) {
    if (descriptor === this.fx_1) {
      var tmp = this.aw();
      var tmp2 = this.rw();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonTreeDecoder.cast' call
      // Inline function 'kotlinx.serialization.json.internal.cast' call
      var serialName = this.fx_1.ae();
      if (!(tmp2 instanceof JsonObject)) {
        var tmp_0 = getKClass(JsonObject).b8();
        var tmp_1 = getKClassFromExpression(tmp2).b8();
        var tmp$ret$2 = this.ek();
        throw JsonDecodingException_0(-1, 'Expected ' + tmp_0 + ', but had ' + tmp_1 + ' as the serialized body of ' + serialName + ' at element: ' + tmp$ret$2, toString(tmp2));
      }
      return new JsonTreeDecoder(tmp, tmp2, this.ow_1, this.fx_1);
    }
    return protoOf(AbstractJsonTreeDecoder).we.call(this, descriptor);
  };
  protoOf(JsonTreeDecoder).xe = function (descriptor) {
    var tmp;
    if (ignoreUnknownKeys(descriptor, this.aw())) {
      tmp = true;
    } else {
      var tmp_0 = descriptor.be();
      tmp = tmp_0 instanceof PolymorphicKind;
    }
    if (tmp)
      return Unit_instance;
    var strategy = namingStrategy(descriptor, this.aw());
    var tmp_1;
    if (strategy == null && !this.pw_1.kr_1) {
      tmp_1 = jsonCachedSerialNames(descriptor);
    } else if (!(strategy == null)) {
      tmp_1 = deserializationNamesMap(this.aw(), descriptor).t1();
    } else {
      var tmp_2 = jsonCachedSerialNames(descriptor);
      var tmp0_safe_receiver = get_schemaCache(this.aw()).qv(descriptor, get_JsonDeserializationNamesKey());
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.t1();
      var tmp$ret$0 = tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
      tmp_1 = plus_0(tmp_2, tmp$ret$0);
    }
    var names = tmp_1;
    var _iterator__ex2g4s = this.p1().t1().g();
    while (_iterator__ex2g4s.h()) {
      var key = _iterator__ex2g4s.i();
      if (!names.k1(key) && !(key === this.ow_1)) {
        throw JsonDecodingException_1(-1, "Encountered an unknown key '" + key + "' at element: " + this.ek() + '\n' + "Use 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.p1().toString()))));
      }
    }
  };
  function JsonTreeListDecoder(json, value) {
    AbstractJsonTreeDecoder.call(this, json, value);
    this.px_1 = value;
    this.qx_1 = this.px_1.k();
    this.rx_1 = -1;
  }
  protoOf(JsonTreeListDecoder).p1 = function () {
    return this.px_1;
  };
  protoOf(JsonTreeListDecoder).yj = function (descriptor, index) {
    return index.toString();
  };
  protoOf(JsonTreeListDecoder).sw = function (tag) {
    return this.px_1.j(toInt(tag));
  };
  protoOf(JsonTreeListDecoder).hf = function (descriptor) {
    while (this.rx_1 < (this.qx_1 - 1 | 0)) {
      this.rx_1 = this.rx_1 + 1 | 0;
      return this.rx_1;
    }
    return -1;
  };
  function JsonTreeMapDecoder(json, value) {
    JsonTreeDecoder.call(this, json, value);
    this.cy_1 = value;
    this.dy_1 = toList(this.cy_1.t1());
    this.ey_1 = imul(this.dy_1.k(), 2);
    this.fy_1 = -1;
  }
  protoOf(JsonTreeMapDecoder).p1 = function () {
    return this.cy_1;
  };
  protoOf(JsonTreeMapDecoder).yj = function (descriptor, index) {
    var i = index / 2 | 0;
    return this.dy_1.j(i);
  };
  protoOf(JsonTreeMapDecoder).hf = function (descriptor) {
    while (this.fy_1 < (this.ey_1 - 1 | 0)) {
      this.fy_1 = this.fy_1 + 1 | 0;
      return this.fy_1;
    }
    return -1;
  };
  protoOf(JsonTreeMapDecoder).sw = function (tag) {
    return (this.fy_1 % 2 | 0) === 0 ? JsonPrimitive_0(tag) : getValue(this.cy_1, tag);
  };
  protoOf(JsonTreeMapDecoder).xe = function (descriptor) {
  };
  function readPolymorphicJson(_this__u8e3s4, discriminator, element, deserializer) {
    return (new JsonTreeDecoder(_this__u8e3s4, element, discriminator, deserializer.md())).ve(deserializer);
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
    this.fw_1 = begin;
    this.gw_1 = end;
  }
  function switchMode(_this__u8e3s4, desc) {
    var tmp0_subject = desc.be();
    var tmp;
    if (tmp0_subject instanceof PolymorphicKind) {
      tmp = WriteMode_POLY_OBJ_getInstance();
    } else {
      if (equals(tmp0_subject, LIST_getInstance())) {
        tmp = WriteMode_LIST_getInstance();
      } else {
        if (equals(tmp0_subject, MAP_getInstance())) {
          // Inline function 'kotlinx.serialization.json.internal.selectMapMode' call
          var keyDescriptor = carrierDescriptor(desc.ie(0), _this__u8e3s4.ff());
          var keyKind = keyDescriptor.be();
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
            if (_this__u8e3s4.mp_1.cr_1) {
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
    if (equals(_this__u8e3s4.be(), CONTEXTUAL_getInstance())) {
      var tmp0_safe_receiver = getContextualDescriptor(module_0, _this__u8e3s4);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : carrierDescriptor(tmp0_safe_receiver, module_0);
      tmp = tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
    } else if (_this__u8e3s4.ce()) {
      tmp = carrierDescriptor(_this__u8e3s4.ie(0), module_0);
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
    $this.gy(lastPosition, current);
    return appendEsc($this, current + 1 | 0);
  }
  function decodedString($this, lastPosition, currentPosition) {
    $this.gy(lastPosition, currentPosition);
    var result = $this.eq_1.toString();
    $this.eq_1.j9(0);
    return result;
  }
  function takePeeked($this) {
    // Inline function 'kotlin.also' call
    var this_0 = ensureNotNull($this.dq_1);
    $this.dq_1 = null;
    return this_0;
  }
  function wasUnquotedString($this) {
    return !(charSequenceGet($this.hy(), $this.bq_1 - 1 | 0) === _Char___init__impl__6a9atx(34));
  }
  function appendEsc($this, startPosition) {
    var currentPosition = startPosition;
    currentPosition = $this.iy(currentPosition);
    if (currentPosition === -1) {
      $this.fu('Expected escape sequence to continue, got EOF');
    }
    var tmp = $this.hy();
    var _unary__edvuaz = currentPosition;
    currentPosition = _unary__edvuaz + 1 | 0;
    var currentChar = charSequenceGet(tmp, _unary__edvuaz);
    if (currentChar === _Char___init__impl__6a9atx(117)) {
      return appendHex($this, $this.hy(), currentPosition);
    }
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(currentChar);
    var c = escapeToChar(tmp$ret$0);
    if (c === _Char___init__impl__6a9atx(0)) {
      $this.fu("Invalid escaped char '" + toString_1(currentChar) + "'");
    }
    $this.eq_1.k6(c);
    return currentPosition;
  }
  function appendHex($this, source, startPos) {
    if ((startPos + 4 | 0) >= charSequenceLength(source)) {
      $this.bq_1 = startPos;
      $this.jy();
      if (($this.bq_1 + 4 | 0) >= charSequenceLength(source)) {
        $this.fu('Unexpected EOF during unicode escape');
      }
      return appendHex($this, source, $this.bq_1);
    }
    $this.eq_1.k6(numberToChar((((fromHexChar($this, source, startPos) << 12) + (fromHexChar($this, source, startPos + 1 | 0) << 8) | 0) + (fromHexChar($this, source, startPos + 2 | 0) << 4) | 0) + fromHexChar($this, source, startPos + 3 | 0) | 0));
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
      $this.fu("Invalid toHexChar char '" + toString_1(character) + "' in unicode escape");
    }
    return tmp;
  }
  function consumeBoolean2($this, start) {
    var current = $this.iy(start);
    if (current >= charSequenceLength($this.hy()) || current === -1) {
      $this.fu('EOF');
    }
    var tmp = $this.hy();
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
        $this.fu("Expected valid boolean literal prefix, but had '" + $this.ju() + "'");
      }
    }
    return tmp_0;
  }
  function consumeBooleanLiteral($this, literalSuffix, current) {
    if ((charSequenceLength($this.hy()) - current | 0) < literalSuffix.length) {
      $this.fu('Unexpected end of boolean literal');
    }
    var inductionVariable = 0;
    var last = charSequenceLength(literalSuffix) - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var expected = charCodeAt(literalSuffix, i);
        var actual = charSequenceGet($this.hy(), current + i | 0);
        // Inline function 'kotlin.code' call
        var tmp = Char__toInt_impl_vasixd(expected);
        // Inline function 'kotlin.code' call
        if (!(tmp === (Char__toInt_impl_vasixd(actual) | 32))) {
          $this.fu("Expected valid boolean literal prefix, but had '" + $this.ju() + "'");
        }
      }
       while (inductionVariable <= last);
    $this.bq_1 = current + literalSuffix.length | 0;
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
    this.bq_1 = 0;
    this.cq_1 = new JsonPath();
    this.dq_1 = null;
    this.eq_1 = StringBuilder_init_$Create$();
  }
  protoOf(AbstractJsonLexer).jy = function () {
  };
  protoOf(AbstractJsonLexer).tv = function () {
    var current = this.ky();
    var source = this.hy();
    if (current >= charSequenceLength(source) || current === -1)
      return false;
    if (charSequenceGet(source, current) === _Char___init__impl__6a9atx(44)) {
      this.bq_1 = this.bq_1 + 1 | 0;
      return true;
    }
    return false;
  };
  protoOf(AbstractJsonLexer).ly = function (c) {
    return c === _Char___init__impl__6a9atx(125) || c === _Char___init__impl__6a9atx(93) || (c === _Char___init__impl__6a9atx(58) || c === _Char___init__impl__6a9atx(44)) ? false : true;
  };
  protoOf(AbstractJsonLexer).fq = function () {
    var nextToken = this.lu();
    if (!(nextToken === 10)) {
      this.fu('Expected EOF after parsing, but had ' + toString_1(charSequenceGet(this.hy(), this.bq_1 - 1 | 0)) + ' instead');
    }
  };
  protoOf(AbstractJsonLexer).eu = function (expected) {
    var token = this.lu();
    if (!(token === expected)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected_0 = tokenDescription(expected);
      var position = true ? this.bq_1 - 1 | 0 : this.bq_1;
      var s = this.bq_1 === charSequenceLength(this.hy()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.hy(), position));
      var tmp$ret$1 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
      this.fu(tmp$ret$1, position);
    }
    return token;
  };
  protoOf(AbstractJsonLexer).my = function (expected) {
    if (this.bq_1 > 0 && expected === _Char___init__impl__6a9atx(34)) {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.withPositionRollback' call
        var snapshot = this.bq_1;
        try {
          this.bq_1 = this.bq_1 - 1 | 0;
          tmp$ret$0 = this.ju();
          break $l$block;
        }finally {
          this.bq_1 = snapshot;
        }
      }
      var inputLiteral = tmp$ret$0;
      if (inputLiteral === 'null') {
        this.at("Expected string literal but 'null' literal was found", this.bq_1 - 1 | 0, "Use 'coerceInputValues = true' in 'Json {}' builder to coerce nulls if property has a default value.");
      }
    }
    // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
    var expectedToken = charToTokenClass(expected);
    var expected_0 = tokenDescription(expectedToken);
    var position = true ? this.bq_1 - 1 | 0 : this.bq_1;
    var s = this.bq_1 === charSequenceLength(this.hy()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.hy(), position));
    var tmp$ret$3 = 'Expected ' + expected_0 + ", but had '" + s + "' instead";
    this.fu(tmp$ret$3, position);
  };
  protoOf(AbstractJsonLexer).gu = function () {
    var source = this.hy();
    var cpos = this.bq_1;
    $l$loop_0: while (true) {
      cpos = this.iy(cpos);
      if (cpos === -1)
        break $l$loop_0;
      var ch = charSequenceGet(source, cpos);
      if (ch === _Char___init__impl__6a9atx(32) || ch === _Char___init__impl__6a9atx(10) || ch === _Char___init__impl__6a9atx(13) || ch === _Char___init__impl__6a9atx(9)) {
        cpos = cpos + 1 | 0;
        continue $l$loop_0;
      }
      this.bq_1 = cpos;
      return charToTokenClass(ch);
    }
    this.bq_1 = cpos;
    return 10;
  };
  protoOf(AbstractJsonLexer).uv = function (doConsume) {
    var current = this.ky();
    current = this.iy(current);
    var len = charSequenceLength(this.hy()) - current | 0;
    if (len < 4 || current === -1)
      return false;
    var inductionVariable = 0;
    if (inductionVariable <= 3)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(charCodeAt('null', i) === charSequenceGet(this.hy(), current + i | 0)))
          return false;
      }
       while (inductionVariable <= 3);
    if (len > 4 && charToTokenClass(charSequenceGet(this.hy(), current + 4 | 0)) === 0)
      return false;
    if (doConsume) {
      this.bq_1 = current + 4 | 0;
    }
    return true;
  };
  protoOf(AbstractJsonLexer).hw = function (doConsume, $super) {
    doConsume = doConsume === VOID ? true : doConsume;
    return $super === VOID ? this.uv(doConsume) : $super.uv.call(this, doConsume);
  };
  protoOf(AbstractJsonLexer).vv = function (isLenient) {
    var token = this.gu();
    var tmp;
    if (isLenient) {
      if (!(token === 1) && !(token === 0))
        return null;
      tmp = this.ju();
    } else {
      if (!(token === 1))
        return null;
      tmp = this.iu();
    }
    var string = tmp;
    this.dq_1 = string;
    return string;
  };
  protoOf(AbstractJsonLexer).ny = function () {
    this.dq_1 = null;
  };
  protoOf(AbstractJsonLexer).oy = function (startPos, endPos) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = this.hy();
    return toString(charSequenceSubSequence(this_0, startPos, endPos));
  };
  protoOf(AbstractJsonLexer).iu = function () {
    if (!(this.dq_1 == null)) {
      return takePeeked(this);
    }
    return this.yv();
  };
  protoOf(AbstractJsonLexer).consumeString2 = function (source, startPosition, current) {
    var currentPosition = current;
    var lastPosition = startPosition;
    var char = charSequenceGet(source, currentPosition);
    var usedAppend = false;
    while (!(char === _Char___init__impl__6a9atx(34))) {
      if (char === _Char___init__impl__6a9atx(92)) {
        usedAppend = true;
        currentPosition = this.iy(appendEscape(this, lastPosition, currentPosition));
        if (currentPosition === -1) {
          this.fu('Unexpected EOF', currentPosition);
        }
        lastPosition = currentPosition;
      } else {
        currentPosition = currentPosition + 1 | 0;
        if (currentPosition >= charSequenceLength(source)) {
          usedAppend = true;
          this.gy(lastPosition, currentPosition);
          currentPosition = this.iy(currentPosition);
          if (currentPosition === -1) {
            this.fu('Unexpected EOF', currentPosition);
          }
          lastPosition = currentPosition;
        }
      }
      char = charSequenceGet(source, currentPosition);
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.oy(lastPosition, currentPosition);
    } else {
      tmp = decodedString(this, lastPosition, currentPosition);
    }
    var string = tmp;
    this.bq_1 = currentPosition + 1 | 0;
    return string;
  };
  protoOf(AbstractJsonLexer).zv = function () {
    var result = this.ju();
    if (result === 'null' && wasUnquotedString(this)) {
      this.fu("Unexpected 'null' value instead of string literal");
    }
    return result;
  };
  protoOf(AbstractJsonLexer).ju = function () {
    if (!(this.dq_1 == null)) {
      return takePeeked(this);
    }
    var current = this.ky();
    if (current >= charSequenceLength(this.hy()) || current === -1) {
      this.fu('EOF', current);
    }
    var token = charToTokenClass(charSequenceGet(this.hy(), current));
    if (token === 1) {
      return this.iu();
    }
    if (!(token === 0)) {
      this.fu('Expected beginning of the string, but got ' + toString_1(charSequenceGet(this.hy(), current)));
    }
    var usedAppend = false;
    while (charToTokenClass(charSequenceGet(this.hy(), current)) === 0) {
      current = current + 1 | 0;
      if (current >= charSequenceLength(this.hy())) {
        usedAppend = true;
        this.gy(this.bq_1, current);
        var eof = this.iy(current);
        if (eof === -1) {
          this.bq_1 = current;
          return decodedString(this, 0, 0);
        } else {
          current = eof;
        }
      }
    }
    var tmp;
    if (!usedAppend) {
      tmp = this.oy(this.bq_1, current);
    } else {
      tmp = decodedString(this, this.bq_1, current);
    }
    var result = tmp;
    this.bq_1 = current;
    return result;
  };
  protoOf(AbstractJsonLexer).gy = function (fromIndex, toIndex) {
    this.eq_1.e9(this.hy(), fromIndex, toIndex);
  };
  protoOf(AbstractJsonLexer).xv = function (allowLenientStrings) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tokenStack = ArrayList_init_$Create$();
    var lastToken = this.gu();
    if (!(lastToken === 8) && !(lastToken === 6)) {
      this.ju();
      return Unit_instance;
    }
    $l$loop: while (true) {
      lastToken = this.gu();
      if (lastToken === 1) {
        if (allowLenientStrings)
          this.ju();
        else
          this.yv();
        continue $l$loop;
      }
      var tmp0_subject = lastToken;
      if (tmp0_subject === 8 || tmp0_subject === 6) {
        tokenStack.e(lastToken);
      } else if (tmp0_subject === 9) {
        if (!(last(tokenStack) === 8))
          throw JsonDecodingException_0(this.bq_1, 'found ] instead of } at path: ' + this.cq_1.toString(), this.hy());
        removeLast(tokenStack);
      } else if (tmp0_subject === 7) {
        if (!(last(tokenStack) === 6))
          throw JsonDecodingException_0(this.bq_1, 'found } instead of ] at path: ' + this.cq_1.toString(), this.hy());
        removeLast(tokenStack);
      } else if (tmp0_subject === 10) {
        this.fu('Unexpected end of input due to malformed JSON during ignoring unknown keys');
      }
      this.lu();
      if (tokenStack.k() === 0)
        return Unit_instance;
    }
  };
  protoOf(AbstractJsonLexer).toString = function () {
    return "JsonReader(source='" + toString(this.hy()) + "', currentPosition=" + this.bq_1 + ')';
  };
  protoOf(AbstractJsonLexer).wv = function (key) {
    var processed = this.oy(0, this.bq_1);
    var lastIndexOf_0 = lastIndexOf(processed, key);
    throw new JsonDecodingException("Encountered an unknown key '" + key + "' at offset " + lastIndexOf_0 + ' at path: ' + this.cq_1.nt() + "\nUse 'ignoreUnknownKeys = true' in 'Json {}' builder or '@JsonIgnoreUnknownKeys' annotation to ignore unknown keys.\n" + ('JSON input: ' + toString(minify(this.hy(), lastIndexOf_0))));
  };
  protoOf(AbstractJsonLexer).at = function (message, position, hint) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(hint) === 0) {
      tmp = '';
    } else {
      tmp = '\n' + hint;
    }
    var hintMessage = tmp;
    throw JsonDecodingException_0(position, message + ' at path: ' + this.cq_1.nt() + hintMessage, this.hy());
  };
  protoOf(AbstractJsonLexer).fu = function (message, position, hint, $super) {
    position = position === VOID ? this.bq_1 : position;
    hint = hint === VOID ? '' : hint;
    return $super === VOID ? this.at(message, position, hint) : $super.at.call(this, message, position, hint);
  };
  protoOf(AbstractJsonLexer).jw = function () {
    var current = this.ky();
    current = this.iy(current);
    if (current >= charSequenceLength(this.hy()) || current === -1) {
      this.fu('EOF');
    }
    var tmp;
    if (charSequenceGet(this.hy(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      if (current === charSequenceLength(this.hy())) {
        this.fu('EOF');
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
    $l$loop_4: while (!(current === charSequenceLength(this.hy()))) {
      var ch = charSequenceGet(this.hy(), current);
      if ((ch === _Char___init__impl__6a9atx(101) || ch === _Char___init__impl__6a9atx(69)) && !hasExponent) {
        if (current === start) {
          this.fu('Unexpected symbol ' + toString_1(ch) + ' in numeric literal');
        }
        isExponentPositive = true;
        hasExponent = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45) && hasExponent) {
        if (current === start) {
          this.fu("Unexpected symbol '-' in numeric literal");
        }
        isExponentPositive = false;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(43) && hasExponent) {
        if (current === start) {
          this.fu("Unexpected symbol '+' in numeric literal");
        }
        isExponentPositive = true;
        current = current + 1 | 0;
        continue $l$loop_4;
      }
      if (ch === _Char___init__impl__6a9atx(45)) {
        if (!(current === start)) {
          this.fu("Unexpected symbol '-' in numeric literal");
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
        this.fu("Unexpected symbol '" + toString_1(ch) + "' in numeric literal");
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
        this.fu('Numeric value overflow');
      }
    }
    var hasChars = !(current === start);
    if (start === current || (isNegative && start === (current - 1 | 0))) {
      this.fu('Expected numeric literal');
    }
    if (hasQuotation) {
      if (!hasChars) {
        this.fu('EOF');
      }
      if (!(charSequenceGet(this.hy(), current) === _Char___init__impl__6a9atx(34))) {
        this.fu('Expected closing quotation mark');
      }
      current = current + 1 | 0;
    }
    this.bq_1 = current;
    if (hasExponent) {
      var doubleAccumulator = toNumber(accumulator) * consumeNumericLiteral$calculateExponent(exponentAccumulator, isExponentPositive);
      if (doubleAccumulator > toNumber(new Long(-1, 2147483647)) || doubleAccumulator < toNumber(new Long(0, -2147483648))) {
        this.fu('Numeric value overflow');
      }
      // Inline function 'kotlin.math.floor' call
      if (!(Math.floor(doubleAccumulator) === doubleAccumulator)) {
        this.fu("Can't convert " + doubleAccumulator + ' to Long');
      }
      accumulator = numberToLong(doubleAccumulator);
    }
    var tmp_0;
    if (isNegative) {
      tmp_0 = accumulator;
    } else if (!equalsLong(accumulator, new Long(0, -2147483648))) {
      tmp_0 = negate(accumulator);
    } else {
      this.fu('Numeric value overflow');
    }
    return tmp_0;
  };
  protoOf(AbstractJsonLexer).as = function () {
    var result = this.jw();
    var next = this.lu();
    if (!(next === 10)) {
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(10);
      var position = true ? this.bq_1 - 1 | 0 : this.bq_1;
      var s = this.bq_1 === charSequenceLength(this.hy()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.hy(), position));
      var tmp$ret$1 = "Expected input to contain a single valid number, but got '" + s + "' after it";
      this.fu(tmp$ret$1, position);
    }
    return result;
  };
  protoOf(AbstractJsonLexer).iw = function () {
    var current = this.ky();
    if (current === charSequenceLength(this.hy())) {
      this.fu('EOF');
    }
    var tmp;
    if (charSequenceGet(this.hy(), current) === _Char___init__impl__6a9atx(34)) {
      current = current + 1 | 0;
      tmp = true;
    } else {
      tmp = false;
    }
    var hasQuotation = tmp;
    var result = consumeBoolean2(this, current);
    if (hasQuotation) {
      if (this.bq_1 === charSequenceLength(this.hy())) {
        this.fu('EOF');
      }
      if (!(charSequenceGet(this.hy(), this.bq_1) === _Char___init__impl__6a9atx(34))) {
        this.fu('Expected closing quotation mark');
      }
      this.bq_1 = this.bq_1 + 1 | 0;
    }
    return result;
  };
  function charToTokenClass(c) {
    var tmp;
    // Inline function 'kotlin.code' call
    if (Char__toInt_impl_vasixd(c) < 126) {
      var tmp_0 = CharMappings_getInstance().qy_1;
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
    return c < 117 ? CharMappings_getInstance().py_1[c] : _Char___init__impl__6a9atx(0);
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
      $this.py_1[tmp$ret$0] = numberToChar(c);
    }
  }
  function initC2ESC_0($this, c, esc) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2ESC($this, tmp$ret$0, esc);
  }
  function initC2TC($this, c, cl) {
    $this.qy_1[c] = cl;
  }
  function initC2TC_0($this, c, cl) {
    // Inline function 'kotlin.code' call
    var tmp$ret$0 = Char__toInt_impl_vasixd(c);
    return initC2TC($this, tmp$ret$0, cl);
  }
  function CharMappings() {
    CharMappings_instance = this;
    this.py_1 = charArray(117);
    this.qy_1 = new Int8Array(126);
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
  protoOf(StringJsonLexerWithComments).lu = function () {
    var source = this.hy();
    var cpos = this.ky();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.bq_1 = cpos + 1 | 0;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).hu = function () {
    var current = this.ky();
    if (current >= this.hy().length || current === -1)
      return false;
    return this.ly(charCodeAt(this.hy(), current));
  };
  protoOf(StringJsonLexerWithComments).sv = function (expected) {
    var source = this.hy();
    var current = this.ky();
    if (current >= source.length || current === -1) {
      this.bq_1 = -1;
      this.my(expected);
    }
    var c = charCodeAt(source, current);
    this.bq_1 = current + 1 | 0;
    if (c === expected)
      return Unit_instance;
    else {
      this.my(expected);
    }
  };
  protoOf(StringJsonLexerWithComments).gu = function () {
    var source = this.hy();
    var cpos = this.ky();
    if (cpos >= source.length || cpos === -1)
      return 10;
    this.bq_1 = cpos;
    return charToTokenClass(charCodeAt(source, cpos));
  };
  protoOf(StringJsonLexerWithComments).ky = function () {
    var current = this.bq_1;
    if (current === -1)
      return current;
    var source = this.hy();
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
            this.bq_1 = source.length;
            this.fu('Expected end of the block comment: "*/", but had EOF instead');
          } else {
            current = current + 2 | 0;
          }
          continue $l$loop_1;
        }
      }
      break $l$loop_1;
    }
    this.bq_1 = current;
    return current;
  };
  function StringJsonLexer(source) {
    AbstractJsonLexer.call(this);
    this.az_1 = source;
  }
  protoOf(StringJsonLexer).hy = function () {
    return this.az_1;
  };
  protoOf(StringJsonLexer).iy = function (position) {
    return position < this.hy().length ? position : -1;
  };
  protoOf(StringJsonLexer).lu = function () {
    var source = this.hy();
    var cpos = this.bq_1;
    $l$loop: while (!(cpos === -1) && cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.bq_1 = cpos;
      return charToTokenClass(c);
    }
    this.bq_1 = source.length;
    return 10;
  };
  protoOf(StringJsonLexer).hu = function () {
    var current = this.bq_1;
    if (current === -1)
      return false;
    var source = this.hy();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
        continue $l$loop;
      }
      this.bq_1 = current;
      return this.ly(c);
    }
    this.bq_1 = current;
    return false;
  };
  protoOf(StringJsonLexer).ky = function () {
    var current = this.bq_1;
    if (current === -1)
      return current;
    var source = this.hy();
    $l$loop: while (current < source.length) {
      var c = charCodeAt(source, current);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9)) {
        current = current + 1 | 0;
      } else {
        break $l$loop;
      }
    }
    this.bq_1 = current;
    return current;
  };
  protoOf(StringJsonLexer).sv = function (expected) {
    if (this.bq_1 === -1) {
      this.my(expected);
    }
    var source = this.hy();
    var cpos = this.bq_1;
    $l$loop: while (cpos < source.length) {
      var _unary__edvuaz = cpos;
      cpos = _unary__edvuaz + 1 | 0;
      var c = charCodeAt(source, _unary__edvuaz);
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.isWs' call
      if (c === _Char___init__impl__6a9atx(32) || c === _Char___init__impl__6a9atx(10) || c === _Char___init__impl__6a9atx(13) || c === _Char___init__impl__6a9atx(9))
        continue $l$loop;
      this.bq_1 = cpos;
      if (c === expected)
        return Unit_instance;
      this.my(expected);
    }
    this.bq_1 = -1;
    this.my(expected);
  };
  protoOf(StringJsonLexer).yv = function () {
    this.sv(_Char___init__impl__6a9atx(34));
    var current = this.bq_1;
    var closingQuote = indexOf_0(this.hy(), _Char___init__impl__6a9atx(34), current);
    if (closingQuote === -1) {
      this.ju();
      // Inline function 'kotlinx.serialization.json.internal.AbstractJsonLexer.fail' call
      var expected = tokenDescription(1);
      var position = false ? this.bq_1 - 1 | 0 : this.bq_1;
      var s = this.bq_1 === charSequenceLength(this.hy()) || position < 0 ? 'EOF' : toString_1(charSequenceGet(this.hy(), position));
      var tmp$ret$1 = 'Expected ' + expected + ", but had '" + s + "' instead";
      this.fu(tmp$ret$1, position);
    }
    var inductionVariable = current;
    if (inductionVariable < closingQuote)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charCodeAt(this.hy(), i) === _Char___init__impl__6a9atx(92)) {
          return this.consumeString2(this.hy(), this.bq_1, i);
        }
      }
       while (inductionVariable < closingQuote);
    this.bq_1 = closingQuote + 1 | 0;
    return substring(this.hy(), current, closingQuote);
  };
  protoOf(StringJsonLexer).cw = function (keyToMatch, isLenient) {
    var positionSnapshot = this.bq_1;
    try {
      if (!(this.lu() === 6))
        return null;
      var firstKey = this.vv(isLenient);
      if (!(firstKey === keyToMatch))
        return null;
      this.ny();
      if (!(this.lu() === 5))
        return null;
      return this.vv(isLenient);
    }finally {
      this.bq_1 = positionSnapshot;
      this.ny();
    }
  };
  function StringJsonLexer_0(json, source) {
    return !json.mp_1.or_1 ? new StringJsonLexer(source) : new StringJsonLexerWithComments(source);
  }
  function get_schemaCache(_this__u8e3s4) {
    return _this__u8e3s4.op_1;
  }
  function JsonToStringWriter() {
    this.rp_1 = StringBuilder_init_$Create$_0(128);
  }
  protoOf(JsonToStringWriter).ns = function (value) {
    this.rp_1.i9(value);
  };
  protoOf(JsonToStringWriter).js = function (char) {
    this.rp_1.k6(char);
  };
  protoOf(JsonToStringWriter).ls = function (text) {
    this.rp_1.j6(text);
  };
  protoOf(JsonToStringWriter).rs = function (text) {
    printQuoted(this.rp_1, text);
  };
  protoOf(JsonToStringWriter).sp = function () {
    this.rp_1.k9();
  };
  protoOf(JsonToStringWriter).toString = function () {
    return this.rp_1.toString();
  };
  function createMapForCache(initialCapacity) {
    return HashMap_init_$Create$(initialCapacity);
  }
  //region block: post-declaration
  protoOf(JsonSerializersModuleValidator).zk = contextual;
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
