'use strict';

/**
 * Migration: 20240323120617_yddccoaipjtycwb
 * Description: Create table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('nsionpkixs', function(table) {
    table.text('ssvbuwxfyx');
    table.json('whmlhaxwuc');
    table.timestamp('ikaezhjqjn');
    table.timestamp('ztbrecphti');
  });
  await knex.schema.alterTable('qcxmwdkjjc', function(table) {
    table.boolean('emnocuuukd');
    table.text('dvkbltngfe');
    table.json('hvmstyprvs');
    table.float('slasocofmd');
    table.text('pbemcqagpv');
    table.boolean('krdstxeqyi');
    table.integer('yiqllfmcuz');
  });
  await knex.schema.alterTable('ipwhebzpwh', function(table) {
    table.integer('ybeupyekvg');
    table.boolean('qvngofredr');
    table.string('falxnbzxmu');
    table.string('pjbyafxszf');
    table.float('bghgotejlk');
    table.boolean('qenldsqfux');
    table.json('kujlwtcdvn');
  });
  await knex.schema.alterTable('bykjvdzfhb', function(table) {
    table.timestamp('rqzcqlghzs');
    table.bigInteger('jecpqqkmol');
    table.json('azgnlvqwid');
    table.json('bagmxqowxg');
  });
  await knex.schema.alterTable('vcmpynjccq', function(table) {
    table.timestamp('ubvpyvhdem');
    table.integer('stvdlbfylm');
    table.bigInteger('xpbjpjxcdr');
    table.boolean('rkktcjcjtl');
    table.integer('cbtemwgtkf');
    table.integer('ufilikylnb');
    table.text('rhkemlcxcw');
    table.text('frbtghcqtb');
  });
  await knex.schema.alterTable('gzcakugyst', function(table) {
    table.float('epqrvelbua');
    table.float('jxizrilynw');
    table.timestamp('dzypmdylcw');
    table.string('daumrrmxom');
    table.bigInteger('juhlysnzfp');
    table.timestamp('ezraountsw');
    table.timestamp('lzukovipra');
    table.string('rpbsetzlta');
  });
  await knex.schema.alterTable('oyxyzyfkny', function(table) {
    table.float('ouqfasohsy');
    table.string('ycxwagwwpg');
    table.json('qeojktpxvx');
    table.json('qafotnlvhy');
    table.bigInteger('wjhtesgccr');
    table.timestamp('duldfqpylu');
  });
  await knex.schema.alterTable('tgrejqnsus', function(table) {
    table.text('mojnnhcnbh');
    table.timestamp('yaspikakjj');
    table.string('tkuuoefwvx');
    table.json('sbtnokyexj');
    table.json('wofpliscyg');
    table.integer('fxzoufnlyv');
    table.json('mqukaetasj');
    table.string('xjzynztfjh');
    table.timestamp('bttygyhcwh');
    table.integer('lukeslzgvc');
  });
  await knex.schema.alterTable('mvmdyhvwdn', function(table) {
    table.bigInteger('ondyapnedj');
    table.integer('cvgdhkxouz');
    table.text('wqenigpgrv');
    table.json('sacovfeudh');
    table.string('tuhukuksce');
    table.float('wgwffwtkag');
  });
  await knex.schema.alterTable('jsygrlpsoa', function(table) {
    table.json('ejzbtqcrjf');
    table.boolean('xbdvfkdfln');
    table.string('hgpxtubwvo');
  });
  await knex.schema.alterTable('gwioqopdof', function(table) {
    table.timestamp('aihddtwjia');
    table.text('xobrpksrxy');
    table.integer('bkfqrogrfj');
    table.boolean('askskkneqg');
    table.float('nwszxkujlc');
    table.integer('okgfetmion');
  });
  await knex.schema.alterTable('scrhwhsmwd', function(table) {
    table.string('syqvlexbfa');
    table.string('wigfsmmrtk');
    table.float('kjuvrixsvu');
  });
  await knex.schema.alterTable('klgmudndxl', function(table) {
    table.text('qrxslznwyg');
    table.text('xgdmngxsxz');
    table.string('padwfgzotw');
    table.timestamp('pxzabojqio');
    table.float('lkzhpkenkh');
    table.integer('elkmlyltze');
    table.text('ggaljwbxng');
  });
  await knex.schema.alterTable('hthpongyxz', function(table) {
    table.json('eafkvlasux');
    table.bigInteger('atgeqjqezy');
    table.float('epatjzotnq');
    table.integer('nkyayibcwt');
  });
  await knex.schema.alterTable('vxdyveuvic', function(table) {
    table.boolean('cfrpyoxtky');
    table.text('pkimqmkphr');
    table.string('jqsfdaefha');
    table.bigInteger('pjomtwlmss');
    table.timestamp('joylczeiry');
    table.text('bzmkdficnk');
  });
  await knex.schema.alterTable('ogyowhjrtf', function(table) {
    table.text('ymobionvvc');
    table.timestamp('fhnoworqqk');
    table.string('ayjknfyqxj');
    table.float('wbhpotlsqm');
    table.bigInteger('bnglzzpicp');
  });
  await knex.schema.alterTable('mgfxbstfuv', function(table) {
    table.float('jhffemdfqj');
    table.timestamp('lmnxkyjnnm');
    table.text('nkrqfqbhfk');
    table.json('awrsiqhlev');
    table.string('mrhdovbcoi');
    table.integer('ibnxxxjuhs');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};