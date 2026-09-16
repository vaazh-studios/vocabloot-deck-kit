(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './SnapLingo-shared-reading.js', './kotlinx-serialization-kotlinx-serialization-core.js', './SnapLingo-shared-format.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./SnapLingo-shared-reading.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./SnapLingo-shared-format.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'SnapLingo.web:deck-pack'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'SnapLingo.web:deck-pack'.");
    }
    if (typeof globalThis['SnapLingo-shared-reading'] === 'undefined') {
      throw new Error("Error loading module 'SnapLingo.web:deck-pack'. Its dependency 'SnapLingo-shared-reading' was not found. Please, check whether 'SnapLingo-shared-reading' is loaded prior to 'SnapLingo.web:deck-pack'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'SnapLingo.web:deck-pack'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'SnapLingo.web:deck-pack'.");
    }
    if (typeof globalThis['SnapLingo-shared-format'] === 'undefined') {
      throw new Error("Error loading module 'SnapLingo.web:deck-pack'. Its dependency 'SnapLingo-shared-format' was not found. Please, check whether 'SnapLingo-shared-format' is loaded prior to 'SnapLingo.web:deck-pack'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'SnapLingo.web:deck-pack'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'SnapLingo.web:deck-pack'.");
    }
    globalThis['SnapLingo.web:deck-pack'] = factory(typeof globalThis['SnapLingo.web:deck-pack'] === 'undefined' ? {} : globalThis['SnapLingo.web:deck-pack'], globalThis['kotlin-kotlin-stdlib'], globalThis['SnapLingo-shared-reading'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['SnapLingo-shared-format'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_SnapLingo_shared_reading, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_SnapLingo_shared_format, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.y4;
  var initMetadataForClass = kotlin_kotlin.$_$.l4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var Unit_instance = kotlin_kotlin.$_$.c;
  var isBlank = kotlin_kotlin.$_$.r5;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.p;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r1;
  var mapCapacity = kotlin_kotlin.$_$.p2;
  var coerceAtLeast = kotlin_kotlin.$_$.c5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var take = kotlin_kotlin.$_$.e6;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.k;
  var checkIndexOverflow = kotlin_kotlin.$_$.q1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var validateTokens = kotlin_SnapLingo_shared_reading.$_$.a;
  var getOrNull = kotlin_kotlin.$_$.e2;
  var emptyList = kotlin_kotlin.$_$.a2;
  var addAll = kotlin_kotlin.$_$.n1;
  var joinToString = kotlin_kotlin.$_$.j2;
  var charCodeAt = kotlin_kotlin.$_$.c4;
  var isLetterOrDigit = kotlin_kotlin.$_$.s5;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a1;
  var Collection = kotlin_kotlin.$_$.i1;
  var isInterface = kotlin_kotlin.$_$.t4;
  var substring = kotlin_kotlin.$_$.d6;
  var initMetadataForObject = kotlin_kotlin.$_$.q4;
  var charSequenceLength = kotlin_kotlin.$_$.e4;
  var charSequenceGet = kotlin_kotlin.$_$.d4;
  var isLetter = kotlin_kotlin.$_$.t5;
  var checkCountOverflow = kotlin_kotlin.$_$.p1;
  var withIndex = kotlin_kotlin.$_$.b3;
  var first = kotlin_kotlin.$_$.o5;
  var isUpperCase = kotlin_kotlin.$_$.u5;
  var THROW_CCE = kotlin_kotlin.$_$.p6;
  var isCharSequence = kotlin_kotlin.$_$.s4;
  var trim = kotlin_kotlin.$_$.h6;
  var toString = kotlin_kotlin.$_$.a5;
  var equals = kotlin_kotlin.$_$.n5;
  var take_0 = kotlin_kotlin.$_$.x2;
  var VOID = kotlin_kotlin.$_$.a;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var toByte = kotlin_kotlin.$_$.z4;
  var emptyMap = kotlin_kotlin.$_$.b2;
  var isArray = kotlin_kotlin.$_$.r4;
  var drop = kotlin_kotlin.$_$.z1;
  var firstOrNull = kotlin_kotlin.$_$.d2;
  var toTypedArray = kotlin_kotlin.$_$.a3;
  var BackupPackage_getInstance = kotlin_SnapLingo_shared_format.$_$.k;
  var println = kotlin_kotlin.$_$.g3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.m4;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var objectCreate = kotlin_kotlin.$_$.x4;
  var toString_0 = kotlin_kotlin.$_$.z6;
  var getStringHashCode = kotlin_kotlin.$_$.j4;
  var equals_0 = kotlin_kotlin.$_$.g4;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.v6;
  var hashCode = kotlin_kotlin.$_$.k4;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var getBooleanHashCode = kotlin_kotlin.$_$.h4;
  var Long = kotlin_kotlin.$_$.o6;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var equalsLong = kotlin_kotlin.$_$.n3;
  var Exception = kotlin_kotlin.$_$.m6;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s;
  var captureStack = kotlin_kotlin.$_$.z3;
  var numberToLong = kotlin_kotlin.$_$.s3;
  var multiply = kotlin_kotlin.$_$.q3;
  var fromInt = kotlin_kotlin.$_$.o3;
  var add = kotlin_kotlin.$_$.h3;
  var subtract = kotlin_kotlin.$_$.v3;
  var FunctionAdapter = kotlin_kotlin.$_$.x3;
  var Comparator = kotlin_kotlin.$_$.i6;
  var compareValues = kotlin_kotlin.$_$.c3;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var to = kotlin_kotlin.$_$.a7;
  var mapOf = kotlin_kotlin.$_$.r2;
  var CardId_getInstance = kotlin_SnapLingo_shared_format.$_$.n;
  var toSet = kotlin_kotlin.$_$.z2;
  var getValue = kotlin_kotlin.$_$.f2;
  var WordExampleTokenEntry = kotlin_SnapLingo_shared_format.$_$.g;
  var WordExampleEntry = kotlin_SnapLingo_shared_format.$_$.f;
  var WordEntry = kotlin_SnapLingo_shared_format.$_$.e;
  var TranslationMetaEntry = kotlin_SnapLingo_shared_format.$_$.d;
  var mapOf_0 = kotlin_kotlin.$_$.q2;
  var WordSnapEntry = kotlin_SnapLingo_shared_format.$_$.h;
  var WordbookManifest = kotlin_SnapLingo_shared_format.$_$.i;
  var BackupHeader = kotlin_SnapLingo_shared_format.$_$.a;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.z;
  var Entry = kotlin_SnapLingo_shared_format.$_$.c;
  var sortedWith = kotlin_kotlin.$_$.w2;
  var Companion_instance = kotlin_SnapLingo_shared_format.$_$.j;
  var encodeToByteArray = kotlin_kotlin.$_$.m5;
  var Companion_getInstance = kotlin_SnapLingo_shared_format.$_$.o;
  var Companion_instance_0 = kotlin_SnapLingo_shared_format.$_$.l;
  var BackupSettings = kotlin_SnapLingo_shared_format.$_$.b;
  var listOf = kotlin_kotlin.$_$.o2;
  var plus = kotlin_kotlin.$_$.t2;
  var BinaryContainer_getInstance = kotlin_SnapLingo_shared_format.$_$.m;
  var arrayCopy = kotlin_kotlin.$_$.o1;
  var toInt = kotlin_kotlin.$_$.g6;
  var Triple = kotlin_kotlin.$_$.q6;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Spoken, 'Spoken');
  initMetadataForObject(Gates, 'Gates');
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(KitDeck, 'KitDeck', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(KitAttribution, 'KitAttribution', KitAttribution, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(KitSticker, 'KitSticker', KitSticker, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForCompanion(Companion_2);
  initMetadataForObject($serializer_2, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(KitToken, 'KitToken', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_2});
  initMetadataForCompanion(Companion_3);
  initMetadataForObject($serializer_3, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(KitExample, 'KitExample', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_3});
  initMetadataForCompanion(Companion_4);
  initMetadataForObject($serializer_4, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(KitReview, 'KitReview', KitReview, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_4});
  initMetadataForCompanion(Companion_5);
  initMetadataForObject($serializer_5, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(KitCard, 'KitCard', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_5});
  initMetadataForCompanion(Companion_6);
  initMetadataForObject($serializer_6, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(KitLocToken, 'KitLocToken', KitLocToken, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_6});
  initMetadataForCompanion(Companion_7);
  initMetadataForObject($serializer_7, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(KitLocExample, 'KitLocExample', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_7});
  initMetadataForCompanion(Companion_8);
  initMetadataForObject($serializer_8, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(KitLocCard, 'KitLocCard', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_8});
  initMetadataForClass(DeckFolder, 'DeckFolder');
  initMetadataForCompanion(Companion_9);
  initMetadataForObject($serializer_9, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(PackagedDeck, 'PackagedDeck', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_9});
  initMetadataForCompanion(Companion_10);
  initMetadataForObject($serializer_10, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Expected, 'Expected', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_10});
  initMetadataForCompanion(Companion_11);
  initMetadataForObject($serializer_11, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(LicenceRef, 'LicenceRef', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_11});
  initMetadataForCompanion(Companion_12);
  initMetadataForObject($serializer_12, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Attribution, 'Attribution', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_12});
  initMetadataForCompanion(Companion_13);
  initMetadataForObject($serializer_13, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(TextLicence, 'TextLicence', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_13});
  initMetadataForCompanion(Companion_14);
  initMetadataForObject($serializer_14, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(ImageLicence, 'ImageLicence', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_14});
  initMetadataForCompanion(Companion_15);
  initMetadataForObject($serializer_15, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(StickerInfo, 'StickerInfo', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_15});
  initMetadataForClass(PackException, 'PackException', VOID, Exception);
  initMetadataForClass(Result, 'Result');
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForObject(Packer, 'Packer');
  //endregion
  function Spoken(text, start, end) {
    this.bz_1 = text;
    this.cz_1 = start;
    this.dz_1 = end;
  }
  protoOf(Spoken).lp = function () {
    return this.bz_1;
  };
  protoOf(Spoken).cc = function () {
    return this.cz_1;
  };
  protoOf(Spoken).kp = function () {
    return this.dz_1;
  };
  function Gates() {
  }
  protoOf(Gates).ez = function (folder) {
    var problems = ArrayList_init_$Create$();
    var deck = folder.fz_1;
    if (isBlank(deck.lz_1) || !Regex_init_$Create$('^[a-z]{2}(-[a-z]{2})?-[a-z0-9-]{1,40}$').u9(deck.lz_1)) {
      // Inline function 'kotlin.collections.plusAssign' call
      var element = 'deck.id must look like de-greetings';
      problems.e(element);
    }
    if (deck.oz_1 === deck.pz_1) {
      // Inline function 'kotlin.collections.plusAssign' call
      var element_0 = 'learningLanguage and knownLanguage must differ';
      problems.e(element_0);
    }
    var direction = deck.pz_1 + '-to-' + deck.oz_1;
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = deck.qz_1;
    if (!isBlank(this_0)) {
      tmp = !(deck.qz_1 === direction);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'kotlin.collections.plusAssign' call
      var element_1 = 'direction must be derived: ' + direction;
      problems.e(element_1);
    }
    if (folder.gz_1.o()) {
      // Inline function 'kotlin.collections.plusAssign' call
      var element_2 = 'no cards';
      problems.e(element_2);
    }
    // Inline function 'kotlin.collections.associateBy' call
    var this_1 = folder.hz_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_1, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_1.g();
    while (_iterator__ex2g4s.h()) {
      var element_3 = _iterator__ex2g4s.i();
      var tmp$ret$7 = element_3.b10_1;
      destination.w1(tmp$ret$7, element_3);
    }
    var loc = destination;
    var sameLanguage = take(deck.oz_1, 2) === take(deck.pz_1, 2);
    var keys = HashSet_init_$Create$();
    var _iterator__ex2g4s_0 = folder.gz_1.g();
    $l$loop: while (_iterator__ex2g4s_0.h()) {
      var card = _iterator__ex2g4s_0.i();
      var k = card.e10_1;
      if (!keys.e(k)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_4 = k + ': duplicate key';
        problems.e(element_4);
      }
      var tmp0_elvis_lhs = card.g10_1;
      var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = card.j10_1;
      if (!(k === card.f10_1 + '|' + tmp_0 + '|' + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs))) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_5 = k + ': key must be text|article|partOfSpeech';
        problems.e(element_5);
      }
      if (isBlank(card.f10_1)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_6 = k + ': text is empty';
        problems.e(element_6);
      }
      if (!(card.n10_1.k() === 2)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_7 = k + ': exactly two example sentences are required, found ' + card.n10_1.k();
        problems.e(element_7);
      }
      var l = loc.s1(k);
      if (l == null) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_8 = k + ': no localization entry';
        problems.e(element_8);
        continue $l$loop;
      }
      if (isBlank(l.c10_1)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_9 = k + ': translation is empty';
        problems.e(element_9);
      }
      if (!(l.d10_1.k() === card.n10_1.k())) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_10 = k + ': localization has ' + l.d10_1.k() + ' example translations for ' + card.n10_1.k() + ' sentences';
        problems.e(element_10);
      }
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var _iterator__ex2g4s_1 = card.n10_1.g();
      while (_iterator__ex2g4s_1.h()) {
        var item = _iterator__ex2g4s_1.i();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var i = checkIndexOverflow(_unary__edvuaz);
        var where = k + ' example ' + (i + 1 | 0);
        if (isBlank(item.p10_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element_11 = where + ': empty sentence';
          problems.e(element_11);
        }
        // Inline function 'kotlin.collections.map' call
        var this_2 = item.q10_1;
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
        var _iterator__ex2g4s_2 = this_2.g();
        while (_iterator__ex2g4s_2.h()) {
          var item_0 = _iterator__ex2g4s_2.i();
          var tmp$ret$20 = new Spoken(item_0.r10_1, item_0.s10_1, item_0.t10_1);
          destination_0.e(tmp$ret$20);
        }
        if (!validateTokens(item.p10_1, destination_0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element_12 = where + ': tokens do not reproduce the sentence (offsets or order)';
          problems.e(element_12);
        } else {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_3 = Gates_instance.a11(item.p10_1, item.q10_1).g();
          while (_iterator__ex2g4s_3.h()) {
            var element_13 = _iterator__ex2g4s_3.i();
            // Inline function 'kotlin.collections.plusAssign' call
            var element_14 = where + ": word '" + element_13 + "' has no token";
            problems.e(element_14);
          }
        }
        var lt = getOrNull(l.d10_1, i);
        if (lt == null || isBlank(lt.b11_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element_15 = where + ': no translation';
          problems.e(element_15);
        } else {
          if (!(lt.c11_1.k() === item.q10_1.k())) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_16 = where + ': ' + lt.c11_1.k() + ' token meanings for ' + item.q10_1.k() + ' tokens';
            problems.e(element_16);
          }
          // Inline function 'kotlin.collections.forEachIndexed' call
          var index_0 = 0;
          var _iterator__ex2g4s_4 = lt.c11_1.g();
          while (_iterator__ex2g4s_4.h()) {
            var item_1 = _iterator__ex2g4s_4.i();
            var _unary__edvuaz_0 = index_0;
            index_0 = _unary__edvuaz_0 + 1 | 0;
            var j = checkIndexOverflow(_unary__edvuaz_0);
            if (item_1.d11_1.o() || item_1.d11_1.k() > 3) {
              var tmp0_safe_receiver = getOrNull(item.q10_1, j);
              // Inline function 'kotlin.collections.plusAssign' call
              var element_17 = where + " token '" + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r10_1) + "': one to three meanings required";
              problems.e(element_17);
            }
          }
        }
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_5 = item.q10_1.g();
        while (_iterator__ex2g4s_5.h()) {
          var element_18 = _iterator__ex2g4s_5.i();
          var tmp_1;
          // Inline function 'kotlin.text.isNullOrBlank' call
          var this_3 = element_18.u10_1;
          if (this_3 == null || isBlank(this_3)) {
            // Inline function 'kotlin.text.isNullOrBlank' call
            var this_4 = element_18.v10_1;
            tmp_1 = this_4 == null || isBlank(this_4);
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_19 = where + " token '" + element_18.r10_1 + "': lemma or part of speech required";
            problems.e(element_19);
          }
        }
        var tmp1_elvis_lhs_0 = lt == null ? null : lt.c11_1;
        // Inline function 'kotlin.collections.plusAssign' call
        var elements = lazyTokenProblems(where, item.q10_1, tmp1_elvis_lhs_0 == null ? emptyList() : tmp1_elvis_lhs_0, sameLanguage);
        addAll(problems, elements);
      }
      switch (card.m10_1.e11_1) {
        case 'sticker':
        case 'symbolic':
        case 'contextual':
          var file = card.m10_1.f11_1;
          var status = folder.jz_1.s1(k);
          // Inline function 'kotlin.text.isNullOrBlank' call

          if (file == null || isBlank(file)) {
            if (!(status === 'deferred')) {
              // Inline function 'kotlin.collections.plusAssign' call
              var element_20 = k + ': sticker mode ' + card.m10_1.e11_1 + ' without a file; approve, reject or defer it';
              problems.e(element_20);
            }
          } else {
            if (folder.iz_1.s1(k) == null) {
              // Inline function 'kotlin.collections.plusAssign' call
              var element_21 = k + ': sticker file ' + file + ' is missing';
              problems.e(element_21);
            } else {
              if (!(status === 'approved')) {
                // Inline function 'kotlin.collections.plusAssign' call
                var element_22 = k + ': sticker not approved in review/review.json';
                problems.e(element_22);
              }
            }
          }

          break;
        case 'text-first':
          // Inline function 'kotlin.text.isNullOrBlank' call

          var this_5 = card.m10_1.f11_1;
          if (!(this_5 == null || isBlank(this_5))) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_23 = k + ': text-first card must not reference a sticker';
            problems.e(element_23);
          }

          break;
        default:
          // Inline function 'kotlin.collections.plusAssign' call

          var element_24 = k + ": unknown sticker mode '" + card.m10_1.e11_1 + "'";
          problems.e(element_24);
          break;
      }
      if (!card.o10_1.i11_1) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_25 = k + ': marked unsafe';
        problems.e(element_25);
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!card.o10_1.j11_1.o()) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_26 = k + ': unresolved flags: ' + joinToString(card.o10_1.j11_1, ', ');
        problems.e(element_26);
      }
    }
    return problems;
  };
  protoOf(Gates).a11 = function (source, tokens) {
    var out = ArrayList_init_$Create$();
    var i = 0;
    $l$loop: while (i < source.length) {
      if (!isLetterOrDigit(charCodeAt(source, i))) {
        i = i + 1 | 0;
        continue $l$loop;
      }
      var j = i;
      while (j < source.length && (isLetterOrDigit(charCodeAt(source, j)) || charCodeAt(source, j) === _Char___init__impl__6a9atx(39) || charCodeAt(source, j) === _Char___init__impl__6a9atx(8217) || charCodeAt(source, j) === _Char___init__impl__6a9atx(45))) {
        j = j + 1 | 0;
      }
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp;
        if (isInterface(tokens, Collection)) {
          tmp = tokens.o();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var _iterator__ex2g4s = tokens.g();
        while (_iterator__ex2g4s.h()) {
          var element = _iterator__ex2g4s.i();
          if (element.s10_1 <= i && element.t10_1 >= j) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      var covered = tmp$ret$0;
      if (!covered) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_0 = substring(source, i, j);
        out.e(element_0);
      }
      i = j;
    }
    return out;
  };
  var Gates_instance;
  function Gates_getInstance() {
    return Gates_instance;
  }
  function lazyTokenProblems(where, tokens, meanings, sameLanguage) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var problems = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var _iterator__ex2g4s = tokens.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var tmp0 = element.r10_1;
      var tmp$ret$4;
      $l$block: {
        // Inline function 'kotlin.text.any' call
        var inductionVariable = 0;
        while (inductionVariable < charSequenceLength(tmp0)) {
          var element_0 = charSequenceGet(tmp0, inductionVariable);
          inductionVariable = inductionVariable + 1 | 0;
          if (isLetter(element_0)) {
            tmp$ret$4 = true;
            break $l$block;
          }
        }
        tmp$ret$4 = false;
      }
      if (tmp$ret$4) {
        destination.e(element);
      }
    }
    var words = destination;
    if (words.k() >= 2) {
      var tmp$ret$6;
      $l$block_0: {
        // Inline function 'kotlin.collections.count' call
        var tmp;
        if (isInterface(words, Collection)) {
          tmp = words.o();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$6 = 0;
          break $l$block_0;
        }
        var count = 0;
        var _iterator__ex2g4s_0 = words.g();
        while (_iterator__ex2g4s_0.h()) {
          var element_1 = _iterator__ex2g4s_0.i();
          var tmp_0;
          // Inline function 'kotlin.text.isNullOrBlank' call
          var this_0 = element_1.v10_1;
          if (this_0 == null || isBlank(this_0)) {
            tmp_0 = true;
          } else {
            tmp_0 = element_1.v10_1 === 'other';
          }
          if (tmp_0) {
            count = count + 1 | 0;
            checkCountOverflow(count);
          }
        }
        tmp$ret$6 = count;
      }
      var other = tmp$ret$6;
      if (imul(other, 2) > words.k()) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_2 = where + ': ' + other + ' of ' + words.k() + ' tokens are tagged "other"; tag each with its part of speech';
        problems.e(element_2);
      }
    }
    if (!sameLanguage) {
      // Inline function 'kotlin.collections.filter' call
      var tmp0_0 = withIndex(tokens);
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList_init_$Create$();
      var _iterator__ex2g4s_1 = tmp0_0.g();
      while (_iterator__ex2g4s_1.h()) {
        var element_3 = _iterator__ex2g4s_1.i();
        var i = element_3.cb();
        var t = element_3.db();
        var tmp0_safe_receiver = getOrNull(meanings, i);
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d11_1;
        var m = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
        var tmp_1;
        if (t.v10_1 === 'noun' && isUpperCase(first(t.r10_1))) {
          var tmp2_elvis_lhs = t.u10_1;
          tmp_1 = (tmp2_elvis_lhs == null ? t.r10_1 : tmp2_elvis_lhs) === t.r10_1;
        } else {
          tmp_1 = false;
        }
        var isName = tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        var tmp0_1 = t.r10_1;
        var tmp$ret$13;
        $l$block_1: {
          // Inline function 'kotlin.text.any' call
          var inductionVariable_0 = 0;
          while (inductionVariable_0 < charSequenceLength(tmp0_1)) {
            var element_4 = charSequenceGet(tmp0_1, inductionVariable_0);
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            if (isLetter(element_4)) {
              tmp$ret$13 = true;
              break $l$block_1;
            }
          }
          tmp$ret$13 = false;
        }
        if (tmp$ret$13) {
          tmp_4 = m.k() === 1;
        } else {
          tmp_4 = false;
        }
        if (tmp_4) {
          // Inline function 'kotlin.text.trim' call
          var this_1 = m.j(0);
          var tmp$ret$15 = toString(trim(isCharSequence(this_1) ? this_1 : THROW_CCE()));
          tmp_3 = equals(tmp$ret$15, t.r10_1, true);
        } else {
          tmp_3 = false;
        }
        if (tmp_3) {
          tmp_2 = !isName;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          destination_0.e(element_3);
        }
      }
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_0, 10));
      var _iterator__ex2g4s_2 = destination_0.g();
      while (_iterator__ex2g4s_2.h()) {
        var item = _iterator__ex2g4s_2.i();
        var tmp$ret$18 = item.bb_1.r10_1;
        destination_1.e(tmp$ret$18);
      }
      var untranslated = destination_1;
      if (untranslated.k() >= 2) {
        var tmp_5 = take_0(untranslated, 3);
        // Inline function 'kotlin.collections.plusAssign' call
        var element_5 = where + ': meaning equals the word for ' + joinToString(tmp_5, ', ', VOID, VOID, VOID, VOID, lazyTokenProblems$lambda) + '; give the meaning in the known language';
        problems.e(element_5);
      }
    }
    return problems;
  }
  function lazyTokenProblems$lambda(it) {
    return "'" + it + "'";
  }
  function get_fs() {
    _init_properties_Main_kt__xi25uv();
    return fs;
  }
  var fs;
  function get_path() {
    _init_properties_Main_kt__xi25uv();
    return path;
  }
  var path;
  function get_process() {
    _init_properties_Main_kt__xi25uv();
    return process_0;
  }
  var process_0;
  function loadFolder(dir) {
    _init_properties_Main_kt__xi25uv();
    if (!loadFolder$exists(dir, 'deck.json'))
      throw new PackException(dir + ' has no deck.json');
    if (!loadFolder$exists(dir, 'cards.json'))
      throw new PackException(dir + ' has no cards.json; run /deck-text first');
    var deck = Packer_getInstance().l11_1.qp(Companion_instance_1.dl(), loadFolder$read(dir, 'deck.json'));
    var cards = Packer_getInstance().l11_1.qp(ListSerializer(Companion_getInstance_6().dl()), loadFolder$read(dir, 'cards.json'));
    var locPath = 'localizations/' + deck.pz_1 + '.json';
    if (!loadFolder$exists(dir, locPath))
      throw new PackException(dir + ' has no ' + locPath);
    var localization = Packer_getInstance().l11_1.qp(ListSerializer(Companion_getInstance_9().dl()), loadFolder$read(dir, locPath));
    var stickers = HashMap_init_$Create$();
    var _iterator__ex2g4s = cards.g();
    $l$loop_0: while (_iterator__ex2g4s.h()) {
      var card = _iterator__ex2g4s.i();
      var tmp0_elvis_lhs = card.m10_1.f11_1;
      var tmp;
      if (tmp0_elvis_lhs == null) {
        continue $l$loop_0;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var file = tmp;
      if (!loadFolder$exists(dir, file))
        continue $l$loop_0;
      var buffer = get_fs().readFileSync(get_path().join(dir, file));
      var tmp_0 = buffer.length;
      var bytes = new Int8Array((!(tmp_0 == null) ? typeof tmp_0 === 'number' : false) ? tmp_0 : THROW_CCE());
      var inductionVariable = 0;
      var last = bytes.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp_1 = buffer[i];
          bytes[i] = toByte((!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE());
        }
         while (inductionVariable <= last);
      // Inline function 'kotlin.collections.set' call
      var key = card.e10_1;
      stickers.w1(key, bytes);
    }
    var tmp_2;
    if (loadFolder$exists(dir, 'review/review.json')) {
      var parsed = JSON.parse(loadFolder$read(dir, 'review/review.json'));
      var out = HashMap_init_$Create$();
      var stickersObj = parsed.stickers;
      if (stickersObj != null && stickersObj != undefined) {
        var tmp_3 = Object.keys(stickersObj);
        var indexedObject = (!(tmp_3 == null) ? isArray(tmp_3) : false) ? tmp_3 : THROW_CCE();
        var inductionVariable_0 = 0;
        var last_0 = indexedObject.length;
        while (inductionVariable_0 < last_0) {
          var k = indexedObject[inductionVariable_0];
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var tmp1_elvis_lhs = stickersObj[k].status;
          var tmp_4 = tmp1_elvis_lhs == null ? stickersObj[k] : tmp1_elvis_lhs;
          // Inline function 'kotlin.collections.set' call
          var value = (!(tmp_4 == null) ? typeof tmp_4 === 'string' : false) ? tmp_4 : THROW_CCE();
          out.w1(k, value);
        }
      }
      tmp_2 = out;
    } else {
      tmp_2 = emptyMap();
    }
    var review = tmp_2;
    return new DeckFolder(deck, cards, localization, stickers, review);
  }
  function main() {
    _init_properties_Main_kt__xi25uv();
    var tmp = get_process().argv;
    var argv = drop((!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE(), 2);
    var command = firstOrNull(argv);
    if (!(command === 'pack') || argv.k() < 2) {
      console.error('usage: node deck-pack.js pack <deck-folder> [--out <file.vlbackup>]');
      get_process().exit(2);
      return Unit_instance;
    }
    var dir = argv.j(1);
    var outIndex = argv.l1('--out');
    try {
      var folder = loadFolder(dir);
      var result = Packer_getInstance().p11(folder);
      var tmp_0;
      if (outIndex >= 0 && (outIndex + 1 | 0) < argv.k()) {
        tmp_0 = argv.j(outIndex + 1 | 0);
      } else {
        var tmp_1 = get_path().join(dir, folder.fz_1.lz_1 + '.vlbackup');
        tmp_0 = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE();
      }
      var out = tmp_0;
      var buffer = Buffer.from(toTypedArray(result.q11_1));
      get_fs().writeFileSync(out, buffer);
      var sha = BackupPackage_getInstance().gm(result.q11_1);
      println('packed ' + result.r11_1 + ' cards (' + result.s11_1 + ' with stickers), ' + result.q11_1.length + ' bytes, sha256 ' + sha + ' -> ' + out);
      get_process().exit(0);
    } catch ($p) {
      if ($p instanceof PackException) {
        var e = $p;
        console.error(e.message);
        get_process().exit(1);
      } else {
        throw $p;
      }
    }
  }
  function loadFolder$read($dir, rel) {
    var tmp = get_fs().readFileSync(get_path().join($dir, rel), 'utf8');
    return (!(tmp == null) ? typeof tmp === 'string' : false) ? tmp : THROW_CCE();
  }
  function loadFolder$exists($dir, rel) {
    var tmp = get_fs().existsSync(get_path().join($dir, rel));
    return (!(tmp == null) ? typeof tmp === 'boolean' : false) ? tmp : THROW_CCE();
  }
  var properties_initialized_Main_kt_gqj46d;
  function _init_properties_Main_kt__xi25uv() {
    if (!properties_initialized_Main_kt_gqj46d) {
      properties_initialized_Main_kt_gqj46d = true;
      fs = require('fs');
      path = require('path');
      process_0 = process;
    }
  }
  function mainWrapper() {
    main();
  }
  function Companion() {
  }
  protoOf(Companion).dl = function () {
    return $serializer_getInstance();
  };
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.KitDeck', this, 17);
    tmp0_serialDesc.ej('schemaVersion', true);
    tmp0_serialDesc.ej('id', false);
    tmp0_serialDesc.ej('name', false);
    tmp0_serialDesc.ej('description', true);
    tmp0_serialDesc.ej('learningLanguage', false);
    tmp0_serialDesc.ej('knownLanguage', false);
    tmp0_serialDesc.ej('direction', true);
    tmp0_serialDesc.ej('topic', true);
    tmp0_serialDesc.ej('level', true);
    tmp0_serialDesc.ej('wordCount', true);
    tmp0_serialDesc.ej('author', true);
    tmp0_serialDesc.ej('licence', true);
    tmp0_serialDesc.ej('attribution', true);
    tmp0_serialDesc.ej('createdAt', true);
    tmp0_serialDesc.ej('updatedAt', true);
    tmp0_serialDesc.ej('kitVersion', true);
    tmp0_serialDesc.ej('promptVersion', true);
    this.u11_1 = tmp0_serialDesc;
  }
  protoOf($serializer).v11 = function (encoder, value) {
    var tmp0_desc = this.u11_1;
    var tmp1_output = encoder.we(tmp0_desc);
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !(value.kz_1 === 1)) {
      tmp1_output.rf(tmp0_desc, 0, value.kz_1);
    }
    tmp1_output.tf(tmp0_desc, 1, value.lz_1);
    tmp1_output.tf(tmp0_desc, 2, value.mz_1);
    if (tmp1_output.ag(tmp0_desc, 3) ? true : !(value.nz_1 === '')) {
      tmp1_output.tf(tmp0_desc, 3, value.nz_1);
    }
    tmp1_output.tf(tmp0_desc, 4, value.oz_1);
    tmp1_output.tf(tmp0_desc, 5, value.pz_1);
    if (tmp1_output.ag(tmp0_desc, 6) ? true : !(value.qz_1 === '')) {
      tmp1_output.tf(tmp0_desc, 6, value.qz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 7) ? true : !(value.rz_1 == null)) {
      tmp1_output.wf(tmp0_desc, 7, StringSerializer_getInstance(), value.rz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 8) ? true : !(value.sz_1 === 'A1')) {
      tmp1_output.tf(tmp0_desc, 8, value.sz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 9) ? true : !(value.tz_1 === 0)) {
      tmp1_output.rf(tmp0_desc, 9, value.tz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 10) ? true : !(value.uz_1 === 'Anonymous')) {
      tmp1_output.tf(tmp0_desc, 10, value.uz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 11) ? true : !(value.vz_1 === 'CC-BY-SA-4.0')) {
      tmp1_output.tf(tmp0_desc, 11, value.vz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 12) ? true : !(value.wz_1 == null)) {
      tmp1_output.wf(tmp0_desc, 12, $serializer_getInstance_0(), value.wz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 13) ? true : !(value.xz_1 === '')) {
      tmp1_output.tf(tmp0_desc, 13, value.xz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 14) ? true : !(value.yz_1 === '')) {
      tmp1_output.tf(tmp0_desc, 14, value.yz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 15) ? true : !(value.zz_1 === '')) {
      tmp1_output.tf(tmp0_desc, 15, value.zz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 16) ? true : !(value.a10_1 === '')) {
      tmp1_output.tf(tmp0_desc, 16, value.a10_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer).nd = function (encoder, value) {
    return this.v11(encoder, value instanceof KitDeck ? value : THROW_CCE());
  };
  protoOf($serializer).od = function (decoder) {
    var tmp0_desc = this.u11_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_local5 = null;
    var tmp10_local6 = null;
    var tmp11_local7 = null;
    var tmp12_local8 = null;
    var tmp13_local9 = 0;
    var tmp14_local10 = null;
    var tmp15_local11 = null;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_input = decoder.we(tmp0_desc);
    if (tmp21_input.gf()) {
      tmp4_local0 = tmp21_input.ze(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp21_input.bf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp21_input.bf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp21_input.bf(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp21_input.bf(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp21_input.bf(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp21_input.bf(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp21_input.ef(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp21_input.bf(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp21_input.ze(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp21_input.bf(tmp0_desc, 10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp21_input.bf(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp21_input.ef(tmp0_desc, 12, $serializer_getInstance_0(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp21_input.bf(tmp0_desc, 13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp21_input.bf(tmp0_desc, 14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp21_input.bf(tmp0_desc, 15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp21_input.bf(tmp0_desc, 16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp21_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp21_input.ze(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp21_input.bf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp21_input.bf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp21_input.bf(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp21_input.bf(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp21_input.bf(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp21_input.bf(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp21_input.ef(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp21_input.bf(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp21_input.ze(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp21_input.bf(tmp0_desc, 10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp21_input.bf(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp21_input.ef(tmp0_desc, 12, $serializer_getInstance_0(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp21_input.bf(tmp0_desc, 13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp21_input.bf(tmp0_desc, 14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp21_input.bf(tmp0_desc, 15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp21_input.bf(tmp0_desc, 16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp21_input.xe(tmp0_desc);
    return KitDeck_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, null);
  };
  protoOf($serializer).md = function () {
    return this.u11_1;
  };
  protoOf($serializer).gj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable($serializer_getInstance_0()), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function KitDeck_init_$Init$(seen0, schemaVersion, id, name, description, learningLanguage, knownLanguage, direction, topic, level, wordCount, author, licence, attribution, createdAt, updatedAt, kitVersion, promptVersion, serializationConstructorMarker, $this) {
    if (!(54 === (54 & seen0))) {
      throwMissingFieldException(seen0, 54, $serializer_getInstance().u11_1);
    }
    if (0 === (seen0 & 1))
      $this.kz_1 = 1;
    else
      $this.kz_1 = schemaVersion;
    $this.lz_1 = id;
    $this.mz_1 = name;
    if (0 === (seen0 & 8))
      $this.nz_1 = '';
    else
      $this.nz_1 = description;
    $this.oz_1 = learningLanguage;
    $this.pz_1 = knownLanguage;
    if (0 === (seen0 & 64))
      $this.qz_1 = '';
    else
      $this.qz_1 = direction;
    if (0 === (seen0 & 128))
      $this.rz_1 = null;
    else
      $this.rz_1 = topic;
    if (0 === (seen0 & 256))
      $this.sz_1 = 'A1';
    else
      $this.sz_1 = level;
    if (0 === (seen0 & 512))
      $this.tz_1 = 0;
    else
      $this.tz_1 = wordCount;
    if (0 === (seen0 & 1024))
      $this.uz_1 = 'Anonymous';
    else
      $this.uz_1 = author;
    if (0 === (seen0 & 2048))
      $this.vz_1 = 'CC-BY-SA-4.0';
    else
      $this.vz_1 = licence;
    if (0 === (seen0 & 4096))
      $this.wz_1 = null;
    else
      $this.wz_1 = attribution;
    if (0 === (seen0 & 8192))
      $this.xz_1 = '';
    else
      $this.xz_1 = createdAt;
    if (0 === (seen0 & 16384))
      $this.yz_1 = '';
    else
      $this.yz_1 = updatedAt;
    if (0 === (seen0 & 32768))
      $this.zz_1 = '';
    else
      $this.zz_1 = kitVersion;
    if (0 === (seen0 & 65536))
      $this.a10_1 = '';
    else
      $this.a10_1 = promptVersion;
    return $this;
  }
  function KitDeck_init_$Create$(seen0, schemaVersion, id, name, description, learningLanguage, knownLanguage, direction, topic, level, wordCount, author, licence, attribution, createdAt, updatedAt, kitVersion, promptVersion, serializationConstructorMarker) {
    return KitDeck_init_$Init$(seen0, schemaVersion, id, name, description, learningLanguage, knownLanguage, direction, topic, level, wordCount, author, licence, attribution, createdAt, updatedAt, kitVersion, promptVersion, serializationConstructorMarker, objectCreate(protoOf(KitDeck)));
  }
  function KitDeck() {
  }
  protoOf(KitDeck).toString = function () {
    return 'KitDeck(schemaVersion=' + this.kz_1 + ', id=' + this.lz_1 + ', name=' + this.mz_1 + ', description=' + this.nz_1 + ', learningLanguage=' + this.oz_1 + ', knownLanguage=' + this.pz_1 + ', direction=' + this.qz_1 + ', topic=' + this.rz_1 + ', level=' + this.sz_1 + ', wordCount=' + this.tz_1 + ', author=' + this.uz_1 + ', licence=' + this.vz_1 + ', attribution=' + toString_0(this.wz_1) + ', createdAt=' + this.xz_1 + ', updatedAt=' + this.yz_1 + ', kitVersion=' + this.zz_1 + ', promptVersion=' + this.a10_1 + ')';
  };
  protoOf(KitDeck).hashCode = function () {
    var result = this.kz_1;
    result = imul(result, 31) + getStringHashCode(this.lz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.mz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.nz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.oz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.pz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.qz_1) | 0;
    result = imul(result, 31) + (this.rz_1 == null ? 0 : getStringHashCode(this.rz_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.sz_1) | 0;
    result = imul(result, 31) + this.tz_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.uz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.vz_1) | 0;
    result = imul(result, 31) + (this.wz_1 == null ? 0 : this.wz_1.hashCode()) | 0;
    result = imul(result, 31) + getStringHashCode(this.xz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.yz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.zz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a10_1) | 0;
    return result;
  };
  protoOf(KitDeck).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitDeck))
      return false;
    if (!(this.kz_1 === other.kz_1))
      return false;
    if (!(this.lz_1 === other.lz_1))
      return false;
    if (!(this.mz_1 === other.mz_1))
      return false;
    if (!(this.nz_1 === other.nz_1))
      return false;
    if (!(this.oz_1 === other.oz_1))
      return false;
    if (!(this.pz_1 === other.pz_1))
      return false;
    if (!(this.qz_1 === other.qz_1))
      return false;
    if (!(this.rz_1 == other.rz_1))
      return false;
    if (!(this.sz_1 === other.sz_1))
      return false;
    if (!(this.tz_1 === other.tz_1))
      return false;
    if (!(this.uz_1 === other.uz_1))
      return false;
    if (!(this.vz_1 === other.vz_1))
      return false;
    if (!equals_0(this.wz_1, other.wz_1))
      return false;
    if (!(this.xz_1 === other.xz_1))
      return false;
    if (!(this.yz_1 === other.yz_1))
      return false;
    if (!(this.zz_1 === other.zz_1))
      return false;
    if (!(this.a10_1 === other.a10_1))
      return false;
    return true;
  };
  function Companion_0() {
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.KitAttribution', this, 4);
    tmp0_serialDesc.ej('title', true);
    tmp0_serialDesc.ej('author', true);
    tmp0_serialDesc.ej('url', true);
    tmp0_serialDesc.ej('note', true);
    this.w11_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).x11 = function (encoder, value) {
    var tmp0_desc = this.w11_1;
    var tmp1_output = encoder.we(tmp0_desc);
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !(value.y11_1 === '')) {
      tmp1_output.tf(tmp0_desc, 0, value.y11_1);
    }
    if (tmp1_output.ag(tmp0_desc, 1) ? true : !(value.z11_1 === '')) {
      tmp1_output.tf(tmp0_desc, 1, value.z11_1);
    }
    if (tmp1_output.ag(tmp0_desc, 2) ? true : !(value.a12_1 === '')) {
      tmp1_output.tf(tmp0_desc, 2, value.a12_1);
    }
    if (tmp1_output.ag(tmp0_desc, 3) ? true : !(value.b12_1 === '')) {
      tmp1_output.tf(tmp0_desc, 3, value.b12_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_0).nd = function (encoder, value) {
    return this.x11(encoder, value instanceof KitAttribution ? value : THROW_CCE());
  };
  protoOf($serializer_0).od = function (decoder) {
    var tmp0_desc = this.w11_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.we(tmp0_desc);
    if (tmp8_input.gf()) {
      tmp4_local0 = tmp8_input.bf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.bf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.bf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.bf(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.bf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.bf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.bf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.bf(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.xe(tmp0_desc);
    return KitAttribution_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_0).md = function () {
    return this.w11_1;
  };
  protoOf($serializer_0).gj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function KitAttribution_init_$Init$(seen0, title, author, url, note, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().w11_1);
    }
    if (0 === (seen0 & 1))
      $this.y11_1 = '';
    else
      $this.y11_1 = title;
    if (0 === (seen0 & 2))
      $this.z11_1 = '';
    else
      $this.z11_1 = author;
    if (0 === (seen0 & 4))
      $this.a12_1 = '';
    else
      $this.a12_1 = url;
    if (0 === (seen0 & 8))
      $this.b12_1 = '';
    else
      $this.b12_1 = note;
    return $this;
  }
  function KitAttribution_init_$Create$(seen0, title, author, url, note, serializationConstructorMarker) {
    return KitAttribution_init_$Init$(seen0, title, author, url, note, serializationConstructorMarker, objectCreate(protoOf(KitAttribution)));
  }
  function KitAttribution(title, author, url, note) {
    title = title === VOID ? '' : title;
    author = author === VOID ? '' : author;
    url = url === VOID ? '' : url;
    note = note === VOID ? '' : note;
    this.y11_1 = title;
    this.z11_1 = author;
    this.a12_1 = url;
    this.b12_1 = note;
  }
  protoOf(KitAttribution).toString = function () {
    return 'KitAttribution(title=' + this.y11_1 + ', author=' + this.z11_1 + ', url=' + this.a12_1 + ', note=' + this.b12_1 + ')';
  };
  protoOf(KitAttribution).hashCode = function () {
    var result = getStringHashCode(this.y11_1);
    result = imul(result, 31) + getStringHashCode(this.z11_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.a12_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b12_1) | 0;
    return result;
  };
  protoOf(KitAttribution).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitAttribution))
      return false;
    if (!(this.y11_1 === other.y11_1))
      return false;
    if (!(this.z11_1 === other.z11_1))
      return false;
    if (!(this.a12_1 === other.a12_1))
      return false;
    if (!(this.b12_1 === other.b12_1))
      return false;
    return true;
  };
  function Companion_1() {
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    return Companion_instance_3;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.KitSticker', this, 3);
    tmp0_serialDesc.ej('mode', true);
    tmp0_serialDesc.ej('file', true);
    tmp0_serialDesc.ej('concept', true);
    this.c12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).d12 = function (encoder, value) {
    var tmp0_desc = this.c12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !(value.e11_1 === 'text-first')) {
      tmp1_output.tf(tmp0_desc, 0, value.e11_1);
    }
    if (tmp1_output.ag(tmp0_desc, 1) ? true : !(value.f11_1 == null)) {
      tmp1_output.wf(tmp0_desc, 1, StringSerializer_getInstance(), value.f11_1);
    }
    if (tmp1_output.ag(tmp0_desc, 2) ? true : !(value.g11_1 === '')) {
      tmp1_output.tf(tmp0_desc, 2, value.g11_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_1).nd = function (encoder, value) {
    return this.d12(encoder, value instanceof KitSticker ? value : THROW_CCE());
  };
  protoOf($serializer_1).od = function (decoder) {
    var tmp0_desc = this.c12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.we(tmp0_desc);
    if (tmp7_input.gf()) {
      tmp4_local0 = tmp7_input.bf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ef(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.bf(tmp0_desc, 2);
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
            tmp5_local1 = tmp7_input.ef(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.bf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.xe(tmp0_desc);
    return KitSticker_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_1).md = function () {
    return this.c12_1;
  };
  protoOf($serializer_1).gj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function KitSticker_init_$Init$(seen0, mode, file, concept, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().c12_1);
    }
    if (0 === (seen0 & 1))
      $this.e11_1 = 'text-first';
    else
      $this.e11_1 = mode;
    if (0 === (seen0 & 2))
      $this.f11_1 = null;
    else
      $this.f11_1 = file;
    if (0 === (seen0 & 4))
      $this.g11_1 = '';
    else
      $this.g11_1 = concept;
    return $this;
  }
  function KitSticker_init_$Create$(seen0, mode, file, concept, serializationConstructorMarker) {
    return KitSticker_init_$Init$(seen0, mode, file, concept, serializationConstructorMarker, objectCreate(protoOf(KitSticker)));
  }
  function KitSticker(mode, file, concept) {
    mode = mode === VOID ? 'text-first' : mode;
    file = file === VOID ? null : file;
    concept = concept === VOID ? '' : concept;
    this.e11_1 = mode;
    this.f11_1 = file;
    this.g11_1 = concept;
  }
  protoOf(KitSticker).toString = function () {
    return 'KitSticker(mode=' + this.e11_1 + ', file=' + this.f11_1 + ', concept=' + this.g11_1 + ')';
  };
  protoOf(KitSticker).hashCode = function () {
    var result = getStringHashCode(this.e11_1);
    result = imul(result, 31) + (this.f11_1 == null ? 0 : getStringHashCode(this.f11_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.g11_1) | 0;
    return result;
  };
  protoOf(KitSticker).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitSticker))
      return false;
    if (!(this.e11_1 === other.e11_1))
      return false;
    if (!(this.f11_1 == other.f11_1))
      return false;
    if (!(this.g11_1 === other.g11_1))
      return false;
    return true;
  };
  function KitToken$Companion$$childSerializers$_anonymous__gm4sd5() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Companion_2() {
    Companion_instance_4 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.e12_1 = [null, null, null, null, null, lazy(tmp_0, KitToken$Companion$$childSerializers$_anonymous__gm4sd5), null, null, null];
  }
  var Companion_instance_4;
  function Companion_getInstance_3() {
    if (Companion_instance_4 == null)
      new Companion_2();
    return Companion_instance_4;
  }
  function $serializer_2() {
    $serializer_instance_2 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.KitToken', this, 9);
    tmp0_serialDesc.ej('text', false);
    tmp0_serialDesc.ej('start', false);
    tmp0_serialDesc.ej('end', false);
    tmp0_serialDesc.ej('lemma', true);
    tmp0_serialDesc.ej('partOfSpeech', true);
    tmp0_serialDesc.ej('grammarCodes', true);
    tmp0_serialDesc.ej('article', true);
    tmp0_serialDesc.ej('gender', true);
    tmp0_serialDesc.ej('plural', true);
    this.f12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).g12 = function (encoder, value) {
    var tmp0_desc = this.f12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().e12_1;
    tmp1_output.tf(tmp0_desc, 0, value.r10_1);
    tmp1_output.rf(tmp0_desc, 1, value.s10_1);
    tmp1_output.rf(tmp0_desc, 2, value.t10_1);
    if (tmp1_output.ag(tmp0_desc, 3) ? true : !(value.u10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 3, StringSerializer_getInstance(), value.u10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 4) ? true : !(value.v10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 4, StringSerializer_getInstance(), value.v10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 5) ? true : !equals_0(value.w10_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 5, tmp2_cached[5].p1(), value.w10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 6) ? true : !(value.x10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 6, StringSerializer_getInstance(), value.x10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 7) ? true : !(value.y10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 7, StringSerializer_getInstance(), value.y10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 8) ? true : !(value.z10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 8, StringSerializer_getInstance(), value.z10_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_2).nd = function (encoder, value) {
    return this.g12(encoder, value instanceof KitToken ? value : THROW_CCE());
  };
  protoOf($serializer_2).od = function (decoder) {
    var tmp0_desc = this.f12_1;
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
    var tmp13_input = decoder.we(tmp0_desc);
    var tmp14_cached = Companion_getInstance_3().e12_1;
    if (tmp13_input.gf()) {
      tmp4_local0 = tmp13_input.bf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp13_input.ze(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp13_input.ze(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp13_input.ef(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp13_input.ef(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp13_input.cf(tmp0_desc, 5, tmp14_cached[5].p1(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp13_input.ef(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp13_input.ef(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp13_input.ef(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp13_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp13_input.bf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp13_input.ze(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp13_input.ze(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp13_input.ef(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp13_input.ef(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp13_input.cf(tmp0_desc, 5, tmp14_cached[5].p1(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp13_input.ef(tmp0_desc, 6, StringSerializer_getInstance(), tmp10_local6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp13_input.ef(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp13_input.ef(tmp0_desc, 8, StringSerializer_getInstance(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp13_input.xe(tmp0_desc);
    return KitToken_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, null);
  };
  protoOf($serializer_2).md = function () {
    return this.f12_1;
  };
  protoOf($serializer_2).gj = function () {
    var tmp0_cached = Companion_getInstance_3().e12_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), tmp0_cached[5].p1(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_2;
  function $serializer_getInstance_2() {
    if ($serializer_instance_2 == null)
      new $serializer_2();
    return $serializer_instance_2;
  }
  function KitToken_init_$Init$(seen0, text, start, end, lemma, partOfSpeech, grammarCodes, article, gender, plural, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_2().f12_1);
    }
    $this.r10_1 = text;
    $this.s10_1 = start;
    $this.t10_1 = end;
    if (0 === (seen0 & 8))
      $this.u10_1 = null;
    else
      $this.u10_1 = lemma;
    if (0 === (seen0 & 16))
      $this.v10_1 = null;
    else
      $this.v10_1 = partOfSpeech;
    if (0 === (seen0 & 32))
      $this.w10_1 = emptyList();
    else
      $this.w10_1 = grammarCodes;
    if (0 === (seen0 & 64))
      $this.x10_1 = null;
    else
      $this.x10_1 = article;
    if (0 === (seen0 & 128))
      $this.y10_1 = null;
    else
      $this.y10_1 = gender;
    if (0 === (seen0 & 256))
      $this.z10_1 = null;
    else
      $this.z10_1 = plural;
    return $this;
  }
  function KitToken_init_$Create$(seen0, text, start, end, lemma, partOfSpeech, grammarCodes, article, gender, plural, serializationConstructorMarker) {
    return KitToken_init_$Init$(seen0, text, start, end, lemma, partOfSpeech, grammarCodes, article, gender, plural, serializationConstructorMarker, objectCreate(protoOf(KitToken)));
  }
  function KitToken() {
  }
  protoOf(KitToken).toString = function () {
    return 'KitToken(text=' + this.r10_1 + ', start=' + this.s10_1 + ', end=' + this.t10_1 + ', lemma=' + this.u10_1 + ', partOfSpeech=' + this.v10_1 + ', grammarCodes=' + toString(this.w10_1) + ', article=' + this.x10_1 + ', gender=' + this.y10_1 + ', plural=' + this.z10_1 + ')';
  };
  protoOf(KitToken).hashCode = function () {
    var result = getStringHashCode(this.r10_1);
    result = imul(result, 31) + this.s10_1 | 0;
    result = imul(result, 31) + this.t10_1 | 0;
    result = imul(result, 31) + (this.u10_1 == null ? 0 : getStringHashCode(this.u10_1)) | 0;
    result = imul(result, 31) + (this.v10_1 == null ? 0 : getStringHashCode(this.v10_1)) | 0;
    result = imul(result, 31) + hashCode(this.w10_1) | 0;
    result = imul(result, 31) + (this.x10_1 == null ? 0 : getStringHashCode(this.x10_1)) | 0;
    result = imul(result, 31) + (this.y10_1 == null ? 0 : getStringHashCode(this.y10_1)) | 0;
    result = imul(result, 31) + (this.z10_1 == null ? 0 : getStringHashCode(this.z10_1)) | 0;
    return result;
  };
  protoOf(KitToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitToken))
      return false;
    if (!(this.r10_1 === other.r10_1))
      return false;
    if (!(this.s10_1 === other.s10_1))
      return false;
    if (!(this.t10_1 === other.t10_1))
      return false;
    if (!(this.u10_1 == other.u10_1))
      return false;
    if (!(this.v10_1 == other.v10_1))
      return false;
    if (!equals_0(this.w10_1, other.w10_1))
      return false;
    if (!(this.x10_1 == other.x10_1))
      return false;
    if (!(this.y10_1 == other.y10_1))
      return false;
    if (!(this.z10_1 == other.z10_1))
      return false;
    return true;
  };
  function KitExample$Companion$$childSerializers$_anonymous__whq2ra() {
    return new ArrayListSerializer($serializer_getInstance_2());
  }
  function Companion_3() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.h12_1 = [null, lazy(tmp_0, KitExample$Companion$$childSerializers$_anonymous__whq2ra)];
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    if (Companion_instance_5 == null)
      new Companion_3();
    return Companion_instance_5;
  }
  function $serializer_3() {
    $serializer_instance_3 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.KitExample', this, 2);
    tmp0_serialDesc.ej('source', false);
    tmp0_serialDesc.ej('tokens', true);
    this.i12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).j12 = function (encoder, value) {
    var tmp0_desc = this.i12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().h12_1;
    tmp1_output.tf(tmp0_desc, 0, value.p10_1);
    if (tmp1_output.ag(tmp0_desc, 1) ? true : !equals_0(value.q10_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 1, tmp2_cached[1].p1(), value.q10_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_3).nd = function (encoder, value) {
    return this.j12(encoder, value instanceof KitExample ? value : THROW_CCE());
  };
  protoOf($serializer_3).od = function (decoder) {
    var tmp0_desc = this.i12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.we(tmp0_desc);
    var tmp7_cached = Companion_getInstance_4().h12_1;
    if (tmp6_input.gf()) {
      tmp4_local0 = tmp6_input.bf(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.bf(tmp0_desc, 0);
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
    return KitExample_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_3).md = function () {
    return this.i12_1;
  };
  protoOf($serializer_3).gj = function () {
    var tmp0_cached = Companion_getInstance_4().h12_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].p1()];
  };
  var $serializer_instance_3;
  function $serializer_getInstance_3() {
    if ($serializer_instance_3 == null)
      new $serializer_3();
    return $serializer_instance_3;
  }
  function KitExample_init_$Init$(seen0, source, tokens, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_3().i12_1);
    }
    $this.p10_1 = source;
    if (0 === (seen0 & 2))
      $this.q10_1 = emptyList();
    else
      $this.q10_1 = tokens;
    return $this;
  }
  function KitExample_init_$Create$(seen0, source, tokens, serializationConstructorMarker) {
    return KitExample_init_$Init$(seen0, source, tokens, serializationConstructorMarker, objectCreate(protoOf(KitExample)));
  }
  function KitExample() {
  }
  protoOf(KitExample).toString = function () {
    return 'KitExample(source=' + this.p10_1 + ', tokens=' + toString(this.q10_1) + ')';
  };
  protoOf(KitExample).hashCode = function () {
    var result = getStringHashCode(this.p10_1);
    result = imul(result, 31) + hashCode(this.q10_1) | 0;
    return result;
  };
  protoOf(KitExample).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitExample))
      return false;
    if (!(this.p10_1 === other.p10_1))
      return false;
    if (!equals_0(this.q10_1, other.q10_1))
      return false;
    return true;
  };
  function KitReview$Companion$$childSerializers$_anonymous__2nl8bo() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Companion_4() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.k12_1 = [null, null, lazy(tmp_0, KitReview$Companion$$childSerializers$_anonymous__2nl8bo)];
  }
  var Companion_instance_6;
  function Companion_getInstance_5() {
    if (Companion_instance_6 == null)
      new Companion_4();
    return Companion_instance_6;
  }
  function $serializer_4() {
    $serializer_instance_4 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.KitReview', this, 3);
    tmp0_serialDesc.ej('confidence', true);
    tmp0_serialDesc.ej('safe', true);
    tmp0_serialDesc.ej('flags', true);
    this.l12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).m12 = function (encoder, value) {
    var tmp0_desc = this.l12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().k12_1;
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !(value.h11_1 === 'high')) {
      tmp1_output.tf(tmp0_desc, 0, value.h11_1);
    }
    if (tmp1_output.ag(tmp0_desc, 1) ? true : !(value.i11_1 === true)) {
      tmp1_output.qf(tmp0_desc, 1, value.i11_1);
    }
    if (tmp1_output.ag(tmp0_desc, 2) ? true : !equals_0(value.j11_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 2, tmp2_cached[2].p1(), value.j11_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_4).nd = function (encoder, value) {
    return this.m12(encoder, value instanceof KitReview ? value : THROW_CCE());
  };
  protoOf($serializer_4).od = function (decoder) {
    var tmp0_desc = this.l12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_input = decoder.we(tmp0_desc);
    var tmp8_cached = Companion_getInstance_5().k12_1;
    if (tmp7_input.gf()) {
      tmp4_local0 = tmp7_input.bf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ye(tmp0_desc, 1);
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
            tmp5_local1 = tmp7_input.ye(tmp0_desc, 1);
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
    return KitReview_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_4).md = function () {
    return this.l12_1;
  };
  protoOf($serializer_4).gj = function () {
    var tmp0_cached = Companion_getInstance_5().k12_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), BooleanSerializer_getInstance(), tmp0_cached[2].p1()];
  };
  var $serializer_instance_4;
  function $serializer_getInstance_4() {
    if ($serializer_instance_4 == null)
      new $serializer_4();
    return $serializer_instance_4;
  }
  function KitReview_init_$Init$(seen0, confidence, safe, flags, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().l12_1);
    }
    if (0 === (seen0 & 1))
      $this.h11_1 = 'high';
    else
      $this.h11_1 = confidence;
    if (0 === (seen0 & 2))
      $this.i11_1 = true;
    else
      $this.i11_1 = safe;
    if (0 === (seen0 & 4))
      $this.j11_1 = emptyList();
    else
      $this.j11_1 = flags;
    return $this;
  }
  function KitReview_init_$Create$(seen0, confidence, safe, flags, serializationConstructorMarker) {
    return KitReview_init_$Init$(seen0, confidence, safe, flags, serializationConstructorMarker, objectCreate(protoOf(KitReview)));
  }
  function KitReview(confidence, safe, flags) {
    Companion_getInstance_5();
    confidence = confidence === VOID ? 'high' : confidence;
    safe = safe === VOID ? true : safe;
    flags = flags === VOID ? emptyList() : flags;
    this.h11_1 = confidence;
    this.i11_1 = safe;
    this.j11_1 = flags;
  }
  protoOf(KitReview).toString = function () {
    return 'KitReview(confidence=' + this.h11_1 + ', safe=' + this.i11_1 + ', flags=' + toString(this.j11_1) + ')';
  };
  protoOf(KitReview).hashCode = function () {
    var result = getStringHashCode(this.h11_1);
    result = imul(result, 31) + getBooleanHashCode(this.i11_1) | 0;
    result = imul(result, 31) + hashCode(this.j11_1) | 0;
    return result;
  };
  protoOf(KitReview).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitReview))
      return false;
    if (!(this.h11_1 === other.h11_1))
      return false;
    if (!(this.i11_1 === other.i11_1))
      return false;
    if (!equals_0(this.j11_1, other.j11_1))
      return false;
    return true;
  };
  function KitCard$Companion$$childSerializers$_anonymous__mplvvg() {
    return new ArrayListSerializer($serializer_getInstance_3());
  }
  function Companion_5() {
    Companion_instance_7 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.n11_1 = [null, null, null, null, null, null, null, null, null, lazy(tmp_0, KitCard$Companion$$childSerializers$_anonymous__mplvvg), null];
  }
  protoOf(Companion_5).dl = function () {
    return $serializer_getInstance_5();
  };
  var Companion_instance_7;
  function Companion_getInstance_6() {
    if (Companion_instance_7 == null)
      new Companion_5();
    return Companion_instance_7;
  }
  function $serializer_5() {
    $serializer_instance_5 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.KitCard', this, 11);
    tmp0_serialDesc.ej('key', false);
    tmp0_serialDesc.ej('text', false);
    tmp0_serialDesc.ej('article', true);
    tmp0_serialDesc.ej('gender', true);
    tmp0_serialDesc.ej('plural', true);
    tmp0_serialDesc.ej('partOfSpeech', true);
    tmp0_serialDesc.ej('phonetic', true);
    tmp0_serialDesc.ej('romanization', true);
    tmp0_serialDesc.ej('sticker', true);
    tmp0_serialDesc.ej('examples', true);
    tmp0_serialDesc.ej('review', true);
    this.n12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).o12 = function (encoder, value) {
    var tmp0_desc = this.n12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().n11_1;
    tmp1_output.tf(tmp0_desc, 0, value.e10_1);
    tmp1_output.tf(tmp0_desc, 1, value.f10_1);
    if (tmp1_output.ag(tmp0_desc, 2) ? true : !(value.g10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 2, StringSerializer_getInstance(), value.g10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 3) ? true : !(value.h10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 3, StringSerializer_getInstance(), value.h10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 4) ? true : !(value.i10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 4, StringSerializer_getInstance(), value.i10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 5) ? true : !(value.j10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 5, StringSerializer_getInstance(), value.j10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 6) ? true : !(value.k10_1 === '')) {
      tmp1_output.tf(tmp0_desc, 6, value.k10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 7) ? true : !(value.l10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 7, StringSerializer_getInstance(), value.l10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 8) ? true : !value.m10_1.equals(new KitSticker())) {
      tmp1_output.uf(tmp0_desc, 8, $serializer_getInstance_1(), value.m10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 9) ? true : !equals_0(value.n10_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 9, tmp2_cached[9].p1(), value.n10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 10) ? true : !value.o10_1.equals(new KitReview())) {
      tmp1_output.uf(tmp0_desc, 10, $serializer_getInstance_4(), value.o10_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_5).nd = function (encoder, value) {
    return this.o12(encoder, value instanceof KitCard ? value : THROW_CCE());
  };
  protoOf($serializer_5).od = function (decoder) {
    var tmp0_desc = this.n12_1;
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
    var tmp16_cached = Companion_getInstance_6().n11_1;
    if (tmp15_input.gf()) {
      tmp4_local0 = tmp15_input.bf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp15_input.bf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp15_input.ef(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp15_input.ef(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp15_input.ef(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp15_input.ef(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp15_input.bf(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp15_input.ef(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp15_input.cf(tmp0_desc, 8, $serializer_getInstance_1(), tmp12_local8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp15_input.cf(tmp0_desc, 9, tmp16_cached[9].p1(), tmp13_local9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp15_input.cf(tmp0_desc, 10, $serializer_getInstance_4(), tmp14_local10);
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
            tmp6_local2 = tmp15_input.ef(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp15_input.ef(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp15_input.ef(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp15_input.ef(tmp0_desc, 5, StringSerializer_getInstance(), tmp9_local5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp15_input.bf(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp15_input.ef(tmp0_desc, 7, StringSerializer_getInstance(), tmp11_local7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp15_input.cf(tmp0_desc, 8, $serializer_getInstance_1(), tmp12_local8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp15_input.cf(tmp0_desc, 9, tmp16_cached[9].p1(), tmp13_local9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp15_input.cf(tmp0_desc, 10, $serializer_getInstance_4(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp15_input.xe(tmp0_desc);
    return KitCard_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, null);
  };
  protoOf($serializer_5).md = function () {
    return this.n12_1;
  };
  protoOf($serializer_5).gj = function () {
    var tmp0_cached = Companion_getInstance_6().n11_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), $serializer_getInstance_1(), tmp0_cached[9].p1(), $serializer_getInstance_4()];
  };
  var $serializer_instance_5;
  function $serializer_getInstance_5() {
    if ($serializer_instance_5 == null)
      new $serializer_5();
    return $serializer_instance_5;
  }
  function KitCard_init_$Init$(seen0, key, text, article, gender, plural, partOfSpeech, phonetic, romanization, sticker, examples, review, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_5().n12_1);
    }
    $this.e10_1 = key;
    $this.f10_1 = text;
    if (0 === (seen0 & 4))
      $this.g10_1 = null;
    else
      $this.g10_1 = article;
    if (0 === (seen0 & 8))
      $this.h10_1 = null;
    else
      $this.h10_1 = gender;
    if (0 === (seen0 & 16))
      $this.i10_1 = null;
    else
      $this.i10_1 = plural;
    if (0 === (seen0 & 32))
      $this.j10_1 = null;
    else
      $this.j10_1 = partOfSpeech;
    if (0 === (seen0 & 64))
      $this.k10_1 = '';
    else
      $this.k10_1 = phonetic;
    if (0 === (seen0 & 128))
      $this.l10_1 = null;
    else
      $this.l10_1 = romanization;
    if (0 === (seen0 & 256))
      $this.m10_1 = new KitSticker();
    else
      $this.m10_1 = sticker;
    if (0 === (seen0 & 512))
      $this.n10_1 = emptyList();
    else
      $this.n10_1 = examples;
    if (0 === (seen0 & 1024))
      $this.o10_1 = new KitReview();
    else
      $this.o10_1 = review;
    return $this;
  }
  function KitCard_init_$Create$(seen0, key, text, article, gender, plural, partOfSpeech, phonetic, romanization, sticker, examples, review, serializationConstructorMarker) {
    return KitCard_init_$Init$(seen0, key, text, article, gender, plural, partOfSpeech, phonetic, romanization, sticker, examples, review, serializationConstructorMarker, objectCreate(protoOf(KitCard)));
  }
  function KitCard() {
  }
  protoOf(KitCard).toString = function () {
    return 'KitCard(key=' + this.e10_1 + ', text=' + this.f10_1 + ', article=' + this.g10_1 + ', gender=' + this.h10_1 + ', plural=' + this.i10_1 + ', partOfSpeech=' + this.j10_1 + ', phonetic=' + this.k10_1 + ', romanization=' + this.l10_1 + ', sticker=' + this.m10_1.toString() + ', examples=' + toString(this.n10_1) + ', review=' + this.o10_1.toString() + ')';
  };
  protoOf(KitCard).hashCode = function () {
    var result = getStringHashCode(this.e10_1);
    result = imul(result, 31) + getStringHashCode(this.f10_1) | 0;
    result = imul(result, 31) + (this.g10_1 == null ? 0 : getStringHashCode(this.g10_1)) | 0;
    result = imul(result, 31) + (this.h10_1 == null ? 0 : getStringHashCode(this.h10_1)) | 0;
    result = imul(result, 31) + (this.i10_1 == null ? 0 : getStringHashCode(this.i10_1)) | 0;
    result = imul(result, 31) + (this.j10_1 == null ? 0 : getStringHashCode(this.j10_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.k10_1) | 0;
    result = imul(result, 31) + (this.l10_1 == null ? 0 : getStringHashCode(this.l10_1)) | 0;
    result = imul(result, 31) + this.m10_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.n10_1) | 0;
    result = imul(result, 31) + this.o10_1.hashCode() | 0;
    return result;
  };
  protoOf(KitCard).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitCard))
      return false;
    if (!(this.e10_1 === other.e10_1))
      return false;
    if (!(this.f10_1 === other.f10_1))
      return false;
    if (!(this.g10_1 == other.g10_1))
      return false;
    if (!(this.h10_1 == other.h10_1))
      return false;
    if (!(this.i10_1 == other.i10_1))
      return false;
    if (!(this.j10_1 == other.j10_1))
      return false;
    if (!(this.k10_1 === other.k10_1))
      return false;
    if (!(this.l10_1 == other.l10_1))
      return false;
    if (!this.m10_1.equals(other.m10_1))
      return false;
    if (!equals_0(this.n10_1, other.n10_1))
      return false;
    if (!this.o10_1.equals(other.o10_1))
      return false;
    return true;
  };
  function KitLocToken$Companion$$childSerializers$_anonymous__sryvh7() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Companion_6() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.p12_1 = [lazy(tmp_0, KitLocToken$Companion$$childSerializers$_anonymous__sryvh7)];
  }
  var Companion_instance_8;
  function Companion_getInstance_7() {
    if (Companion_instance_8 == null)
      new Companion_6();
    return Companion_instance_8;
  }
  function $serializer_6() {
    $serializer_instance_6 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.KitLocToken', this, 1);
    tmp0_serialDesc.ej('meanings', true);
    this.q12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).r12 = function (encoder, value) {
    var tmp0_desc = this.q12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().p12_1;
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !equals_0(value.d11_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 0, tmp2_cached[0].p1(), value.d11_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_6).nd = function (encoder, value) {
    return this.r12(encoder, value instanceof KitLocToken ? value : THROW_CCE());
  };
  protoOf($serializer_6).od = function (decoder) {
    var tmp0_desc = this.q12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.we(tmp0_desc);
    var tmp6_cached = Companion_getInstance_7().p12_1;
    if (tmp5_input.gf()) {
      tmp4_local0 = tmp5_input.cf(tmp0_desc, 0, tmp6_cached[0].p1(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp5_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp5_input.cf(tmp0_desc, 0, tmp6_cached[0].p1(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp5_input.xe(tmp0_desc);
    return KitLocToken_init_$Create$(tmp3_bitMask0, tmp4_local0, null);
  };
  protoOf($serializer_6).md = function () {
    return this.q12_1;
  };
  protoOf($serializer_6).gj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_7().p12_1[0].p1()];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function KitLocToken_init_$Init$(seen0, meanings, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().q12_1);
    }
    if (0 === (seen0 & 1))
      $this.d11_1 = emptyList();
    else
      $this.d11_1 = meanings;
    return $this;
  }
  function KitLocToken_init_$Create$(seen0, meanings, serializationConstructorMarker) {
    return KitLocToken_init_$Init$(seen0, meanings, serializationConstructorMarker, objectCreate(protoOf(KitLocToken)));
  }
  function KitLocToken(meanings) {
    Companion_getInstance_7();
    meanings = meanings === VOID ? emptyList() : meanings;
    this.d11_1 = meanings;
  }
  protoOf(KitLocToken).toString = function () {
    return 'KitLocToken(meanings=' + toString(this.d11_1) + ')';
  };
  protoOf(KitLocToken).hashCode = function () {
    return hashCode(this.d11_1);
  };
  protoOf(KitLocToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitLocToken))
      return false;
    if (!equals_0(this.d11_1, other.d11_1))
      return false;
    return true;
  };
  function KitLocExample$Companion$$childSerializers$_anonymous__u2s7bq() {
    return new ArrayListSerializer($serializer_getInstance_6());
  }
  function Companion_7() {
    Companion_instance_9 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.s12_1 = [null, lazy(tmp_0, KitLocExample$Companion$$childSerializers$_anonymous__u2s7bq)];
  }
  var Companion_instance_9;
  function Companion_getInstance_8() {
    if (Companion_instance_9 == null)
      new Companion_7();
    return Companion_instance_9;
  }
  function $serializer_7() {
    $serializer_instance_7 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.KitLocExample', this, 2);
    tmp0_serialDesc.ej('target', false);
    tmp0_serialDesc.ej('tokens', true);
    this.t12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).u12 = function (encoder, value) {
    var tmp0_desc = this.t12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().s12_1;
    tmp1_output.tf(tmp0_desc, 0, value.b11_1);
    if (tmp1_output.ag(tmp0_desc, 1) ? true : !equals_0(value.c11_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 1, tmp2_cached[1].p1(), value.c11_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_7).nd = function (encoder, value) {
    return this.u12(encoder, value instanceof KitLocExample ? value : THROW_CCE());
  };
  protoOf($serializer_7).od = function (decoder) {
    var tmp0_desc = this.t12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.we(tmp0_desc);
    var tmp7_cached = Companion_getInstance_8().s12_1;
    if (tmp6_input.gf()) {
      tmp4_local0 = tmp6_input.bf(tmp0_desc, 0);
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
            tmp4_local0 = tmp6_input.bf(tmp0_desc, 0);
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
    return KitLocExample_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_7).md = function () {
    return this.t12_1;
  };
  protoOf($serializer_7).gj = function () {
    var tmp0_cached = Companion_getInstance_8().s12_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), tmp0_cached[1].p1()];
  };
  var $serializer_instance_7;
  function $serializer_getInstance_7() {
    if ($serializer_instance_7 == null)
      new $serializer_7();
    return $serializer_instance_7;
  }
  function KitLocExample_init_$Init$(seen0, target, tokens, serializationConstructorMarker, $this) {
    if (!(1 === (1 & seen0))) {
      throwMissingFieldException(seen0, 1, $serializer_getInstance_7().t12_1);
    }
    $this.b11_1 = target;
    if (0 === (seen0 & 2))
      $this.c11_1 = emptyList();
    else
      $this.c11_1 = tokens;
    return $this;
  }
  function KitLocExample_init_$Create$(seen0, target, tokens, serializationConstructorMarker) {
    return KitLocExample_init_$Init$(seen0, target, tokens, serializationConstructorMarker, objectCreate(protoOf(KitLocExample)));
  }
  function KitLocExample() {
  }
  protoOf(KitLocExample).toString = function () {
    return 'KitLocExample(target=' + this.b11_1 + ', tokens=' + toString(this.c11_1) + ')';
  };
  protoOf(KitLocExample).hashCode = function () {
    var result = getStringHashCode(this.b11_1);
    result = imul(result, 31) + hashCode(this.c11_1) | 0;
    return result;
  };
  protoOf(KitLocExample).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitLocExample))
      return false;
    if (!(this.b11_1 === other.b11_1))
      return false;
    if (!equals_0(this.c11_1, other.c11_1))
      return false;
    return true;
  };
  function KitLocCard$Companion$$childSerializers$_anonymous__okus8g() {
    return new ArrayListSerializer($serializer_getInstance_7());
  }
  function Companion_8() {
    Companion_instance_10 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.o11_1 = [null, null, lazy(tmp_0, KitLocCard$Companion$$childSerializers$_anonymous__okus8g)];
  }
  protoOf(Companion_8).dl = function () {
    return $serializer_getInstance_8();
  };
  var Companion_instance_10;
  function Companion_getInstance_9() {
    if (Companion_instance_10 == null)
      new Companion_8();
    return Companion_instance_10;
  }
  function $serializer_8() {
    $serializer_instance_8 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.KitLocCard', this, 3);
    tmp0_serialDesc.ej('key', false);
    tmp0_serialDesc.ej('translation', false);
    tmp0_serialDesc.ej('examples', true);
    this.v12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).w12 = function (encoder, value) {
    var tmp0_desc = this.v12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().o11_1;
    tmp1_output.tf(tmp0_desc, 0, value.b10_1);
    tmp1_output.tf(tmp0_desc, 1, value.c10_1);
    if (tmp1_output.ag(tmp0_desc, 2) ? true : !equals_0(value.d10_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 2, tmp2_cached[2].p1(), value.d10_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_8).nd = function (encoder, value) {
    return this.w12(encoder, value instanceof KitLocCard ? value : THROW_CCE());
  };
  protoOf($serializer_8).od = function (decoder) {
    var tmp0_desc = this.v12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.we(tmp0_desc);
    var tmp8_cached = Companion_getInstance_9().o11_1;
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
    return KitLocCard_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_8).md = function () {
    return this.v12_1;
  };
  protoOf($serializer_8).gj = function () {
    var tmp0_cached = Companion_getInstance_9().o11_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), tmp0_cached[2].p1()];
  };
  var $serializer_instance_8;
  function $serializer_getInstance_8() {
    if ($serializer_instance_8 == null)
      new $serializer_8();
    return $serializer_instance_8;
  }
  function KitLocCard_init_$Init$(seen0, key, translation, examples, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_8().v12_1);
    }
    $this.b10_1 = key;
    $this.c10_1 = translation;
    if (0 === (seen0 & 4))
      $this.d10_1 = emptyList();
    else
      $this.d10_1 = examples;
    return $this;
  }
  function KitLocCard_init_$Create$(seen0, key, translation, examples, serializationConstructorMarker) {
    return KitLocCard_init_$Init$(seen0, key, translation, examples, serializationConstructorMarker, objectCreate(protoOf(KitLocCard)));
  }
  function KitLocCard() {
  }
  protoOf(KitLocCard).toString = function () {
    return 'KitLocCard(key=' + this.b10_1 + ', translation=' + this.c10_1 + ', examples=' + toString(this.d10_1) + ')';
  };
  protoOf(KitLocCard).hashCode = function () {
    var result = getStringHashCode(this.b10_1);
    result = imul(result, 31) + getStringHashCode(this.c10_1) | 0;
    result = imul(result, 31) + hashCode(this.d10_1) | 0;
    return result;
  };
  protoOf(KitLocCard).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitLocCard))
      return false;
    if (!(this.b10_1 === other.b10_1))
      return false;
    if (!(this.c10_1 === other.c10_1))
      return false;
    if (!equals_0(this.d10_1, other.d10_1))
      return false;
    return true;
  };
  function DeckFolder(deck, cards, localization, stickers, stickerReview) {
    stickerReview = stickerReview === VOID ? emptyMap() : stickerReview;
    this.fz_1 = deck;
    this.gz_1 = cards;
    this.hz_1 = localization;
    this.iz_1 = stickers;
    this.jz_1 = stickerReview;
  }
  protoOf(DeckFolder).toString = function () {
    return 'DeckFolder(deck=' + this.fz_1.toString() + ', cards=' + toString(this.gz_1) + ', localization=' + toString(this.hz_1) + ', stickers=' + toString(this.iz_1) + ', stickerReview=' + toString(this.jz_1) + ')';
  };
  protoOf(DeckFolder).hashCode = function () {
    var result = this.fz_1.hashCode();
    result = imul(result, 31) + hashCode(this.gz_1) | 0;
    result = imul(result, 31) + hashCode(this.hz_1) | 0;
    result = imul(result, 31) + hashCode(this.iz_1) | 0;
    result = imul(result, 31) + hashCode(this.jz_1) | 0;
    return result;
  };
  protoOf(DeckFolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeckFolder))
      return false;
    if (!this.fz_1.equals(other.fz_1))
      return false;
    if (!equals_0(this.gz_1, other.gz_1))
      return false;
    if (!equals_0(this.hz_1, other.hz_1))
      return false;
    if (!equals_0(this.iz_1, other.iz_1))
      return false;
    if (!equals_0(this.jz_1, other.jz_1))
      return false;
    return true;
  };
  function Companion_9() {
  }
  protoOf(Companion_9).dl = function () {
    return $serializer_getInstance_9();
  };
  var Companion_instance_11;
  function Companion_getInstance_10() {
    return Companion_instance_11;
  }
  function $serializer_9() {
    $serializer_instance_9 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.PackagedDeck', this, 24);
    tmp0_serialDesc.ej('formatVersion', true);
    tmp0_serialDesc.ej('id', false);
    tmp0_serialDesc.ej('name', false);
    tmp0_serialDesc.ej('description', false);
    tmp0_serialDesc.ej('language', false);
    tmp0_serialDesc.ej('glossLanguage', false);
    tmp0_serialDesc.ej('learningLanguage', false);
    tmp0_serialDesc.ej('knownLanguage', false);
    tmp0_serialDesc.ej('direction', false);
    tmp0_serialDesc.ej('level', false);
    tmp0_serialDesc.ej('topic', false);
    tmp0_serialDesc.ej('revision', true);
    tmp0_serialDesc.ej('rules', true);
    tmp0_serialDesc.ej('expected', false);
    tmp0_serialDesc.ej('text', false);
    tmp0_serialDesc.ej('images', false);
    tmp0_serialDesc.ej('stickers', false);
    tmp0_serialDesc.ej('cardCount', false);
    tmp0_serialDesc.ej('stickerCount', false);
    tmp0_serialDesc.ej('textOnlyCount', false);
    tmp0_serialDesc.ej('builtAtEpochMs', false);
    tmp0_serialDesc.ej('builder', false);
    tmp0_serialDesc.ej('contentRevision', false);
    tmp0_serialDesc.ej('sourceRevision', false);
    this.x12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).y12 = function (encoder, value) {
    var tmp0_desc = this.x12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !(value.z12_1 === 1)) {
      tmp1_output.rf(tmp0_desc, 0, value.z12_1);
    }
    tmp1_output.tf(tmp0_desc, 1, value.a13_1);
    tmp1_output.tf(tmp0_desc, 2, value.b13_1);
    tmp1_output.tf(tmp0_desc, 3, value.c13_1);
    tmp1_output.tf(tmp0_desc, 4, value.d13_1);
    tmp1_output.tf(tmp0_desc, 5, value.e13_1);
    tmp1_output.tf(tmp0_desc, 6, value.f13_1);
    tmp1_output.tf(tmp0_desc, 7, value.g13_1);
    tmp1_output.tf(tmp0_desc, 8, value.h13_1);
    tmp1_output.tf(tmp0_desc, 9, value.i13_1);
    tmp1_output.wf(tmp0_desc, 10, StringSerializer_getInstance(), value.j13_1);
    if (tmp1_output.ag(tmp0_desc, 11) ? true : !(value.k13_1 === 1)) {
      tmp1_output.rf(tmp0_desc, 11, value.k13_1);
    }
    if (tmp1_output.ag(tmp0_desc, 12) ? true : !(value.l13_1 == null)) {
      tmp1_output.wf(tmp0_desc, 12, StringSerializer_getInstance(), value.l13_1);
    }
    tmp1_output.uf(tmp0_desc, 13, $serializer_getInstance_10(), value.m13_1);
    tmp1_output.uf(tmp0_desc, 14, $serializer_getInstance_13(), value.n13_1);
    tmp1_output.uf(tmp0_desc, 15, $serializer_getInstance_14(), value.o13_1);
    tmp1_output.uf(tmp0_desc, 16, $serializer_getInstance_15(), value.p13_1);
    tmp1_output.rf(tmp0_desc, 17, value.q13_1);
    tmp1_output.rf(tmp0_desc, 18, value.r13_1);
    tmp1_output.rf(tmp0_desc, 19, value.s13_1);
    tmp1_output.sf(tmp0_desc, 20, value.t13_1);
    tmp1_output.tf(tmp0_desc, 21, value.u13_1);
    tmp1_output.tf(tmp0_desc, 22, value.v13_1);
    tmp1_output.tf(tmp0_desc, 23, value.w13_1);
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_9).nd = function (encoder, value) {
    return this.y12(encoder, value instanceof PackagedDeck ? value : THROW_CCE());
  };
  protoOf($serializer_9).od = function (decoder) {
    var tmp0_desc = this.x12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
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
    var tmp15_local11 = 0;
    var tmp16_local12 = null;
    var tmp17_local13 = null;
    var tmp18_local14 = null;
    var tmp19_local15 = null;
    var tmp20_local16 = null;
    var tmp21_local17 = 0;
    var tmp22_local18 = 0;
    var tmp23_local19 = 0;
    var tmp24_local20 = new Long(0, 0);
    var tmp25_local21 = null;
    var tmp26_local22 = null;
    var tmp27_local23 = null;
    var tmp28_input = decoder.we(tmp0_desc);
    if (tmp28_input.gf()) {
      tmp4_local0 = tmp28_input.ze(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp28_input.bf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp28_input.bf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp28_input.bf(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp28_input.bf(tmp0_desc, 4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
      tmp9_local5 = tmp28_input.bf(tmp0_desc, 5);
      tmp3_bitMask0 = tmp3_bitMask0 | 32;
      tmp10_local6 = tmp28_input.bf(tmp0_desc, 6);
      tmp3_bitMask0 = tmp3_bitMask0 | 64;
      tmp11_local7 = tmp28_input.bf(tmp0_desc, 7);
      tmp3_bitMask0 = tmp3_bitMask0 | 128;
      tmp12_local8 = tmp28_input.bf(tmp0_desc, 8);
      tmp3_bitMask0 = tmp3_bitMask0 | 256;
      tmp13_local9 = tmp28_input.bf(tmp0_desc, 9);
      tmp3_bitMask0 = tmp3_bitMask0 | 512;
      tmp14_local10 = tmp28_input.ef(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
      tmp3_bitMask0 = tmp3_bitMask0 | 1024;
      tmp15_local11 = tmp28_input.ze(tmp0_desc, 11);
      tmp3_bitMask0 = tmp3_bitMask0 | 2048;
      tmp16_local12 = tmp28_input.ef(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
      tmp3_bitMask0 = tmp3_bitMask0 | 4096;
      tmp17_local13 = tmp28_input.cf(tmp0_desc, 13, $serializer_getInstance_10(), tmp17_local13);
      tmp3_bitMask0 = tmp3_bitMask0 | 8192;
      tmp18_local14 = tmp28_input.cf(tmp0_desc, 14, $serializer_getInstance_13(), tmp18_local14);
      tmp3_bitMask0 = tmp3_bitMask0 | 16384;
      tmp19_local15 = tmp28_input.cf(tmp0_desc, 15, $serializer_getInstance_14(), tmp19_local15);
      tmp3_bitMask0 = tmp3_bitMask0 | 32768;
      tmp20_local16 = tmp28_input.cf(tmp0_desc, 16, $serializer_getInstance_15(), tmp20_local16);
      tmp3_bitMask0 = tmp3_bitMask0 | 65536;
      tmp21_local17 = tmp28_input.ze(tmp0_desc, 17);
      tmp3_bitMask0 = tmp3_bitMask0 | 131072;
      tmp22_local18 = tmp28_input.ze(tmp0_desc, 18);
      tmp3_bitMask0 = tmp3_bitMask0 | 262144;
      tmp23_local19 = tmp28_input.ze(tmp0_desc, 19);
      tmp3_bitMask0 = tmp3_bitMask0 | 524288;
      tmp24_local20 = tmp28_input.af(tmp0_desc, 20);
      tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
      tmp25_local21 = tmp28_input.bf(tmp0_desc, 21);
      tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
      tmp26_local22 = tmp28_input.bf(tmp0_desc, 22);
      tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
      tmp27_local23 = tmp28_input.bf(tmp0_desc, 23);
      tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp28_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp28_input.ze(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp28_input.bf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp28_input.bf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp28_input.bf(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp28_input.bf(tmp0_desc, 4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          case 5:
            tmp9_local5 = tmp28_input.bf(tmp0_desc, 5);
            tmp3_bitMask0 = tmp3_bitMask0 | 32;
            break;
          case 6:
            tmp10_local6 = tmp28_input.bf(tmp0_desc, 6);
            tmp3_bitMask0 = tmp3_bitMask0 | 64;
            break;
          case 7:
            tmp11_local7 = tmp28_input.bf(tmp0_desc, 7);
            tmp3_bitMask0 = tmp3_bitMask0 | 128;
            break;
          case 8:
            tmp12_local8 = tmp28_input.bf(tmp0_desc, 8);
            tmp3_bitMask0 = tmp3_bitMask0 | 256;
            break;
          case 9:
            tmp13_local9 = tmp28_input.bf(tmp0_desc, 9);
            tmp3_bitMask0 = tmp3_bitMask0 | 512;
            break;
          case 10:
            tmp14_local10 = tmp28_input.ef(tmp0_desc, 10, StringSerializer_getInstance(), tmp14_local10);
            tmp3_bitMask0 = tmp3_bitMask0 | 1024;
            break;
          case 11:
            tmp15_local11 = tmp28_input.ze(tmp0_desc, 11);
            tmp3_bitMask0 = tmp3_bitMask0 | 2048;
            break;
          case 12:
            tmp16_local12 = tmp28_input.ef(tmp0_desc, 12, StringSerializer_getInstance(), tmp16_local12);
            tmp3_bitMask0 = tmp3_bitMask0 | 4096;
            break;
          case 13:
            tmp17_local13 = tmp28_input.cf(tmp0_desc, 13, $serializer_getInstance_10(), tmp17_local13);
            tmp3_bitMask0 = tmp3_bitMask0 | 8192;
            break;
          case 14:
            tmp18_local14 = tmp28_input.cf(tmp0_desc, 14, $serializer_getInstance_13(), tmp18_local14);
            tmp3_bitMask0 = tmp3_bitMask0 | 16384;
            break;
          case 15:
            tmp19_local15 = tmp28_input.cf(tmp0_desc, 15, $serializer_getInstance_14(), tmp19_local15);
            tmp3_bitMask0 = tmp3_bitMask0 | 32768;
            break;
          case 16:
            tmp20_local16 = tmp28_input.cf(tmp0_desc, 16, $serializer_getInstance_15(), tmp20_local16);
            tmp3_bitMask0 = tmp3_bitMask0 | 65536;
            break;
          case 17:
            tmp21_local17 = tmp28_input.ze(tmp0_desc, 17);
            tmp3_bitMask0 = tmp3_bitMask0 | 131072;
            break;
          case 18:
            tmp22_local18 = tmp28_input.ze(tmp0_desc, 18);
            tmp3_bitMask0 = tmp3_bitMask0 | 262144;
            break;
          case 19:
            tmp23_local19 = tmp28_input.ze(tmp0_desc, 19);
            tmp3_bitMask0 = tmp3_bitMask0 | 524288;
            break;
          case 20:
            tmp24_local20 = tmp28_input.af(tmp0_desc, 20);
            tmp3_bitMask0 = tmp3_bitMask0 | 1048576;
            break;
          case 21:
            tmp25_local21 = tmp28_input.bf(tmp0_desc, 21);
            tmp3_bitMask0 = tmp3_bitMask0 | 2097152;
            break;
          case 22:
            tmp26_local22 = tmp28_input.bf(tmp0_desc, 22);
            tmp3_bitMask0 = tmp3_bitMask0 | 4194304;
            break;
          case 23:
            tmp27_local23 = tmp28_input.bf(tmp0_desc, 23);
            tmp3_bitMask0 = tmp3_bitMask0 | 8388608;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp28_input.xe(tmp0_desc);
    return PackagedDeck_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, tmp9_local5, tmp10_local6, tmp11_local7, tmp12_local8, tmp13_local9, tmp14_local10, tmp15_local11, tmp16_local12, tmp17_local13, tmp18_local14, tmp19_local15, tmp20_local16, tmp21_local17, tmp22_local18, tmp23_local19, tmp24_local20, tmp25_local21, tmp26_local22, tmp27_local23, null);
  };
  protoOf($serializer_9).md = function () {
    return this.x12_1;
  };
  protoOf($serializer_9).gj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), IntSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), $serializer_getInstance_10(), $serializer_getInstance_13(), $serializer_getInstance_14(), $serializer_getInstance_15(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), LongSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_9;
  function $serializer_getInstance_9() {
    if ($serializer_instance_9 == null)
      new $serializer_9();
    return $serializer_instance_9;
  }
  function PackagedDeck_init_$Init$(seen0, formatVersion, id, name, description, language, glossLanguage, learningLanguage, knownLanguage, direction, level, topic, revision, rules, expected, text, images, stickers, cardCount, stickerCount, textOnlyCount, builtAtEpochMs, builder, contentRevision, sourceRevision, serializationConstructorMarker, $this) {
    if (!(16771070 === (16771070 & seen0))) {
      throwMissingFieldException(seen0, 16771070, $serializer_getInstance_9().x12_1);
    }
    if (0 === (seen0 & 1))
      $this.z12_1 = 1;
    else
      $this.z12_1 = formatVersion;
    $this.a13_1 = id;
    $this.b13_1 = name;
    $this.c13_1 = description;
    $this.d13_1 = language;
    $this.e13_1 = glossLanguage;
    $this.f13_1 = learningLanguage;
    $this.g13_1 = knownLanguage;
    $this.h13_1 = direction;
    $this.i13_1 = level;
    $this.j13_1 = topic;
    if (0 === (seen0 & 2048))
      $this.k13_1 = 1;
    else
      $this.k13_1 = revision;
    if (0 === (seen0 & 4096))
      $this.l13_1 = null;
    else
      $this.l13_1 = rules;
    $this.m13_1 = expected;
    $this.n13_1 = text;
    $this.o13_1 = images;
    $this.p13_1 = stickers;
    $this.q13_1 = cardCount;
    $this.r13_1 = stickerCount;
    $this.s13_1 = textOnlyCount;
    $this.t13_1 = builtAtEpochMs;
    $this.u13_1 = builder;
    $this.v13_1 = contentRevision;
    $this.w13_1 = sourceRevision;
    return $this;
  }
  function PackagedDeck_init_$Create$(seen0, formatVersion, id, name, description, language, glossLanguage, learningLanguage, knownLanguage, direction, level, topic, revision, rules, expected, text, images, stickers, cardCount, stickerCount, textOnlyCount, builtAtEpochMs, builder, contentRevision, sourceRevision, serializationConstructorMarker) {
    return PackagedDeck_init_$Init$(seen0, formatVersion, id, name, description, language, glossLanguage, learningLanguage, knownLanguage, direction, level, topic, revision, rules, expected, text, images, stickers, cardCount, stickerCount, textOnlyCount, builtAtEpochMs, builder, contentRevision, sourceRevision, serializationConstructorMarker, objectCreate(protoOf(PackagedDeck)));
  }
  function PackagedDeck(formatVersion, id, name, description, language, glossLanguage, learningLanguage, knownLanguage, direction, level, topic, revision, rules, expected, text, images, stickers, cardCount, stickerCount, textOnlyCount, builtAtEpochMs, builder, contentRevision, sourceRevision) {
    formatVersion = formatVersion === VOID ? 1 : formatVersion;
    revision = revision === VOID ? 1 : revision;
    rules = rules === VOID ? null : rules;
    this.z12_1 = formatVersion;
    this.a13_1 = id;
    this.b13_1 = name;
    this.c13_1 = description;
    this.d13_1 = language;
    this.e13_1 = glossLanguage;
    this.f13_1 = learningLanguage;
    this.g13_1 = knownLanguage;
    this.h13_1 = direction;
    this.i13_1 = level;
    this.j13_1 = topic;
    this.k13_1 = revision;
    this.l13_1 = rules;
    this.m13_1 = expected;
    this.n13_1 = text;
    this.o13_1 = images;
    this.p13_1 = stickers;
    this.q13_1 = cardCount;
    this.r13_1 = stickerCount;
    this.s13_1 = textOnlyCount;
    this.t13_1 = builtAtEpochMs;
    this.u13_1 = builder;
    this.v13_1 = contentRevision;
    this.w13_1 = sourceRevision;
  }
  protoOf(PackagedDeck).toString = function () {
    return 'PackagedDeck(formatVersion=' + this.z12_1 + ', id=' + this.a13_1 + ', name=' + this.b13_1 + ', description=' + this.c13_1 + ', language=' + this.d13_1 + ', glossLanguage=' + this.e13_1 + ', learningLanguage=' + this.f13_1 + ', knownLanguage=' + this.g13_1 + ', direction=' + this.h13_1 + ', level=' + this.i13_1 + ', topic=' + this.j13_1 + ', revision=' + this.k13_1 + ', rules=' + this.l13_1 + ', expected=' + this.m13_1.toString() + ', text=' + this.n13_1.toString() + ', images=' + this.o13_1.toString() + ', stickers=' + this.p13_1.toString() + ', cardCount=' + this.q13_1 + ', stickerCount=' + this.r13_1 + ', textOnlyCount=' + this.s13_1 + ', builtAtEpochMs=' + this.t13_1.toString() + ', builder=' + this.u13_1 + ', contentRevision=' + this.v13_1 + ', sourceRevision=' + this.w13_1 + ')';
  };
  protoOf(PackagedDeck).hashCode = function () {
    var result = this.z12_1;
    result = imul(result, 31) + getStringHashCode(this.a13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.e13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i13_1) | 0;
    result = imul(result, 31) + (this.j13_1 == null ? 0 : getStringHashCode(this.j13_1)) | 0;
    result = imul(result, 31) + this.k13_1 | 0;
    result = imul(result, 31) + (this.l13_1 == null ? 0 : getStringHashCode(this.l13_1)) | 0;
    result = imul(result, 31) + this.m13_1.hashCode() | 0;
    result = imul(result, 31) + this.n13_1.hashCode() | 0;
    result = imul(result, 31) + this.o13_1.hashCode() | 0;
    result = imul(result, 31) + this.p13_1.hashCode() | 0;
    result = imul(result, 31) + this.q13_1 | 0;
    result = imul(result, 31) + this.r13_1 | 0;
    result = imul(result, 31) + this.s13_1 | 0;
    result = imul(result, 31) + this.t13_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.u13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.v13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.w13_1) | 0;
    return result;
  };
  protoOf(PackagedDeck).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PackagedDeck))
      return false;
    if (!(this.z12_1 === other.z12_1))
      return false;
    if (!(this.a13_1 === other.a13_1))
      return false;
    if (!(this.b13_1 === other.b13_1))
      return false;
    if (!(this.c13_1 === other.c13_1))
      return false;
    if (!(this.d13_1 === other.d13_1))
      return false;
    if (!(this.e13_1 === other.e13_1))
      return false;
    if (!(this.f13_1 === other.f13_1))
      return false;
    if (!(this.g13_1 === other.g13_1))
      return false;
    if (!(this.h13_1 === other.h13_1))
      return false;
    if (!(this.i13_1 === other.i13_1))
      return false;
    if (!(this.j13_1 == other.j13_1))
      return false;
    if (!(this.k13_1 === other.k13_1))
      return false;
    if (!(this.l13_1 == other.l13_1))
      return false;
    if (!this.m13_1.equals(other.m13_1))
      return false;
    if (!this.n13_1.equals(other.n13_1))
      return false;
    if (!this.o13_1.equals(other.o13_1))
      return false;
    if (!this.p13_1.equals(other.p13_1))
      return false;
    if (!(this.q13_1 === other.q13_1))
      return false;
    if (!(this.r13_1 === other.r13_1))
      return false;
    if (!(this.s13_1 === other.s13_1))
      return false;
    if (!equalsLong(this.t13_1, other.t13_1))
      return false;
    if (!(this.u13_1 === other.u13_1))
      return false;
    if (!(this.v13_1 === other.v13_1))
      return false;
    if (!(this.w13_1 === other.w13_1))
      return false;
    return true;
  };
  function Companion_10() {
  }
  var Companion_instance_12;
  function Companion_getInstance_11() {
    return Companion_instance_12;
  }
  function $serializer_10() {
    $serializer_instance_10 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.Expected', this, 4);
    tmp0_serialDesc.ej('sourceNotes', false);
    tmp0_serialDesc.ej('cards', false);
    tmp0_serialDesc.ej('stickers', false);
    tmp0_serialDesc.ej('textOnly', false);
    this.x13_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).y13 = function (encoder, value) {
    var tmp0_desc = this.x13_1;
    var tmp1_output = encoder.we(tmp0_desc);
    tmp1_output.rf(tmp0_desc, 0, value.z13_1);
    tmp1_output.rf(tmp0_desc, 1, value.a14_1);
    tmp1_output.rf(tmp0_desc, 2, value.b14_1);
    tmp1_output.rf(tmp0_desc, 3, value.c14_1);
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_10).nd = function (encoder, value) {
    return this.y13(encoder, value instanceof Expected ? value : THROW_CCE());
  };
  protoOf($serializer_10).od = function (decoder) {
    var tmp0_desc = this.x13_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_local3 = 0;
    var tmp8_input = decoder.we(tmp0_desc);
    if (tmp8_input.gf()) {
      tmp4_local0 = tmp8_input.ze(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ze(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ze(tmp0_desc, 2);
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
            tmp5_local1 = tmp8_input.ze(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ze(tmp0_desc, 2);
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
    return Expected_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_10).md = function () {
    return this.x13_1;
  };
  protoOf($serializer_10).gj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_10;
  function $serializer_getInstance_10() {
    if ($serializer_instance_10 == null)
      new $serializer_10();
    return $serializer_instance_10;
  }
  function Expected_init_$Init$(seen0, sourceNotes, cards, stickers, textOnly, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_10().x13_1);
    }
    $this.z13_1 = sourceNotes;
    $this.a14_1 = cards;
    $this.b14_1 = stickers;
    $this.c14_1 = textOnly;
    return $this;
  }
  function Expected_init_$Create$(seen0, sourceNotes, cards, stickers, textOnly, serializationConstructorMarker) {
    return Expected_init_$Init$(seen0, sourceNotes, cards, stickers, textOnly, serializationConstructorMarker, objectCreate(protoOf(Expected)));
  }
  function Expected(sourceNotes, cards, stickers, textOnly) {
    this.z13_1 = sourceNotes;
    this.a14_1 = cards;
    this.b14_1 = stickers;
    this.c14_1 = textOnly;
  }
  protoOf(Expected).toString = function () {
    return 'Expected(sourceNotes=' + this.z13_1 + ', cards=' + this.a14_1 + ', stickers=' + this.b14_1 + ', textOnly=' + this.c14_1 + ')';
  };
  protoOf(Expected).hashCode = function () {
    var result = this.z13_1;
    result = imul(result, 31) + this.a14_1 | 0;
    result = imul(result, 31) + this.b14_1 | 0;
    result = imul(result, 31) + this.c14_1 | 0;
    return result;
  };
  protoOf(Expected).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Expected))
      return false;
    if (!(this.z13_1 === other.z13_1))
      return false;
    if (!(this.a14_1 === other.a14_1))
      return false;
    if (!(this.b14_1 === other.b14_1))
      return false;
    if (!(this.c14_1 === other.c14_1))
      return false;
    return true;
  };
  function Companion_11() {
  }
  var Companion_instance_13;
  function Companion_getInstance_12() {
    return Companion_instance_13;
  }
  function $serializer_11() {
    $serializer_instance_11 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.LicenceRef', this, 2);
    tmp0_serialDesc.ej('spdx', false);
    tmp0_serialDesc.ej('url', false);
    this.d14_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).e14 = function (encoder, value) {
    var tmp0_desc = this.d14_1;
    var tmp1_output = encoder.we(tmp0_desc);
    tmp1_output.tf(tmp0_desc, 0, value.f14_1);
    tmp1_output.tf(tmp0_desc, 1, value.g14_1);
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_11).nd = function (encoder, value) {
    return this.e14(encoder, value instanceof LicenceRef ? value : THROW_CCE());
  };
  protoOf($serializer_11).od = function (decoder) {
    var tmp0_desc = this.d14_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.we(tmp0_desc);
    if (tmp6_input.gf()) {
      tmp4_local0 = tmp6_input.bf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.bf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.bf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.bf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.xe(tmp0_desc);
    return LicenceRef_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_11).md = function () {
    return this.d14_1;
  };
  protoOf($serializer_11).gj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_11;
  function $serializer_getInstance_11() {
    if ($serializer_instance_11 == null)
      new $serializer_11();
    return $serializer_instance_11;
  }
  function LicenceRef_init_$Init$(seen0, spdx, url, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance_11().d14_1);
    }
    $this.f14_1 = spdx;
    $this.g14_1 = url;
    return $this;
  }
  function LicenceRef_init_$Create$(seen0, spdx, url, serializationConstructorMarker) {
    return LicenceRef_init_$Init$(seen0, spdx, url, serializationConstructorMarker, objectCreate(protoOf(LicenceRef)));
  }
  function LicenceRef(spdx, url) {
    this.f14_1 = spdx;
    this.g14_1 = url;
  }
  protoOf(LicenceRef).toString = function () {
    return 'LicenceRef(spdx=' + this.f14_1 + ', url=' + this.g14_1 + ')';
  };
  protoOf(LicenceRef).hashCode = function () {
    var result = getStringHashCode(this.f14_1);
    result = imul(result, 31) + getStringHashCode(this.g14_1) | 0;
    return result;
  };
  protoOf(LicenceRef).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LicenceRef))
      return false;
    if (!(this.f14_1 === other.f14_1))
      return false;
    if (!(this.g14_1 === other.g14_1))
      return false;
    return true;
  };
  function Companion_12() {
  }
  var Companion_instance_14;
  function Companion_getInstance_13() {
    return Companion_instance_14;
  }
  function $serializer_12() {
    $serializer_instance_12 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.Attribution', this, 4);
    tmp0_serialDesc.ej('title', false);
    tmp0_serialDesc.ej('author', false);
    tmp0_serialDesc.ej('url', false);
    tmp0_serialDesc.ej('copyright', false);
    this.h14_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).i14 = function (encoder, value) {
    var tmp0_desc = this.h14_1;
    var tmp1_output = encoder.we(tmp0_desc);
    tmp1_output.tf(tmp0_desc, 0, value.j14_1);
    tmp1_output.tf(tmp0_desc, 1, value.k14_1);
    tmp1_output.tf(tmp0_desc, 2, value.l14_1);
    tmp1_output.tf(tmp0_desc, 3, value.m14_1);
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_12).nd = function (encoder, value) {
    return this.i14(encoder, value instanceof Attribution ? value : THROW_CCE());
  };
  protoOf($serializer_12).od = function (decoder) {
    var tmp0_desc = this.h14_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.we(tmp0_desc);
    if (tmp8_input.gf()) {
      tmp4_local0 = tmp8_input.bf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.bf(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.bf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.bf(tmp0_desc, 3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.bf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.bf(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.bf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.bf(tmp0_desc, 3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.xe(tmp0_desc);
    return Attribution_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_12).md = function () {
    return this.h14_1;
  };
  protoOf($serializer_12).gj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_12;
  function $serializer_getInstance_12() {
    if ($serializer_instance_12 == null)
      new $serializer_12();
    return $serializer_instance_12;
  }
  function Attribution_init_$Init$(seen0, title, author, url, copyright, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_12().h14_1);
    }
    $this.j14_1 = title;
    $this.k14_1 = author;
    $this.l14_1 = url;
    $this.m14_1 = copyright;
    return $this;
  }
  function Attribution_init_$Create$(seen0, title, author, url, copyright, serializationConstructorMarker) {
    return Attribution_init_$Init$(seen0, title, author, url, copyright, serializationConstructorMarker, objectCreate(protoOf(Attribution)));
  }
  function Attribution(title, author, url, copyright) {
    this.j14_1 = title;
    this.k14_1 = author;
    this.l14_1 = url;
    this.m14_1 = copyright;
  }
  protoOf(Attribution).toString = function () {
    return 'Attribution(title=' + this.j14_1 + ', author=' + this.k14_1 + ', url=' + this.l14_1 + ', copyright=' + this.m14_1 + ')';
  };
  protoOf(Attribution).hashCode = function () {
    var result = getStringHashCode(this.j14_1);
    result = imul(result, 31) + getStringHashCode(this.k14_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.l14_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.m14_1) | 0;
    return result;
  };
  protoOf(Attribution).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Attribution))
      return false;
    if (!(this.j14_1 === other.j14_1))
      return false;
    if (!(this.k14_1 === other.k14_1))
      return false;
    if (!(this.l14_1 === other.l14_1))
      return false;
    if (!(this.m14_1 === other.m14_1))
      return false;
    return true;
  };
  function TextLicence$Companion$$childSerializers$_anonymous__q38v7q() {
    return new ArrayListSerializer(StringSerializer_getInstance());
  }
  function Companion_13() {
    Companion_instance_15 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.n14_1 = [null, null, null, lazy(tmp_0, TextLicence$Companion$$childSerializers$_anonymous__q38v7q)];
  }
  var Companion_instance_15;
  function Companion_getInstance_14() {
    if (Companion_instance_15 == null)
      new Companion_13();
    return Companion_instance_15;
  }
  function $serializer_13() {
    $serializer_instance_13 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.TextLicence', this, 4);
    tmp0_serialDesc.ej('license', false);
    tmp0_serialDesc.ej('attribution', false);
    tmp0_serialDesc.ej('upstreamSource', false);
    tmp0_serialDesc.ej('modifications', false);
    this.o14_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).p14 = function (encoder, value) {
    var tmp0_desc = this.o14_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().n14_1;
    tmp1_output.uf(tmp0_desc, 0, $serializer_getInstance_11(), value.q14_1);
    tmp1_output.uf(tmp0_desc, 1, $serializer_getInstance_12(), value.r14_1);
    tmp1_output.tf(tmp0_desc, 2, value.s14_1);
    tmp1_output.uf(tmp0_desc, 3, tmp2_cached[3].p1(), value.t14_1);
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_13).nd = function (encoder, value) {
    return this.p14(encoder, value instanceof TextLicence ? value : THROW_CCE());
  };
  protoOf($serializer_13).od = function (decoder) {
    var tmp0_desc = this.o14_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.we(tmp0_desc);
    var tmp9_cached = Companion_getInstance_14().n14_1;
    if (tmp8_input.gf()) {
      tmp4_local0 = tmp8_input.cf(tmp0_desc, 0, $serializer_getInstance_11(), tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.cf(tmp0_desc, 1, $serializer_getInstance_12(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.bf(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.cf(tmp0_desc, 3, tmp9_cached[3].p1(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.cf(tmp0_desc, 0, $serializer_getInstance_11(), tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.cf(tmp0_desc, 1, $serializer_getInstance_12(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.bf(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.cf(tmp0_desc, 3, tmp9_cached[3].p1(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.xe(tmp0_desc);
    return TextLicence_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_13).md = function () {
    return this.o14_1;
  };
  protoOf($serializer_13).gj = function () {
    var tmp0_cached = Companion_getInstance_14().n14_1;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [$serializer_getInstance_11(), $serializer_getInstance_12(), StringSerializer_getInstance(), tmp0_cached[3].p1()];
  };
  var $serializer_instance_13;
  function $serializer_getInstance_13() {
    if ($serializer_instance_13 == null)
      new $serializer_13();
    return $serializer_instance_13;
  }
  function TextLicence_init_$Init$(seen0, license, attribution, upstreamSource, modifications, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_13().o14_1);
    }
    $this.q14_1 = license;
    $this.r14_1 = attribution;
    $this.s14_1 = upstreamSource;
    $this.t14_1 = modifications;
    return $this;
  }
  function TextLicence_init_$Create$(seen0, license, attribution, upstreamSource, modifications, serializationConstructorMarker) {
    return TextLicence_init_$Init$(seen0, license, attribution, upstreamSource, modifications, serializationConstructorMarker, objectCreate(protoOf(TextLicence)));
  }
  function TextLicence(license, attribution, upstreamSource, modifications) {
    Companion_getInstance_14();
    this.q14_1 = license;
    this.r14_1 = attribution;
    this.s14_1 = upstreamSource;
    this.t14_1 = modifications;
  }
  protoOf(TextLicence).toString = function () {
    return 'TextLicence(license=' + this.q14_1.toString() + ', attribution=' + this.r14_1.toString() + ', upstreamSource=' + this.s14_1 + ', modifications=' + toString(this.t14_1) + ')';
  };
  protoOf(TextLicence).hashCode = function () {
    var result = this.q14_1.hashCode();
    result = imul(result, 31) + this.r14_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.s14_1) | 0;
    result = imul(result, 31) + hashCode(this.t14_1) | 0;
    return result;
  };
  protoOf(TextLicence).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLicence))
      return false;
    if (!this.q14_1.equals(other.q14_1))
      return false;
    if (!this.r14_1.equals(other.r14_1))
      return false;
    if (!(this.s14_1 === other.s14_1))
      return false;
    if (!equals_0(this.t14_1, other.t14_1))
      return false;
    return true;
  };
  function Companion_14() {
  }
  var Companion_instance_16;
  function Companion_getInstance_15() {
    return Companion_instance_16;
  }
  function $serializer_14() {
    $serializer_instance_14 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.ImageLicence', this, 4);
    tmp0_serialDesc.ej('owner', false);
    tmp0_serialDesc.ej('copyright', false);
    tmp0_serialDesc.ej('license', false);
    tmp0_serialDesc.ej('note', false);
    this.u14_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).v14 = function (encoder, value) {
    var tmp0_desc = this.u14_1;
    var tmp1_output = encoder.we(tmp0_desc);
    tmp1_output.tf(tmp0_desc, 0, value.w14_1);
    tmp1_output.wf(tmp0_desc, 1, StringSerializer_getInstance(), value.x14_1);
    tmp1_output.wf(tmp0_desc, 2, $serializer_getInstance_11(), value.y14_1);
    tmp1_output.wf(tmp0_desc, 3, StringSerializer_getInstance(), value.z14_1);
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_14).nd = function (encoder, value) {
    return this.v14(encoder, value instanceof ImageLicence ? value : THROW_CCE());
  };
  protoOf($serializer_14).od = function (decoder) {
    var tmp0_desc = this.u14_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.we(tmp0_desc);
    if (tmp8_input.gf()) {
      tmp4_local0 = tmp8_input.bf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp8_input.ef(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp8_input.ef(tmp0_desc, 2, $serializer_getInstance_11(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp8_input.ef(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp8_input.hf(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp8_input.bf(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp8_input.ef(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp8_input.ef(tmp0_desc, 2, $serializer_getInstance_11(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp8_input.ef(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp8_input.xe(tmp0_desc);
    return ImageLicence_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, null);
  };
  protoOf($serializer_14).md = function () {
    return this.u14_1;
  };
  protoOf($serializer_14).gj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable($serializer_getInstance_11()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_14;
  function $serializer_getInstance_14() {
    if ($serializer_instance_14 == null)
      new $serializer_14();
    return $serializer_instance_14;
  }
  function ImageLicence_init_$Init$(seen0, owner, copyright, license, note, serializationConstructorMarker, $this) {
    if (!(15 === (15 & seen0))) {
      throwMissingFieldException(seen0, 15, $serializer_getInstance_14().u14_1);
    }
    $this.w14_1 = owner;
    $this.x14_1 = copyright;
    $this.y14_1 = license;
    $this.z14_1 = note;
    return $this;
  }
  function ImageLicence_init_$Create$(seen0, owner, copyright, license, note, serializationConstructorMarker) {
    return ImageLicence_init_$Init$(seen0, owner, copyright, license, note, serializationConstructorMarker, objectCreate(protoOf(ImageLicence)));
  }
  function ImageLicence(owner, copyright, license, note) {
    this.w14_1 = owner;
    this.x14_1 = copyright;
    this.y14_1 = license;
    this.z14_1 = note;
  }
  protoOf(ImageLicence).toString = function () {
    return 'ImageLicence(owner=' + this.w14_1 + ', copyright=' + this.x14_1 + ', license=' + toString_0(this.y14_1) + ', note=' + this.z14_1 + ')';
  };
  protoOf(ImageLicence).hashCode = function () {
    var result = getStringHashCode(this.w14_1);
    result = imul(result, 31) + (this.x14_1 == null ? 0 : getStringHashCode(this.x14_1)) | 0;
    result = imul(result, 31) + (this.y14_1 == null ? 0 : this.y14_1.hashCode()) | 0;
    result = imul(result, 31) + (this.z14_1 == null ? 0 : getStringHashCode(this.z14_1)) | 0;
    return result;
  };
  protoOf(ImageLicence).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImageLicence))
      return false;
    if (!(this.w14_1 === other.w14_1))
      return false;
    if (!(this.x14_1 == other.x14_1))
      return false;
    if (!equals_0(this.y14_1, other.y14_1))
      return false;
    if (!(this.z14_1 == other.z14_1))
      return false;
    return true;
  };
  function Companion_15() {
  }
  var Companion_instance_17;
  function Companion_getInstance_16() {
    return Companion_instance_17;
  }
  function $serializer_15() {
    $serializer_instance_15 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.vocabloot.deckpack.StickerInfo', this, 3);
    tmp0_serialDesc.ej('tool', false);
    tmp0_serialDesc.ej('size', false);
    tmp0_serialDesc.ej('palette', false);
    this.a15_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).b15 = function (encoder, value) {
    var tmp0_desc = this.a15_1;
    var tmp1_output = encoder.we(tmp0_desc);
    tmp1_output.tf(tmp0_desc, 0, value.c15_1);
    tmp1_output.rf(tmp0_desc, 1, value.d15_1);
    tmp1_output.rf(tmp0_desc, 2, value.e15_1);
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_15).nd = function (encoder, value) {
    return this.b15(encoder, value instanceof StickerInfo ? value : THROW_CCE());
  };
  protoOf($serializer_15).od = function (decoder) {
    var tmp0_desc = this.a15_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = 0;
    var tmp6_local2 = 0;
    var tmp7_input = decoder.we(tmp0_desc);
    if (tmp7_input.gf()) {
      tmp4_local0 = tmp7_input.bf(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.ze(tmp0_desc, 1);
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
            tmp5_local1 = tmp7_input.ze(tmp0_desc, 1);
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
    return StickerInfo_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_15).md = function () {
    return this.a15_1;
  };
  protoOf($serializer_15).gj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), IntSerializer_getInstance(), IntSerializer_getInstance()];
  };
  var $serializer_instance_15;
  function $serializer_getInstance_15() {
    if ($serializer_instance_15 == null)
      new $serializer_15();
    return $serializer_instance_15;
  }
  function StickerInfo_init_$Init$(seen0, tool, size, palette, serializationConstructorMarker, $this) {
    if (!(7 === (7 & seen0))) {
      throwMissingFieldException(seen0, 7, $serializer_getInstance_15().a15_1);
    }
    $this.c15_1 = tool;
    $this.d15_1 = size;
    $this.e15_1 = palette;
    return $this;
  }
  function StickerInfo_init_$Create$(seen0, tool, size, palette, serializationConstructorMarker) {
    return StickerInfo_init_$Init$(seen0, tool, size, palette, serializationConstructorMarker, objectCreate(protoOf(StickerInfo)));
  }
  function StickerInfo(tool, size, palette) {
    this.c15_1 = tool;
    this.d15_1 = size;
    this.e15_1 = palette;
  }
  protoOf(StickerInfo).toString = function () {
    return 'StickerInfo(tool=' + this.c15_1 + ', size=' + this.d15_1 + ', palette=' + this.e15_1 + ')';
  };
  protoOf(StickerInfo).hashCode = function () {
    var result = getStringHashCode(this.c15_1);
    result = imul(result, 31) + this.d15_1 | 0;
    result = imul(result, 31) + this.e15_1 | 0;
    return result;
  };
  protoOf(StickerInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StickerInfo))
      return false;
    if (!(this.c15_1 === other.c15_1))
      return false;
    if (!(this.d15_1 === other.d15_1))
      return false;
    if (!(this.e15_1 === other.e15_1))
      return false;
    return true;
  };
  function PackException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, PackException);
  }
  function Result(bytes, cards, stickers, ids) {
    this.q11_1 = bytes;
    this.r11_1 = cards;
    this.s11_1 = stickers;
    this.t11_1 = ids;
  }
  protoOf(Result).toString = function () {
    return 'Result(bytes=' + toString(this.q11_1) + ', cards=' + this.r11_1 + ', stickers=' + this.s11_1 + ', ids=' + toString(this.t11_1) + ')';
  };
  protoOf(Result).hashCode = function () {
    var result = hashCode(this.q11_1);
    result = imul(result, 31) + this.r11_1 | 0;
    result = imul(result, 31) + this.s11_1 | 0;
    result = imul(result, 31) + hashCode(this.t11_1) | 0;
    return result;
  };
  protoOf(Result).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Result))
      return false;
    if (!equals_0(this.q11_1, other.q11_1))
      return false;
    if (!(this.r11_1 === other.r11_1))
      return false;
    if (!(this.s11_1 === other.s11_1))
      return false;
    if (!equals_0(this.t11_1, other.t11_1))
      return false;
    return true;
  };
  function daysFromCivil($this, y0, m, d) {
    var y = m <= 2 ? y0 - 1 | 0 : y0;
    var era = (y >= 0 ? y : y - 399 | 0) / 400 | 0;
    var yoe = y - imul(era, 400) | 0;
    var doy = (((imul(153, m + (m > 2 ? -3 : 9) | 0) + 2 | 0) / 5 | 0) + d | 0) - 1 | 0;
    var doe = ((imul(yoe, 365) + (yoe / 4 | 0) | 0) - (yoe / 100 | 0) | 0) + doy | 0;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = multiply(numberToLong(era), new Long(146097, 0));
    var tmp$ret$0 = add(this_0, fromInt(doe));
    return subtract(tmp$ret$0, new Long(719468, 0));
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.f15_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).oa = function (a, b) {
    return this.f15_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.oa(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).h2 = function () {
    return this.f15_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals_0(this.h2(), other.h2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.h2());
  };
  function Packer$json$lambda($this$Json) {
    $this$Json.gq_1 = true;
    $this$Json.iq_1 = true;
    return Unit_instance;
  }
  function Packer$pack$lambda(it) {
    return '  ' + it;
  }
  function Packer$pack$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.lm_1;
    var tmp$ret$2 = b.lm_1;
    return compareValues(tmp, tmp$ret$2);
  }
  function Packer$pack$lambda_1($chunks) {
    return function (it) {
      var tmp0 = $chunks;
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.collections.plusAssign' call
      var element = it.slice();
      tmp0.e(element);
      return Unit_instance;
    };
  }
  function Packer() {
    Packer_instance = this;
    this.k11_1 = 'deck-kit-packer/1';
    var tmp = this;
    tmp.l11_1 = Json(VOID, Packer$json$lambda);
    this.m11_1 = mapOf([to('CC-BY-SA-4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'), to('CC-BY-4.0', 'https://creativecommons.org/licenses/by/4.0/'), to('CC-BY-NC-SA-4.0', 'https://creativecommons.org/licenses/by-nc-sa/4.0/'), to('CC0-1.0', 'https://creativecommons.org/publicdomain/zero/1.0/')]);
  }
  protoOf(Packer).p11 = function (folder) {
    var problems = Gates_instance.ez(folder);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!problems.o()) {
      throw new PackException('Refusing to pack:\n' + joinToString(problems, '\n', VOID, VOID, VOID, VOID, Packer$pack$lambda));
    }
    var deck = folder.fz_1;
    var salt = CardId_getInstance().bn(deck.lz_1);
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = folder.hz_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var tmp$ret$3 = element.b10_1;
      destination.w1(tmp$ret$3, element);
    }
    var loc = destination;
    // Inline function 'kotlin.text.ifBlank' call
    var this_1 = deck.yz_1;
    var tmp;
    if (isBlank(this_1)) {
      tmp = deck.xz_1;
    } else {
      tmp = this_1;
    }
    var tmp$ret$4 = tmp;
    var builtAt = this.g15(tmp$ret$4);
    // Inline function 'kotlin.collections.associate' call
    var this_2 = folder.gz_1;
    var capacity_0 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_2, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination_0 = LinkedHashMap_init_$Create$(capacity_0);
    var _iterator__ex2g4s_0 = this_2.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element_0.e10_1, CardId_getInstance().an(element_0.e10_1, salt));
      destination_0.w1(pair.lb_1, pair.mb_1);
    }
    var ids = destination_0;
    if (!(toSet(ids.u1()).k() === ids.k()))
      throw new PackException('Refusing to pack: two cards minted the same id; change a key');
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_3 = folder.gz_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_3, 10));
    var index = 0;
    var _iterator__ex2g4s_1 = this_3.g();
    while (_iterator__ex2g4s_1.h()) {
      var item = _iterator__ex2g4s_1.i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var l = getValue(loc, item.e10_1);
      var tmp_0 = getValue(ids, item.e10_1);
      // Inline function 'kotlin.collections.mapIndexed' call
      var this_4 = item.n10_1;
      // Inline function 'kotlin.collections.mapIndexedTo' call
      var destination_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_4, 10));
      var index_1 = 0;
      var _iterator__ex2g4s_2 = this_4.g();
      while (_iterator__ex2g4s_2.h()) {
        var item_0 = _iterator__ex2g4s_2.i();
        var _unary__edvuaz_0 = index_1;
        index_1 = _unary__edvuaz_0 + 1 | 0;
        var i = checkIndexOverflow(_unary__edvuaz_0);
        var lt = l.d10_1.j(i);
        // Inline function 'kotlin.collections.mapIndexed' call
        var this_5 = item_0.q10_1;
        // Inline function 'kotlin.collections.mapIndexedTo' call
        var destination_3 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_5, 10));
        var index_2 = 0;
        var _iterator__ex2g4s_3 = this_5.g();
        while (_iterator__ex2g4s_3.h()) {
          var item_1 = _iterator__ex2g4s_3.i();
          var _unary__edvuaz_1 = index_2;
          index_2 = _unary__edvuaz_1 + 1 | 0;
          var j = checkIndexOverflow(_unary__edvuaz_1);
          var tmp$ret$18 = new WordExampleTokenEntry(item_1.r10_1, item_1.s10_1, item_1.t10_1, item_1.u10_1, lt.c11_1.j(j).d11_1, item_1.v10_1, item_1.w10_1, item_1.x10_1, item_1.y10_1, item_1.z10_1);
          destination_3.e(tmp$ret$18);
        }
        var tmp$ret$15 = new WordExampleEntry(item_0.p10_1, lt.b11_1, destination_3);
        destination_2.e(tmp$ret$15);
      }
      var tmp_1 = new WordEntry(item.f10_1, l.c10_1, item.k10_1, item.j10_1, destination_2, item.g10_1, item.h10_1, item.i10_1, item.l10_1, null, emptyList());
      var tmp_2 = subtract(builtAt, multiply(numberToLong(index_0), new Long(1000, 0)));
      var tmp_3;
      if (folder.iz_1.q1(item.e10_1) && !(item.m10_1.e11_1 === 'text-first')) {
        // Inline function 'kotlin.text.isNullOrBlank' call
        var this_6 = item.m10_1.f11_1;
        tmp_3 = !(this_6 == null || isBlank(this_6));
      } else {
        tmp_3 = false;
      }
      var tmp$ret$12 = new WordSnapEntry(tmp_0, tmp_1, deck.oz_1, tmp_2, false, false, tmp_3, emptyMap(), deck.pz_1, true, mapOf_0(to(deck.oz_1, new TranslationMetaEntry('deck', builtAt, 1))));
      destination_1.e(tmp$ret$12);
    }
    var entries = destination_1;
    var tmp$ret$20;
    $l$block: {
      // Inline function 'kotlin.collections.count' call
      var tmp_4;
      if (isInterface(entries, Collection)) {
        tmp_4 = entries.o();
      } else {
        tmp_4 = false;
      }
      if (tmp_4) {
        tmp$ret$20 = 0;
        break $l$block;
      }
      var count = 0;
      var _iterator__ex2g4s_4 = entries.g();
      while (_iterator__ex2g4s_4.h()) {
        var element_1 = _iterator__ex2g4s_4.i();
        if (element_1.ln_1) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$20 = count;
    }
    var stickerCount = tmp$ret$20;
    var manifest = new WordbookManifest(1, entries);
    var header = new BackupHeader(1, builtAt, 'deck-kit-packer/1', entries.k());
    var tmp0_elvis_lhs = this.m11_1.s1(deck.vz_1);
    var licence = new LicenceRef(deck.vz_1, tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    var tmp_5 = deck.pz_1 + '-to-' + deck.oz_1;
    var tmp_6 = new Expected(folder.gz_1.k(), entries.k(), stickerCount, entries.k() - stickerCount | 0);
    var tmp1_safe_receiver = deck.wz_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.y11_1;
    var tmp_7;
    if (tmp2_safe_receiver == null) {
      tmp_7 = null;
    } else {
      // Inline function 'kotlin.text.ifBlank' call
      var tmp_8;
      if (isBlank(tmp2_safe_receiver)) {
        tmp_8 = null;
      } else {
        tmp_8 = tmp2_safe_receiver;
      }
      tmp_7 = tmp_8;
    }
    var tmp3_elvis_lhs = tmp_7;
    var tmp_9 = tmp3_elvis_lhs == null ? deck.mz_1 : tmp3_elvis_lhs;
    var tmp4_safe_receiver = deck.wz_1;
    var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.z11_1;
    var tmp_10;
    if (tmp5_safe_receiver == null) {
      tmp_10 = null;
    } else {
      // Inline function 'kotlin.text.ifBlank' call
      var tmp_11;
      if (isBlank(tmp5_safe_receiver)) {
        tmp_11 = null;
      } else {
        tmp_11 = tmp5_safe_receiver;
      }
      tmp_10 = tmp_11;
    }
    var tmp6_elvis_lhs = tmp_10;
    var tmp_12 = tmp6_elvis_lhs == null ? deck.uz_1 : tmp6_elvis_lhs;
    var tmp7_safe_receiver = deck.wz_1;
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.a12_1;
    var tmp_13 = tmp8_elvis_lhs == null ? '' : tmp8_elvis_lhs;
    // Inline function 'kotlin.text.ifBlank' call
    var this_7 = take(deck.xz_1, 4);
    var tmp_14;
    if (isBlank(this_7)) {
      tmp_14 = '2026';
    } else {
      tmp_14 = this_7;
    }
    var tmp$ret$26 = tmp_14;
    var tmp_15 = new Attribution(tmp_9, tmp_12, tmp_13, '\xA9 ' + tmp$ret$26 + ' ' + deck.uz_1);
    var tmp9_safe_receiver = deck.wz_1;
    var tmp10_safe_receiver = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.b12_1;
    var tmp_16;
    if (tmp10_safe_receiver == null) {
      tmp_16 = null;
    } else {
      // Inline function 'kotlin.text.ifBlank' call
      var tmp_17;
      if (isBlank(tmp10_safe_receiver)) {
        tmp_17 = null;
      } else {
        tmp_17 = tmp10_safe_receiver;
      }
      tmp_16 = tmp_17;
    }
    var tmp11_elvis_lhs = tmp_16;
    var tmp_18 = new TextLicence(licence, tmp_15, tmp11_elvis_lhs == null ? 'Made with the Vocabloot Deck Kit by ' + deck.uz_1 + '.' : tmp11_elvis_lhs, emptyList());
    // Inline function 'kotlin.text.ifBlank' call
    var this_8 = take(deck.xz_1, 4);
    var tmp_19;
    if (isBlank(this_8)) {
      tmp_19 = '2026';
    } else {
      tmp_19 = this_8;
    }
    var tmp$ret$30 = tmp_19;
    var packaged = new PackagedDeck(VOID, deck.lz_1, deck.mz_1, deck.nz_1, deck.oz_1, deck.pz_1, deck.oz_1, deck.pz_1, tmp_5, deck.sz_1, deck.rz_1, VOID, VOID, tmp_6, tmp_18, new ImageLicence(deck.uz_1, '\xA9 ' + tmp$ret$30 + ' ' + deck.uz_1, licence, null), new StickerInfo('vocabloot-deck-kit', 768, 255), entries.k(), stickerCount, entries.k() - stickerCount | 0, builtAt, 'deck-kit-packer/1', 'kit:' + deck.yz_1, 'kit:' + deck.a10_1);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_4 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_5 = entries.g();
    while (_iterator__ex2g4s_5.h()) {
      var element_2 = _iterator__ex2g4s_5.i();
      if (element_2.ln_1) {
        destination_4.e(element_2);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_5 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_4, 10));
    var _iterator__ex2g4s_6 = destination_4.g();
    while (_iterator__ex2g4s_6.h()) {
      var item_2 = _iterator__ex2g4s_6.i();
      var tmp0 = folder.gz_1;
      var tmp$ret$38;
      $l$block_0: {
        // Inline function 'kotlin.collections.first' call
        var _iterator__ex2g4s_7 = tmp0.g();
        while (_iterator__ex2g4s_7.h()) {
          var element_3 = _iterator__ex2g4s_7.i();
          if (ids.s1(element_3.e10_1) === item_2.fn_1) {
            tmp$ret$38 = element_3;
            break $l$block_0;
          }
        }
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var key = tmp$ret$38.e10_1;
      var tmp$ret$37 = new Entry(BackupPackage_getInstance().fm(item_2.fn_1), getValue(folder.iz_1, key));
      destination_5.e(tmp$ret$37);
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_20 = Packer$pack$lambda_0;
    var tmp$ret$41 = new sam$kotlin_Comparator$0(tmp_20);
    var stickerEntries = sortedWith(destination_5, tmp$ret$41);
    var containerEntries = plus(listOf([new Entry('backup.json', encodeToByteArray(this.l11_1.pp(Companion_instance.dl(), header))), new Entry('manifest.json', encodeToByteArray(this.l11_1.pp(Companion_getInstance().dl(), manifest))), new Entry('doodles.json', encodeToByteArray('{}')), new Entry('settings.json', encodeToByteArray(this.l11_1.pp(Companion_instance_0.dl(), new BackupSettings()))), new Entry('deck.json', encodeToByteArray(this.l11_1.pp(Companion_instance_11.dl(), packaged)))]), stickerEntries);
    var chunks = ArrayList_init_$Create$();
    var tmp_21 = BinaryContainer_getInstance();
    tmp_21.wm('SLBK1', containerEntries, VOID, Packer$pack$lambda_1(chunks));
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var _iterator__ex2g4s_8 = chunks.g();
    while (_iterator__ex2g4s_8.h()) {
      var element_4 = _iterator__ex2g4s_8.i();
      var tmp_22 = sum;
      sum = tmp_22 + element_4.length | 0;
    }
    var total = sum;
    var bytes = new Int8Array(total);
    var offset = 0;
    var _iterator__ex2g4s_9 = chunks.g();
    while (_iterator__ex2g4s_9.h()) {
      var c = _iterator__ex2g4s_9.i();
      // Inline function 'kotlin.collections.copyInto' call
      var destinationOffset = offset;
      var endIndex = c.length;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_23 = c;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_23, bytes, destinationOffset, 0, endIndex);
      offset = offset + c.length | 0;
    }
    return new Result(bytes, entries.k(), stickerCount, ids);
  };
  protoOf(Packer).g15 = function (iso) {
    if (isBlank(iso))
      return new Long(0, 0);
    var tmp0_elvis_lhs = Regex_init_$Create$('^(\\d{4})-(\\d{2})-(\\d{2})').w9(iso);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw new PackException("deck.json updatedAt must start with YYYY-MM-DD, got '" + iso + "'");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var date = tmp;
    // Inline function 'kotlin.collections.map' call
    var this_0 = date.ma().uc();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var item = _iterator__ex2g4s.i();
      var tmp$ret$2 = toInt(item);
      destination.e(tmp$ret$2);
    }
    // Inline function 'kotlin.collections.component1' call
    var y = destination.j(0);
    // Inline function 'kotlin.collections.component2' call
    var m = destination.j(1);
    // Inline function 'kotlin.collections.component3' call
    var d = destination.j(2);
    var time = Regex_init_$Create$('T(\\d{2}):(\\d{2})(?::(\\d{2}))?').w9(iso);
    var tmp_0;
    if (time == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_1 = toInt(time.la().j(1));
      var tmp_2 = toInt(time.la().j(2));
      // Inline function 'kotlin.text.ifBlank' call
      var this_1 = time.la().j(3);
      var tmp_3;
      if (isBlank(this_1)) {
        tmp_3 = '0';
      } else {
        tmp_3 = this_1;
      }
      var tmp$ret$8 = tmp_3;
      tmp_0 = new Triple(tmp_1, tmp_2, toInt(tmp$ret$8));
    }
    var tmp2_elvis_lhs = tmp_0;
    var _destruct__k2r9zo = tmp2_elvis_lhs == null ? new Triple(0, 0, 0) : tmp2_elvis_lhs;
    var hh = _destruct__k2r9zo.cb();
    var mm = _destruct__k2r9zo.db();
    var ss = _destruct__k2r9zo.ld();
    var tmp_4 = multiply(daysFromCivil(this, y, m, d), new Long(86400000, 0));
    // Inline function 'kotlin.Long.plus' call
    var this_2 = add(multiply(numberToLong(hh), new Long(3600, 0)), multiply(numberToLong(mm), new Long(60, 0)));
    var tmp$ret$10 = add(this_2, fromInt(ss));
    return add(tmp_4, multiply(tmp$ret$10, new Long(1000, 0)));
  };
  var Packer_instance;
  function Packer_getInstance() {
    if (Packer_instance == null)
      new Packer();
    return Packer_instance;
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
  protoOf($serializer_7).hj = typeParametersSerializers;
  protoOf($serializer_8).hj = typeParametersSerializers;
  protoOf($serializer_9).hj = typeParametersSerializers;
  protoOf($serializer_10).hj = typeParametersSerializers;
  protoOf($serializer_11).hj = typeParametersSerializers;
  protoOf($serializer_12).hj = typeParametersSerializers;
  protoOf($serializer_13).hj = typeParametersSerializers;
  protoOf($serializer_14).hj = typeParametersSerializers;
  protoOf($serializer_15).hj = typeParametersSerializers;
  //endregion
  //region block: init
  Gates_instance = new Gates();
  Companion_instance_1 = new Companion();
  Companion_instance_2 = new Companion_0();
  Companion_instance_3 = new Companion_1();
  Companion_instance_11 = new Companion_9();
  Companion_instance_12 = new Companion_10();
  Companion_instance_13 = new Companion_11();
  Companion_instance_14 = new Companion_12();
  Companion_instance_16 = new Companion_14();
  Companion_instance_17 = new Companion_15();
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=SnapLingo-web-deck-pack.js.map
