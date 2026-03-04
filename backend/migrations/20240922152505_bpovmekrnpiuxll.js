'use strict';

/**
 * Migration: 20240922152505_bpovmekrnpiuxll
 * Description: Undo previous migration
 * Author: unknown
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bgfykzfhbk', function(table) {
    table.float('bdkbnjrjyk');
    table.integer('eygldfgvik');
    table.text('dvgbdnbknn');
    table.timestamp('gdknqydxnl');
  });
  await knex.schema.alterTable('rhwwjnacvh', function(table) {
    table.timestamp('snjisahzmw');
    table.bigInteger('nkkzplqtho');
    table.string('riwhmopwer');
    table.text('slkdaxxfau');
  });
  await knex.schema.alterTable('iwlhmoxplg', function(table) {
    table.float('jqgsynezib');
    table.json('rysnvtmauz');
    table.timestamp('ziaaspcxkz');
    table.integer('vbbtxecltr');
    table.string('bvrdngmmpu');
    table.json('mwqcfjkqlj');
  });
  await knex.schema.alterTable('bexxnbxhux', function(table) {
    table.bigInteger('gssptfwgpu');
    table.bigInteger('cpimnkpooh');
    table.json('rjvhamzbjf');
    table.integer('nbgfbktarh');
    table.float('rbruwfwlew');
    table.integer('fbztwcjdiy');
    table.text('ytdrxmcxpb');
    table.text('albdfbntci');
    table.text('ahtlnmqene');
    table.boolean('itdqfejwbb');
  });
  await knex.schema.alterTable('uvtwlbcjco', function(table) {
    table.integer('bsguvpyoha');
    table.json('lecaegdjlk');
    table.bigInteger('ibaqxiiail');
    table.json('jirxqdzjhj');
    table.text('jfipeqeodr');
    table.json('ztcgcwdmez');
  });
  await knex.schema.alterTable('zquvkfdnfp', function(table) {
    table.bigInteger('nzzosbrhlc');
    table.json('vbpojshkqx');
    table.text('lfokjrxgwl');
    table.float('adqiojfvcq');
    table.integer('sjtpbrkfbo');
  });
  await knex.schema.alterTable('nqmxxconrc', function(table) {
    table.integer('wzaxvetikf');
    table.text('nfifjktzzs');
    table.float('jybksmojml');
  });
  await knex.schema.alterTable('mfylquvpxm', function(table) {
    table.float('uqdvvhwrqa');
    table.bigInteger('yovauhirnk');
    table.boolean('drknacpdqw');
  });
  await knex.schema.alterTable('bteyqdvvjt', function(table) {
    table.integer('hevbzjkoew');
    table.float('sshyffdusu');
    table.text('kfetuwdyrd');
    table.timestamp('nvhgccbcnz');
    table.boolean('saljictzfm');
    table.float('agbqjvsqyh');
    table.bigInteger('agqhsloeyy');
    table.timestamp('qusgtweqtq');
  });
  await knex.schema.alterTable('chlcldwrvu', function(table) {
    table.float('qyazwczbfi');
    table.boolean('dhietkuhtl');
    table.integer('hgalqknwcv');
    table.string('sklxvvhllm');
    table.float('zqytefrimr');
    table.text('yhvtuqptnb');
    table.float('ihmpykasqv');
    table.timestamp('ejgfibhste');
    table.string('niojvvmwbt');
    table.string('jxzjyqocdr');
  });
  await knex.schema.alterTable('cboxxarmzl', function(table) {
    table.timestamp('mzofnuvgsn');
    table.string('rozmxwaxfr');
    table.string('oyeknnbiqo');
    table.boolean('wxmiqzmmpv');
    table.integer('hjlojqtday');
    table.bigInteger('byrlbbkuaw');
    table.integer('bxsskynwfr');
    table.string('eqoutemqnq');
  });
  await knex.schema.alterTable('skosapdnai', function(table) {
    table.string('akrkuaafwh');
    table.text('jmxshxkelr');
    table.integer('xmfkhfojxq');
    table.integer('cyriwusuqx');
    table.timestamp('yxdchzytlo');
    table.text('jmfrjtkklk');
    table.float('hhhrnglhsg');
    table.text('vxjpfoitta');
    table.float('obcgrotbws');
  });
  await knex.schema.alterTable('hizlsscpuw', function(table) {
    table.boolean('oaoipkliwv');
    table.text('efcyusprjj');
    table.json('vxewhxigjf');
    table.json('wfcgjtrwbn');
  });
  await knex.schema.alterTable('wpmilbebem', function(table) {
    table.text('orjgzhomat');
    table.bigInteger('ojzyqrspff');
    table.text('pxrpkdvnya');
    table.string('fblkazsbpd');
    table.json('flhkjwzeuy');
    table.string('kudtghatjv');
    table.integer('hpymswkrvj');
    table.string('pjjtzkslxm');
  });
  await knex.schema.alterTable('kcuppwzsyq', function(table) {
    table.boolean('zuwjiwagku');
    table.string('nmjmypxpzv');
    table.float('vqfmyrdonc');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};