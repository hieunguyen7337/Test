'use strict';

/**
 * Migration: 20240906010517_npbwgbgrswmvagk
 * Description: Undo previous migration
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xtrikogukx', function(table) {
    table.bigInteger('lqatoivpan');
    table.string('bsffuawynr');
    table.timestamp('pwfkuyxxmz');
    table.text('mlvrbgpnis');
    table.json('uwszszuobn');
    table.json('ckefmxovet');
    table.timestamp('qoxbqwyorp');
    table.string('owxidihwpu');
    table.bigInteger('jwvdxmsxzt');
    table.integer('mrdavlstlc');
  });
  await knex.schema.alterTable('qaavlwmywv', function(table) {
    table.integer('gjlomadtuc');
    table.float('dbhmvrhcwi');
    table.boolean('zmdhlyfzhv');
    table.timestamp('hophargryj');
    table.string('unmritrgcq');
  });
  await knex.schema.alterTable('gkvqweitom', function(table) {
    table.float('yvwylzosjc');
    table.integer('bjcavbuchu');
    table.float('aaiakwwmuv');
    table.json('aanrzdbxsa');
    table.integer('awxbhcihes');
    table.bigInteger('uopephfcrk');
    table.boolean('dizchgyjiv');
  });
  await knex.schema.alterTable('ydrrhbpvik', function(table) {
    table.boolean('buixpslxew');
    table.bigInteger('gchgkzhdpt');
    table.text('uukwpuyexk');
    table.text('gnfpxfiand');
    table.bigInteger('kheymykqwe');
    table.timestamp('cuyewwvfol');
    table.json('uepfwyiqkg');
    table.float('srkylnhost');
  });
  await knex.schema.alterTable('ypgbifmbrf', function(table) {
    table.json('seajftvlca');
    table.timestamp('wajhxxzcsx');
    table.float('hfxecywoxr');
  });
  await knex.schema.alterTable('dqxrcvdpxh', function(table) {
    table.float('hkkwxvlnad');
    table.json('uhyzwifvxu');
    table.timestamp('crsfpjkjgu');
    table.boolean('tenzbkpzfr');
    table.integer('lzxclljiwt');
    table.boolean('kebkwoirxy');
  });
  await knex.schema.alterTable('eisqlmaywd', function(table) {
    table.text('gfefhefbsu');
    table.string('ehettyigwk');
    table.timestamp('dbuwfcojbk');
    table.boolean('kexunogsnq');
  });
  await knex.schema.alterTable('cadzotrgxr', function(table) {
    table.text('hqylfklsym');
    table.boolean('lqxqqkurcf');
    table.float('bnxlxmglss');
  });
  await knex.schema.alterTable('pvjaknzovu', function(table) {
    table.string('ctntestwwq');
    table.string('dhlbofgkxe');
    table.timestamp('eftwananio');
    table.bigInteger('eipigdfskq');
    table.boolean('hotjtyulbq');
    table.timestamp('vmghiuzogh');
  });
  await knex.schema.alterTable('nktpkaoimr', function(table) {
    table.integer('aoozsyghdv');
    table.bigInteger('gjsdbqluqd');
    table.float('rvyqzolotp');
    table.integer('izhllbygyz');
    table.boolean('tquecdddqz');
    table.text('fryhuycpub');
  });
  await knex.schema.alterTable('oemasdunhu', function(table) {
    table.boolean('kcwtjwbasg');
    table.bigInteger('lxtzwcjrot');
    table.string('yatjiexgak');
    table.string('zkxegyubei');
    table.bigInteger('rqogebupig');
    table.bigInteger('gapsmabvvt');
  });
  await knex.schema.alterTable('elokkjtkal', function(table) {
    table.boolean('clcycmtjvi');
    table.float('xdcqyaqmnk');
    table.timestamp('pecgrpwsje');
    table.string('shctzlsbew');
    table.integer('btkrdfdowi');
    table.float('ckvwkkxmet');
    table.timestamp('slfhciohte');
  });
  await knex.schema.alterTable('gwhavnvsmg', function(table) {
    table.float('xdyfkeoxtz');
    table.bigInteger('casrfvjtlo');
    table.json('vimypsczjr');
    table.timestamp('lquiubdzlv');
    table.bigInteger('afezjmhoqu');
  });
  await knex.schema.alterTable('bobwkqxoyz', function(table) {
    table.string('ydsukhvbrb');
    table.string('jnnioolicd');
    table.timestamp('sflkbvduok');
    table.string('xujjdxeggt');
  });
  await knex.schema.alterTable('cuzqeauxmb', function(table) {
    table.float('ycitvcidlz');
    table.json('vayukjwznc');
    table.float('jrvykgqulm');
    table.string('asddjbndfq');
    table.json('tcdxpjjipv');
  });
  await knex.schema.alterTable('gxoxgcgptx', function(table) {
    table.string('kyuhsouqbh');
    table.json('ceeysabchn');
    table.bigInteger('tmxyeiyxhm');
    table.float('gpgqtnayqf');
    table.timestamp('tbjhehcvnj');
    table.text('amgrwnegem');
    table.timestamp('yuhpvdwiwq');
  });
  await knex.schema.alterTable('mdyidolcks', function(table) {
    table.json('njqfkxkbrz');
    table.bigInteger('hhwfcjnvja');
    table.boolean('ebvtlqxljw');
    table.text('tmrggavhwf');
    table.json('uunaafzkml');
    table.string('lcclghegnx');
    table.text('teushnelgo');
    table.float('avuyqlepuc');
    table.text('yeanxocwjt');
  });
  await knex.schema.alterTable('nmkgvouwrt', function(table) {
    table.text('qgwwnhwrnk');
    table.float('ugujwbtyhc');
    table.bigInteger('liozezkyqx');
    table.string('hioifwxajg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};