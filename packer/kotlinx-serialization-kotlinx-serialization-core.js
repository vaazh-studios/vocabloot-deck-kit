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
  var protoOf = kotlin_kotlin.$_$.u4;
  var initMetadataForInterface = kotlin_kotlin.$_$.l4;
  var VOID = kotlin_kotlin.$_$.a;
  var getKClassFromExpression = kotlin_kotlin.$_$.d5;
  var KProperty1 = kotlin_kotlin.$_$.g5;
  var getPropertyCallableRef = kotlin_kotlin.$_$.f4;
  var initMetadataForClass = kotlin_kotlin.$_$.i4;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.t;
  var objectCreate = kotlin_kotlin.$_$.t4;
  var captureStack = kotlin_kotlin.$_$.w3;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.u;
  var IllegalArgumentException_init_$Init$_1 = kotlin_kotlin.$_$.w;
  var IllegalArgumentException = kotlin_kotlin.$_$.f6;
  var toString = kotlin_kotlin.$_$.w4;
  var THROW_CCE = kotlin_kotlin.$_$.h6;
  var isInterface = kotlin_kotlin.$_$.p4;
  var emptyList = kotlin_kotlin.$_$.z1;
  var initMetadataForObject = kotlin_kotlin.$_$.n4;
  var ensureNotNull = kotlin_kotlin.$_$.l6;
  var getStringHashCode = kotlin_kotlin.$_$.g4;
  var Long = kotlin_kotlin.$_$.g6;
  var Unit_instance = kotlin_kotlin.$_$.c;
  var toIntOrNull = kotlin_kotlin.$_$.y5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.v;
  var equals = kotlin_kotlin.$_$.d4;
  var hashCode = kotlin_kotlin.$_$.h4;
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
  var until = kotlin_kotlin.$_$.c5;
  var step = kotlin_kotlin.$_$.b5;
  var KtMutableMap = kotlin_kotlin.$_$.m1;
  var getValue = kotlin_kotlin.$_$.e2;
  var longArray = kotlin_kotlin.$_$.q4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.j4;
  var get_lastIndex = kotlin_kotlin.$_$.j2;
  var shiftLeft = kotlin_kotlin.$_$.q3;
  var bitwiseOr = kotlin_kotlin.$_$.g3;
  var equalsLong = kotlin_kotlin.$_$.k3;
  var invert = kotlin_kotlin.$_$.m3;
  var countTrailingZeroBits = kotlin_kotlin.$_$.k6;
  var contentEquals = kotlin_kotlin.$_$.r1;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.j;
  var copyToArray = kotlin_kotlin.$_$.x1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var ArrayList_init_$Create$_1 = kotlin_kotlin.$_$.e;
  var booleanArray = kotlin_kotlin.$_$.v3;
  var emptyMap = kotlin_kotlin.$_$.a2;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.n6;
  var contentHashCode = kotlin_kotlin.$_$.u1;
  var joinToString = kotlin_kotlin.$_$.i2;
  var charSequenceLength = kotlin_kotlin.$_$.b4;
  var lastOrNull = kotlin_kotlin.$_$.l2;
  var get_lastIndex_0 = kotlin_kotlin.$_$.k2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.o6;
  var KClass = kotlin_kotlin.$_$.f5;
  var get_indices = kotlin_kotlin.$_$.g2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.y;
  var get_indices_0 = kotlin_kotlin.$_$.f2;
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
    return deserializer.jd(this);
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
    return $super === VOID ? this.xe(descriptor, index, deserializer, previousValue) : $super.xe.call(this, descriptor, index, deserializer, previousValue);
  }
  initMetadataForInterface(CompositeDecoder, 'CompositeDecoder');
  initMetadataForClass(AbstractDecoder, 'AbstractDecoder', VOID, VOID, [Decoder, CompositeDecoder]);
  function encodeNotNullMark() {
  }
  function beginCollection(descriptor, collectionSize) {
    return this.re(descriptor);
  }
  function encodeSerializableValue(serializer, value) {
    serializer.id(this, value);
  }
  function encodeNullableSerializableValue(serializer, value) {
    var isNullabilitySupported = serializer.hd().pd();
    if (isNullabilitySupported) {
      return this.qf(isInterface(serializer, SerializationStrategy) ? serializer : THROW_CCE(), value);
    }
    if (value == null) {
      this.gf();
    } else {
      this.tf();
      this.qf(serializer, value);
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
    return this.sk(kClass, SerializersModuleCollector$contextual$lambda(serializer));
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
    var tmp0_elvis_lhs = _this__u8e3s4.kd(encoder, value);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered(getKClassFromExpression(value), _this__u8e3s4.ld());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function findPolymorphicSerializer_0(_this__u8e3s4, decoder, klassName) {
    var tmp0_elvis_lhs = _this__u8e3s4.md(decoder, klassName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throwSubtypeNotRegistered_0(klassName, _this__u8e3s4.ld());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function SealedClassSerializer$_get_descriptor_$ref_m511rz() {
    return function (p0) {
      return p0.hd();
    };
  }
  function SealedClassSerializer() {
  }
  protoOf(SealedClassSerializer).hd = function () {
    var tmp0 = this.nd_1;
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
    this.od_1 = missingFields;
  }
  function serializer(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.hd().pd()) {
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
      var tmp0_safe_receiver_0 = _this__u8e3s4.qd(tmp0_safe_receiver);
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hd();
    }
    return tmp;
  }
  function get_capturedKClass(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof ContextDescriptor) {
      tmp = _this__u8e3s4.ud_1;
    } else {
      if (_this__u8e3s4 instanceof SerialDescriptorForNullable) {
        tmp = get_capturedKClass(_this__u8e3s4.rd_1);
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
    this.ge_1 = $this_elementDescriptors;
    this.fe_1 = $this_elementDescriptors.yd();
  }
  protoOf(elementDescriptors$1).h = function () {
    return this.fe_1 > 0;
  };
  protoOf(elementDescriptors$1).i = function () {
    var tmp = this.ge_1.yd();
    var _unary__edvuaz = this.fe_1;
    this.fe_1 = _unary__edvuaz - 1 | 0;
    return this.ge_1.de(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.he_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).g = function () {
    return new elementDescriptors$1(this.he_1);
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
  protoOf(AbstractDecoder).ie = function () {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(AbstractDecoder).je = function () {
    return true;
  };
  protoOf(AbstractDecoder).ke = function () {
    return null;
  };
  protoOf(AbstractDecoder).le = function () {
    var tmp = this.ie();
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).me = function () {
    var tmp = this.ie();
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).ne = function () {
    var tmp = this.ie();
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).oe = function () {
    var tmp = this.ie();
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(AbstractDecoder).pe = function (deserializer, previousValue) {
    return this.qe(deserializer);
  };
  protoOf(AbstractDecoder).re = function (descriptor) {
    return this;
  };
  protoOf(AbstractDecoder).se = function (descriptor) {
  };
  protoOf(AbstractDecoder).te = function (descriptor, index) {
    return this.le();
  };
  protoOf(AbstractDecoder).ue = function (descriptor, index) {
    return this.me();
  };
  protoOf(AbstractDecoder).ve = function (descriptor, index) {
    return this.ne();
  };
  protoOf(AbstractDecoder).we = function (descriptor, index) {
    return this.oe();
  };
  protoOf(AbstractDecoder).xe = function (descriptor, index, deserializer, previousValue) {
    return this.pe(deserializer, previousValue);
  };
  protoOf(AbstractDecoder).ze = function (descriptor, index, deserializer, previousValue) {
    // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
    var isNullabilitySupported = deserializer.hd().pd();
    var tmp;
    if (isNullabilitySupported || this.je()) {
      tmp = this.pe(deserializer, previousValue);
    } else {
      tmp = this.ke();
    }
    return tmp;
  };
  function AbstractEncoder() {
  }
  protoOf(AbstractEncoder).re = function (descriptor) {
    return this;
  };
  protoOf(AbstractEncoder).se = function (descriptor) {
  };
  protoOf(AbstractEncoder).ef = function (descriptor, index) {
    return true;
  };
  protoOf(AbstractEncoder).ff = function (value) {
    throw SerializationException_init_$Create$_0('Non-serializable ' + toString(getKClassFromExpression(value)) + ' is not supported by ' + toString(getKClassFromExpression(this)) + ' encoder');
  };
  protoOf(AbstractEncoder).gf = function () {
    throw SerializationException_init_$Create$_0("'null' is not supported by default");
  };
  protoOf(AbstractEncoder).hf = function (value) {
    return this.ff(value);
  };
  protoOf(AbstractEncoder).if = function (value) {
    return this.ff(value);
  };
  protoOf(AbstractEncoder).jf = function (value) {
    return this.ff(value);
  };
  protoOf(AbstractEncoder).kf = function (value) {
    return this.ff(value);
  };
  protoOf(AbstractEncoder).lf = function (descriptor, index, value) {
    if (this.ef(descriptor, index)) {
      this.hf(value);
    }
  };
  protoOf(AbstractEncoder).mf = function (descriptor, index, value) {
    if (this.ef(descriptor, index)) {
      this.if(value);
    }
  };
  protoOf(AbstractEncoder).nf = function (descriptor, index, value) {
    if (this.ef(descriptor, index)) {
      this.jf(value);
    }
  };
  protoOf(AbstractEncoder).of = function (descriptor, index, value) {
    if (this.ef(descriptor, index)) {
      this.kf(value);
    }
  };
  protoOf(AbstractEncoder).pf = function (descriptor, index, serializer, value) {
    if (this.ef(descriptor, index)) {
      this.qf(serializer, value);
    }
  };
  protoOf(AbstractEncoder).rf = function (descriptor, index, serializer, value) {
    if (this.ef(descriptor, index)) {
      this.sf(serializer, value);
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
  protoOf(AbstractPolymorphicSerializer).md = function (decoder, klassName) {
    return decoder.af().wf(this.ld(), klassName);
  };
  protoOf(AbstractPolymorphicSerializer).kd = function (encoder, value) {
    return encoder.af().xf(this.ld(), value);
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
  protoOf(ArrayListClassDesc).vd = function () {
    return 'kotlin.collections.ArrayList';
  };
  function LinkedHashMapClassDesc(keyDesc, valueDesc) {
    MapLikeDescriptor.call(this, 'kotlin.collections.LinkedHashMap', keyDesc, valueDesc);
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.bg_1 = elementDescriptor;
    this.cg_1 = 1;
  }
  protoOf(ListLikeDescriptor).wd = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).yd = function () {
    return this.cg_1;
  };
  protoOf(ListLikeDescriptor).ae = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).be = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid list index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ListLikeDescriptor).ee = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.vd() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(ListLikeDescriptor).ce = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.vd() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(ListLikeDescriptor).de = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.vd() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.bg_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.bg_1, other.bg_1) && this.vd() === other.vd())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.bg_1), 31) + getStringHashCode(this.vd()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.vd() + '(' + toString(this.bg_1) + ')';
  };
  function MapLikeDescriptor(serialName, keyDescriptor, valueDescriptor) {
    this.dg_1 = serialName;
    this.eg_1 = keyDescriptor;
    this.fg_1 = valueDescriptor;
    this.gg_1 = 2;
  }
  protoOf(MapLikeDescriptor).vd = function () {
    return this.dg_1;
  };
  protoOf(MapLikeDescriptor).wd = function () {
    return MAP_getInstance();
  };
  protoOf(MapLikeDescriptor).yd = function () {
    return this.gg_1;
  };
  protoOf(MapLikeDescriptor).ae = function (index) {
    return index.toString();
  };
  protoOf(MapLikeDescriptor).be = function (name) {
    var tmp0_elvis_lhs = toIntOrNull(name);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$(name + ' is not a valid map index');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapLikeDescriptor).ee = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.vd() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return false;
  };
  protoOf(MapLikeDescriptor).ce = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.vd() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return emptyList();
  };
  protoOf(MapLikeDescriptor).de = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.vd() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    switch (index % 2 | 0) {
      case 0:
        tmp = this.eg_1;
        break;
      case 1:
        tmp = this.fg_1;
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
    if (!(this.vd() === other.vd()))
      return false;
    if (!equals(this.eg_1, other.eg_1))
      return false;
    if (!equals(this.fg_1, other.fg_1))
      return false;
    return true;
  };
  protoOf(MapLikeDescriptor).hashCode = function () {
    var result = getStringHashCode(this.vd());
    result = imul(31, result) + hashCode(this.eg_1) | 0;
    result = imul(31, result) + hashCode(this.fg_1) | 0;
    return result;
  };
  protoOf(MapLikeDescriptor).toString = function () {
    return this.vd() + '(' + toString(this.eg_1) + ', ' + toString(this.fg_1) + ')';
  };
  function ArrayListSerializer(element) {
    CollectionSerializer.call(this, element);
    this.ig_1 = new ArrayListClassDesc(element.hd());
  }
  protoOf(ArrayListSerializer).hd = function () {
    return this.ig_1;
  };
  protoOf(ArrayListSerializer).jg = function () {
    // Inline function 'kotlin.collections.arrayListOf' call
    return ArrayList_init_$Create$();
  };
  protoOf(ArrayListSerializer).kg = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(ArrayListSerializer).lg = function (_this__u8e3s4) {
    return this.kg(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).mg = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(ArrayListSerializer).ng = function (_this__u8e3s4) {
    return this.mg(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).og = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? ArrayList_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(ArrayListSerializer).pg = function (_this__u8e3s4) {
    return this.og((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtList) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(ArrayListSerializer).qg = function (_this__u8e3s4, size) {
    return _this__u8e3s4.q3(size);
  };
  protoOf(ArrayListSerializer).rg = function (_this__u8e3s4, size) {
    return this.qg(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), size);
  };
  protoOf(ArrayListSerializer).sg = function (_this__u8e3s4, index, element) {
    _this__u8e3s4.x2(index, element);
  };
  protoOf(ArrayListSerializer).tg = function (_this__u8e3s4, index, element) {
    return this.sg(_this__u8e3s4 instanceof ArrayList ? _this__u8e3s4 : THROW_CCE(), index, element);
  };
  function LinkedHashMapSerializer(kSerializer, vSerializer) {
    MapLikeSerializer.call(this, kSerializer, vSerializer);
    this.fh_1 = new LinkedHashMapClassDesc(kSerializer.hd(), vSerializer.hd());
  }
  protoOf(LinkedHashMapSerializer).hd = function () {
    return this.fh_1;
  };
  protoOf(LinkedHashMapSerializer).gh = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(LinkedHashMapSerializer).hh = function (_this__u8e3s4) {
    return this.gh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).ih = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.iterator' call
    return _this__u8e3s4.v1().g();
  };
  protoOf(LinkedHashMapSerializer).jh = function (_this__u8e3s4) {
    return this.ih((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).jg = function () {
    return LinkedHashMap_init_$Create$();
  };
  protoOf(LinkedHashMapSerializer).kh = function (_this__u8e3s4) {
    return imul(_this__u8e3s4.k(), 2);
  };
  protoOf(LinkedHashMapSerializer).lg = function (_this__u8e3s4) {
    return this.kh(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).lh = function (_this__u8e3s4) {
    return _this__u8e3s4;
  };
  protoOf(LinkedHashMapSerializer).ng = function (_this__u8e3s4) {
    return this.lh(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).mh = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? LinkedHashMap_init_$Create$_0(_this__u8e3s4) : tmp0_elvis_lhs;
  };
  protoOf(LinkedHashMapSerializer).pg = function (_this__u8e3s4) {
    return this.mh((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, KtMap) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(LinkedHashMapSerializer).nh = function (_this__u8e3s4, size) {
  };
  protoOf(LinkedHashMapSerializer).rg = function (_this__u8e3s4, size) {
    return this.nh(_this__u8e3s4 instanceof LinkedHashMap ? _this__u8e3s4 : THROW_CCE(), size);
  };
  function CollectionSerializer(element) {
    CollectionLikeSerializer.call(this, element);
  }
  protoOf(CollectionSerializer).vg = function (_this__u8e3s4) {
    return _this__u8e3s4.k();
  };
  protoOf(CollectionSerializer).hh = function (_this__u8e3s4) {
    return this.vg((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  protoOf(CollectionSerializer).wg = function (_this__u8e3s4) {
    return _this__u8e3s4.g();
  };
  protoOf(CollectionSerializer).jh = function (_this__u8e3s4) {
    return this.wg((!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Collection) : false) ? _this__u8e3s4 : THROW_CCE());
  };
  function MapLikeSerializer(keySerializer, valueSerializer) {
    AbstractCollectionSerializer.call(this);
    this.oh_1 = keySerializer;
    this.ph_1 = valueSerializer;
  }
  protoOf(MapLikeSerializer).qh = function (decoder, builder, startIndex, size) {
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
        this.rh(decoder, startIndex + index | 0, builder, false);
      }
       while (!(index === last));
  };
  protoOf(MapLikeSerializer).zg = function (decoder, builder, startIndex, size) {
    return this.qh(decoder, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), startIndex, size);
  };
  protoOf(MapLikeSerializer).rh = function (decoder, index, builder, checkIndex) {
    var key = decoder.ye(this.hd(), index, this.oh_1);
    var tmp;
    if (checkIndex) {
      // Inline function 'kotlin.also' call
      var this_0 = decoder.cf(this.hd());
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
      var tmp_2 = this.ph_1.hd().wd();
      tmp_1 = !(tmp_2 instanceof PrimitiveKind);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = decoder.xe(this.hd(), vIndex, this.ph_1, getValue(builder, key));
    } else {
      tmp_0 = decoder.ye(this.hd(), vIndex, this.ph_1);
    }
    var value = tmp_0;
    // Inline function 'kotlin.collections.set' call
    builder.w1(key, value);
  };
  protoOf(MapLikeSerializer).ah = function (decoder, index, builder, checkIndex) {
    return this.rh(decoder, index, (!(builder == null) ? isInterface(builder, KtMutableMap) : false) ? builder : THROW_CCE(), checkIndex);
  };
  protoOf(MapLikeSerializer).yg = function (encoder, value) {
    var size = this.hh(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.hd();
    var composite = encoder.uf(descriptor, size);
    var iterator = this.jh(value);
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
      var tmp = this.hd();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      composite.pf(tmp, _unary__edvuaz, this.oh_1, k);
      var tmp_0 = this.hd();
      var _unary__edvuaz_0 = index;
      index = _unary__edvuaz_0 + 1 | 0;
      composite.pf(tmp_0, _unary__edvuaz_0, this.ph_1, v);
    }
    composite.se(descriptor);
  };
  protoOf(MapLikeSerializer).id = function (encoder, value) {
    return this.yg(encoder, value);
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.xg_1 = elementSerializer;
  }
  protoOf(CollectionLikeSerializer).yg = function (encoder, value) {
    var size = this.hh(value);
    // Inline function 'kotlinx.serialization.encoding.encodeCollection' call
    var descriptor = this.hd();
    var composite = encoder.uf(descriptor, size);
    var iterator = this.jh(value);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        composite.pf(this.hd(), index, this.xg_1, iterator.i());
      }
       while (inductionVariable < size);
    composite.se(descriptor);
  };
  protoOf(CollectionLikeSerializer).id = function (encoder, value) {
    return this.yg(encoder, value);
  };
  protoOf(CollectionLikeSerializer).zg = function (decoder, builder, startIndex, size) {
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
        this.ah(decoder, startIndex + index | 0, builder, false);
      }
       while (inductionVariable < size);
  };
  protoOf(CollectionLikeSerializer).ah = function (decoder, index, builder, checkIndex) {
    this.tg(builder, index, decoder.ye(this.hd(), index, this.xg_1));
  };
  function readSize($this, decoder, builder) {
    var size = decoder.df($this.hd());
    $this.rg(builder, size);
    return size;
  }
  function AbstractCollectionSerializer() {
  }
  protoOf(AbstractCollectionSerializer).ch = function (decoder, previous) {
    var tmp1_elvis_lhs = previous == null ? null : this.pg(previous);
    var builder = tmp1_elvis_lhs == null ? this.jg() : tmp1_elvis_lhs;
    var startIndex = this.lg(builder);
    var compositeDecoder = decoder.re(this.hd());
    if (compositeDecoder.bf()) {
      this.zg(compositeDecoder, builder, startIndex, readSize(this, compositeDecoder, builder));
    } else {
      $l$loop: while (true) {
        var index = compositeDecoder.cf(this.hd());
        if (index === -1)
          break $l$loop;
        this.bh(compositeDecoder, startIndex + index | 0, builder);
      }
    }
    compositeDecoder.se(this.hd());
    return this.ng(builder);
  };
  protoOf(AbstractCollectionSerializer).jd = function (decoder) {
    return this.ch(decoder, null);
  };
  protoOf(AbstractCollectionSerializer).bh = function (decoder, index, builder, checkIndex, $super) {
    checkIndex = checkIndex === VOID ? true : checkIndex;
    var tmp;
    if ($super === VOID) {
      this.ah(decoder, index, builder, checkIndex);
      tmp = Unit_instance;
    } else {
      tmp = $super.ah.call(this, decoder, index, builder, checkIndex);
    }
    return tmp;
  };
  function Companion() {
    Companion_instance = this;
    this.sh_1 = longArray(0);
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
    $this.wh_1[slot] = bitwiseOr($this.wh_1[slot], shiftLeft(new Long(1, 0), offsetInSlot));
  }
  function nextUnmarkedHighIndex($this) {
    var inductionVariable = 0;
    var last = $this.wh_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var slot = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var slotOffset = imul(slot + 1 | 0, 64);
        var slotMarks = $this.wh_1[slot];
        while (!equalsLong(slotMarks, new Long(-1, -1))) {
          var indexInSlot = countTrailingZeroBits(invert(slotMarks));
          slotMarks = bitwiseOr(slotMarks, shiftLeft(new Long(1, 0), indexInSlot));
          var index = slotOffset + indexInSlot | 0;
          if ($this.uh_1($this.th_1, index)) {
            $this.wh_1[slot] = slotMarks;
            return index;
          }
        }
        $this.wh_1[slot] = slotMarks;
      }
       while (inductionVariable <= last);
    return -1;
  }
  function ElementMarker(descriptor, readIfAbsent) {
    Companion_getInstance();
    this.th_1 = descriptor;
    this.uh_1 = readIfAbsent;
    var elementsCount = this.th_1.yd();
    if (elementsCount <= 64) {
      var tmp = this;
      var tmp_0;
      if (elementsCount === 64) {
        tmp_0 = new Long(0, 0);
      } else {
        tmp_0 = shiftLeft(new Long(-1, -1), elementsCount);
      }
      tmp.vh_1 = tmp_0;
      this.wh_1 = Companion_getInstance().sh_1;
    } else {
      this.vh_1 = new Long(0, 0);
      this.wh_1 = prepareHighMarksArray(this, elementsCount);
    }
  }
  protoOf(ElementMarker).xh = function (index) {
    if (index < 64) {
      this.vh_1 = bitwiseOr(this.vh_1, shiftLeft(new Long(1, 0), index));
    } else {
      markHigh(this, index);
    }
  };
  protoOf(ElementMarker).yh = function () {
    var elementsCount = this.th_1.yd();
    while (!equalsLong(this.vh_1, new Long(-1, -1))) {
      var index = countTrailingZeroBits(invert(this.vh_1));
      this.vh_1 = bitwiseOr(this.vh_1, shiftLeft(new Long(1, 0), index));
      if (this.uh_1(this.th_1, index)) {
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
    this.li_1 = true;
  }
  protoOf(InlineClassDescriptor).xd = function () {
    return this.li_1;
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
      if (!(this.vd() === other.vd())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.li_1 && contentEquals(this.yi(), other.yi()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.yd() === other.yd())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.yd();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.de(index).vd() === other.de(index).vd())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.de(index).wd(), other.de(index).wd())) {
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
    this.aj_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).bj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.aj_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).hd = function () {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).id = function (encoder, value) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  protoOf(InlinePrimitiveDescriptor$1).jd = function (decoder) {
    // Inline function 'kotlin.error' call
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function jsonCachedSerialNames(_this__u8e3s4) {
    return cachedSerialNames(_this__u8e3s4);
  }
  function NullableSerializer(serializer) {
    this.dj_1 = serializer;
    this.ej_1 = new SerialDescriptorForNullable(this.dj_1.hd());
  }
  protoOf(NullableSerializer).hd = function () {
    return this.ej_1;
  };
  protoOf(NullableSerializer).fj = function (encoder, value) {
    if (!(value == null)) {
      encoder.tf();
      encoder.qf(this.dj_1, value);
    } else {
      encoder.gf();
    }
  };
  protoOf(NullableSerializer).id = function (encoder, value) {
    return this.fj(encoder, value);
  };
  protoOf(NullableSerializer).jd = function (decoder) {
    return decoder.je() ? decoder.qe(this.dj_1) : decoder.ke();
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.dj_1, other.dj_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.dj_1);
  };
  function SerialDescriptorForNullable(original) {
    this.rd_1 = original;
    this.sd_1 = this.rd_1.vd() + '?';
    this.td_1 = cachedSerialNames(this.rd_1);
  }
  protoOf(SerialDescriptorForNullable).vd = function () {
    return this.sd_1;
  };
  protoOf(SerialDescriptorForNullable).yf = function () {
    return this.td_1;
  };
  protoOf(SerialDescriptorForNullable).pd = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.rd_1, other.rd_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.rd_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.rd_1), 31);
  };
  protoOf(SerialDescriptorForNullable).wd = function () {
    return this.rd_1.wd();
  };
  protoOf(SerialDescriptorForNullable).xd = function () {
    return this.rd_1.xd();
  };
  protoOf(SerialDescriptorForNullable).yd = function () {
    return this.rd_1.yd();
  };
  protoOf(SerialDescriptorForNullable).zd = function () {
    return this.rd_1.zd();
  };
  protoOf(SerialDescriptorForNullable).ae = function (index) {
    return this.rd_1.ae(index);
  };
  protoOf(SerialDescriptorForNullable).be = function (name) {
    return this.rd_1.be(name);
  };
  protoOf(SerialDescriptorForNullable).ce = function (index) {
    return this.rd_1.ce(index);
  };
  protoOf(SerialDescriptorForNullable).de = function (index) {
    return this.rd_1.de(index);
  };
  protoOf(SerialDescriptorForNullable).ee = function (index) {
    return this.rd_1.ee(index);
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.yf();
    var result = HashSet_init_$Create$(_this__u8e3s4.yd());
    var inductionVariable = 0;
    var last = _this__u8e3s4.yd();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.ae(i);
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
    if (!(_this__u8e3s4 == null || _this__u8e3s4.l())) {
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
          var element = descriptor.ae(i);
          missingFields.e(element);
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.vd());
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.vi_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.p1();
  }
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.xi_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.p1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.qi_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.qi_1[i];
        indices.w1(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.ni_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bj();
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
      var tmp0_safe_receiver = this$0.ni_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cj();
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
          var tmp$ret$2 = item.hd();
          destination.e(tmp$ret$2);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return function (p0) {
      return p0.yi();
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.yi());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return function (p0) {
      return _get__hashCode__tgwhef(p0);
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.mi_1 = serialName;
    this.ni_1 = generatedSerializer;
    this.oi_1 = elementsCount;
    this.pi_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.oi_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.qi_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.oi_1;
    tmp_3.ri_1 = Array(size);
    this.si_1 = null;
    this.ti_1 = booleanArray(this.oi_1);
    this.ui_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.vi_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.wi_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.xi_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).vd = function () {
    return this.mi_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).yd = function () {
    return this.oi_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).wd = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).zd = function () {
    var tmp0_elvis_lhs = this.si_1;
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).yf = function () {
    return this.ui_1.t1();
  };
  protoOf(PluginGeneratedSerialDescriptor).yi = function () {
    var tmp0 = this.wi_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.p1();
  };
  protoOf(PluginGeneratedSerialDescriptor).zi = function (name, isOptional) {
    this.pi_1 = this.pi_1 + 1 | 0;
    this.qi_1[this.pi_1] = name;
    this.ti_1[this.pi_1] = isOptional;
    this.ri_1[this.pi_1] = null;
    if (this.pi_1 === (this.oi_1 - 1 | 0)) {
      this.ui_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).de = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).hd();
  };
  protoOf(PluginGeneratedSerialDescriptor).ee = function (index) {
    return getChecked_0(this.ti_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).ce = function (index) {
    var tmp0_elvis_lhs = getChecked(this.ri_1, index);
    return tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
  };
  protoOf(PluginGeneratedSerialDescriptor).ae = function (index) {
    return getChecked(this.qi_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).be = function (name) {
    var tmp0_elvis_lhs = this.ui_1.s1(name);
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
      if (!(this.vd() === other.vd())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.yi(), other.yi())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.yd() === other.yd())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.yd();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.de(index).vd() === other.de(index).vd())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.de(index).wd(), other.de(index).wd())) {
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
    var result = getStringHashCode(_this__u8e3s4.vd());
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
      var tmp0_safe_receiver = element.vd();
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
      var tmp0_safe_receiver_0 = element_0.wd();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.yd());
    var tmp_0 = _this__u8e3s4.vd() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.ae(i) + ': ' + $this_toStringImpl.de(i).vd();
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
    this.gj_1 = new PrimitiveSerialDescriptor('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).hd = function () {
    return this.gj_1;
  };
  protoOf(StringSerializer).hj = function (encoder, value) {
    return encoder.kf(value);
  };
  protoOf(StringSerializer).id = function (encoder, value) {
    return this.hj(encoder, (!(value == null) ? typeof value === 'string' : false) ? value : THROW_CCE());
  };
  protoOf(StringSerializer).jd = function (decoder) {
    return decoder.oe();
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.ij_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor(serialName, kind) {
    this.ij_1 = serialName;
    this.jj_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor).vd = function () {
    return this.ij_1;
  };
  protoOf(PrimitiveSerialDescriptor).wd = function () {
    return this.jj_1;
  };
  protoOf(PrimitiveSerialDescriptor).yd = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor).ae = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).be = function (name) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).ee = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).de = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).ce = function (index) {
    error(this);
  };
  protoOf(PrimitiveSerialDescriptor).toString = function () {
    return 'PrimitiveDescriptor(' + this.ij_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor))
      return false;
    if (this.ij_1 === other.ij_1 && equals(this.jj_1, other.jj_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.ij_1) + imul(31, this.jj_1.hashCode()) | 0;
  };
  function IntSerializer() {
    IntSerializer_instance = this;
    this.kj_1 = new PrimitiveSerialDescriptor('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).hd = function () {
    return this.kj_1;
  };
  protoOf(IntSerializer).lj = function (encoder, value) {
    return encoder.if(value);
  };
  protoOf(IntSerializer).id = function (encoder, value) {
    return this.lj(encoder, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(IntSerializer).jd = function (decoder) {
    return decoder.me();
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.mj_1 = new PrimitiveSerialDescriptor('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).hd = function () {
    return this.mj_1;
  };
  protoOf(LongSerializer).nj = function (encoder, value) {
    return encoder.jf(value);
  };
  protoOf(LongSerializer).id = function (encoder, value) {
    return this.nj(encoder, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(LongSerializer).jd = function (decoder) {
    return decoder.ne();
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.oj_1 = new PrimitiveSerialDescriptor('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).hd = function () {
    return this.oj_1;
  };
  protoOf(BooleanSerializer).pj = function (encoder, value) {
    return encoder.hf(value);
  };
  protoOf(BooleanSerializer).id = function (encoder, value) {
    return this.pj(encoder, (!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(BooleanSerializer).jd = function (decoder) {
    return decoder.le();
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
  protoOf(NamedValueDecoder).sj = function (_this__u8e3s4, index) {
    return this.uj(this.tj(_this__u8e3s4, index));
  };
  protoOf(NamedValueDecoder).uj = function (nestedName) {
    var tmp0_elvis_lhs = this.xj();
    return this.yj(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, nestedName);
  };
  protoOf(NamedValueDecoder).tj = function (descriptor, index) {
    return descriptor.ae(index);
  };
  protoOf(NamedValueDecoder).yj = function (parentName, childName) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(parentName) === 0) {
      tmp = childName;
    } else {
      tmp = parentName + '.' + childName;
    }
    return tmp;
  };
  protoOf(NamedValueDecoder).zj = function () {
    return this.vj_1.l() ? '$' : joinToString(this.vj_1, '.', '$.');
  };
  function tagBlock($this, tag, block) {
    $this.gk(tag);
    var r = block();
    if (!$this.wj_1) {
      $this.hk();
    }
    $this.wj_1 = false;
    return r;
  }
  function TaggedDecoder$decodeSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      return this$0.pe($deserializer, $previousValue);
    };
  }
  function TaggedDecoder$decodeNullableSerializableElement$lambda(this$0, $deserializer, $previousValue) {
    return function () {
      var tmp0 = this$0;
      // Inline function 'kotlinx.serialization.encoding.decodeIfNullable' call
      var isNullabilitySupported = $deserializer.hd().pd();
      var tmp;
      if (isNullabilitySupported || tmp0.je()) {
        tmp = this$0.pe($deserializer, $previousValue);
      } else {
        tmp = tmp0.ke();
      }
      return tmp;
    };
  }
  function TaggedDecoder() {
    var tmp = this;
    // Inline function 'kotlin.collections.arrayListOf' call
    tmp.vj_1 = ArrayList_init_$Create$();
    this.wj_1 = false;
  }
  protoOf(TaggedDecoder).af = function () {
    return EmptySerializersModule_0();
  };
  protoOf(TaggedDecoder).ak = function (tag) {
    throw SerializationException_init_$Create$_0(toString(getKClassFromExpression(this)) + " can't retrieve untyped values");
  };
  protoOf(TaggedDecoder).bk = function (tag) {
    return true;
  };
  protoOf(TaggedDecoder).ck = function (tag) {
    var tmp = this.ak(tag);
    return typeof tmp === 'boolean' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).dk = function (tag) {
    var tmp = this.ak(tag);
    return typeof tmp === 'number' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).ek = function (tag) {
    var tmp = this.ak(tag);
    return tmp instanceof Long ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).fk = function (tag) {
    var tmp = this.ak(tag);
    return typeof tmp === 'string' ? tmp : THROW_CCE();
  };
  protoOf(TaggedDecoder).pe = function (deserializer, previousValue) {
    return this.qe(deserializer);
  };
  protoOf(TaggedDecoder).je = function () {
    var tmp0_elvis_lhs = this.xj();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var currentTag = tmp;
    return this.bk(currentTag);
  };
  protoOf(TaggedDecoder).ke = function () {
    return null;
  };
  protoOf(TaggedDecoder).le = function () {
    return this.ck(this.hk());
  };
  protoOf(TaggedDecoder).me = function () {
    return this.dk(this.hk());
  };
  protoOf(TaggedDecoder).ne = function () {
    return this.ek(this.hk());
  };
  protoOf(TaggedDecoder).oe = function () {
    return this.fk(this.hk());
  };
  protoOf(TaggedDecoder).re = function (descriptor) {
    return this;
  };
  protoOf(TaggedDecoder).se = function (descriptor) {
  };
  protoOf(TaggedDecoder).te = function (descriptor, index) {
    return this.ck(this.sj(descriptor, index));
  };
  protoOf(TaggedDecoder).ue = function (descriptor, index) {
    return this.dk(this.sj(descriptor, index));
  };
  protoOf(TaggedDecoder).ve = function (descriptor, index) {
    return this.ek(this.sj(descriptor, index));
  };
  protoOf(TaggedDecoder).we = function (descriptor, index) {
    return this.fk(this.sj(descriptor, index));
  };
  protoOf(TaggedDecoder).xe = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.sj(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).ze = function (descriptor, index, deserializer, previousValue) {
    var tmp = this.sj(descriptor, index);
    return tagBlock(this, tmp, TaggedDecoder$decodeNullableSerializableElement$lambda(this, deserializer, previousValue));
  };
  protoOf(TaggedDecoder).xj = function () {
    return lastOrNull(this.vj_1);
  };
  protoOf(TaggedDecoder).gk = function (name) {
    this.vj_1.e(name);
  };
  protoOf(TaggedDecoder).hk = function () {
    var r = this.vj_1.b3(get_lastIndex_0(this.vj_1));
    this.wj_1 = true;
    return r;
  };
  function get_EmptySerializersModuleLegacyJs() {
    _init_properties_SerializersModule_kt__u78ha3();
    return EmptySerializersModule;
  }
  var EmptySerializersModule;
  function SerializersModule() {
  }
  protoOf(SerializersModule).qd = function (kClass, typeArgumentsSerializers, $super) {
    typeArgumentsSerializers = typeArgumentsSerializers === VOID ? emptyList() : typeArgumentsSerializers;
    return $super === VOID ? this.ik(kClass, typeArgumentsSerializers) : $super.ik.call(this, kClass, typeArgumentsSerializers);
  };
  function SerialModuleImpl(class2ContextualFactory, polyBase2Serializers, polyBase2DefaultSerializerProvider, polyBase2NamedSerializers, polyBase2DefaultDeserializerProvider, hasInterfaceContextualSerializers) {
    SerializersModule.call(this);
    this.kk_1 = class2ContextualFactory;
    this.lk_1 = polyBase2Serializers;
    this.mk_1 = polyBase2DefaultSerializerProvider;
    this.nk_1 = polyBase2NamedSerializers;
    this.ok_1 = polyBase2DefaultDeserializerProvider;
    this.pk_1 = hasInterfaceContextualSerializers;
  }
  protoOf(SerialModuleImpl).xf = function (baseClass, value) {
    if (!baseClass.c8(value))
      return null;
    var tmp0_safe_receiver = this.lk_1.s1(baseClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s1(getKClassFromExpression(value));
    var registered = (!(tmp == null) ? isInterface(tmp, SerializationStrategy) : false) ? tmp : null;
    if (!(registered == null))
      return registered;
    var tmp_0 = this.mk_1.s1(baseClass);
    var tmp1_safe_receiver = (!(tmp_0 == null) ? typeof tmp_0 === 'function' : false) ? tmp_0 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(value);
  };
  protoOf(SerialModuleImpl).wf = function (baseClass, serializedClassName) {
    var tmp0_safe_receiver = this.nk_1.s1(baseClass);
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
    var tmp_1 = this.ok_1.s1(baseClass);
    var tmp1_safe_receiver = (!(tmp_1 == null) ? typeof tmp_1 === 'function' : false) ? tmp_1 : null;
    return tmp1_safe_receiver == null ? null : tmp1_safe_receiver(serializedClassName);
  };
  protoOf(SerialModuleImpl).ik = function (kClass, typeArgumentsSerializers) {
    var tmp0_safe_receiver = this.kk_1.s1(kClass);
    var tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qk(typeArgumentsSerializers);
    return (tmp == null ? true : isInterface(tmp, KSerializer)) ? tmp : null;
  };
  protoOf(SerialModuleImpl).jk = function (collector) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = this.kk_1.v1().g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      // Inline function 'kotlin.collections.component1' call
      var kclass = element.o1();
      // Inline function 'kotlin.collections.component2' call
      var serial = element.p1();
      if (serial instanceof Argless) {
        var tmp = isInterface(kclass, KClass) ? kclass : THROW_CCE();
        var tmp_0 = serial.tk_1;
        collector.uk(tmp, isInterface(tmp_0, KSerializer) ? tmp_0 : THROW_CCE());
      } else {
        if (serial instanceof WithTypeArguments) {
          collector.sk(kclass, serial.rk_1);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_0 = this.lk_1.v1().g();
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
        collector.vk(tmp_1, tmp_2, tmp$ret$15);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_2 = this.mk_1.v1().g();
    while (_iterator__ex2g4s_2.h()) {
      var element_2 = _iterator__ex2g4s_2.i();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_0 = element_2.o1();
      // Inline function 'kotlin.collections.component2' call
      var provider = element_2.p1();
      var tmp_3 = isInterface(baseClass_0, KClass) ? baseClass_0 : THROW_CCE();
      collector.wk(tmp_3, typeof provider === 'function' ? provider : THROW_CCE());
    }
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s_3 = this.ok_1.v1().g();
    while (_iterator__ex2g4s_3.h()) {
      var element_3 = _iterator__ex2g4s_3.i();
      // Inline function 'kotlin.collections.component1' call
      var baseClass_1 = element_3.o1();
      // Inline function 'kotlin.collections.component2' call
      var provider_0 = element_3.p1();
      var tmp_4 = isInterface(baseClass_1, KClass) ? baseClass_1 : THROW_CCE();
      collector.xk(tmp_4, typeof provider_0 === 'function' ? provider_0 : THROW_CCE());
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
  protoOf(AbstractDecoder).ye = decodeSerializableElement$default;
  protoOf(AbstractDecoder).qe = decodeSerializableValue;
  protoOf(AbstractDecoder).bf = decodeSequentially;
  protoOf(AbstractDecoder).df = decodeCollectionSize;
  protoOf(AbstractEncoder).tf = encodeNotNullMark;
  protoOf(AbstractEncoder).uf = beginCollection;
  protoOf(AbstractEncoder).qf = encodeSerializableValue;
  protoOf(AbstractEncoder).sf = encodeNullableSerializableValue;
  protoOf(AbstractEncoder).vf = shouldEncodeElementDefault;
  protoOf(ListLikeDescriptor).pd = get_isNullable;
  protoOf(ListLikeDescriptor).xd = get_isInline;
  protoOf(ListLikeDescriptor).zd = get_annotations;
  protoOf(MapLikeDescriptor).pd = get_isNullable;
  protoOf(MapLikeDescriptor).xd = get_isInline;
  protoOf(MapLikeDescriptor).zd = get_annotations;
  protoOf(PluginGeneratedSerialDescriptor).pd = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).xd = get_isInline;
  protoOf(InlinePrimitiveDescriptor$1).cj = typeParametersSerializers;
  protoOf(PrimitiveSerialDescriptor).pd = get_isNullable;
  protoOf(PrimitiveSerialDescriptor).xd = get_isInline;
  protoOf(PrimitiveSerialDescriptor).zd = get_annotations;
  protoOf(TaggedDecoder).ye = decodeSerializableElement$default;
  protoOf(TaggedDecoder).qe = decodeSerializableValue;
  protoOf(TaggedDecoder).bf = decodeSequentially;
  protoOf(TaggedDecoder).df = decodeCollectionSize;
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
