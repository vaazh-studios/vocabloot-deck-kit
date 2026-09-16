(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-serialization-kotlinx-serialization-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-serialization-kotlinx-serialization-core'.");
    }
    globalThis['kotlinx-serialization-kotlinx-serialization-core'] = factory(typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined' ? {} : globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.y4;
  var initMetadataForInterface = kotlin_kotlin.$_$.o4;
  var VOID = kotlin_kotlin.$_$.a;
  var getKClassFromExpression = kotlin_kotlin.$_$.h5;
  var KProperty1 = kotlin_kotlin.$_$.k5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.i4;
  var initMetadataForClass = kotlin_kotlin.$_$.l4;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.t;
  var objectCreate = kotlin_kotlin.$_$.x4;
  var captureStack = kotlin_kotlin.$_$.z3;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.u;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.w;
  var IllegalArgumentException = kotlin_kotlin.$_$.n6;
  var toString = kotlin_kotlin.$_$.a5;
  var THROW_CCE = kotlin_kotlin.$_$.p6;
  var isInterface = kotlin_kotlin.$_$.t4;
  var emptyList = kotlin_kotlin.$_$.a2;
  var initMetadataForObject = kotlin_kotlin.$_$.q4;
  var ensureNotNull = kotlin_kotlin.$_$.t6;
  var getStringHashCode = kotlin_kotlin.$_$.j4;
  var Long = kotlin_kotlin.$_$.o6;
  var Unit_instance = kotlin_kotlin.$_$.c;
  var toIntOrNull = kotlin_kotlin.$_$.f6;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v;
  var equals = kotlin_kotlin.$_$.g4;
  var hashCode = kotlin_kotlin.$_$.k4;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.x;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var ArrayList = kotlin_kotlin.$_$.h1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var KtList = kotlin_kotlin.$_$.k1;
  var KtMap = kotlin_kotlin.$_$.l1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.m;
  var LinkedHashMap = kotlin_kotlin.$_$.j1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.n;
  var Collection = kotlin_kotlin.$_$.i1;
  var until = kotlin_kotlin.$_$.g5;
  var step = kotlin_kotlin.$_$.f5;
  var KtMutableMap = kotlin_kotlin.$_$.m1;
  var getValue = kotlin_kotlin.$_$.f2;
  var longArray = kotlin_kotlin.$_$.u4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.m4;
  var get_lastIndex = kotlin_kotlin.$_$.k2;
  var shiftLeft = kotlin_kotlin.$_$.t3;
  var bitwiseOr = kotlin_kotlin.$_$.j3;
  var equalsLong = kotlin_kotlin.$_$.n3;
  var invert = kotlin_kotlin.$_$.p3;
  var countTrailingZeroBits = kotlin_kotlin.$_$.s6;
  var contentEquals = kotlin_kotlin.$_$.s1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.j;
  var copyToArray = kotlin_kotlin.$_$.y1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.e;
  var booleanArray = kotlin_kotlin.$_$.y3;
  var emptyMap = kotlin_kotlin.$_$.b2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.v6;
  var contentHashCode = kotlin_kotlin.$_$.v1;
  var joinToString = kotlin_kotlin.$_$.j2;
  var charSequenceLength = kotlin_kotlin.$_$.e4;
  var lastOrNull = kotlin_kotlin.$_$.m2;
  var get_lastIndex_0 = kotlin_kotlin.$_$.l2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.w6;
  var KClass = kotlin_kotlin.$_$.j5;
  var get_indices = kotlin_kotlin.$_$.h2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.y;
  var get_indices_0 = kotlin_kotlin.$_$.g2;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SerializationStrategy, 'SerializationStrategy');
  initMetadataForInterface(DeserializationStrategy, 'DeserializationStrategy');
  initMetadataForInterface(KSerializer, 'KSerializer', VOID, VOID, [SerializationStrategy, DeserializationStrategy]);
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SealedClassSerializer, 'SealedClassSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SerializationException, 'SerializationException', SerializationException_init_$Create$, IllegalArgumentException);
  initMetadataForClass(UnknownFieldException, 'UnknownFieldException', VOID, SerializationException);
  initMetadataForClass(MissingFieldException, 'MissingFieldException', VOID, SerializationException);
  function get_isNullable() {
    return false;
  }
  function get_isInline() {
    return false;
  }
  function get_annotations() {
    return emptyList();
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForObject(ENUM, 'ENUM', VOID, SerialKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(MAP, 'MAP', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  function decodeSerializableValue(deserializer) {
    return deserializer.od(this);
  }
  initMetadataForInterface(Decoder, 'Decoder');
  function decodeSequentially() {
    return false;
  }
  function decodeCollectionSize(descriptor) {
    return -1;
  }
  function decodeSerializableElement$default(descriptor, index, deserializer, previousValue, $super) {
    previousValue = previousValue === VOID ? null : previousValue;
    return $super === VOID ? this.cf(descriptor, index, deserializer, previousValue) : $super.cf.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.we(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.nd(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.md().ud();
    if (isNullabilitySupported) {
      return this.vf(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.lf();
    } else {
      this.yf();
      this.vf(serializer, value);
    }
  }
  initMetadataForInterface(Encoder, 'Encoder');
  function shouldEncodeElementDefault(descriptor, index) {
    return true;
  }
  initMetadataForInterface(CompositeEncoder, 'CompositeEncoder');
  initMetadataForClass(AbstractEncoder, 'AbstractEncoder', VOID, VOID, [Encoder, CompositeEncoder]);
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(ArrayListClassDesc, 'ArrayListClassDesc', VOID, ListLikeDescriptor);
  initMetadataForClass(MapLikeDescriptor, 'MapLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(LinkedHashMapClassDesc, 'LinkedHashMapClassDesc', VOID, MapLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(CollectionSerializer, 'CollectionSerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(ArrayListSerializer, 'ArrayListSerializer', VOID, CollectionSerializer);
  initMetadataForClass(MapLikeSerializer, 'MapLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(LinkedHashMapSerializer, 'LinkedHashMapSerializer', VOID, MapLikeSerializer);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ElementMarker, 'ElementMarker');
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(TaggedDecoder, 'TaggedDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  initMetadataForClass(NamedValueDecoder, 'NamedValueDecoder', VOID, TaggedDecoder);
  initMetadataForClass(SerializersModule, 'SerializersModule');
  initMetadataForClass(SerialModuleImpl, 'SerialModuleImpl', VOID, SerializersModule);
  initMetadataForClass(ContextualProvider, 'ContextualProvider');
  initMetadataForClass(Argless, 'Argless', VOID, ContextualProvider);
  initMetadataForClass(WithTypeArguments, 'WithTypeArguments', VOID, ContextualProvider);
  function contextual(kClass, serializer) {
    return this.xk(kClass, SerializersModuleCollector$contextual$lambda(serializer));
  }
  initMetadataForInterface(SerializersModuleCollector, 'SerializersModuleCollector');
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  //endregion
  function KSerializer() {
  }
  function SerializationStrategy() {
  }
  function DeserializationStrategy() {
  }
  function findPolymorphicSerializer(_this__u8e3s4, encoder, value) {
    var tmp0_elvis_lhs = _this__u8e3s4.pd(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.qd());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.rd(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.qd());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer$_get_descriptor_$ref_m511rz() {
    return function (p0) {
      return p0.md();
    };
  }
  function SealedClassSerializer() {
  }
  protoOf(SealedClassSerializer).md = function () {
    var tmp0 = this.sd_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, SealedClassSerializer$_get_descriptor_$ref_m511rz(), null);
    return tmp0.p1();
  };
  function SerializationException_init_$Init$($this) {
    IllegalArgumentException_init_$Init$($this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$() {
    var tmp = SerializationException_init_$Init$(objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$);
    return tmp;
  }
  function SerializationException_init_$Init$_0(message, $this) {
    IllegalArgumentException_init_$Init$_0(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Create$_0(message) {
    var tmp = SerializationException_init_$Init$_0(message, objectCreate(protoOf(SerializationException)));
    captureStack(tmp, SerializationException_init_$Create$_0);
    return tmp;
  }
  function SerializationException_init_$Init$_1(message, cause, $this) {
    IllegalArgumentException_init_$Init$_1(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, objectCreate(protoOf(UnknownFieldException)));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$_0(message, this);
    captureStack(this, UnknownFieldException);
  }
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.k() === 1 ? "Field '" + missingFields.j(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + toString(missingFields) + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, objectCreate(protoOf(MissingFieldException)));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_1(message, cause, this);
    captureStack(this, MissingFieldException);
    this.td_1 = missingFields;
  }
  function serializer(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.md().ud()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function ListSerializer(elementSerializer) {
    return new ArrayListSerializer(elementSerializer);
  }
  function MapSerializer(keySerializer, valueSerializer) {
    return new LinkedHashMapSerializer(keySerializer, valueSerializer);
  }
  function ContextDescriptor() {
  }
  function getContextualDescriptor(_this__u8e3s4, descriptor) {
    var tmp0_safe_receiver = get_capturedKClass(descriptor);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = _this__u8e3s4.vd(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.md();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.zd_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.wd_1);
      } else {
        tmp = null;
      }
    }
    return tmp;
  }
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementDescriptors$1($this_elementDescriptors) {
    this.le_1 = $this_elementDescriptors;
    this.ke_1 = $this_elementDescriptors.de();
  }
  protoOf(elementDescriptors$1).h = function () {
    return this.ke_1 > 0;
  };
  protoOf(elementDescriptors$1).i = function () {
    var tmp = this.le_1.de();
    var _unary__edvuaz = this.ke_1;
    this.ke_1 = _unary__edvuaz - 1 | 0;
    return this.le_1.ie(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.me_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).g = function () {
    return new elementDescriptors$1(this.me_1);
  };
  function ENUM() {
    ENUM_instance = this;
    SerialKind.call(this);
  }
  var ENUM_instance;
  function ENUM_getInstance() {
    if (ENUM_instance == null)
      new ENUM();
    return ENUM_instance;
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).b8());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function MAP() {
    MAP_instance = this;
    StructureKind.call(this);
  }
  var MAP_instance;
  function MAP_getInstance() {
    if (MAP_instance == null)
      new MAP();
    return MAP_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function PolymorphicKind() {
  }
  function AbstractDecoder() {
  }
  protoOf(AbstractDecoder).ne = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).oe = function () {
    return true;
  };
  protoOf(AbstractDecoder).pe = function () {
    return null;
  };
  protoOf(AbstractDecoder).qe = function () {
    var tmp = this.ne();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).re = function () {
    var tmp = this.ne();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).se = function () {
    var tmp = this.ne();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).te = function () {
    var tmp = this.ne();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ue = function (deserializer, previousValue) {
    return this.ve(deserializer);
  };
  protoOf(AbstractDecoder).we = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).xe = function (descriptor) {
  };
  protoOf(AbstractDecoder).ye = function (descriptor, index) {
    return this.qe();
  };
  protoOf(AbstractDecoder).ze = function (descriptor, index) {
    return this.re();
  };
  protoOf(AbstractDecoder).af = function (descriptor, index) {
    return this.se();
  };
  protoOf(AbstractDecoder).bf = function (descriptor, index) {
    return this.te();
  };
  protoOf(AbstractDecoder).cf = function (descriptor, index, deserializer, previousValue) {
    return this.ue(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).ef = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.md().ud();
    var tmp;
    if (isNullabilitySupported || this.oe()) {
      tmp = this.ue(deserializer, previousValue);
    } else {
      tmp = this.pe();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).we = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).xe = function (descriptor) {
  };
  protoOf(AbstractEncoder).jf = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).kf = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).lf = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).mf = function (value) {
    return this.kf(value);
  };
  protoOf(AbstractEncoder).nf = function (value) {
    return this.kf(value);
  };
  protoOf(AbstractEncoder).of = function (value) {
    return this.kf(value);
  };
  protoOf(AbstractEncoder).pf = function (value) {
    return this.kf(value);
  };
  protoOf(AbstractEncoder).qf = function (descriptor, index, value) {
    if (this.jf(descriptor, index)) {
      this.mf(value);
    }
  };
  protoOf(AbstractEncoder).rf = function (descriptor, index, value) {
    if (this.jf(descriptor, index)) {
      this.nf(value);
    }
  };
  protoOf(AbstractEncoder).sf = function (descriptor, index, value) {
    if (this.jf(descriptor, index)) {
      this.of(value);
    }
  };
  protoOf(AbstractEncoder).tf = function (descriptor, index, value) {
    if (this.jf(descriptor, index)) {
      this.pf(value);
    }
  };
  protoOf(AbstractEncoder).uf = function (descriptor, index, serializer, value) {
    if (this.jf(descriptor, index)) {
      this.vf(serializer, value);
    }
  };
  protoOf(AbstractEncoder).wf = function (descriptor, index, serializer, value) {
    if (this.jf(descriptor, index)) {
      this.xf(serializer, value);
    }
  };
  function Decoder() {
  }
  function CompositeDecoder() {
  }
  function Encoder() {
  }
  function CompositeEncoder() {
  }
  function AbstractPolymorphicSerializer() {
  }
  protoOf(AbstractPolymorphicSerializer).rd = function (decoder, klassName) {
    return decoder.ff().bg(this.qd(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).pd = function (encoder, value) {
    return encoder.ff().cg(this.qd(), value);
  };
  function throwSubtypeNotRegistered(subClass, baseClass) {
    var tmp0_elvis_lhs = subClass.b8();
    throwSubtypeNotRegistered_0(tmp0_elvis_lhs == null ? toString(subClass) : tmp0_elvis_lhs, baseClass);
  }
  function throwSubtypeNotRegistered_0(subClassName, baseClass) {
    var scope = "in the polymorphic scope of '" + baseClass.b8() + "'";
    throw SerializationException_init_$Create$_0(subClassName == null ? 'Class discriminator was missing and no default serializers were registered ' + scope + '.' : "Serializer for subclass '" + subClassName + "' is not found " + scope + '.\n' + ("Check if class with serial name '" + subClassName + "' exists and serializer is registered in a corresponding SerializersModule.\n") + ("To be registered automatically, class '" + subClassName + "' has to be '@Serializable', and the base class '" + baseClass.b8() + "' has to be sealed and '@Serializable'."));
  }
  function CachedNames() {
  }
  function ArrayListClassDesc(elementDesc) {
    ListLikeDescriptor.call(this, elementDesc);
  }
  protoOf(ArrayListClassDesc).ae = function () {
    return 'kotlin.collections.ArrayList';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.gg_1 = elementDescriptor;
    this.hg_1 = 1;
  }
  protoOf(ListLikeDescriptor).be = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).de = function () {
    return this.hg_1;
  };
  protoOf(ListLikeDescriptor).fe = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).ge = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).je = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.ae() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).he = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.ae() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).ie = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.ae() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.gg_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.gg_1, other.gg_1) && this.ae() === other.ae())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.gg_1), 31) + getStringHashCode(this.ae()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.ae() + '(' + toString(this.gg_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.ig_1 = serialName;
    this.jg_1 = keyDescriptor;
    this.kg_1 = valueDescriptor;
    this.lg_1 = 2;
  }
  protoOf(MapLikeDescriptor).ae = function () {
    return this.ig_1;
  };
  protoOf(MapLikeDescriptor).be = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).de = function () {
    return this.lg_1;
  };
  protoOf(MapLikeDescriptor).fe = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).ge = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).je = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.ae() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).he = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.ae() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).ie = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.ae() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.jg_1;
        break;
      case 1:
        tmp = this.kg_1;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message_0 = 'Unreached';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MapLikeDescriptor))
      return false;
    if (!(this.ae() === other.ae()))
      return false;
    if (!equals(this.jg_1, other.jg_1))
      return false;
    if (!equals(this.kg_1, other.kg_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.ae());
    result = imul(31, result) + hashCode(this.jg_1) | 0;
    result = imul(31, result) + hashCode(this.kg_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.ae() + '(' + toString(this.jg_1) + ', ' + toString(this.kg_1) + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.ng_1 = new ArrayListClassDesc(element.md());
  }
  protoOf(ArrayListSerializer).md = function () {
    return this.ng_1;
  };
  protoOf(ArrayListSerializer).og = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ArrayListSerializer).pg = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(ArrayListSerializer).qg = function (_this__u8e3s4) {
    return this.pg(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).rg = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).sg = function (_this__u8e3s4) {
    return this.rg(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).tg = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).ug = function (_this__u8e3s4) {
    return this.tg((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).vg = function (_this__u8e3s4, size) {
    return _this__u8e3s4.q3(size);
  };
  protoOf(ArrayListSerializer).wg = function (_this__u8e3s4, size) {
    return this.vg(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).xg = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.x2(index, element);
  };
  protoOf(ArrayListSerializer).yg = function (_this__u8e3s4, index, element) {
    return this.xg(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.kh_1 = new LinkedHashMapClassDesc(kSerializer.md(), vSerializer.md());
  }
  protoOf(LinkedHashMapSerializer).md = function () {
    return this.kh_1;
  };
  protoOf(LinkedHashMapSerializer).lh = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(LinkedHashMapSerializer).mh = function (_this__u8e3s4) {
    return this.lh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).nh = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.v1().g();
  };
  protoOf(LinkedHashMapSerializer).oh = function (_this__u8e3s4) {
    return this.nh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).og = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).ph = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.k(), 2);
  };
  protoOf(LinkedHashMapSerializer).qg = function (_this__u8e3s4) {
    return this.ph(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).qh = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).sg = function (_this__u8e3s4) {
    return this.qh(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).rh = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).ug = function (_this__u8e3s4) {
    return this.rh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).sh = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).wg = function (_this__u8e3s4, size) {
    return this.sh(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).ah = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(CollectionSerializer).mh = function (_this__u8e3s4) {
    return this.ah((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).bh = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(CollectionSerializer).oh = function (_this__u8e3s4) {
    return this.bh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.th_1 = keySerializer;
    this.uh_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).vh = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var progression = step(until(0, imul(size, 2)), 2);
    var inductionVariable = progression.s_1;
    var last = progression.t_1;
    var step_0 = progression.u_1;
    if (step_0 > 0 && inductionVariable <= last || (step_0 < 0 && last <= inductionVariable))
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + step_0 | 0;
        this.wh(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).eh = function (decoder, builder, startIndex, size) {
    return this.vh(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).wh = function (decoder, index, builder, checkIndex) {
    var key = decoder.df(this.md(), index, this.th_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.hf(this.md());
      // Inline function 'kotlin.require' call
      if (!(this_0 === (index + 1 | 0))) {
        var message = 'Value must follow key in a map, index for key: ' + index + ', returned index for value: ' + this_0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = this_0;
    } else {
      tmp = index + 1 | 0;
    }
    var vIndex = tmp;
    var tmp_0;
    var tmp_1;
    if (builder.q1(key)) {
      var tmp_2 = this.uh_1.md().be();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.cf(this.md(), vIndex, this.uh_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.df(this.md(), vIndex, this.uh_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.w1(key, value);
  };
  protoOf(MapLikeSerializer).fh = function (decoder, index, builder, checkIndex) {
    return this.wh(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).dh = function (encoder, value) {
    var size = this.mh(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.md();
    var composite = encoder.zf(descriptor, size);
    var iterator = this.oh(value);
    var index = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.component1' call
      var k = element.o1();
      // Inline function 'kotlin.collections.component2' call
      var v = element.p1();
      var tmp = this.md();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.uf(tmp, _unary__edvuaz, this.th_1, k);
      var tmp_0 = this.md();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.uf(tmp_0, _unary__edvuaz_0, this.uh_1, v);
    }
    composite.xe(descriptor);
  };
  protoOf(MapLikeSerializer).nd = function (encoder, value) {
    return this.dh(encoder, value);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.ch_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).dh = function (encoder, value) {
    var size = this.mh(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.md();
    var composite = encoder.zf(descriptor, size);
    var iterator = this.oh(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.uf(this.md(), index, this.ch_1, iterator.i());
      }
       while (inductionVariable < size);
    composite.xe(descriptor);
  };
  protoOf(CollectionLikeSerializer).nd = function (encoder, value) {
    return this.dh(encoder, value);
  };
  protoOf(CollectionLikeSerializer).eh = function (decoder, builder, startIndex, size) {
    // Inline function 'kotlin.require' call
    if (!(size >= 0)) {
      var message = 'Size must be known in advance when using READ_ALL';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.fh(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).fh = function (decoder, index, builder, checkIndex) {
    this.yg(builder, index, decoder.df(this.md(), index, this.ch_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.if($this.md());
    $this.wg(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).hh = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.ug(previous);
    var builder = tmp1_elvis_lhs == null ? this.og() : tmp1_elvis_lhs;
    var startIndex = this.qg(builder);
    var compositeDecoder = decoder.we(this.md());
    if (compositeDecoder.gf()) {
      this.eh(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.hf(this.md());
        if (index === -1)
          break $l$loop;
        this.gh(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.xe(this.md());
    return this.sg(builder);
  };
  protoOf(AbstractCollectionSerializer).od = function (decoder) {
    return this.hh(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).gh = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.fh(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.fh.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance = this;
    this.xh_1 = longArray(0);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function prepareHighMarksArray($this, elementsCount) {
    var slotsCount = (elementsCount - 1 | 0) >>> 6 | 0;
    var elementsInLastSlot = elementsCount & 63;
    var highMarks = longArray(slotsCount);
    if (!(elementsInLastSlot === 0)) {
      highMarks[get_lastIndex(highMarks)] = shiftLeft(new Long(-1, -1), elementsCount);
    }
    return highMarks;
  }
  function markHigh($this, index) {
    var slot = (index >>> 6 | 0) - 1 | 0;
    var offsetInSlot = index & 63;
    $this.bi_1[slot] = bitwiseOr($this.bi_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.bi_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.bi_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.zh_1($this.yh_1, index)) {
            $this.bi_1[slot] = slotMarks;
            return index;
          }
        }
        $this.bi_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance();
    this.yh_1 = descriptor;
    this.zh_1 = readIfAbsent;
    var elementsCount = this.yh_1.de();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
      }
      tmp.ai_1 = tmp_0;
      this.bi_1 = Companion_getInstance().xh_1;
    } else {
      this.ai_1 = new Long(0, 0);
      this.bi_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).ci = function (index) {
    if (index < 64) {
      this.ai_1 = bitwiseOr(this.ai_1, shiftLeft(new Long(1, 0), index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).di = function () {
    var elementsCount = this.yh_1.de();
    while (!equalsLong(this.ai_1, new Long(-1, -1))) {
      var index = countTrailingZeroBits(invert(this.ai_1));
      this.ai_1 = bitwiseOr(this.ai_1, shiftLeft(new Long(1, 0), index));
      if (this.zh_1(this.yh_1, index)) {
        return index;
      }
    }
    if (elementsCount > 64) {
      return nextUnmarkedHighIndex(this);
    }
    return -1;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.qi_1 = true;
  }
  protoOf(InlineClassDescriptor).ce = function () {
    return this.qi_1;
  };
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ae() === other.ae())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.qi_1 && contentEquals(this.dj(), other.dj()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.de() === other.de())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.de();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ie(index).ae() === other.ie(index).ae())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ie(index).be(), other.ie(index).be())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.fj_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).gj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.fj_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).md = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).nd = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).od = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.ij_1 = serializer;
    this.jj_1 = new SerialDescriptorForNullable(this.ij_1.md());
  }
  protoOf(NullableSerializer).md = function () {
    return this.jj_1;
  };
  protoOf(NullableSerializer).kj = function (encoder, value) {
    if (!(value == null)) {
      encoder.yf();
      encoder.vf(this.ij_1, value);
    } else {
      encoder.lf();
    }
  };
  protoOf(NullableSerializer).nd = function (encoder, value) {
    return this.kj(encoder, value);
  };
  protoOf(NullableSerializer).od = function (decoder) {
    return decoder.oe() ? decoder.ve(this.ij_1) : decoder.pe();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.ij_1, other.ij_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.ij_1);
  };
  function SerialDescriptorForNullable(original) {
    this.wd_1 = original;
    this.xd_1 = this.wd_1.ae() + '?';
    this.yd_1 = cachedSerialNames(this.wd_1);
  }
  protoOf(SerialDescriptorForNullable).ae = function () {
    return this.xd_1;
  };
  protoOf(SerialDescriptorForNullable).dg = function () {
    return this.yd_1;
  };
  protoOf(SerialDescriptorForNullable).ud = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.wd_1, other.wd_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.wd_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.wd_1), 31);
  };
  protoOf(SerialDescriptorForNullable).be = function () {
    return this.wd_1.be();
  };
  protoOf(SerialDescriptorForNullable).ce = function () {
    return this.wd_1.ce();
  };
  protoOf(SerialDescriptorForNullable).de = function () {
    return this.wd_1.de();
  };
  protoOf(SerialDescriptorForNullable).ee = function () {
    return this.wd_1.ee();
  };
  protoOf(SerialDescriptorForNullable).fe = function (index) {
    return this.wd_1.fe(index);
  };
  protoOf(SerialDescriptorForNullable).ge = function (name) {
    return this.wd_1.ge(name);
  };
  protoOf(SerialDescriptorForNullable).he = function (index) {
    return this.wd_1.he(index);
  };
  protoOf(SerialDescriptorForNullable).ie = function (index) {
    return this.wd_1.ie(index);
  };
  protoOf(SerialDescriptorForNullable).je = function (index) {
    return this.wd_1.je(index);
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.dg();
    var result = HashSet_init_$Create$(_this__u8e3s4.de());
    var inductionVariable = 0;
    var last = _this__u8e3s4.de();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.fe(i);
        result.e(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.o())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var missingFields = ArrayList_init_$Create$();
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element = descriptor.fe(i);
          missingFields.e(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.ae());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.aj_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.p1();
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.cj_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.p1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.vi_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.vi_1[i];
        indices.w1(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.si_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gj();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.si_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hj();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_1(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$2 = item.md();
          destination.e(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return function (p0) {
      return p0.dj();
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.dj());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return function (p0) {
      return _get__hashCode__tgwhef(p0);
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.ri_1 = serialName;
    this.si_1 = generatedSerializer;
    this.ti_1 = elementsCount;
    this.ui_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.ti_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.vi_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.ti_1;
    tmp_3.wi_1 = Array(size);
    this.xi_1 = null;
    this.yi_1 = booleanArray(this.ti_1);
    this.zi_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.aj_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.bj_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.cj_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).ae = function () {
    return this.ri_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).de = function () {
    return this.ti_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).be = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).ee = function () {
    var tmp0_elvis_lhs = this.xi_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).dg = function () {
    return this.zi_1.t1();
  };
  protoOf(PluginGeneratedSerialDescriptor).dj = function () {
    var tmp0 = this.bj_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.p1();
  };
  protoOf(PluginGeneratedSerialDescriptor).ej = function (name, isOptional) {
    this.ui_1 = this.ui_1 + 1 | 0;
    this.vi_1[this.ui_1] = name;
    this.yi_1[this.ui_1] = isOptional;
    this.wi_1[this.ui_1] = null;
    if (this.ui_1 === (this.ti_1 - 1 | 0)) {
      this.zi_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).ie = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).md();
  };
  protoOf(PluginGeneratedSerialDescriptor).je = function (index) {
    return getChecked_0(this.yi_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).he = function (index) {
    var tmp0_elvis_lhs = getChecked(this.wi_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).fe = function (index) {
    return getChecked(this.vi_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).ge = function (name) {
    var tmp0_elvis_lhs = this.zi_1.s1(name);
    return tmp0_elvis_lhs == null ? -3 : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ae() === other.ae())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.dj(), other.dj())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.de() === other.de())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.de();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.ie(index).ae() === other.ie(index).ae())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.ie(index).be(), other.ie(index).be())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    return toStringImpl(this);
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.ae());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.ae();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.be();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.de());
    var tmp_0 = _this__u8e3s4.ae() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.fe(i) + ': ' + $this_toStringImpl.ie(i).ae();
    };
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function StringSerializer() {
    StringSerializer_instance = this;
    this.lj_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).md = function () {
    return this.lj_1;
  };
  protoOf(StringSerializer).mj = function (encoder, value) {
    return encoder.pf(value);
  };
  protoOf(StringSerializer).nd = function (encoder, value) {
    return this.mj(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).od = function (decoder) {
    return decoder.te();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.nj_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    this.nj_1 = serialName;
    this.oj_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).ae = function () {
    return this.nj_1;
  };
  protoOf(PrimitiveSerialDescriptor).be = function () {
    return this.oj_1;
  };
  protoOf(PrimitiveSerialDescriptor).de = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).fe = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).ge = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).je = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).ie = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).he = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.nj_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.nj_1 === other.nj_1 && equals(this.oj_1, other.oj_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.nj_1) + imul(31, this.oj_1.hashCode()) | 0;
  };
  function IntSerializer() {
    IntSerializer_instance = this;
    this.pj_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).md = function () {
    return this.pj_1;
  };
  protoOf(IntSerializer).qj = function (encoder, value) {
    return encoder.nf(value);
  };
  protoOf(IntSerializer).nd = function (encoder, value) {
    return this.qj(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).od = function (decoder) {
    return decoder.re();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.rj_1 = new PrimitiveSerialDescriptor('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).md = function () {
    return this.rj_1;
  };
  protoOf(LongSerializer).sj = function (encoder, value) {
    return encoder.of(value);
  };
  protoOf(LongSerializer).nd = function (encoder, value) {
    return this.sj(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).od = function (decoder) {
    return decoder.se();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.tj_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).md = function () {
    return this.tj_1;
  };
  protoOf(BooleanSerializer).uj = function (encoder, value) {
    return encoder.mf(value);
  };
  protoOf(BooleanSerializer).nd = function (encoder, value) {
    return this.uj(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).od = function (decoder) {
    return decoder.qe();
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function NamedValueDecoder() {
    TaggedDecoder.call(this);
  }
  protoOf(NamedValueDecoder).xj = function (_this__u8e3s4, index) {
    return this.zj(this.yj(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).zj = function (nestedName) {
    var tmp0_elvis_lhs = this.ck();
    return this.dk(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).yj = function (descriptor, index) {
    return descriptor.fe(index);
  };
  protoOf(NamedValueDecoder).dk = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).ek = function () {
    return this.ak_1.o() ? '$' : joinToString(this.ak_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.lk(tag);
    var r = block();
    if (!$this.bk_1) {
      $this.mk();
    }
    $this.bk_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.ue($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.md().ud();
      var tmp;
      if (isNullabilitySupported || tmp0.oe()) {
        tmp = this$0.ue($deserializer, $previousValue);
      } else {
        tmp = tmp0.pe();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.ak_1 = ArrayList_init_$Create$();
    this.bk_1 = false;
  }
  protoOf(TaggedDecoder).ff = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).fk = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).gk = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).hk = function (tag) {
    var tmp = this.fk(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ik = function (tag) {
    var tmp = this.fk(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).jk = function (tag) {
    var tmp = this.fk(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).kk = function (tag) {
    var tmp = this.fk(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ue = function (deserializer, previousValue) {
    return this.ve(deserializer);
  };
  protoOf(TaggedDecoder).oe = function () {
    var tmp0_elvis_lhs = this.ck();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.gk(currentTag);
  };
  protoOf(TaggedDecoder).pe = function () {
    return null;
  };
  protoOf(TaggedDecoder).qe = function () {
    return this.hk(this.mk());
  };
  protoOf(TaggedDecoder).re = function () {
    return this.ik(this.mk());
  };
  protoOf(TaggedDecoder).se = function () {
    return this.jk(this.mk());
  };
  protoOf(TaggedDecoder).te = function () {
    return this.kk(this.mk());
  };
  protoOf(TaggedDecoder).we = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).xe = function (descriptor) {
  };
  protoOf(TaggedDecoder).ye = function (descriptor, index) {
    return this.hk(this.xj(descriptor, index));
  };
  protoOf(TaggedDecoder).ze = function (descriptor, index) {
    return this.ik(this.xj(descriptor, index));
  };
  protoOf(TaggedDecoder).af = function (descriptor, index) {
    return this.jk(this.xj(descriptor, index));
  };
  protoOf(TaggedDecoder).bf = function (descriptor, index) {
    return this.kk(this.xj(descriptor, index));
  };
  protoOf(TaggedDecoder).cf = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.xj(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).ef = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.xj(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).ck = function () {
    return lastOrNull(this.ak_1);
  };
  protoOf(TaggedDecoder).lk = function (name) {
    this.ak_1.e(name);
  };
  protoOf(TaggedDecoder).mk = function () {
    var r = this.ak_1.b3(get_lastIndex_0(this.ak_1));
    this.bk_1 = true;
    return r;
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).vd = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.nk(kClass, typeArgumentsSerializers) : $super.nk.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.pk_1 = class2ContextualFactory;
    this.qk_1 = polyBase2Serializers;
    this.rk_1 = polyBase2DefaultSerializerProvider;
    this.sk_1 = polyBase2NamedSerializers;
    this.tk_1 = polyBase2DefaultDeserializerProvider;
    this.uk_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).cg = function (baseClass, value) {
    if (!baseClass.c8(value))
      return null;
    var tmp0_safe_receiver = this.qk_1.s1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.rk_1.s1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).bg = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.sk_1.s1(baseClass);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.get' call
      tmp = (isInterface(tmp0_safe_receiver, KtMap) ? tmp0_safe_receiver : THROW_CCE()).s1(serializedClassName);
    }
    var tmp_0 = tmp;
    var registered = (!(tmp_0 == null) ? isInterface(tmp_0, KSerializer) : false) ? tmp_0 : null;
    if (!(registered == null))
      return registered;
    var tmp_1 = this.tk_1.s1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).nk = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.pk_1.s1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.vk(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).ok = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.pk_1.v1().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.o1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.p1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.yk_1;
        collector.zk(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.xk(kclass, serial.wk_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.qk_1.v1().g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'kotlin.collections.component1' call
      var baseClass = element_0.o1();
      // Inline function 'kotlin.collections.component2' call
      var classMap = element_0.p1();
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s_1 = classMap.v1().g();
      while (_iterator__ex2g4s_1.h()) {
        var element_1 = _iterator__ex2g4s_1.i();
        // Inline function 'kotlin.collections.component1' call
        var actualClass = element_1.o1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element_1.p1();
        var tmp_1 = isInterface(baseClass, KClass) ? baseClass : THROW_CCE();
        var tmp_2 = isInterface(actualClass, KClass) ? actualClass : THROW_CCE();
        // Inline function 'kotlinx.serialization.internal.cast' call
        var tmp$ret$15 = isInterface(serializer, KSerializer) ? serializer : THROW_CCE();
        collector.al(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.rk_1.v1().g();
    while (_iterator__ex2g4s_2.h()) {
      var element_2 = _iterator__ex2g4s_2.i();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.o1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.p1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.bl(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.tk_1.v1().g();
    while (_iterator__ex2g4s_3.h()) {
      var element_3 = _iterator__ex2g4s_3.i();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.o1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.p1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.cl(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
    }
  };
  function Argless() {
  }
  function WithTypeArguments() {
  }
  function ContextualProvider() {
  }
  var properties_initialized_SerializersModule_kt_fjigjn;
  function _init_properties_SerializersModule_kt__u78ha3() {
    if (!properties_initialized_SerializersModule_kt_fjigjn) {
      properties_initialized_SerializersModule_kt_fjigjn = true;
      EmptySerializersModule = new SerialModuleImpl(emptyMap(), emptyMap(), emptyMap(), emptyMap(), emptyMap(), false);
    }
  }
  function EmptySerializersModule_0() {
    return get_EmptySerializersModuleLegacyJs();
  }
  function SerializersModuleCollector$contextual$lambda($serializer) {
    return function (it) {
      return $serializer;
    };
  }
  function SerializersModuleCollector() {
  }
  function SerializableWith() {
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function getChecked_0(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices_0(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  //region block: post-declaration
  protoOf(AbstractDecoder).df = decodeSerializableElement$default;
  protoOf(AbstractDecoder).ve = decodeSerializableValue;
  protoOf(AbstractDecoder).gf = decodeSequentially;
  protoOf(AbstractDecoder).if = decodeCollectionSize;
  protoOf(AbstractEncoder).yf = encodeNotNullMark;
  protoOf(AbstractEncoder).zf = beginCollection;
  protoOf(AbstractEncoder).vf = encodeSerializableValue;
  protoOf(AbstractEncoder).xf = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).ag = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).ud = get_isNullable;
  protoOf(ListLikeDescriptor).ce = get_isInline;
  protoOf(ListLikeDescriptor).ee = get_annotations;
  protoOf(MapLikeDescriptor).ud = get_isNullable;
  protoOf(MapLikeDescriptor).ce = get_isInline;
  protoOf(MapLikeDescriptor).ee = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).ud = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).ce = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).hj = typeParametersSerializers;
  protoOf(PrimitiveSerialDescriptor).ud = get_isNullable;
  protoOf(PrimitiveSerialDescriptor).ce = get_isInline;
  protoOf(PrimitiveSerialDescriptor).ee = get_annotations;
  protoOf(TaggedDecoder).df = decodeSerializableElement$default;
  protoOf(TaggedDecoder).ve = decodeSerializableValue;
  protoOf(TaggedDecoder).gf = decodeSequentially;
  protoOf(TaggedDecoder).if = decodeCollectionSize;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CONTEXTUAL_getInstance;
  _.$_$.b = ENUM_getInstance;
  _.$_$.c = CLASS_getInstance;
  _.$_$.d = LIST_getInstance;
  _.$_$.e = MAP_getInstance;
  _.$_$.f = OBJECT_getInstance;
  _.$_$.g = BooleanSerializer_getInstance;
  _.$_$.h = IntSerializer_getInstance;
  _.$_$.i = LongSerializer_getInstance;
  _.$_$.j = StringSerializer_getInstance;
  _.$_$.k = SerializationException_init_$Init$_0;
  _.$_$.l = UnknownFieldException_init_$Create$;
  _.$_$.m = ListSerializer;
  _.$_$.n = MapSerializer;
  _.$_$.o = get_nullable;
  _.$_$.p = serializer;
  _.$_$.q = PolymorphicKind;
  _.$_$.r = PrimitiveKind;
  _.$_$.s = SerialDescriptor;
  _.$_$.t = ENUM;
  _.$_$.u = getContextualDescriptor;
  _.$_$.v = AbstractDecoder;
  _.$_$.w = AbstractEncoder;
  _.$_$.x = CompositeDecoder;
  _.$_$.y = CompositeEncoder;
  _.$_$.z = Decoder;
  _.$_$.a1 = Encoder;
  _.$_$.b1 = AbstractPolymorphicSerializer;
  _.$_$.c1 = ArrayListSerializer;
  _.$_$.d1 = ElementMarker;
  _.$_$.e1 = typeParametersSerializers;
  _.$_$.f1 = GeneratedSerializer;
  _.$_$.g1 = InlinePrimitiveDescriptor;
  _.$_$.h1 = LinkedHashMapSerializer;
  _.$_$.i1 = NamedValueDecoder;
  _.$_$.j1 = PluginGeneratedSerialDescriptor;
  _.$_$.k1 = jsonCachedSerialNames;
  _.$_$.l1 = throwMissingFieldException;
  _.$_$.m1 = EmptySerializersModule_0;
  _.$_$.n1 = contextual;
  _.$_$.o1 = SerializersModuleCollector;
  _.$_$.p1 = DeserializationStrategy;
  _.$_$.q1 = MissingFieldException;
  _.$_$.r1 = SealedClassSerializer;
  _.$_$.s1 = SerializationException;
  _.$_$.t1 = SerializationStrategy;
  _.$_$.u1 = findPolymorphicSerializer_0;
  _.$_$.v1 = findPolymorphicSerializer;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
