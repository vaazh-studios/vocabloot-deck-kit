(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './SnapLingo-shared-format.js', './SnapLingo-shared-reading.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./SnapLingo-shared-format.js'), require('./SnapLingo-shared-reading.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'SnapLingo.web:deck-pack'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'SnapLingo.web:deck-pack'.");
    }
    if (typeof globalThis['SnapLingo-shared-format'] === 'undefined') {
      throw new Error("Error loading module 'SnapLingo.web:deck-pack'. Its dependency 'SnapLingo-shared-format' was not found. Please, check whether 'SnapLingo-shared-format' is loaded prior to 'SnapLingo.web:deck-pack'.");
    }
    if (typeof globalThis['SnapLingo-shared-reading'] === 'undefined') {
      throw new Error("Error loading module 'SnapLingo.web:deck-pack'. Its dependency 'SnapLingo-shared-reading' was not found. Please, check whether 'SnapLingo-shared-reading' is loaded prior to 'SnapLingo.web:deck-pack'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'SnapLingo.web:deck-pack'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'SnapLingo.web:deck-pack'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'SnapLingo.web:deck-pack'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'SnapLingo.web:deck-pack'.");
    }
    globalThis['SnapLingo.web:deck-pack'] = factory(typeof globalThis['SnapLingo.web:deck-pack'] === 'undefined' ? {} : globalThis['SnapLingo.web:deck-pack'], globalThis['kotlin-kotlin-stdlib'], globalThis['SnapLingo-shared-format'], globalThis['SnapLingo-shared-reading'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_SnapLingo_shared_format, kotlin_SnapLingo_shared_reading, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.z4;
  var initMetadataForClass = kotlin_kotlin.$_$.m4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var Unit_instance = kotlin_kotlin.$_$.c;
  var isBlank = kotlin_kotlin.$_$.s5;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.p;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.r1;
  var mapCapacity = kotlin_kotlin.$_$.p2;
  var coerceAtLeast = kotlin_kotlin.$_$.d5;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.l;
  var take = kotlin_kotlin.$_$.f6;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.k;
  var PartOfSpeech_getInstance = kotlin_SnapLingo_shared_format.$_$.o;
  var joinToString = kotlin_kotlin.$_$.j2;
  var checkIndexOverflow = kotlin_kotlin.$_$.q1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var validateTokens = kotlin_SnapLingo_shared_reading.$_$.a;
  var getOrNull = kotlin_kotlin.$_$.e2;
  var emptyList = kotlin_kotlin.$_$.a2;
  var addAll = kotlin_kotlin.$_$.n1;
  var charCodeAt = kotlin_kotlin.$_$.c4;
  var isLetterOrDigit = kotlin_kotlin.$_$.t5;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.a1;
  var Collection = kotlin_kotlin.$_$.i1;
  var isInterface = kotlin_kotlin.$_$.u4;
  var substring = kotlin_kotlin.$_$.e6;
  var initMetadataForObject = kotlin_kotlin.$_$.r4;
  var charSequenceLength = kotlin_kotlin.$_$.e4;
  var charSequenceGet = kotlin_kotlin.$_$.d4;
  var isLetter = kotlin_kotlin.$_$.u5;
  var checkCountOverflow = kotlin_kotlin.$_$.p1;
  var withIndex = kotlin_kotlin.$_$.b3;
  var first = kotlin_kotlin.$_$.p5;
  var isUpperCase = kotlin_kotlin.$_$.v5;
  var THROW_CCE = kotlin_kotlin.$_$.q6;
  var isCharSequence = kotlin_kotlin.$_$.t4;
  var trim = kotlin_kotlin.$_$.i6;
  var toString = kotlin_kotlin.$_$.b5;
  var equals = kotlin_kotlin.$_$.o5;
  var take_0 = kotlin_kotlin.$_$.x2;
  var VOID = kotlin_kotlin.$_$.a;
  var ListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var toByte = kotlin_kotlin.$_$.a5;
  var emptyMap = kotlin_kotlin.$_$.b2;
  var isArray = kotlin_kotlin.$_$.s4;
  var drop = kotlin_kotlin.$_$.z1;
  var firstOrNull = kotlin_kotlin.$_$.d2;
  var toTypedArray = kotlin_kotlin.$_$.a3;
  var BackupPackage_getInstance = kotlin_SnapLingo_shared_format.$_$.k;
  var println = kotlin_kotlin.$_$.g3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.n4;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j1;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l1;
  var objectCreate = kotlin_kotlin.$_$.y4;
  var toString_0 = kotlin_kotlin.$_$.a7;
  var getStringHashCode = kotlin_kotlin.$_$.k4;
  var equals_0 = kotlin_kotlin.$_$.h4;
  var ArrayListSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.w6;
  var hashCode = kotlin_kotlin.$_$.l4;
  var BooleanSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var getBooleanHashCode = kotlin_kotlin.$_$.i4;
  var Long = kotlin_kotlin.$_$.p6;
  var LongSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var equalsLong = kotlin_kotlin.$_$.n3;
  var Exception = kotlin_kotlin.$_$.n6;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.s;
  var captureStack = kotlin_kotlin.$_$.z3;
  var numberToLong = kotlin_kotlin.$_$.s3;
  var multiply = kotlin_kotlin.$_$.q3;
  var fromInt = kotlin_kotlin.$_$.o3;
  var add = kotlin_kotlin.$_$.h3;
  var subtract = kotlin_kotlin.$_$.v3;
  var FunctionAdapter = kotlin_kotlin.$_$.x3;
  var Comparator = kotlin_kotlin.$_$.j6;
  var compareValues = kotlin_kotlin.$_$.c3;
  var Json = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var to = kotlin_kotlin.$_$.b7;
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
  var encodeToByteArray = kotlin_kotlin.$_$.n5;
  var Companion_getInstance = kotlin_SnapLingo_shared_format.$_$.p;
  var Companion_instance_0 = kotlin_SnapLingo_shared_format.$_$.l;
  var BackupSettings = kotlin_SnapLingo_shared_format.$_$.b;
  var listOf = kotlin_kotlin.$_$.o2;
  var plus = kotlin_kotlin.$_$.t2;
  var BinaryContainer_getInstance = kotlin_SnapLingo_shared_format.$_$.m;
  var arrayCopy = kotlin_kotlin.$_$.o1;
  var toInt = kotlin_kotlin.$_$.h6;
  var Triple = kotlin_kotlin.$_$.r6;
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
    this.ez_1 = text;
    this.fz_1 = start;
    this.gz_1 = end;
  }
  protoOf(Spoken).np = function () {
    return this.ez_1;
  };
  protoOf(Spoken).cc = function () {
    return this.fz_1;
  };
  protoOf(Spoken).mp = function () {
    return this.gz_1;
  };
  function Gates() {
  }
  protoOf(Gates).hz = function (folder) {
    var problems = ArrayList_init_$Create$();
    var deck = folder.iz_1;
    if (isBlank(deck.oz_1) || !Regex_init_$Create$('^[a-z]{2}(-[a-z]{2})?-[a-z0-9-]{1,40}$').u9(deck.oz_1)) {
      // Inline function 'kotlin.collections.plusAssign' call
      var element = 'deck.id must look like de-greetings';
      problems.e(element);
    }
    if (deck.rz_1 === deck.sz_1) {
      // Inline function 'kotlin.collections.plusAssign' call
      var element_0 = 'learningLanguage and knownLanguage must differ';
      problems.e(element_0);
    }
    var direction = deck.sz_1 + '-to-' + deck.rz_1;
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = deck.tz_1;
    if (!isBlank(this_0)) {
      tmp = !(deck.tz_1 === direction);
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'kotlin.collections.plusAssign' call
      var element_1 = 'direction must be derived: ' + direction;
      problems.e(element_1);
    }
    if (folder.jz_1.o()) {
      // Inline function 'kotlin.collections.plusAssign' call
      var element_2 = 'no cards';
      problems.e(element_2);
    }
    // Inline function 'kotlin.collections.associateBy' call
    var this_1 = folder.kz_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_1, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_1.g();
    while (_iterator__ex2g4s.h()) {
      var element_3 = _iterator__ex2g4s.i();
      var tmp$ret$7 = element_3.e10_1;
      destination.w1(tmp$ret$7, element_3);
    }
    var loc = destination;
    var sameLanguage = take(deck.rz_1, 2) === take(deck.sz_1, 2);
    var keys = HashSet_init_$Create$();
    var _iterator__ex2g4s_0 = folder.jz_1.g();
    $l$loop: while (_iterator__ex2g4s_0.h()) {
      var card = _iterator__ex2g4s_0.i();
      var k = card.h10_1;
      if (!keys.e(k)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_4 = k + ': duplicate key';
        problems.e(element_4);
      }
      var tmp0_elvis_lhs = card.j10_1;
      var tmp_0 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = card.m10_1;
      if (!(k === card.i10_1 + '|' + tmp_0 + '|' + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs))) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_5 = k + ': key must be text|article|partOfSpeech';
        problems.e(element_5);
      }
      if (isBlank(card.i10_1)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_6 = k + ': text is empty';
        problems.e(element_6);
      }
      if (!PartOfSpeech_getInstance().isKnown(card.m10_1)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_7 = k + ": partOfSpeech '" + card.m10_1 + "' is not in the vocabulary (" + joinToString(PartOfSpeech_getInstance().cn_1, ', ') + ')';
        problems.e(element_7);
      }
      if (!(card.q10_1.k() === 2)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_8 = k + ': exactly two example sentences are required, found ' + card.q10_1.k();
        problems.e(element_8);
      }
      var l = loc.s1(k);
      if (l == null) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_9 = k + ': no localization entry';
        problems.e(element_9);
        continue $l$loop;
      }
      if (isBlank(l.f10_1)) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_10 = k + ': translation is empty';
        problems.e(element_10);
      }
      if (!(l.g10_1.k() === card.q10_1.k())) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_11 = k + ': localization has ' + l.g10_1.k() + ' example translations for ' + card.q10_1.k() + ' sentences';
        problems.e(element_11);
      }
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var _iterator__ex2g4s_1 = card.q10_1.g();
      while (_iterator__ex2g4s_1.h()) {
        var item = _iterator__ex2g4s_1.i();
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var i = checkIndexOverflow(_unary__edvuaz);
        var where = k + ' example ' + (i + 1 | 0);
        if (isBlank(item.s10_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element_12 = where + ': empty sentence';
          problems.e(element_12);
        }
        // Inline function 'kotlin.collections.map' call
        var this_2 = item.t10_1;
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
        var _iterator__ex2g4s_2 = this_2.g();
        while (_iterator__ex2g4s_2.h()) {
          var item_0 = _iterator__ex2g4s_2.i();
          var tmp$ret$21 = new Spoken(item_0.u10_1, item_0.v10_1, item_0.w10_1);
          destination_0.e(tmp$ret$21);
        }
        if (!validateTokens(item.s10_1, destination_0)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element_13 = where + ': tokens do not reproduce the sentence (offsets or order)';
          problems.e(element_13);
        } else {
          // Inline function 'kotlin.collections.forEach' call
          var _iterator__ex2g4s_3 = Gates_instance.d11(item.s10_1, item.t10_1).g();
          while (_iterator__ex2g4s_3.h()) {
            var element_14 = _iterator__ex2g4s_3.i();
            // Inline function 'kotlin.collections.plusAssign' call
            var element_15 = where + ": word '" + element_14 + "' has no token";
            problems.e(element_15);
          }
        }
        var lt = getOrNull(l.g10_1, i);
        if (lt == null || isBlank(lt.e11_1)) {
          // Inline function 'kotlin.collections.plusAssign' call
          var element_16 = where + ': no translation';
          problems.e(element_16);
        } else {
          if (!(lt.f11_1.k() === item.t10_1.k())) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_17 = where + ': ' + lt.f11_1.k() + ' token meanings for ' + item.t10_1.k() + ' tokens';
            problems.e(element_17);
          }
          // Inline function 'kotlin.collections.forEachIndexed' call
          var index_0 = 0;
          var _iterator__ex2g4s_4 = lt.f11_1.g();
          while (_iterator__ex2g4s_4.h()) {
            var item_1 = _iterator__ex2g4s_4.i();
            var _unary__edvuaz_0 = index_0;
            index_0 = _unary__edvuaz_0 + 1 | 0;
            var j = checkIndexOverflow(_unary__edvuaz_0);
            if (item_1.g11_1.o() || item_1.g11_1.k() > 3) {
              var tmp0_safe_receiver = getOrNull(item.t10_1, j);
              // Inline function 'kotlin.collections.plusAssign' call
              var element_18 = where + " token '" + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u10_1) + "': one to three meanings required";
              problems.e(element_18);
            }
          }
        }
        // Inline function 'kotlin.collections.forEach' call
        var _iterator__ex2g4s_5 = item.t10_1.g();
        while (_iterator__ex2g4s_5.h()) {
          var element_19 = _iterator__ex2g4s_5.i();
          var tmp_1;
          // Inline function 'kotlin.text.isNullOrBlank' call
          var this_3 = element_19.x10_1;
          if (this_3 == null || isBlank(this_3)) {
            // Inline function 'kotlin.text.isNullOrBlank' call
            var this_4 = element_19.y10_1;
            tmp_1 = this_4 == null || isBlank(this_4);
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_20 = where + " token '" + element_19.u10_1 + "': lemma or part of speech required";
            problems.e(element_20);
          }
          var tmp_2;
          // Inline function 'kotlin.text.isNullOrBlank' call
          var this_5 = element_19.y10_1;
          if (!(this_5 == null || isBlank(this_5))) {
            tmp_2 = !PartOfSpeech_getInstance().isKnown(element_19.y10_1);
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_21 = where + " token '" + element_19.u10_1 + "': partOfSpeech '" + element_19.y10_1 + "' is not in the vocabulary";
            problems.e(element_21);
          }
        }
        var tmp1_elvis_lhs_0 = lt == null ? null : lt.f11_1;
        // Inline function 'kotlin.collections.plusAssign' call
        var elements = lazyTokenProblems(where, item.t10_1, tmp1_elvis_lhs_0 == null ? emptyList() : tmp1_elvis_lhs_0, sameLanguage);
        addAll(problems, elements);
      }
      switch (card.p10_1.h11_1) {
        case 'sticker':
        case 'symbolic':
        case 'contextual':
          var file = card.p10_1.i11_1;
          var status = folder.mz_1.s1(k);
          // Inline function 'kotlin.text.isNullOrBlank' call

          if (file == null || isBlank(file)) {
            if (!(status === 'deferred')) {
              // Inline function 'kotlin.collections.plusAssign' call
              var element_22 = k + ': sticker mode ' + card.p10_1.h11_1 + ' without a file; approve, reject or defer it';
              problems.e(element_22);
            }
          } else {
            if (folder.lz_1.s1(k) == null) {
              // Inline function 'kotlin.collections.plusAssign' call
              var element_23 = k + ': sticker file ' + file + ' is missing';
              problems.e(element_23);
            } else {
              if (!(status === 'approved')) {
                // Inline function 'kotlin.collections.plusAssign' call
                var element_24 = k + ': sticker not approved in review/review.json';
                problems.e(element_24);
              }
            }
          }

          break;
        case 'text-first':
          // Inline function 'kotlin.text.isNullOrBlank' call

          var this_6 = card.p10_1.i11_1;
          if (!(this_6 == null || isBlank(this_6))) {
            // Inline function 'kotlin.collections.plusAssign' call
            var element_25 = k + ': text-first card must not reference a sticker';
            problems.e(element_25);
          }

          break;
        default:
          // Inline function 'kotlin.collections.plusAssign' call

          var element_26 = k + ": unknown sticker mode '" + card.p10_1.h11_1 + "'";
          problems.e(element_26);
          break;
      }
      if (!card.r10_1.l11_1) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_27 = k + ': marked unsafe';
        problems.e(element_27);
      }
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!card.r10_1.m11_1.o()) {
        // Inline function 'kotlin.collections.plusAssign' call
        var element_28 = k + ': unresolved flags: ' + joinToString(card.r10_1.m11_1, ', ');
        problems.e(element_28);
      }
    }
    return problems;
  };
  protoOf(Gates).d11 = function (source, tokens) {
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
          if (element.v10_1 <= i && element.w10_1 >= j) {
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
      var tmp0 = element.u10_1;
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
          var this_0 = element_1.y10_1;
          if (this_0 == null || isBlank(this_0)) {
            tmp_0 = true;
          } else {
            tmp_0 = element_1.y10_1 === 'other';
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
        var i = element_3.db();
        var t = element_3.eb();
        var tmp0_safe_receiver = getOrNull(meanings, i);
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.g11_1;
        var m = tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
        var tmp_1;
        if (t.y10_1 === 'noun' && isUpperCase(first(t.u10_1))) {
          var tmp2_elvis_lhs = t.x10_1;
          tmp_1 = (tmp2_elvis_lhs == null ? t.u10_1 : tmp2_elvis_lhs) === t.u10_1;
        } else {
          tmp_1 = false;
        }
        var isName = tmp_1;
        var tmp_2;
        var tmp_3;
        var tmp_4;
        var tmp0_1 = t.u10_1;
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
          tmp_3 = equals(tmp$ret$15, t.u10_1, true);
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
        var tmp$ret$18 = item.cb_1.u10_1;
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
    var deck = Packer_getInstance().o11_1.sp(Companion_instance_1.dl(), loadFolder$read(dir, 'deck.json'));
    var cards = Packer_getInstance().o11_1.sp(ListSerializer(Companion_getInstance_6().dl()), loadFolder$read(dir, 'cards.json'));
    var locPath = 'localizations/' + deck.sz_1 + '.json';
    if (!loadFolder$exists(dir, locPath))
      throw new PackException(dir + ' has no ' + locPath);
    var localization = Packer_getInstance().o11_1.sp(ListSerializer(Companion_getInstance_9().dl()), loadFolder$read(dir, locPath));
    var stickers = HashMap_init_$Create$();
    var _iterator__ex2g4s = cards.g();
    $l$loop_0: while (_iterator__ex2g4s.h()) {
      var card = _iterator__ex2g4s.i();
      var tmp0_elvis_lhs = card.p10_1.i11_1;
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
      var key = card.h10_1;
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
      var result = Packer_getInstance().s11(folder);
      var tmp_0;
      if (outIndex >= 0 && (outIndex + 1 | 0) < argv.k()) {
        tmp_0 = argv.j(outIndex + 1 | 0);
      } else {
        var tmp_1 = get_path().join(dir, folder.iz_1.oz_1 + '.vlbackup');
        tmp_0 = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE();
      }
      var out = tmp_0;
      var buffer = Buffer.from(toTypedArray(result.t11_1));
      get_fs().writeFileSync(out, buffer);
      var sha = BackupPackage_getInstance().gm(result.t11_1);
      println('packed ' + result.u11_1 + ' cards (' + result.v11_1 + ' with stickers), ' + result.t11_1.length + ' bytes, sha256 ' + sha + ' -> ' + out);
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
    this.x11_1 = tmp0_serialDesc;
  }
  protoOf($serializer).y11 = function (encoder, value) {
    var tmp0_desc = this.x11_1;
    var tmp1_output = encoder.we(tmp0_desc);
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !(value.nz_1 === 1)) {
      tmp1_output.rf(tmp0_desc, 0, value.nz_1);
    }
    tmp1_output.tf(tmp0_desc, 1, value.oz_1);
    tmp1_output.tf(tmp0_desc, 2, value.pz_1);
    if (tmp1_output.ag(tmp0_desc, 3) ? true : !(value.qz_1 === '')) {
      tmp1_output.tf(tmp0_desc, 3, value.qz_1);
    }
    tmp1_output.tf(tmp0_desc, 4, value.rz_1);
    tmp1_output.tf(tmp0_desc, 5, value.sz_1);
    if (tmp1_output.ag(tmp0_desc, 6) ? true : !(value.tz_1 === '')) {
      tmp1_output.tf(tmp0_desc, 6, value.tz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 7) ? true : !(value.uz_1 == null)) {
      tmp1_output.wf(tmp0_desc, 7, StringSerializer_getInstance(), value.uz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 8) ? true : !(value.vz_1 === 'A1')) {
      tmp1_output.tf(tmp0_desc, 8, value.vz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 9) ? true : !(value.wz_1 === 0)) {
      tmp1_output.rf(tmp0_desc, 9, value.wz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 10) ? true : !(value.xz_1 === 'Anonymous')) {
      tmp1_output.tf(tmp0_desc, 10, value.xz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 11) ? true : !(value.yz_1 === 'CC-BY-SA-4.0')) {
      tmp1_output.tf(tmp0_desc, 11, value.yz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 12) ? true : !(value.zz_1 == null)) {
      tmp1_output.wf(tmp0_desc, 12, $serializer_getInstance_0(), value.zz_1);
    }
    if (tmp1_output.ag(tmp0_desc, 13) ? true : !(value.a10_1 === '')) {
      tmp1_output.tf(tmp0_desc, 13, value.a10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 14) ? true : !(value.b10_1 === '')) {
      tmp1_output.tf(tmp0_desc, 14, value.b10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 15) ? true : !(value.c10_1 === '')) {
      tmp1_output.tf(tmp0_desc, 15, value.c10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 16) ? true : !(value.d10_1 === '')) {
      tmp1_output.tf(tmp0_desc, 16, value.d10_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer).nd = function (encoder, value) {
    return this.y11(encoder, value instanceof KitDeck ? value : THROW_CCE());
  };
  protoOf($serializer).od = function (decoder) {
    var tmp0_desc = this.x11_1;
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
    return this.x11_1;
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
      throwMissingFieldException(seen0, 54, $serializer_getInstance().x11_1);
    }
    if (0 === (seen0 & 1))
      $this.nz_1 = 1;
    else
      $this.nz_1 = schemaVersion;
    $this.oz_1 = id;
    $this.pz_1 = name;
    if (0 === (seen0 & 8))
      $this.qz_1 = '';
    else
      $this.qz_1 = description;
    $this.rz_1 = learningLanguage;
    $this.sz_1 = knownLanguage;
    if (0 === (seen0 & 64))
      $this.tz_1 = '';
    else
      $this.tz_1 = direction;
    if (0 === (seen0 & 128))
      $this.uz_1 = null;
    else
      $this.uz_1 = topic;
    if (0 === (seen0 & 256))
      $this.vz_1 = 'A1';
    else
      $this.vz_1 = level;
    if (0 === (seen0 & 512))
      $this.wz_1 = 0;
    else
      $this.wz_1 = wordCount;
    if (0 === (seen0 & 1024))
      $this.xz_1 = 'Anonymous';
    else
      $this.xz_1 = author;
    if (0 === (seen0 & 2048))
      $this.yz_1 = 'CC-BY-SA-4.0';
    else
      $this.yz_1 = licence;
    if (0 === (seen0 & 4096))
      $this.zz_1 = null;
    else
      $this.zz_1 = attribution;
    if (0 === (seen0 & 8192))
      $this.a10_1 = '';
    else
      $this.a10_1 = createdAt;
    if (0 === (seen0 & 16384))
      $this.b10_1 = '';
    else
      $this.b10_1 = updatedAt;
    if (0 === (seen0 & 32768))
      $this.c10_1 = '';
    else
      $this.c10_1 = kitVersion;
    if (0 === (seen0 & 65536))
      $this.d10_1 = '';
    else
      $this.d10_1 = promptVersion;
    return $this;
  }
  function KitDeck_init_$Create$(seen0, schemaVersion, id, name, description, learningLanguage, knownLanguage, direction, topic, level, wordCount, author, licence, attribution, createdAt, updatedAt, kitVersion, promptVersion, serializationConstructorMarker) {
    return KitDeck_init_$Init$(seen0, schemaVersion, id, name, description, learningLanguage, knownLanguage, direction, topic, level, wordCount, author, licence, attribution, createdAt, updatedAt, kitVersion, promptVersion, serializationConstructorMarker, objectCreate(protoOf(KitDeck)));
  }
  function KitDeck() {
  }
  protoOf(KitDeck).toString = function () {
    return 'KitDeck(schemaVersion=' + this.nz_1 + ', id=' + this.oz_1 + ', name=' + this.pz_1 + ', description=' + this.qz_1 + ', learningLanguage=' + this.rz_1 + ', knownLanguage=' + this.sz_1 + ', direction=' + this.tz_1 + ', topic=' + this.uz_1 + ', level=' + this.vz_1 + ', wordCount=' + this.wz_1 + ', author=' + this.xz_1 + ', licence=' + this.yz_1 + ', attribution=' + toString_0(this.zz_1) + ', createdAt=' + this.a10_1 + ', updatedAt=' + this.b10_1 + ', kitVersion=' + this.c10_1 + ', promptVersion=' + this.d10_1 + ')';
  };
  protoOf(KitDeck).hashCode = function () {
    var result = this.nz_1;
    result = imul(result, 31) + getStringHashCode(this.oz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.pz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.qz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.rz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.sz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.tz_1) | 0;
    result = imul(result, 31) + (this.uz_1 == null ? 0 : getStringHashCode(this.uz_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.vz_1) | 0;
    result = imul(result, 31) + this.wz_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.xz_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.yz_1) | 0;
    result = imul(result, 31) + (this.zz_1 == null ? 0 : this.zz_1.hashCode()) | 0;
    result = imul(result, 31) + getStringHashCode(this.a10_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.b10_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.c10_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d10_1) | 0;
    return result;
  };
  protoOf(KitDeck).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitDeck))
      return false;
    if (!(this.nz_1 === other.nz_1))
      return false;
    if (!(this.oz_1 === other.oz_1))
      return false;
    if (!(this.pz_1 === other.pz_1))
      return false;
    if (!(this.qz_1 === other.qz_1))
      return false;
    if (!(this.rz_1 === other.rz_1))
      return false;
    if (!(this.sz_1 === other.sz_1))
      return false;
    if (!(this.tz_1 === other.tz_1))
      return false;
    if (!(this.uz_1 == other.uz_1))
      return false;
    if (!(this.vz_1 === other.vz_1))
      return false;
    if (!(this.wz_1 === other.wz_1))
      return false;
    if (!(this.xz_1 === other.xz_1))
      return false;
    if (!(this.yz_1 === other.yz_1))
      return false;
    if (!equals_0(this.zz_1, other.zz_1))
      return false;
    if (!(this.a10_1 === other.a10_1))
      return false;
    if (!(this.b10_1 === other.b10_1))
      return false;
    if (!(this.c10_1 === other.c10_1))
      return false;
    if (!(this.d10_1 === other.d10_1))
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
    this.z11_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).a12 = function (encoder, value) {
    var tmp0_desc = this.z11_1;
    var tmp1_output = encoder.we(tmp0_desc);
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !(value.b12_1 === '')) {
      tmp1_output.tf(tmp0_desc, 0, value.b12_1);
    }
    if (tmp1_output.ag(tmp0_desc, 1) ? true : !(value.c12_1 === '')) {
      tmp1_output.tf(tmp0_desc, 1, value.c12_1);
    }
    if (tmp1_output.ag(tmp0_desc, 2) ? true : !(value.d12_1 === '')) {
      tmp1_output.tf(tmp0_desc, 2, value.d12_1);
    }
    if (tmp1_output.ag(tmp0_desc, 3) ? true : !(value.e12_1 === '')) {
      tmp1_output.tf(tmp0_desc, 3, value.e12_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_0).nd = function (encoder, value) {
    return this.a12(encoder, value instanceof KitAttribution ? value : THROW_CCE());
  };
  protoOf($serializer_0).od = function (decoder) {
    var tmp0_desc = this.z11_1;
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
    return this.z11_1;
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().z11_1);
    }
    if (0 === (seen0 & 1))
      $this.b12_1 = '';
    else
      $this.b12_1 = title;
    if (0 === (seen0 & 2))
      $this.c12_1 = '';
    else
      $this.c12_1 = author;
    if (0 === (seen0 & 4))
      $this.d12_1 = '';
    else
      $this.d12_1 = url;
    if (0 === (seen0 & 8))
      $this.e12_1 = '';
    else
      $this.e12_1 = note;
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
    this.b12_1 = title;
    this.c12_1 = author;
    this.d12_1 = url;
    this.e12_1 = note;
  }
  protoOf(KitAttribution).toString = function () {
    return 'KitAttribution(title=' + this.b12_1 + ', author=' + this.c12_1 + ', url=' + this.d12_1 + ', note=' + this.e12_1 + ')';
  };
  protoOf(KitAttribution).hashCode = function () {
    var result = getStringHashCode(this.b12_1);
    result = imul(result, 31) + getStringHashCode(this.c12_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.d12_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.e12_1) | 0;
    return result;
  };
  protoOf(KitAttribution).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitAttribution))
      return false;
    if (!(this.b12_1 === other.b12_1))
      return false;
    if (!(this.c12_1 === other.c12_1))
      return false;
    if (!(this.d12_1 === other.d12_1))
      return false;
    if (!(this.e12_1 === other.e12_1))
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
    this.f12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).g12 = function (encoder, value) {
    var tmp0_desc = this.f12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !(value.h11_1 === 'text-first')) {
      tmp1_output.tf(tmp0_desc, 0, value.h11_1);
    }
    if (tmp1_output.ag(tmp0_desc, 1) ? true : !(value.i11_1 == null)) {
      tmp1_output.wf(tmp0_desc, 1, StringSerializer_getInstance(), value.i11_1);
    }
    if (tmp1_output.ag(tmp0_desc, 2) ? true : !(value.j11_1 === '')) {
      tmp1_output.tf(tmp0_desc, 2, value.j11_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_1).nd = function (encoder, value) {
    return this.g12(encoder, value instanceof KitSticker ? value : THROW_CCE());
  };
  protoOf($serializer_1).od = function (decoder) {
    var tmp0_desc = this.f12_1;
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
    return this.f12_1;
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().f12_1);
    }
    if (0 === (seen0 & 1))
      $this.h11_1 = 'text-first';
    else
      $this.h11_1 = mode;
    if (0 === (seen0 & 2))
      $this.i11_1 = null;
    else
      $this.i11_1 = file;
    if (0 === (seen0 & 4))
      $this.j11_1 = '';
    else
      $this.j11_1 = concept;
    return $this;
  }
  function KitSticker_init_$Create$(seen0, mode, file, concept, serializationConstructorMarker) {
    return KitSticker_init_$Init$(seen0, mode, file, concept, serializationConstructorMarker, objectCreate(protoOf(KitSticker)));
  }
  function KitSticker(mode, file, concept) {
    mode = mode === VOID ? 'text-first' : mode;
    file = file === VOID ? null : file;
    concept = concept === VOID ? '' : concept;
    this.h11_1 = mode;
    this.i11_1 = file;
    this.j11_1 = concept;
  }
  protoOf(KitSticker).toString = function () {
    return 'KitSticker(mode=' + this.h11_1 + ', file=' + this.i11_1 + ', concept=' + this.j11_1 + ')';
  };
  protoOf(KitSticker).hashCode = function () {
    var result = getStringHashCode(this.h11_1);
    result = imul(result, 31) + (this.i11_1 == null ? 0 : getStringHashCode(this.i11_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.j11_1) | 0;
    return result;
  };
  protoOf(KitSticker).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitSticker))
      return false;
    if (!(this.h11_1 === other.h11_1))
      return false;
    if (!(this.i11_1 == other.i11_1))
      return false;
    if (!(this.j11_1 === other.j11_1))
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
    tmp.h12_1 = [null, null, null, null, null, lazy(tmp_0, KitToken$Companion$$childSerializers$_anonymous__gm4sd5), null, null, null];
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
    this.i12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_2).j12 = function (encoder, value) {
    var tmp0_desc = this.i12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_3().h12_1;
    tmp1_output.tf(tmp0_desc, 0, value.u10_1);
    tmp1_output.rf(tmp0_desc, 1, value.v10_1);
    tmp1_output.rf(tmp0_desc, 2, value.w10_1);
    if (tmp1_output.ag(tmp0_desc, 3) ? true : !(value.x10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 3, StringSerializer_getInstance(), value.x10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 4) ? true : !(value.y10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 4, StringSerializer_getInstance(), value.y10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 5) ? true : !equals_0(value.z10_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 5, tmp2_cached[5].p1(), value.z10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 6) ? true : !(value.a11_1 == null)) {
      tmp1_output.wf(tmp0_desc, 6, StringSerializer_getInstance(), value.a11_1);
    }
    if (tmp1_output.ag(tmp0_desc, 7) ? true : !(value.b11_1 == null)) {
      tmp1_output.wf(tmp0_desc, 7, StringSerializer_getInstance(), value.b11_1);
    }
    if (tmp1_output.ag(tmp0_desc, 8) ? true : !(value.c11_1 == null)) {
      tmp1_output.wf(tmp0_desc, 8, StringSerializer_getInstance(), value.c11_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_2).nd = function (encoder, value) {
    return this.j12(encoder, value instanceof KitToken ? value : THROW_CCE());
  };
  protoOf($serializer_2).od = function (decoder) {
    var tmp0_desc = this.i12_1;
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
    var tmp14_cached = Companion_getInstance_3().h12_1;
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
    return this.i12_1;
  };
  protoOf($serializer_2).gj = function () {
    var tmp0_cached = Companion_getInstance_3().h12_1;
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_2().i12_1);
    }
    $this.u10_1 = text;
    $this.v10_1 = start;
    $this.w10_1 = end;
    if (0 === (seen0 & 8))
      $this.x10_1 = null;
    else
      $this.x10_1 = lemma;
    if (0 === (seen0 & 16))
      $this.y10_1 = null;
    else
      $this.y10_1 = partOfSpeech;
    if (0 === (seen0 & 32))
      $this.z10_1 = emptyList();
    else
      $this.z10_1 = grammarCodes;
    if (0 === (seen0 & 64))
      $this.a11_1 = null;
    else
      $this.a11_1 = article;
    if (0 === (seen0 & 128))
      $this.b11_1 = null;
    else
      $this.b11_1 = gender;
    if (0 === (seen0 & 256))
      $this.c11_1 = null;
    else
      $this.c11_1 = plural;
    return $this;
  }
  function KitToken_init_$Create$(seen0, text, start, end, lemma, partOfSpeech, grammarCodes, article, gender, plural, serializationConstructorMarker) {
    return KitToken_init_$Init$(seen0, text, start, end, lemma, partOfSpeech, grammarCodes, article, gender, plural, serializationConstructorMarker, objectCreate(protoOf(KitToken)));
  }
  function KitToken() {
  }
  protoOf(KitToken).toString = function () {
    return 'KitToken(text=' + this.u10_1 + ', start=' + this.v10_1 + ', end=' + this.w10_1 + ', lemma=' + this.x10_1 + ', partOfSpeech=' + this.y10_1 + ', grammarCodes=' + toString(this.z10_1) + ', article=' + this.a11_1 + ', gender=' + this.b11_1 + ', plural=' + this.c11_1 + ')';
  };
  protoOf(KitToken).hashCode = function () {
    var result = getStringHashCode(this.u10_1);
    result = imul(result, 31) + this.v10_1 | 0;
    result = imul(result, 31) + this.w10_1 | 0;
    result = imul(result, 31) + (this.x10_1 == null ? 0 : getStringHashCode(this.x10_1)) | 0;
    result = imul(result, 31) + (this.y10_1 == null ? 0 : getStringHashCode(this.y10_1)) | 0;
    result = imul(result, 31) + hashCode(this.z10_1) | 0;
    result = imul(result, 31) + (this.a11_1 == null ? 0 : getStringHashCode(this.a11_1)) | 0;
    result = imul(result, 31) + (this.b11_1 == null ? 0 : getStringHashCode(this.b11_1)) | 0;
    result = imul(result, 31) + (this.c11_1 == null ? 0 : getStringHashCode(this.c11_1)) | 0;
    return result;
  };
  protoOf(KitToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitToken))
      return false;
    if (!(this.u10_1 === other.u10_1))
      return false;
    if (!(this.v10_1 === other.v10_1))
      return false;
    if (!(this.w10_1 === other.w10_1))
      return false;
    if (!(this.x10_1 == other.x10_1))
      return false;
    if (!(this.y10_1 == other.y10_1))
      return false;
    if (!equals_0(this.z10_1, other.z10_1))
      return false;
    if (!(this.a11_1 == other.a11_1))
      return false;
    if (!(this.b11_1 == other.b11_1))
      return false;
    if (!(this.c11_1 == other.c11_1))
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
    tmp.k12_1 = [null, lazy(tmp_0, KitExample$Companion$$childSerializers$_anonymous__whq2ra)];
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
    this.l12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_3).m12 = function (encoder, value) {
    var tmp0_desc = this.l12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_4().k12_1;
    tmp1_output.tf(tmp0_desc, 0, value.s10_1);
    if (tmp1_output.ag(tmp0_desc, 1) ? true : !equals_0(value.t10_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 1, tmp2_cached[1].p1(), value.t10_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_3).nd = function (encoder, value) {
    return this.m12(encoder, value instanceof KitExample ? value : THROW_CCE());
  };
  protoOf($serializer_3).od = function (decoder) {
    var tmp0_desc = this.l12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.we(tmp0_desc);
    var tmp7_cached = Companion_getInstance_4().k12_1;
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
    return this.l12_1;
  };
  protoOf($serializer_3).gj = function () {
    var tmp0_cached = Companion_getInstance_4().k12_1;
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_3().l12_1);
    }
    $this.s10_1 = source;
    if (0 === (seen0 & 2))
      $this.t10_1 = emptyList();
    else
      $this.t10_1 = tokens;
    return $this;
  }
  function KitExample_init_$Create$(seen0, source, tokens, serializationConstructorMarker) {
    return KitExample_init_$Init$(seen0, source, tokens, serializationConstructorMarker, objectCreate(protoOf(KitExample)));
  }
  function KitExample() {
  }
  protoOf(KitExample).toString = function () {
    return 'KitExample(source=' + this.s10_1 + ', tokens=' + toString(this.t10_1) + ')';
  };
  protoOf(KitExample).hashCode = function () {
    var result = getStringHashCode(this.s10_1);
    result = imul(result, 31) + hashCode(this.t10_1) | 0;
    return result;
  };
  protoOf(KitExample).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitExample))
      return false;
    if (!(this.s10_1 === other.s10_1))
      return false;
    if (!equals_0(this.t10_1, other.t10_1))
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
    tmp.n12_1 = [null, null, lazy(tmp_0, KitReview$Companion$$childSerializers$_anonymous__2nl8bo)];
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
    this.o12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_4).p12 = function (encoder, value) {
    var tmp0_desc = this.o12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_5().n12_1;
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !(value.k11_1 === 'high')) {
      tmp1_output.tf(tmp0_desc, 0, value.k11_1);
    }
    if (tmp1_output.ag(tmp0_desc, 1) ? true : !(value.l11_1 === true)) {
      tmp1_output.qf(tmp0_desc, 1, value.l11_1);
    }
    if (tmp1_output.ag(tmp0_desc, 2) ? true : !equals_0(value.m11_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 2, tmp2_cached[2].p1(), value.m11_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_4).nd = function (encoder, value) {
    return this.p12(encoder, value instanceof KitReview ? value : THROW_CCE());
  };
  protoOf($serializer_4).od = function (decoder) {
    var tmp0_desc = this.o12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = false;
    var tmp6_local2 = null;
    var tmp7_input = decoder.we(tmp0_desc);
    var tmp8_cached = Companion_getInstance_5().n12_1;
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
    return this.o12_1;
  };
  protoOf($serializer_4).gj = function () {
    var tmp0_cached = Companion_getInstance_5().n12_1;
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
      throwMissingFieldException(seen0, 0, $serializer_getInstance_4().o12_1);
    }
    if (0 === (seen0 & 1))
      $this.k11_1 = 'high';
    else
      $this.k11_1 = confidence;
    if (0 === (seen0 & 2))
      $this.l11_1 = true;
    else
      $this.l11_1 = safe;
    if (0 === (seen0 & 4))
      $this.m11_1 = emptyList();
    else
      $this.m11_1 = flags;
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
    this.k11_1 = confidence;
    this.l11_1 = safe;
    this.m11_1 = flags;
  }
  protoOf(KitReview).toString = function () {
    return 'KitReview(confidence=' + this.k11_1 + ', safe=' + this.l11_1 + ', flags=' + toString(this.m11_1) + ')';
  };
  protoOf(KitReview).hashCode = function () {
    var result = getStringHashCode(this.k11_1);
    result = imul(result, 31) + getBooleanHashCode(this.l11_1) | 0;
    result = imul(result, 31) + hashCode(this.m11_1) | 0;
    return result;
  };
  protoOf(KitReview).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitReview))
      return false;
    if (!(this.k11_1 === other.k11_1))
      return false;
    if (!(this.l11_1 === other.l11_1))
      return false;
    if (!equals_0(this.m11_1, other.m11_1))
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
    tmp.q11_1 = [null, null, null, null, null, null, null, null, null, lazy(tmp_0, KitCard$Companion$$childSerializers$_anonymous__mplvvg), null];
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
    this.q12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_5).r12 = function (encoder, value) {
    var tmp0_desc = this.q12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_6().q11_1;
    tmp1_output.tf(tmp0_desc, 0, value.h10_1);
    tmp1_output.tf(tmp0_desc, 1, value.i10_1);
    if (tmp1_output.ag(tmp0_desc, 2) ? true : !(value.j10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 2, StringSerializer_getInstance(), value.j10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 3) ? true : !(value.k10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 3, StringSerializer_getInstance(), value.k10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 4) ? true : !(value.l10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 4, StringSerializer_getInstance(), value.l10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 5) ? true : !(value.m10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 5, StringSerializer_getInstance(), value.m10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 6) ? true : !(value.n10_1 === '')) {
      tmp1_output.tf(tmp0_desc, 6, value.n10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 7) ? true : !(value.o10_1 == null)) {
      tmp1_output.wf(tmp0_desc, 7, StringSerializer_getInstance(), value.o10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 8) ? true : !value.p10_1.equals(new KitSticker())) {
      tmp1_output.uf(tmp0_desc, 8, $serializer_getInstance_1(), value.p10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 9) ? true : !equals_0(value.q10_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 9, tmp2_cached[9].p1(), value.q10_1);
    }
    if (tmp1_output.ag(tmp0_desc, 10) ? true : !value.r10_1.equals(new KitReview())) {
      tmp1_output.uf(tmp0_desc, 10, $serializer_getInstance_4(), value.r10_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_5).nd = function (encoder, value) {
    return this.r12(encoder, value instanceof KitCard ? value : THROW_CCE());
  };
  protoOf($serializer_5).od = function (decoder) {
    var tmp0_desc = this.q12_1;
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
    var tmp16_cached = Companion_getInstance_6().q11_1;
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
    return this.q12_1;
  };
  protoOf($serializer_5).gj = function () {
    var tmp0_cached = Companion_getInstance_6().q11_1;
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_5().q12_1);
    }
    $this.h10_1 = key;
    $this.i10_1 = text;
    if (0 === (seen0 & 4))
      $this.j10_1 = null;
    else
      $this.j10_1 = article;
    if (0 === (seen0 & 8))
      $this.k10_1 = null;
    else
      $this.k10_1 = gender;
    if (0 === (seen0 & 16))
      $this.l10_1 = null;
    else
      $this.l10_1 = plural;
    if (0 === (seen0 & 32))
      $this.m10_1 = null;
    else
      $this.m10_1 = partOfSpeech;
    if (0 === (seen0 & 64))
      $this.n10_1 = '';
    else
      $this.n10_1 = phonetic;
    if (0 === (seen0 & 128))
      $this.o10_1 = null;
    else
      $this.o10_1 = romanization;
    if (0 === (seen0 & 256))
      $this.p10_1 = new KitSticker();
    else
      $this.p10_1 = sticker;
    if (0 === (seen0 & 512))
      $this.q10_1 = emptyList();
    else
      $this.q10_1 = examples;
    if (0 === (seen0 & 1024))
      $this.r10_1 = new KitReview();
    else
      $this.r10_1 = review;
    return $this;
  }
  function KitCard_init_$Create$(seen0, key, text, article, gender, plural, partOfSpeech, phonetic, romanization, sticker, examples, review, serializationConstructorMarker) {
    return KitCard_init_$Init$(seen0, key, text, article, gender, plural, partOfSpeech, phonetic, romanization, sticker, examples, review, serializationConstructorMarker, objectCreate(protoOf(KitCard)));
  }
  function KitCard() {
  }
  protoOf(KitCard).toString = function () {
    return 'KitCard(key=' + this.h10_1 + ', text=' + this.i10_1 + ', article=' + this.j10_1 + ', gender=' + this.k10_1 + ', plural=' + this.l10_1 + ', partOfSpeech=' + this.m10_1 + ', phonetic=' + this.n10_1 + ', romanization=' + this.o10_1 + ', sticker=' + this.p10_1.toString() + ', examples=' + toString(this.q10_1) + ', review=' + this.r10_1.toString() + ')';
  };
  protoOf(KitCard).hashCode = function () {
    var result = getStringHashCode(this.h10_1);
    result = imul(result, 31) + getStringHashCode(this.i10_1) | 0;
    result = imul(result, 31) + (this.j10_1 == null ? 0 : getStringHashCode(this.j10_1)) | 0;
    result = imul(result, 31) + (this.k10_1 == null ? 0 : getStringHashCode(this.k10_1)) | 0;
    result = imul(result, 31) + (this.l10_1 == null ? 0 : getStringHashCode(this.l10_1)) | 0;
    result = imul(result, 31) + (this.m10_1 == null ? 0 : getStringHashCode(this.m10_1)) | 0;
    result = imul(result, 31) + getStringHashCode(this.n10_1) | 0;
    result = imul(result, 31) + (this.o10_1 == null ? 0 : getStringHashCode(this.o10_1)) | 0;
    result = imul(result, 31) + this.p10_1.hashCode() | 0;
    result = imul(result, 31) + hashCode(this.q10_1) | 0;
    result = imul(result, 31) + this.r10_1.hashCode() | 0;
    return result;
  };
  protoOf(KitCard).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitCard))
      return false;
    if (!(this.h10_1 === other.h10_1))
      return false;
    if (!(this.i10_1 === other.i10_1))
      return false;
    if (!(this.j10_1 == other.j10_1))
      return false;
    if (!(this.k10_1 == other.k10_1))
      return false;
    if (!(this.l10_1 == other.l10_1))
      return false;
    if (!(this.m10_1 == other.m10_1))
      return false;
    if (!(this.n10_1 === other.n10_1))
      return false;
    if (!(this.o10_1 == other.o10_1))
      return false;
    if (!this.p10_1.equals(other.p10_1))
      return false;
    if (!equals_0(this.q10_1, other.q10_1))
      return false;
    if (!this.r10_1.equals(other.r10_1))
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
    tmp.s12_1 = [lazy(tmp_0, KitLocToken$Companion$$childSerializers$_anonymous__sryvh7)];
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
    this.t12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_6).u12 = function (encoder, value) {
    var tmp0_desc = this.t12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_7().s12_1;
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !equals_0(value.g11_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 0, tmp2_cached[0].p1(), value.g11_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_6).nd = function (encoder, value) {
    return this.u12(encoder, value instanceof KitLocToken ? value : THROW_CCE());
  };
  protoOf($serializer_6).od = function (decoder) {
    var tmp0_desc = this.t12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_input = decoder.we(tmp0_desc);
    var tmp6_cached = Companion_getInstance_7().s12_1;
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
    return this.t12_1;
  };
  protoOf($serializer_6).gj = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [Companion_getInstance_7().s12_1[0].p1()];
  };
  var $serializer_instance_6;
  function $serializer_getInstance_6() {
    if ($serializer_instance_6 == null)
      new $serializer_6();
    return $serializer_instance_6;
  }
  function KitLocToken_init_$Init$(seen0, meanings, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_6().t12_1);
    }
    if (0 === (seen0 & 1))
      $this.g11_1 = emptyList();
    else
      $this.g11_1 = meanings;
    return $this;
  }
  function KitLocToken_init_$Create$(seen0, meanings, serializationConstructorMarker) {
    return KitLocToken_init_$Init$(seen0, meanings, serializationConstructorMarker, objectCreate(protoOf(KitLocToken)));
  }
  function KitLocToken(meanings) {
    Companion_getInstance_7();
    meanings = meanings === VOID ? emptyList() : meanings;
    this.g11_1 = meanings;
  }
  protoOf(KitLocToken).toString = function () {
    return 'KitLocToken(meanings=' + toString(this.g11_1) + ')';
  };
  protoOf(KitLocToken).hashCode = function () {
    return hashCode(this.g11_1);
  };
  protoOf(KitLocToken).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitLocToken))
      return false;
    if (!equals_0(this.g11_1, other.g11_1))
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
    tmp.v12_1 = [null, lazy(tmp_0, KitLocExample$Companion$$childSerializers$_anonymous__u2s7bq)];
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
    this.w12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_7).x12 = function (encoder, value) {
    var tmp0_desc = this.w12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_8().v12_1;
    tmp1_output.tf(tmp0_desc, 0, value.e11_1);
    if (tmp1_output.ag(tmp0_desc, 1) ? true : !equals_0(value.f11_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 1, tmp2_cached[1].p1(), value.f11_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_7).nd = function (encoder, value) {
    return this.x12(encoder, value instanceof KitLocExample ? value : THROW_CCE());
  };
  protoOf($serializer_7).od = function (decoder) {
    var tmp0_desc = this.w12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.we(tmp0_desc);
    var tmp7_cached = Companion_getInstance_8().v12_1;
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
    return this.w12_1;
  };
  protoOf($serializer_7).gj = function () {
    var tmp0_cached = Companion_getInstance_8().v12_1;
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
      throwMissingFieldException(seen0, 1, $serializer_getInstance_7().w12_1);
    }
    $this.e11_1 = target;
    if (0 === (seen0 & 2))
      $this.f11_1 = emptyList();
    else
      $this.f11_1 = tokens;
    return $this;
  }
  function KitLocExample_init_$Create$(seen0, target, tokens, serializationConstructorMarker) {
    return KitLocExample_init_$Init$(seen0, target, tokens, serializationConstructorMarker, objectCreate(protoOf(KitLocExample)));
  }
  function KitLocExample() {
  }
  protoOf(KitLocExample).toString = function () {
    return 'KitLocExample(target=' + this.e11_1 + ', tokens=' + toString(this.f11_1) + ')';
  };
  protoOf(KitLocExample).hashCode = function () {
    var result = getStringHashCode(this.e11_1);
    result = imul(result, 31) + hashCode(this.f11_1) | 0;
    return result;
  };
  protoOf(KitLocExample).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitLocExample))
      return false;
    if (!(this.e11_1 === other.e11_1))
      return false;
    if (!equals_0(this.f11_1, other.f11_1))
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
    tmp.r11_1 = [null, null, lazy(tmp_0, KitLocCard$Companion$$childSerializers$_anonymous__okus8g)];
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
    this.y12_1 = tmp0_serialDesc;
  }
  protoOf($serializer_8).z12 = function (encoder, value) {
    var tmp0_desc = this.y12_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_9().r11_1;
    tmp1_output.tf(tmp0_desc, 0, value.e10_1);
    tmp1_output.tf(tmp0_desc, 1, value.f10_1);
    if (tmp1_output.ag(tmp0_desc, 2) ? true : !equals_0(value.g10_1, emptyList())) {
      tmp1_output.uf(tmp0_desc, 2, tmp2_cached[2].p1(), value.g10_1);
    }
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_8).nd = function (encoder, value) {
    return this.z12(encoder, value instanceof KitLocCard ? value : THROW_CCE());
  };
  protoOf($serializer_8).od = function (decoder) {
    var tmp0_desc = this.y12_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.we(tmp0_desc);
    var tmp8_cached = Companion_getInstance_9().r11_1;
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
    return this.y12_1;
  };
  protoOf($serializer_8).gj = function () {
    var tmp0_cached = Companion_getInstance_9().r11_1;
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_8().y12_1);
    }
    $this.e10_1 = key;
    $this.f10_1 = translation;
    if (0 === (seen0 & 4))
      $this.g10_1 = emptyList();
    else
      $this.g10_1 = examples;
    return $this;
  }
  function KitLocCard_init_$Create$(seen0, key, translation, examples, serializationConstructorMarker) {
    return KitLocCard_init_$Init$(seen0, key, translation, examples, serializationConstructorMarker, objectCreate(protoOf(KitLocCard)));
  }
  function KitLocCard() {
  }
  protoOf(KitLocCard).toString = function () {
    return 'KitLocCard(key=' + this.e10_1 + ', translation=' + this.f10_1 + ', examples=' + toString(this.g10_1) + ')';
  };
  protoOf(KitLocCard).hashCode = function () {
    var result = getStringHashCode(this.e10_1);
    result = imul(result, 31) + getStringHashCode(this.f10_1) | 0;
    result = imul(result, 31) + hashCode(this.g10_1) | 0;
    return result;
  };
  protoOf(KitLocCard).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof KitLocCard))
      return false;
    if (!(this.e10_1 === other.e10_1))
      return false;
    if (!(this.f10_1 === other.f10_1))
      return false;
    if (!equals_0(this.g10_1, other.g10_1))
      return false;
    return true;
  };
  function DeckFolder(deck, cards, localization, stickers, stickerReview) {
    stickerReview = stickerReview === VOID ? emptyMap() : stickerReview;
    this.iz_1 = deck;
    this.jz_1 = cards;
    this.kz_1 = localization;
    this.lz_1 = stickers;
    this.mz_1 = stickerReview;
  }
  protoOf(DeckFolder).toString = function () {
    return 'DeckFolder(deck=' + this.iz_1.toString() + ', cards=' + toString(this.jz_1) + ', localization=' + toString(this.kz_1) + ', stickers=' + toString(this.lz_1) + ', stickerReview=' + toString(this.mz_1) + ')';
  };
  protoOf(DeckFolder).hashCode = function () {
    var result = this.iz_1.hashCode();
    result = imul(result, 31) + hashCode(this.jz_1) | 0;
    result = imul(result, 31) + hashCode(this.kz_1) | 0;
    result = imul(result, 31) + hashCode(this.lz_1) | 0;
    result = imul(result, 31) + hashCode(this.mz_1) | 0;
    return result;
  };
  protoOf(DeckFolder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DeckFolder))
      return false;
    if (!this.iz_1.equals(other.iz_1))
      return false;
    if (!equals_0(this.jz_1, other.jz_1))
      return false;
    if (!equals_0(this.kz_1, other.kz_1))
      return false;
    if (!equals_0(this.lz_1, other.lz_1))
      return false;
    if (!equals_0(this.mz_1, other.mz_1))
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
    this.a13_1 = tmp0_serialDesc;
  }
  protoOf($serializer_9).b13 = function (encoder, value) {
    var tmp0_desc = this.a13_1;
    var tmp1_output = encoder.we(tmp0_desc);
    if (tmp1_output.ag(tmp0_desc, 0) ? true : !(value.c13_1 === 1)) {
      tmp1_output.rf(tmp0_desc, 0, value.c13_1);
    }
    tmp1_output.tf(tmp0_desc, 1, value.d13_1);
    tmp1_output.tf(tmp0_desc, 2, value.e13_1);
    tmp1_output.tf(tmp0_desc, 3, value.f13_1);
    tmp1_output.tf(tmp0_desc, 4, value.g13_1);
    tmp1_output.tf(tmp0_desc, 5, value.h13_1);
    tmp1_output.tf(tmp0_desc, 6, value.i13_1);
    tmp1_output.tf(tmp0_desc, 7, value.j13_1);
    tmp1_output.tf(tmp0_desc, 8, value.k13_1);
    tmp1_output.tf(tmp0_desc, 9, value.l13_1);
    tmp1_output.wf(tmp0_desc, 10, StringSerializer_getInstance(), value.m13_1);
    if (tmp1_output.ag(tmp0_desc, 11) ? true : !(value.n13_1 === 1)) {
      tmp1_output.rf(tmp0_desc, 11, value.n13_1);
    }
    if (tmp1_output.ag(tmp0_desc, 12) ? true : !(value.o13_1 == null)) {
      tmp1_output.wf(tmp0_desc, 12, StringSerializer_getInstance(), value.o13_1);
    }
    tmp1_output.uf(tmp0_desc, 13, $serializer_getInstance_10(), value.p13_1);
    tmp1_output.uf(tmp0_desc, 14, $serializer_getInstance_13(), value.q13_1);
    tmp1_output.uf(tmp0_desc, 15, $serializer_getInstance_14(), value.r13_1);
    tmp1_output.uf(tmp0_desc, 16, $serializer_getInstance_15(), value.s13_1);
    tmp1_output.rf(tmp0_desc, 17, value.t13_1);
    tmp1_output.rf(tmp0_desc, 18, value.u13_1);
    tmp1_output.rf(tmp0_desc, 19, value.v13_1);
    tmp1_output.sf(tmp0_desc, 20, value.w13_1);
    tmp1_output.tf(tmp0_desc, 21, value.x13_1);
    tmp1_output.tf(tmp0_desc, 22, value.y13_1);
    tmp1_output.tf(tmp0_desc, 23, value.z13_1);
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_9).nd = function (encoder, value) {
    return this.b13(encoder, value instanceof PackagedDeck ? value : THROW_CCE());
  };
  protoOf($serializer_9).od = function (decoder) {
    var tmp0_desc = this.a13_1;
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
    return this.a13_1;
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
      throwMissingFieldException(seen0, 16771070, $serializer_getInstance_9().a13_1);
    }
    if (0 === (seen0 & 1))
      $this.c13_1 = 1;
    else
      $this.c13_1 = formatVersion;
    $this.d13_1 = id;
    $this.e13_1 = name;
    $this.f13_1 = description;
    $this.g13_1 = language;
    $this.h13_1 = glossLanguage;
    $this.i13_1 = learningLanguage;
    $this.j13_1 = knownLanguage;
    $this.k13_1 = direction;
    $this.l13_1 = level;
    $this.m13_1 = topic;
    if (0 === (seen0 & 2048))
      $this.n13_1 = 1;
    else
      $this.n13_1 = revision;
    if (0 === (seen0 & 4096))
      $this.o13_1 = null;
    else
      $this.o13_1 = rules;
    $this.p13_1 = expected;
    $this.q13_1 = text;
    $this.r13_1 = images;
    $this.s13_1 = stickers;
    $this.t13_1 = cardCount;
    $this.u13_1 = stickerCount;
    $this.v13_1 = textOnlyCount;
    $this.w13_1 = builtAtEpochMs;
    $this.x13_1 = builder;
    $this.y13_1 = contentRevision;
    $this.z13_1 = sourceRevision;
    return $this;
  }
  function PackagedDeck_init_$Create$(seen0, formatVersion, id, name, description, language, glossLanguage, learningLanguage, knownLanguage, direction, level, topic, revision, rules, expected, text, images, stickers, cardCount, stickerCount, textOnlyCount, builtAtEpochMs, builder, contentRevision, sourceRevision, serializationConstructorMarker) {
    return PackagedDeck_init_$Init$(seen0, formatVersion, id, name, description, language, glossLanguage, learningLanguage, knownLanguage, direction, level, topic, revision, rules, expected, text, images, stickers, cardCount, stickerCount, textOnlyCount, builtAtEpochMs, builder, contentRevision, sourceRevision, serializationConstructorMarker, objectCreate(protoOf(PackagedDeck)));
  }
  function PackagedDeck(formatVersion, id, name, description, language, glossLanguage, learningLanguage, knownLanguage, direction, level, topic, revision, rules, expected, text, images, stickers, cardCount, stickerCount, textOnlyCount, builtAtEpochMs, builder, contentRevision, sourceRevision) {
    formatVersion = formatVersion === VOID ? 1 : formatVersion;
    revision = revision === VOID ? 1 : revision;
    rules = rules === VOID ? null : rules;
    this.c13_1 = formatVersion;
    this.d13_1 = id;
    this.e13_1 = name;
    this.f13_1 = description;
    this.g13_1 = language;
    this.h13_1 = glossLanguage;
    this.i13_1 = learningLanguage;
    this.j13_1 = knownLanguage;
    this.k13_1 = direction;
    this.l13_1 = level;
    this.m13_1 = topic;
    this.n13_1 = revision;
    this.o13_1 = rules;
    this.p13_1 = expected;
    this.q13_1 = text;
    this.r13_1 = images;
    this.s13_1 = stickers;
    this.t13_1 = cardCount;
    this.u13_1 = stickerCount;
    this.v13_1 = textOnlyCount;
    this.w13_1 = builtAtEpochMs;
    this.x13_1 = builder;
    this.y13_1 = contentRevision;
    this.z13_1 = sourceRevision;
  }
  protoOf(PackagedDeck).toString = function () {
    return 'PackagedDeck(formatVersion=' + this.c13_1 + ', id=' + this.d13_1 + ', name=' + this.e13_1 + ', description=' + this.f13_1 + ', language=' + this.g13_1 + ', glossLanguage=' + this.h13_1 + ', learningLanguage=' + this.i13_1 + ', knownLanguage=' + this.j13_1 + ', direction=' + this.k13_1 + ', level=' + this.l13_1 + ', topic=' + this.m13_1 + ', revision=' + this.n13_1 + ', rules=' + this.o13_1 + ', expected=' + this.p13_1.toString() + ', text=' + this.q13_1.toString() + ', images=' + this.r13_1.toString() + ', stickers=' + this.s13_1.toString() + ', cardCount=' + this.t13_1 + ', stickerCount=' + this.u13_1 + ', textOnlyCount=' + this.v13_1 + ', builtAtEpochMs=' + this.w13_1.toString() + ', builder=' + this.x13_1 + ', contentRevision=' + this.y13_1 + ', sourceRevision=' + this.z13_1 + ')';
  };
  protoOf(PackagedDeck).hashCode = function () {
    var result = this.c13_1;
    result = imul(result, 31) + getStringHashCode(this.d13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.e13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.f13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.g13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.h13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.i13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.j13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.k13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.l13_1) | 0;
    result = imul(result, 31) + (this.m13_1 == null ? 0 : getStringHashCode(this.m13_1)) | 0;
    result = imul(result, 31) + this.n13_1 | 0;
    result = imul(result, 31) + (this.o13_1 == null ? 0 : getStringHashCode(this.o13_1)) | 0;
    result = imul(result, 31) + this.p13_1.hashCode() | 0;
    result = imul(result, 31) + this.q13_1.hashCode() | 0;
    result = imul(result, 31) + this.r13_1.hashCode() | 0;
    result = imul(result, 31) + this.s13_1.hashCode() | 0;
    result = imul(result, 31) + this.t13_1 | 0;
    result = imul(result, 31) + this.u13_1 | 0;
    result = imul(result, 31) + this.v13_1 | 0;
    result = imul(result, 31) + this.w13_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.x13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.y13_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.z13_1) | 0;
    return result;
  };
  protoOf(PackagedDeck).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PackagedDeck))
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
    if (!(this.j13_1 === other.j13_1))
      return false;
    if (!(this.k13_1 === other.k13_1))
      return false;
    if (!(this.l13_1 === other.l13_1))
      return false;
    if (!(this.m13_1 == other.m13_1))
      return false;
    if (!(this.n13_1 === other.n13_1))
      return false;
    if (!(this.o13_1 == other.o13_1))
      return false;
    if (!this.p13_1.equals(other.p13_1))
      return false;
    if (!this.q13_1.equals(other.q13_1))
      return false;
    if (!this.r13_1.equals(other.r13_1))
      return false;
    if (!this.s13_1.equals(other.s13_1))
      return false;
    if (!(this.t13_1 === other.t13_1))
      return false;
    if (!(this.u13_1 === other.u13_1))
      return false;
    if (!(this.v13_1 === other.v13_1))
      return false;
    if (!equalsLong(this.w13_1, other.w13_1))
      return false;
    if (!(this.x13_1 === other.x13_1))
      return false;
    if (!(this.y13_1 === other.y13_1))
      return false;
    if (!(this.z13_1 === other.z13_1))
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
    this.a14_1 = tmp0_serialDesc;
  }
  protoOf($serializer_10).b14 = function (encoder, value) {
    var tmp0_desc = this.a14_1;
    var tmp1_output = encoder.we(tmp0_desc);
    tmp1_output.rf(tmp0_desc, 0, value.c14_1);
    tmp1_output.rf(tmp0_desc, 1, value.d14_1);
    tmp1_output.rf(tmp0_desc, 2, value.e14_1);
    tmp1_output.rf(tmp0_desc, 3, value.f14_1);
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_10).nd = function (encoder, value) {
    return this.b14(encoder, value instanceof Expected ? value : THROW_CCE());
  };
  protoOf($serializer_10).od = function (decoder) {
    var tmp0_desc = this.a14_1;
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
    return this.a14_1;
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_10().a14_1);
    }
    $this.c14_1 = sourceNotes;
    $this.d14_1 = cards;
    $this.e14_1 = stickers;
    $this.f14_1 = textOnly;
    return $this;
  }
  function Expected_init_$Create$(seen0, sourceNotes, cards, stickers, textOnly, serializationConstructorMarker) {
    return Expected_init_$Init$(seen0, sourceNotes, cards, stickers, textOnly, serializationConstructorMarker, objectCreate(protoOf(Expected)));
  }
  function Expected(sourceNotes, cards, stickers, textOnly) {
    this.c14_1 = sourceNotes;
    this.d14_1 = cards;
    this.e14_1 = stickers;
    this.f14_1 = textOnly;
  }
  protoOf(Expected).toString = function () {
    return 'Expected(sourceNotes=' + this.c14_1 + ', cards=' + this.d14_1 + ', stickers=' + this.e14_1 + ', textOnly=' + this.f14_1 + ')';
  };
  protoOf(Expected).hashCode = function () {
    var result = this.c14_1;
    result = imul(result, 31) + this.d14_1 | 0;
    result = imul(result, 31) + this.e14_1 | 0;
    result = imul(result, 31) + this.f14_1 | 0;
    return result;
  };
  protoOf(Expected).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Expected))
      return false;
    if (!(this.c14_1 === other.c14_1))
      return false;
    if (!(this.d14_1 === other.d14_1))
      return false;
    if (!(this.e14_1 === other.e14_1))
      return false;
    if (!(this.f14_1 === other.f14_1))
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
    this.g14_1 = tmp0_serialDesc;
  }
  protoOf($serializer_11).h14 = function (encoder, value) {
    var tmp0_desc = this.g14_1;
    var tmp1_output = encoder.we(tmp0_desc);
    tmp1_output.tf(tmp0_desc, 0, value.i14_1);
    tmp1_output.tf(tmp0_desc, 1, value.j14_1);
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_11).nd = function (encoder, value) {
    return this.h14(encoder, value instanceof LicenceRef ? value : THROW_CCE());
  };
  protoOf($serializer_11).od = function (decoder) {
    var tmp0_desc = this.g14_1;
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
    return this.g14_1;
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
      throwMissingFieldException(seen0, 3, $serializer_getInstance_11().g14_1);
    }
    $this.i14_1 = spdx;
    $this.j14_1 = url;
    return $this;
  }
  function LicenceRef_init_$Create$(seen0, spdx, url, serializationConstructorMarker) {
    return LicenceRef_init_$Init$(seen0, spdx, url, serializationConstructorMarker, objectCreate(protoOf(LicenceRef)));
  }
  function LicenceRef(spdx, url) {
    this.i14_1 = spdx;
    this.j14_1 = url;
  }
  protoOf(LicenceRef).toString = function () {
    return 'LicenceRef(spdx=' + this.i14_1 + ', url=' + this.j14_1 + ')';
  };
  protoOf(LicenceRef).hashCode = function () {
    var result = getStringHashCode(this.i14_1);
    result = imul(result, 31) + getStringHashCode(this.j14_1) | 0;
    return result;
  };
  protoOf(LicenceRef).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LicenceRef))
      return false;
    if (!(this.i14_1 === other.i14_1))
      return false;
    if (!(this.j14_1 === other.j14_1))
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
    this.k14_1 = tmp0_serialDesc;
  }
  protoOf($serializer_12).l14 = function (encoder, value) {
    var tmp0_desc = this.k14_1;
    var tmp1_output = encoder.we(tmp0_desc);
    tmp1_output.tf(tmp0_desc, 0, value.m14_1);
    tmp1_output.tf(tmp0_desc, 1, value.n14_1);
    tmp1_output.tf(tmp0_desc, 2, value.o14_1);
    tmp1_output.tf(tmp0_desc, 3, value.p14_1);
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_12).nd = function (encoder, value) {
    return this.l14(encoder, value instanceof Attribution ? value : THROW_CCE());
  };
  protoOf($serializer_12).od = function (decoder) {
    var tmp0_desc = this.k14_1;
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
    return this.k14_1;
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_12().k14_1);
    }
    $this.m14_1 = title;
    $this.n14_1 = author;
    $this.o14_1 = url;
    $this.p14_1 = copyright;
    return $this;
  }
  function Attribution_init_$Create$(seen0, title, author, url, copyright, serializationConstructorMarker) {
    return Attribution_init_$Init$(seen0, title, author, url, copyright, serializationConstructorMarker, objectCreate(protoOf(Attribution)));
  }
  function Attribution(title, author, url, copyright) {
    this.m14_1 = title;
    this.n14_1 = author;
    this.o14_1 = url;
    this.p14_1 = copyright;
  }
  protoOf(Attribution).toString = function () {
    return 'Attribution(title=' + this.m14_1 + ', author=' + this.n14_1 + ', url=' + this.o14_1 + ', copyright=' + this.p14_1 + ')';
  };
  protoOf(Attribution).hashCode = function () {
    var result = getStringHashCode(this.m14_1);
    result = imul(result, 31) + getStringHashCode(this.n14_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.o14_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.p14_1) | 0;
    return result;
  };
  protoOf(Attribution).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Attribution))
      return false;
    if (!(this.m14_1 === other.m14_1))
      return false;
    if (!(this.n14_1 === other.n14_1))
      return false;
    if (!(this.o14_1 === other.o14_1))
      return false;
    if (!(this.p14_1 === other.p14_1))
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
    tmp.q14_1 = [null, null, null, lazy(tmp_0, TextLicence$Companion$$childSerializers$_anonymous__q38v7q)];
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
    this.r14_1 = tmp0_serialDesc;
  }
  protoOf($serializer_13).s14 = function (encoder, value) {
    var tmp0_desc = this.r14_1;
    var tmp1_output = encoder.we(tmp0_desc);
    var tmp2_cached = Companion_getInstance_14().q14_1;
    tmp1_output.uf(tmp0_desc, 0, $serializer_getInstance_11(), value.t14_1);
    tmp1_output.uf(tmp0_desc, 1, $serializer_getInstance_12(), value.u14_1);
    tmp1_output.tf(tmp0_desc, 2, value.v14_1);
    tmp1_output.uf(tmp0_desc, 3, tmp2_cached[3].p1(), value.w14_1);
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_13).nd = function (encoder, value) {
    return this.s14(encoder, value instanceof TextLicence ? value : THROW_CCE());
  };
  protoOf($serializer_13).od = function (decoder) {
    var tmp0_desc = this.r14_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_input = decoder.we(tmp0_desc);
    var tmp9_cached = Companion_getInstance_14().q14_1;
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
    return this.r14_1;
  };
  protoOf($serializer_13).gj = function () {
    var tmp0_cached = Companion_getInstance_14().q14_1;
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_13().r14_1);
    }
    $this.t14_1 = license;
    $this.u14_1 = attribution;
    $this.v14_1 = upstreamSource;
    $this.w14_1 = modifications;
    return $this;
  }
  function TextLicence_init_$Create$(seen0, license, attribution, upstreamSource, modifications, serializationConstructorMarker) {
    return TextLicence_init_$Init$(seen0, license, attribution, upstreamSource, modifications, serializationConstructorMarker, objectCreate(protoOf(TextLicence)));
  }
  function TextLicence(license, attribution, upstreamSource, modifications) {
    Companion_getInstance_14();
    this.t14_1 = license;
    this.u14_1 = attribution;
    this.v14_1 = upstreamSource;
    this.w14_1 = modifications;
  }
  protoOf(TextLicence).toString = function () {
    return 'TextLicence(license=' + this.t14_1.toString() + ', attribution=' + this.u14_1.toString() + ', upstreamSource=' + this.v14_1 + ', modifications=' + toString(this.w14_1) + ')';
  };
  protoOf(TextLicence).hashCode = function () {
    var result = this.t14_1.hashCode();
    result = imul(result, 31) + this.u14_1.hashCode() | 0;
    result = imul(result, 31) + getStringHashCode(this.v14_1) | 0;
    result = imul(result, 31) + hashCode(this.w14_1) | 0;
    return result;
  };
  protoOf(TextLicence).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLicence))
      return false;
    if (!this.t14_1.equals(other.t14_1))
      return false;
    if (!this.u14_1.equals(other.u14_1))
      return false;
    if (!(this.v14_1 === other.v14_1))
      return false;
    if (!equals_0(this.w14_1, other.w14_1))
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
    this.x14_1 = tmp0_serialDesc;
  }
  protoOf($serializer_14).y14 = function (encoder, value) {
    var tmp0_desc = this.x14_1;
    var tmp1_output = encoder.we(tmp0_desc);
    tmp1_output.tf(tmp0_desc, 0, value.z14_1);
    tmp1_output.wf(tmp0_desc, 1, StringSerializer_getInstance(), value.a15_1);
    tmp1_output.wf(tmp0_desc, 2, $serializer_getInstance_11(), value.b15_1);
    tmp1_output.wf(tmp0_desc, 3, StringSerializer_getInstance(), value.c15_1);
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_14).nd = function (encoder, value) {
    return this.y14(encoder, value instanceof ImageLicence ? value : THROW_CCE());
  };
  protoOf($serializer_14).od = function (decoder) {
    var tmp0_desc = this.x14_1;
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
    return this.x14_1;
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
      throwMissingFieldException(seen0, 15, $serializer_getInstance_14().x14_1);
    }
    $this.z14_1 = owner;
    $this.a15_1 = copyright;
    $this.b15_1 = license;
    $this.c15_1 = note;
    return $this;
  }
  function ImageLicence_init_$Create$(seen0, owner, copyright, license, note, serializationConstructorMarker) {
    return ImageLicence_init_$Init$(seen0, owner, copyright, license, note, serializationConstructorMarker, objectCreate(protoOf(ImageLicence)));
  }
  function ImageLicence(owner, copyright, license, note) {
    this.z14_1 = owner;
    this.a15_1 = copyright;
    this.b15_1 = license;
    this.c15_1 = note;
  }
  protoOf(ImageLicence).toString = function () {
    return 'ImageLicence(owner=' + this.z14_1 + ', copyright=' + this.a15_1 + ', license=' + toString_0(this.b15_1) + ', note=' + this.c15_1 + ')';
  };
  protoOf(ImageLicence).hashCode = function () {
    var result = getStringHashCode(this.z14_1);
    result = imul(result, 31) + (this.a15_1 == null ? 0 : getStringHashCode(this.a15_1)) | 0;
    result = imul(result, 31) + (this.b15_1 == null ? 0 : this.b15_1.hashCode()) | 0;
    result = imul(result, 31) + (this.c15_1 == null ? 0 : getStringHashCode(this.c15_1)) | 0;
    return result;
  };
  protoOf(ImageLicence).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ImageLicence))
      return false;
    if (!(this.z14_1 === other.z14_1))
      return false;
    if (!(this.a15_1 == other.a15_1))
      return false;
    if (!equals_0(this.b15_1, other.b15_1))
      return false;
    if (!(this.c15_1 == other.c15_1))
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
    this.d15_1 = tmp0_serialDesc;
  }
  protoOf($serializer_15).e15 = function (encoder, value) {
    var tmp0_desc = this.d15_1;
    var tmp1_output = encoder.we(tmp0_desc);
    tmp1_output.tf(tmp0_desc, 0, value.f15_1);
    tmp1_output.rf(tmp0_desc, 1, value.g15_1);
    tmp1_output.rf(tmp0_desc, 2, value.h15_1);
    tmp1_output.xe(tmp0_desc);
  };
  protoOf($serializer_15).nd = function (encoder, value) {
    return this.e15(encoder, value instanceof StickerInfo ? value : THROW_CCE());
  };
  protoOf($serializer_15).od = function (decoder) {
    var tmp0_desc = this.d15_1;
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
    return this.d15_1;
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
      throwMissingFieldException(seen0, 7, $serializer_getInstance_15().d15_1);
    }
    $this.f15_1 = tool;
    $this.g15_1 = size;
    $this.h15_1 = palette;
    return $this;
  }
  function StickerInfo_init_$Create$(seen0, tool, size, palette, serializationConstructorMarker) {
    return StickerInfo_init_$Init$(seen0, tool, size, palette, serializationConstructorMarker, objectCreate(protoOf(StickerInfo)));
  }
  function StickerInfo(tool, size, palette) {
    this.f15_1 = tool;
    this.g15_1 = size;
    this.h15_1 = palette;
  }
  protoOf(StickerInfo).toString = function () {
    return 'StickerInfo(tool=' + this.f15_1 + ', size=' + this.g15_1 + ', palette=' + this.h15_1 + ')';
  };
  protoOf(StickerInfo).hashCode = function () {
    var result = getStringHashCode(this.f15_1);
    result = imul(result, 31) + this.g15_1 | 0;
    result = imul(result, 31) + this.h15_1 | 0;
    return result;
  };
  protoOf(StickerInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StickerInfo))
      return false;
    if (!(this.f15_1 === other.f15_1))
      return false;
    if (!(this.g15_1 === other.g15_1))
      return false;
    if (!(this.h15_1 === other.h15_1))
      return false;
    return true;
  };
  function PackException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, PackException);
  }
  function Result(bytes, cards, stickers, ids) {
    this.t11_1 = bytes;
    this.u11_1 = cards;
    this.v11_1 = stickers;
    this.w11_1 = ids;
  }
  protoOf(Result).toString = function () {
    return 'Result(bytes=' + toString(this.t11_1) + ', cards=' + this.u11_1 + ', stickers=' + this.v11_1 + ', ids=' + toString(this.w11_1) + ')';
  };
  protoOf(Result).hashCode = function () {
    var result = hashCode(this.t11_1);
    result = imul(result, 31) + this.u11_1 | 0;
    result = imul(result, 31) + this.v11_1 | 0;
    result = imul(result, 31) + hashCode(this.w11_1) | 0;
    return result;
  };
  protoOf(Result).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Result))
      return false;
    if (!equals_0(this.t11_1, other.t11_1))
      return false;
    if (!(this.u11_1 === other.u11_1))
      return false;
    if (!(this.v11_1 === other.v11_1))
      return false;
    if (!equals_0(this.w11_1, other.w11_1))
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
    this.i15_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).oa = function (a, b) {
    return this.i15_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.oa(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).h2 = function () {
    return this.i15_1;
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
    $this$Json.iq_1 = true;
    $this$Json.kq_1 = true;
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
    this.n11_1 = 'deck-kit-packer/1';
    var tmp = this;
    tmp.o11_1 = Json(VOID, Packer$json$lambda);
    this.p11_1 = mapOf([to('CC-BY-SA-4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'), to('CC-BY-4.0', 'https://creativecommons.org/licenses/by/4.0/'), to('CC-BY-NC-SA-4.0', 'https://creativecommons.org/licenses/by-nc-sa/4.0/'), to('CC0-1.0', 'https://creativecommons.org/publicdomain/zero/1.0/')]);
  }
  protoOf(Packer).s11 = function (folder) {
    var problems = Gates_instance.hz(folder);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!problems.o()) {
      throw new PackException('Refusing to pack:\n' + joinToString(problems, '\n', VOID, VOID, VOID, VOID, Packer$pack$lambda));
    }
    var deck = folder.iz_1;
    var salt = CardId_getInstance().bn(deck.oz_1);
    // Inline function 'kotlin.collections.associateBy' call
    var this_0 = folder.kz_1;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateByTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var _iterator__ex2g4s = this_0.g();
    while (_iterator__ex2g4s.h()) {
      var element = _iterator__ex2g4s.i();
      var tmp$ret$3 = element.e10_1;
      destination.w1(tmp$ret$3, element);
    }
    var loc = destination;
    // Inline function 'kotlin.text.ifBlank' call
    var this_1 = deck.b10_1;
    var tmp;
    if (isBlank(this_1)) {
      tmp = deck.a10_1;
    } else {
      tmp = this_1;
    }
    var tmp$ret$4 = tmp;
    var builtAt = this.j15(tmp$ret$4);
    // Inline function 'kotlin.collections.associate' call
    var this_2 = folder.jz_1;
    var capacity_0 = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_2, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination_0 = LinkedHashMap_init_$Create$(capacity_0);
    var _iterator__ex2g4s_0 = this_2.g();
    while (_iterator__ex2g4s_0.h()) {
      var element_0 = _iterator__ex2g4s_0.i();
      // Inline function 'kotlin.collections.plusAssign' call
      var pair = to(element_0.h10_1, CardId_getInstance().an(element_0.h10_1, salt));
      destination_0.w1(pair.mb_1, pair.nb_1);
    }
    var ids = destination_0;
    if (!(toSet(ids.u1()).k() === ids.k()))
      throw new PackException('Refusing to pack: two cards minted the same id; change a key');
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_3 = folder.jz_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_3, 10));
    var index = 0;
    var _iterator__ex2g4s_1 = this_3.g();
    while (_iterator__ex2g4s_1.h()) {
      var item = _iterator__ex2g4s_1.i();
      var _unary__edvuaz = index;
      index = _unary__edvuaz + 1 | 0;
      var index_0 = checkIndexOverflow(_unary__edvuaz);
      var l = getValue(loc, item.h10_1);
      var tmp_0 = getValue(ids, item.h10_1);
      // Inline function 'kotlin.collections.mapIndexed' call
      var this_4 = item.q10_1;
      // Inline function 'kotlin.collections.mapIndexedTo' call
      var destination_2 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_4, 10));
      var index_1 = 0;
      var _iterator__ex2g4s_2 = this_4.g();
      while (_iterator__ex2g4s_2.h()) {
        var item_0 = _iterator__ex2g4s_2.i();
        var _unary__edvuaz_0 = index_1;
        index_1 = _unary__edvuaz_0 + 1 | 0;
        var i = checkIndexOverflow(_unary__edvuaz_0);
        var lt = l.g10_1.j(i);
        // Inline function 'kotlin.collections.mapIndexed' call
        var this_5 = item_0.t10_1;
        // Inline function 'kotlin.collections.mapIndexedTo' call
        var destination_3 = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_5, 10));
        var index_2 = 0;
        var _iterator__ex2g4s_3 = this_5.g();
        while (_iterator__ex2g4s_3.h()) {
          var item_1 = _iterator__ex2g4s_3.i();
          var _unary__edvuaz_1 = index_2;
          index_2 = _unary__edvuaz_1 + 1 | 0;
          var j = checkIndexOverflow(_unary__edvuaz_1);
          var tmp$ret$18 = new WordExampleTokenEntry(item_1.u10_1, item_1.v10_1, item_1.w10_1, item_1.x10_1, lt.f11_1.j(j).g11_1, item_1.y10_1, item_1.z10_1, item_1.a11_1, item_1.b11_1, item_1.c11_1);
          destination_3.e(tmp$ret$18);
        }
        var tmp$ret$15 = new WordExampleEntry(item_0.s10_1, lt.e11_1, destination_3);
        destination_2.e(tmp$ret$15);
      }
      var tmp_1 = new WordEntry(item.i10_1, l.f10_1, item.n10_1, item.m10_1, destination_2, item.j10_1, item.k10_1, item.l10_1, item.o10_1, null, emptyList());
      var tmp_2 = subtract(builtAt, multiply(numberToLong(index_0), new Long(1000, 0)));
      var tmp_3;
      if (folder.lz_1.q1(item.h10_1) && !(item.p10_1.h11_1 === 'text-first')) {
        // Inline function 'kotlin.text.isNullOrBlank' call
        var this_6 = item.p10_1.i11_1;
        tmp_3 = !(this_6 == null || isBlank(this_6));
      } else {
        tmp_3 = false;
      }
      var tmp$ret$12 = new WordSnapEntry(tmp_0, tmp_1, deck.rz_1, tmp_2, false, false, tmp_3, emptyMap(), deck.sz_1, true, mapOf_0(to(deck.rz_1, new TranslationMetaEntry('deck', builtAt, 1))));
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
        if (element_1.nn_1) {
          count = count + 1 | 0;
          checkCountOverflow(count);
        }
      }
      tmp$ret$20 = count;
    }
    var stickerCount = tmp$ret$20;
    var manifest = new WordbookManifest(1, entries);
    var header = new BackupHeader(1, builtAt, 'deck-kit-packer/1', entries.k());
    var tmp0_elvis_lhs = this.p11_1.s1(deck.yz_1);
    var licence = new LicenceRef(deck.yz_1, tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    var tmp_5 = deck.sz_1 + '-to-' + deck.rz_1;
    var tmp_6 = new Expected(folder.jz_1.k(), entries.k(), stickerCount, entries.k() - stickerCount | 0);
    var tmp1_safe_receiver = deck.zz_1;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.b12_1;
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
    var tmp_9 = tmp3_elvis_lhs == null ? deck.pz_1 : tmp3_elvis_lhs;
    var tmp4_safe_receiver = deck.zz_1;
    var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.c12_1;
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
    var tmp_12 = tmp6_elvis_lhs == null ? deck.xz_1 : tmp6_elvis_lhs;
    var tmp7_safe_receiver = deck.zz_1;
    var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.d12_1;
    var tmp_13 = tmp8_elvis_lhs == null ? '' : tmp8_elvis_lhs;
    // Inline function 'kotlin.text.ifBlank' call
    var this_7 = take(deck.a10_1, 4);
    var tmp_14;
    if (isBlank(this_7)) {
      tmp_14 = '2026';
    } else {
      tmp_14 = this_7;
    }
    var tmp$ret$26 = tmp_14;
    var tmp_15 = new Attribution(tmp_9, tmp_12, tmp_13, '\xA9 ' + tmp$ret$26 + ' ' + deck.xz_1);
    var tmp9_safe_receiver = deck.zz_1;
    var tmp10_safe_receiver = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.e12_1;
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
    var tmp_18 = new TextLicence(licence, tmp_15, tmp11_elvis_lhs == null ? 'Made with the Vocabloot Deck Kit by ' + deck.xz_1 + '.' : tmp11_elvis_lhs, emptyList());
    // Inline function 'kotlin.text.ifBlank' call
    var this_8 = take(deck.a10_1, 4);
    var tmp_19;
    if (isBlank(this_8)) {
      tmp_19 = '2026';
    } else {
      tmp_19 = this_8;
    }
    var tmp$ret$30 = tmp_19;
    var packaged = new PackagedDeck(VOID, deck.oz_1, deck.pz_1, deck.qz_1, deck.rz_1, deck.sz_1, deck.rz_1, deck.sz_1, tmp_5, deck.vz_1, deck.uz_1, VOID, VOID, tmp_6, tmp_18, new ImageLicence(deck.xz_1, '\xA9 ' + tmp$ret$30 + ' ' + deck.xz_1, licence, null), new StickerInfo('vocabloot-deck-kit', 768, 255), entries.k(), stickerCount, entries.k() - stickerCount | 0, builtAt, 'deck-kit-packer/1', 'kit:' + deck.b10_1, 'kit:' + deck.d10_1);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_4 = ArrayList_init_$Create$();
    var _iterator__ex2g4s_5 = entries.g();
    while (_iterator__ex2g4s_5.h()) {
      var element_2 = _iterator__ex2g4s_5.i();
      if (element_2.nn_1) {
        destination_4.e(element_2);
      }
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_5 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination_4, 10));
    var _iterator__ex2g4s_6 = destination_4.g();
    while (_iterator__ex2g4s_6.h()) {
      var item_2 = _iterator__ex2g4s_6.i();
      var tmp0 = folder.jz_1;
      var tmp$ret$38;
      $l$block_0: {
        // Inline function 'kotlin.collections.first' call
        var _iterator__ex2g4s_7 = tmp0.g();
        while (_iterator__ex2g4s_7.h()) {
          var element_3 = _iterator__ex2g4s_7.i();
          if (ids.s1(element_3.h10_1) === item_2.hn_1) {
            tmp$ret$38 = element_3;
            break $l$block_0;
          }
        }
        throw NoSuchElementException_init_$Create$('Collection contains no element matching the predicate.');
      }
      var key = tmp$ret$38.h10_1;
      var tmp$ret$37 = new Entry(BackupPackage_getInstance().fm(item_2.hn_1), getValue(folder.lz_1, key));
      destination_5.e(tmp$ret$37);
    }
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_20 = Packer$pack$lambda_0;
    var tmp$ret$41 = new sam$kotlin_Comparator$0(tmp_20);
    var stickerEntries = sortedWith(destination_5, tmp$ret$41);
    var containerEntries = plus(listOf([new Entry('backup.json', encodeToByteArray(this.o11_1.rp(Companion_instance.dl(), header))), new Entry('manifest.json', encodeToByteArray(this.o11_1.rp(Companion_getInstance().dl(), manifest))), new Entry('doodles.json', encodeToByteArray('{}')), new Entry('settings.json', encodeToByteArray(this.o11_1.rp(Companion_instance_0.dl(), new BackupSettings()))), new Entry('deck.json', encodeToByteArray(this.o11_1.rp(Companion_instance_11.dl(), packaged)))]), stickerEntries);
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
  protoOf(Packer).j15 = function (iso) {
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
    var hh = _destruct__k2r9zo.db();
    var mm = _destruct__k2r9zo.eb();
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
  //region block: exports
  kotlin_SnapLingo_shared_format.$jsExportAll$(_);
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=SnapLingo-web-deck-pack.js.map
