'use strict';

/**
 * Migration: 20240607110936_onokwrtraflxjix
 * Description: Undo previous migration
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pqgpmyxqpo', function(table) {
    table.timestamp('dqxzfpoair');
    table.timestamp('uxnlseeauq');
    table.bigInteger('lyixddgkzy');
    table.float('yhgxrvzamm');
    table.float('hwkcvsqhrm');
    table.json('ggdzjtwwas');
    table.boolean('ygllvizodh');
  });
  await knex.schema.alterTable('iujwkrsuwi', function(table) {
    table.timestamp('ychymynphk');
    table.bigInteger('omcnrmzyoq');
    table.json('jgukbhbvdf');
    table.text('korbyywkuz');
    table.text('cvfrzbrhit');
    table.bigInteger('nwilrkxobw');
    table.boolean('sgvdjfkxbw');
    table.bigInteger('ekxjzfkgjx');
    table.integer('btszfzkbgm');
    table.text('xkumflmxya');
  });
  await knex.schema.alterTable('hgznhrcgla', function(table) {
    table.integer('wllniraqey');
    table.text('lqtfqizjlz');
    table.text('ltikmnmhuk');
    table.timestamp('zhcdgjondu');
  });
  await knex.schema.alterTable('itrkgpffga', function(table) {
    table.float('vwkqfrkpmw');
    table.json('xtfawjjhvg');
    table.float('jfiuqlljia');
    table.text('mrigjzfayp');
    table.json('ahrarfekgw');
    table.text('svenquqsfn');
  });
  await knex.schema.alterTable('kplqzvczal', function(table) {
    table.float('ujgupcwprg');
    table.boolean('vtfpqpmlwd');
    table.boolean('zcdadkrgzt');
    table.float('cxodzytgmp');
    table.bigInteger('kmolprvski');
    table.bigInteger('jocgjargfw');
    table.json('gcxrsudyid');
    table.bigInteger('abijtmxvcv');
    table.bigInteger('dfqdvriyxl');
  });
  await knex.schema.alterTable('uexftieyyr', function(table) {
    table.boolean('hmikzvyqzj');
    table.boolean('xlstarvckx');
    table.string('kgjqmbeftw');
  });
  await knex.schema.alterTable('uvcyvejhoi', function(table) {
    table.json('mryagdtvuy');
    table.timestamp('lnberqybyp');
    table.string('xswihvcqlx');
    table.boolean('eizrnekpda');
    table.bigInteger('zbqhlljmic');
    table.json('lnizbmwxvb');
    table.json('efncbstrnc');
    table.string('ydlwutduvl');
    table.boolean('ijdgarigrw');
    table.float('xftcenbolt');
  });
  await knex.schema.alterTable('rnzzktwxvx', function(table) {
    table.text('ppxlifwqcw');
    table.timestamp('nnealdxrdo');
    table.boolean('wofecqcoif');
    table.json('mqknzwusvc');
    table.json('ykwdpqnwnx');
    table.timestamp('bnuuozdetr');
    table.float('wattmwflly');
    table.timestamp('ebxontbmcg');
    table.integer('fersvhibvl');
    table.float('uqhqqyfdbb');
  });
  await knex.schema.alterTable('hjioqxxfyd', function(table) {
    table.text('wxiknbxpjt');
    table.integer('jkmkswatsw');
    table.timestamp('bgbafdrlrq');
    table.bigInteger('dunjyfpcia');
    table.json('gtecffhwqw');
    table.bigInteger('dvfizplgpk');
    table.bigInteger('vlbmxrwyay');
    table.text('nfksermqrb');
  });
  await knex.schema.alterTable('mzdbljgdej', function(table) {
    table.string('gfzfsqhcsg');
    table.timestamp('gkqsnmzaic');
    table.json('wugypduych');
    table.boolean('kehjfbueoi');
    table.text('ledncfupar');
    table.float('oavjdgwhpi');
    table.float('kvkdhsmwey');
    table.string('bfzflvnzns');
    table.boolean('kjsuihrmyz');
    table.text('wqqgchncnt');
  });
  await knex.schema.alterTable('wkkepqcunw', function(table) {
    table.timestamp('ocbrpesuir');
    table.timestamp('sqafyvzdqb');
    table.bigInteger('eavupbdrif');
    table.text('vwuvmblgei');
  });
  await knex.schema.alterTable('gksitzqiyd', function(table) {
    table.boolean('gftsxykhzx');
    table.float('tyqszwnxlx');
    table.boolean('errxpomtht');
    table.boolean('lwtxnapxwk');
    table.boolean('dzvcepfbbg');
    table.bigInteger('zmrizubebl');
    table.string('urbimfenmg');
    table.float('gzhwdwfrat');
  });
  await knex.schema.alterTable('xmzupiifrk', function(table) {
    table.string('xmklcqsihl');
    table.string('siteileoyi');
    table.text('qlwxvlpqgm');
    table.string('apxveyimml');
    table.timestamp('gjqnckamnk');
    table.integer('joeqynhdbt');
    table.integer('aqjfnpghxe');
    table.integer('eoozdleptk');
    table.json('txjzifnvwl');
    table.integer('szvrhpzerr');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};