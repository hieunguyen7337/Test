'use strict';

/**
 * Migration: 20240701191053_fsdoxcmgdrgtxze
 * Description: Rename field
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('xmbavudtmk', function(table) {
    table.bigInteger('bnwjdmxlys');
    table.json('gbrrgktnbe');
    table.float('ouzkgmenqr');
    table.float('mnfjpzzrxz');
  });
  await knex.schema.alterTable('jsaedwxefp', function(table) {
    table.json('qhzfqmhyzc');
    table.string('jjyayywqtu');
    table.boolean('etbzvjafju');
    table.integer('pwywzgjjmz');
    table.boolean('naptiwgnma');
    table.float('tgkkmoxfll');
    table.timestamp('qboitpuffo');
    table.timestamp('dypvfruitw');
    table.bigInteger('ypfsjvmhpy');
    table.string('wiwjnbblqv');
  });
  await knex.schema.alterTable('smuyzoamap', function(table) {
    table.json('vtxdbszfzh');
    table.boolean('qfxktaotoo');
    table.integer('uqsabyftvd');
    table.timestamp('smhwbhssig');
    table.text('kvgcuznhub');
    table.text('ctylglbwrx');
    table.bigInteger('yhbtemijrb');
    table.bigInteger('tdkxzctisv');
    table.json('plsdbqknvj');
  });
  await knex.schema.alterTable('amitnjvaso', function(table) {
    table.bigInteger('xsltlzkgmv');
    table.string('hokvfvrrah');
    table.json('uaqftkslmd');
    table.text('qyhjiiwjwj');
    table.json('ukpaknwjui');
    table.float('oepqdexzcg');
    table.bigInteger('hcrmymgibo');
    table.integer('pszuoeefrj');
    table.string('jrwmnckfat');
  });
  await knex.schema.alterTable('qpdrgmlhil', function(table) {
    table.json('bxurbxfhsg');
    table.string('vqrutvhibh');
    table.integer('oaiiuhxjzt');
    table.float('yvfaqkukps');
    table.boolean('nndjbaalmy');
    table.timestamp('gaswramdgw');
    table.integer('dxrkkganal');
    table.bigInteger('sgdppmqrgs');
    table.integer('bowgcyyzuv');
    table.string('vvkdonduzn');
  });
  await knex.schema.alterTable('spczgrepeq', function(table) {
    table.timestamp('cmrkjmgbry');
    table.integer('hgbziyvcqj');
    table.json('nwacnrmlem');
    table.integer('hzzcytklsc');
    table.integer('qablgbufdp');
    table.float('oefdpkusfo');
    table.string('tvmcbpfcdt');
    table.bigInteger('wzrcsqfemu');
  });
  await knex.schema.alterTable('vxzwseagqy', function(table) {
    table.timestamp('kbyrxjxscw');
    table.float('ipkyahdyyi');
    table.bigInteger('akxnjygllo');
    table.boolean('huydwvjeqn');
    table.json('ujazynqohz');
    table.text('dzfdynddgo');
    table.timestamp('lbujvuwqrf');
    table.integer('seypumavmp');
    table.integer('hznysgkihu');
  });
  await knex.schema.alterTable('qfyciljjls', function(table) {
    table.float('szgdpemjlw');
    table.json('udemjblfjl');
    table.timestamp('hbdcvkrfqx');
    table.bigInteger('umzdohmskc');
    table.string('rihxoliztb');
    table.timestamp('uxxyvjqgdp');
    table.integer('tlmmxwnrli');
    table.integer('vctybsxsgi');
  });
  await knex.schema.alterTable('phezooqvfx', function(table) {
    table.timestamp('deavwsjhdy');
    table.timestamp('vkydjcqgvm');
    table.float('eaiwgtmxge');
    table.float('ccbzedwxzc');
    table.float('jgjoieohgh');
    table.timestamp('hgxvrjgxmo');
    table.json('poawyfopjr');
    table.bigInteger('eefjvlbvrr');
    table.text('ejlezyeebh');
    table.string('seuodalctj');
  });
  await knex.schema.alterTable('salixlurky', function(table) {
    table.float('myiglyhzmo');
    table.text('vcqdcqcgnj');
    table.timestamp('ucswzfaolz');
  });
  await knex.schema.alterTable('ezolxvoawx', function(table) {
    table.text('yxvnarzgev');
    table.integer('ecfysuuosi');
    table.integer('swoqrzotnf');
    table.string('zpuwuytzge');
    table.boolean('iunkndmpxj');
    table.json('maevswialu');
    table.text('cufqrlffsz');
    table.json('qetatpslae');
    table.json('pvqdttgxek');
  });
  await knex.schema.alterTable('nrrozfusrl', function(table) {
    table.float('bmgglsvxtw');
    table.integer('oxkqqvwzjf');
    table.timestamp('strbvirugi');
    table.bigInteger('krbfjaygab');
  });
  await knex.schema.alterTable('yahgwevbni', function(table) {
    table.bigInteger('urkgnkiiyb');
    table.bigInteger('vrqpslpgmd');
    table.text('cbrrivvowe');
    table.bigInteger('nxcknqpqal');
  });
  await knex.schema.alterTable('hpzwxjstef', function(table) {
    table.boolean('iidbrlugee');
    table.json('ezvktisnnq');
    table.text('oteiipdxvn');
    table.boolean('vrhpacgfgk');
  });
  await knex.schema.alterTable('rteimsokfl', function(table) {
    table.string('astlwecspm');
    table.text('eqkjxzeghg');
    table.string('joqtkuvqmi');
    table.timestamp('sfhgkcimzq');
    table.float('ynvcdjbpds');
    table.float('akrkzllimn');
    table.boolean('kuevjkkilg');
    table.string('ogswewksgl');
  });
  await knex.schema.alterTable('cdcozomqmv', function(table) {
    table.boolean('kxpbryjrbq');
    table.json('zkndjpctoy');
    table.timestamp('acfafjqcvi');
    table.integer('xafgvfpicx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};