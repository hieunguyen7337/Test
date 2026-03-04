'use strict';

/**
 * Migration: 20240718143415_tskgvvrxncsvfwr
 * Description: Redo the undo
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vdadckekvd', function(table) {
    table.float('uxfzjkpokx');
    table.text('adfqhjwcxp');
    table.float('ujuhavlnds');
    table.boolean('tpbgpxakbe');
    table.bigInteger('lwdowntbjc');
    table.string('ffwuhdbsid');
    table.boolean('qilahdeggp');
    table.float('vpgeiumamm');
  });
  await knex.schema.alterTable('vcxhwkwerk', function(table) {
    table.integer('smdmqoymoz');
    table.float('ntmpugffgw');
    table.timestamp('jietuizpmk');
    table.timestamp('gsmjrqbbli');
    table.text('ilihzpuiuy');
  });
  await knex.schema.alterTable('ymbxdksafu', function(table) {
    table.boolean('fkwfilatlm');
    table.bigInteger('qcpvmgsarm');
    table.string('iossetwpda');
    table.timestamp('ovxuwyekpo');
    table.json('xvgydpyoks');
  });
  await knex.schema.alterTable('vswuuyshsc', function(table) {
    table.integer('igjeavxste');
    table.boolean('pvllauobab');
    table.boolean('phztbnarpe');
    table.timestamp('odnkwdantj');
  });
  await knex.schema.alterTable('pkicimmklf', function(table) {
    table.text('zyohdppwpr');
    table.boolean('ulspaxhtmc');
    table.json('lqvljuxtdq');
    table.float('boolofwycw');
    table.text('yvfyavgupb');
  });
  await knex.schema.alterTable('sbfagveucs', function(table) {
    table.string('yjvjfyfawh');
    table.text('iitodiqufk');
    table.timestamp('mynkkbxzvn');
    table.bigInteger('jvstpdcfxn');
    table.bigInteger('jrrqttxhwc');
    table.timestamp('cvgjxxtoik');
    table.json('ywzytwsilo');
    table.bigInteger('sgsokvrnrw');
  });
  await knex.schema.alterTable('kqcaiawxdj', function(table) {
    table.text('zzrzzrqump');
    table.timestamp('zytytiglis');
    table.integer('jckfvgjrvc');
  });
  await knex.schema.alterTable('vjxzgzrklc', function(table) {
    table.bigInteger('pbcariiztp');
    table.boolean('ibgdprmhiy');
    table.string('enycyyylwm');
    table.integer('xrpsonkkfi');
    table.string('ujkkfntkmo');
    table.bigInteger('vvappdkecn');
  });
  await knex.schema.alterTable('skiszibzya', function(table) {
    table.json('ddpuiyyxup');
    table.bigInteger('mihkglpcza');
    table.json('kfqrzysnec');
    table.string('plgftfqetr');
    table.string('hgatxgzwev');
    table.bigInteger('qfckvuvqnm');
    table.integer('ghmbhbduaq');
  });
  await knex.schema.alterTable('cdnwdwznqa', function(table) {
    table.string('jpggxwmbmd');
    table.timestamp('oosezvxwwv');
    table.bigInteger('ryxbgisuaf');
    table.text('kionlmiykx');
    table.integer('zsmqlrrczv');
    table.json('psvrdlpcsn');
    table.json('lmsrwkucdl');
  });
  await knex.schema.alterTable('mpqpjgumxx', function(table) {
    table.integer('htjcvpzlcv');
    table.string('ponkkqbtau');
    table.text('oszbftokhv');
  });
  await knex.schema.alterTable('evywwgiaxz', function(table) {
    table.bigInteger('jtgsflggrs');
    table.string('apupfdsfka');
    table.json('coijxentph');
    table.string('gnqqcmbwkh');
    table.json('ewgohjpthd');
    table.timestamp('axdpecyzla');
    table.string('hsndnzvhym');
    table.float('rrwnvqurnr');
    table.text('earlebhkiy');
    table.boolean('lveoemmsyd');
  });
  await knex.schema.alterTable('fbvojssrlq', function(table) {
    table.float('bicjcdbgpm');
    table.text('uzynunjscg');
    table.float('cfruayydbj');
    table.text('ilizdgutzm');
  });
  await knex.schema.alterTable('rdhatjdmcd', function(table) {
    table.float('gvryjntxez');
    table.bigInteger('gehimzugsu');
    table.boolean('oywvhcfkit');
    table.bigInteger('ixnzhepzfr');
  });
  await knex.schema.alterTable('cccjgmmyah', function(table) {
    table.integer('dgkhrhkykp');
    table.integer('rrmaqbqbpl');
    table.integer('jawtjeaubo');
    table.float('ikzazioggu');
    table.text('hhevfumvsd');
    table.bigInteger('quxtavsars');
    table.timestamp('duobdqvtqt');
    table.string('lgvrzllfss');
  });
  await knex.schema.alterTable('yeollpbhso', function(table) {
    table.text('ehtentppbo');
    table.bigInteger('zzxdapeaju');
    table.boolean('tccbtjvpvt');
    table.bigInteger('txtjjmgmbu');
  });
  await knex.schema.alterTable('zzlmpjrbsr', function(table) {
    table.boolean('rpqiafggwr');
    table.integer('rhklsvxpqd');
    table.bigInteger('ifpaskbjni');
    table.json('omuwguungq');
    table.bigInteger('fqmpjcuoof');
  });
  await knex.schema.alterTable('mlvmyiesxd', function(table) {
    table.json('fqzobjnriw');
    table.string('aaomnixezj');
    table.integer('zrkrohwhey');
    table.text('dkcaczotbd');
    table.integer('dfsvlcecxu');
    table.boolean('vkdptyfnnj');
    table.bigInteger('sxyxfpmqoo');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};